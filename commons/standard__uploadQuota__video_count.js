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
    _v24 = _v0.i(0);
  function _v25({
    tier: _v0 = "standard",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1
  }) {
    let {
        settings: _v3
      } = (0, _v10.useOrionSettings)(),
      _v4 = (0, _v21.useGetSubscriptionPlansData)([_v0], void 0, !1),
      {
        currentStorageLimit: _v5,
        currentRestrictedStorageLimit: _v6
      } = function () {
        let {
            data: _v0,
            ..._v1
          } = (0, _v23.useGetMe)({
            select: ["uploadQuota"]
          }),
          _v2 = _v0?.uploadQuota?.space?.max,
          _v3 = _v0?.uploadQuota?.space?.unit,
          _v4 = _v0?.uploadQuota?.restricted?.max,
          _v5 = _v0?.uploadQuota?.restricted?.unit,
          _v6 = "",
          _v7 = "";
        return null != _v2 && _v2 > 0 && ("video_count" === _v3 ? _v6 = `${_v2}` : "video_size" === _v3 && (_v6 = (0, _v24.formatBytes)(_v2, !1))), null != _v4 && _v4 > 0 && ("video_size" === _v5 || void 0 === _v5) && (_v7 = (0, _v24.formatBytes)(_v4, !1)), {
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
      _v12 = _v7?.name ?? (_v0 ? (0, _v14.default)(`${_v0}`) : ""),
      _v13 = (0, _v18.useColorModeValue)("https://i.vimeocdn.com/custom_asset/c3e7bb4028bc2edb60f54310fadd1000", "https://i.vimeocdn.com/custom_asset/e9c789e68e6e64c62a6fe8d321438a92"),
      _v14 = !!_v7?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v15 = "subtitle_link" === _v3.limit_paywall_other_plans_location;
    return (0, _v1.jsxs)(_v3.Flex, {
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
      children: [(0, _v1.jsxs)(_v3.Flex, {
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
        children: [(0, _v1.jsx)(_v16.Box, {
          width: "192px",
          height: "140px",
          minHeight: "93px",
          flex: "1 1 140px",
          backgroundImage: `url(${_v13})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginY: "16px"
        }), (0, _v1.jsxs)(_v3.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          paddingX: "32px",
          children: [(0, _v1.jsx)(_v17.Text, {
            variant: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            textAlign: "center",
            flexShrink: 0,
            children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v17.Text, {
            variant: "heading-sm",
            color: "text-primary",
            textAlign: "center",
            flexShrink: 0,
            children: _v15 ? _v9 ? (0, _v20.translate)({
              singular: "You’ve reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                PLAN_NAME: _v12,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v22.LimitPaywallOtherPlansLink, {
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
            }) : (0, _v20.translate)({
              singular: "You’ve reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                STORAGE_LIMIT: _v11,
                PLAN_NAME: _v12,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v22.LimitPaywallOtherPlansLink, {
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
            }) : _v9 ? (0, _v20.translate)({
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
            }) : (0, _v20.translate)({
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
        }), (0, _v1.jsxs)(_v16.Box, {
          border: "1px solid",
          borderColor: "upsell-primary",
          borderRadius: "20px",
          px: "40px",
          py: "32px",
          width: "100%",
          position: "relative",
          marginTop: "24px",
          children: [(0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            mb: "16px",
            children: [(0, _v1.jsxs)(_v3.Flex, {
              alignItems: "center",
              gap: "4px",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-2xs",
                color: "text-tertiary",
                children: (0, _v20.translate)({
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
              }), (0, _v1.jsx)(_v15.Badge, {
                variant: "neutral",
                size: "sm",
                children: _v11
              })]
            }), (0, _v1.jsxs)(_v3.Flex, {
              alignItems: "center",
              gap: "4px",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-2xs",
                color: "upsell-primary",
                children: _v12
              }), (0, _v1.jsx)(_v15.Badge, {
                variant: "upgrade",
                size: "sm",
                children: _v10
              })]
            })]
          }), (0, _v1.jsxs)(_v16.Box, {
            width: "100%",
            height: "4px",
            bg: "text-tertiary",
            borderRadius: "9999px",
            position: "relative",
            children: [(0, _v1.jsx)(_v16.Box, {
              width: "78%",
              ml: "auto",
              height: "4px",
              bg: "upsell-primary",
              borderRadius: "9999px"
            }), (0, _v1.jsx)(_v16.Box, {
              position: "absolute",
              left: "22%",
              top: "-6px",
              width: "0px",
              height: "16px",
              borderLeft: "2px dotted",
              borderColor: "text-tertiary"
            })]
          }), (0, _v1.jsx)(_v19.CircleExclamationFilled, {
            color: "upsell-primary",
            width: "40px",
            height: "40px",
            transform: "rotate(15deg)",
            position: "absolute",
            right: "9.01px",
            top: "-24px"
          })]
        })]
      }), (0, _v1.jsx)(_v22.LimitPaywallCTAs, {
        subscriptionTier: _v0,
        isTrial: _v14 && _v2,
        planName: _v12,
        paywallTracking: _v1,
        otherPlansLocation: _v3.limit_paywall_other_plans_location
      })]
    });
  }
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32({
    featureName: _v0,
    tooltip: _v1,
    currentValue: _v2,
    targetValue: _v3,
    isLastRow: _v4 = !1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Flex, {
        gap: "xs",
        alignItems: "center",
        pl: "md",
        pr: "sm",
        py: "sm",
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: "heading-sm",
          letterSpacing: "-0.03em",
          flex: "1",
          children: _v0
        }), _v1 && (0, _v1.jsx)(_v31.Tooltip, {
          label: _v1,
          placement: "top",
          hasArrow: !0,
          maxW: "260px",
          children: (0, _v1.jsx)(_v16.Box, {
            flexShrink: 0,
            cursor: "pointer",
            color: "text-secondary",
            display: "inline-flex",
            children: (0, _v1.jsx)(_v33, {})
          })
        })]
      }), (0, _v1.jsx)(_v3.Flex, {
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
        children: (0, _v1.jsx)(_v34, {
          value: _v2
        })
      }), (0, _v1.jsx)(_v3.Flex, {
        alignItems: "center",
        justifyContent: "center",
        px: "md",
        py: "8px",
        pb: _v4 ? "md" : "8px",
        bg: "background",
        borderBottomLeftRadius: _v4 ? "2xl" : "0",
        borderBottomRightRadius: _v4 ? "2xl" : "0",
        children: (0, _v1.jsx)(_v34, {
          value: _v3
        })
      })]
    });
  }
  function _v33() {
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
  function _v34({
    value: _v0,
    size: _v1 = "md"
  }) {
    let _v2 = "sm" === _v1 ? 16 : 20;
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v27.Checkmark, {
      width: _v2,
      height: _v2
    }) : (0, _v1.jsx)(_v28.CloseX, {
      width: _v2,
      height: _v2,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v17.Text, {
      fontSize: "sm" === _v1 ? "body-sm" : "body-lg",
      textAlign: "center",
      lineHeight: "1.2",
      children: _v0
    });
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  function _v37({
    tier: _v0,
    currentTier: _v1,
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    var _v4;
    let _v5,
      _v6 = (0, _v21.useGetSubscriptionPlansData)(["free", "starter", "standard", "advanced"], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v1) ?? _v6?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased"),
      _v8 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.find(_v0 => "starter" === _v0.tier || "standard" === _v0.tier || "advanced" === _v0.tier),
      _v9 = !!_v8?.metadata?.interactions?.purchase?.uri?.freeTrial && _v3,
      _v10 = !!_v8,
      _v11 = _v8?.currency?.currencyCode ?? _v7?.currency?.currencyCode ?? "USD",
      _v12 = _v7?.tier === "free" ? (_v4 = _v11, _v5 = (0, _v20.getCurrentLocale)(), new Intl.NumberFormat(_v5, {
        style: "currency",
        currency: _v4,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(0)) : _v7?.metadata?.purchasedProduct?.displayPriceFormatted ?? _v7?.priceFormatted?.annualMonthly ?? "",
      _v13 = _v8?.priceFormatted?.annualMonthly ?? "",
      _v14 = _v8?.name ?? (0, _v14.default)(`${_v0}`),
      _v15 = _v7?.name ?? "",
      _v16 = (0, _v36.getComparisonFeatures)({
        currentPlan: _v7,
        targetPlan: _v8,
        currentTier: _v7?.tier,
        targetTier: _v0
      }),
      _v17 = () => {
        let _v0 = (0, _v29.buildCheckoutUrl)({
          ..._v2,
          tier: _v0,
          isTrial: _v9
        });
        window.location.assign(_v0);
      },
      _v18 = _v9 ? (0, _v20.translate)({
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
      }) : (0, _v20.translate)({
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
    return (0, _v1.jsxs)(_v3.Flex, {
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
      children: [(0, _v1.jsx)(_v30.ComparisonPaywallHeader, {
        tierName: _v14
      }), (0, _v1.jsxs)(_v16.Box, {
        display: {
          base: "none",
          md: "grid"
        },
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "0 8px",
        width: "100%",
        children: [(0, _v1.jsx)(_v16.Box, {}), (0, _v1.jsxs)(_v3.Flex, {
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
          children: [(0, _v1.jsx)(_v16.Box, {
            position: "absolute",
            left: "14px",
            top: "11px",
            children: (0, _v1.jsx)(_v15.Badge, {
              variant: "secondary",
              size: "sm",
              children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v17.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            width: "100%",
            children: _v15
          }), (0, _v1.jsx)(_v3.Flex, {
            direction: "column",
            height: "72px",
            pb: "8px",
            width: "100%",
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })
          }), (0, _v1.jsx)(_v16.Box, {
            height: "40px",
            opacity: 0,
            width: "100%",
            children: (0, _v1.jsx)(_v26.Button, {
              size: "md",
              variant: "tertiary",
              width: "100%",
              isDisabled: !0,
              children: (0, _v20.translate)({
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
        }), (0, _v1.jsxs)(_v3.Flex, {
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
          children: [(0, _v1.jsx)(_v16.Box, {
            position: "absolute",
            left: "16px",
            top: "12px",
            children: (0, _v1.jsx)(_v15.Badge, {
              variant: "upgrade",
              size: "sm",
              children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v17.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            width: "100%",
            children: _v14
          }), (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            height: "72px",
            pb: "8px",
            lineHeight: "1.2",
            width: "100%",
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v13
            }), (0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              fontSize: "body-sm",
              color: "text-secondary",
              lineHeight: "1.2",
              children: [(0, _v1.jsx)(_v17.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v20.translate)({
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
              }), (0, _v1.jsx)(_v17.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v26.Button, {
            size: "md",
            variant: "primary",
            width: "100%",
            onClick: _v17,
            isDisabled: !_v10,
            children: _v18
          })]
        }), _v16.map((_v0, _v1) => (0, _v1.jsx)(_v32, {
          featureName: _v0.name,
          tooltip: _v0.tooltip,
          currentValue: _v0.currentValue,
          targetValue: _v0.targetValue,
          isLastRow: _v1 === _v16.length - 1
        }, _v0.name))]
      }), (0, _v1.jsxs)(_v3.Flex, {
        display: {
          base: "flex",
          md: "none"
        },
        gap: "sm",
        width: "100%",
        alignItems: "stretch",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          flex: "1",
          direction: "column",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "stroke",
          borderRadius: "2xl",
          opacity: .7,
          overflow: "hidden",
          pb: "md",
          children: [(0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "xs",
            p: "md",
            position: "relative",
            children: [(0, _v1.jsx)(_v16.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v15.Badge, {
                variant: "secondary",
                size: "sm",
                children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v16.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v17.Text, {
                variant: "heading-sm",
                children: _v15
              })
            }), (0, _v1.jsx)(_v17.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })]
          }), (0, _v1.jsx)(_v16.Box, {
            flex: "1"
          }), _v16.map(_v0 => (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "2px",
            px: "md",
            py: "sm",
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v38, {
              value: _v0.currentValue
            })]
          }, _v0.name))]
        }), (0, _v1.jsxs)(_v3.Flex, {
          flex: "1",
          direction: "column",
          bg: "background",
          borderRadius: "2xl",
          overflow: "hidden",
          pb: "md",
          children: [(0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "xs",
            p: "md",
            position: "relative",
            children: [(0, _v1.jsx)(_v16.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v15.Badge, {
                variant: "upgrade",
                size: "sm",
                children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v16.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v17.Text, {
                variant: "heading-sm",
                children: _v14
              })
            }), (0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              pb: "sm",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-lg",
                letterSpacing: "-0.04em",
                children: _v13
              }), (0, _v1.jsx)(_v17.Text, {
                fontSize: "12px",
                color: "text-secondary",
                children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v26.Button, {
              size: "md",
              variant: "primary",
              width: "100%",
              whiteSpace: "normal",
              onClick: _v17,
              isDisabled: !_v10,
              children: _v18
            })]
          }), _v16.map(_v0 => (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "2px",
            px: "md",
            py: "sm",
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v38, {
              value: _v0.targetValue
            })]
          }, _v0.name))]
        })]
      }), (0, _v1.jsx)(_v3.Flex, {
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
        children: (0, _v1.jsx)(_v35.OtherPlansButton, {
          paywallTracking: _v2
        })
      })]
    });
  }
  function _v38({
    value: _v0
  }) {
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v27.Checkmark, {
      width: 16,
      height: 16
    }) : (0, _v1.jsx)(_v28.CloseX, {
      width: 16,
      height: 16,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v17.Text, {
      fontSize: "body-md",
      lineHeight: "1.2",
      children: _v0
    });
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = (0, _v2.createContext)({
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
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = 41,
    _v47 = (_v0, _v1 = _v46) => _v42.BigPictureClient.sendEvent(new _v42.Event("vimeo.upgrade_action", _v1, (0, _v43.deepSnakeCase)({
      ..._v44.defaultBpEventParams,
      ..._v0
    }))),
    _v48 = (_v0, _v1 = _v46) => {
      _v47({
        action_type: "click",
        ..._v0
      }, _v1);
    };
  var _v49 = _v0.i(0);
  let _v50 = _v0 => (0, _v1.jsx)(_v26.Button, {
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
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v41);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v6.ModalCloseButton, {
          "data-testid": "close-upsell-button",
          margin: _v0?.margin,
          zIndex: 0,
          onClick: () => {
            ((_v0, _v1 = _v46) => {
              _v47({
                action_type: "dismiss",
                ..._v0
              }, _v1);
            })({
              ..._v1.params,
              device_type: _v1.device_type
            }, _v1.bpEventVersion), _v1.onClose && _v1.onClose(), _v0.onClose();
          }
        })
      });
    },
    _v57 = _v0 => {
      let {
          headerText: _v1,
          subHeaderText: _v2,
          body: _v3,
          footer: _v4,
          imgSrc: _v5,
          dataTestId: _v6,
          onClose: _v7
        } = _v0,
        _v8 = (0, _v55.useIsMobile)();
      return (0, _v1.jsxs)(_v4.Modal, {
        isOpen: !0,
        onClose: _v7,
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
          "data-testid": _v6,
          maxW: "fit-content",
          height: (0, _v51.rem)(625),
          children: [(0, _v1.jsx)(_v56, {
            onClose: _v7
          }), (0, _v1.jsx)(_v5.ModalBody, {
            padding: 0,
            children: (0, _v1.jsxs)(_v52.Grid, {
              templateColumns: `${(0, _v51.rem)(320)} 1fr`,
              height: "100%",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v3.Flex, {
                padding: "6",
                flexDirection: "column",
                justifyContent: "space-between",
                children: [(0, _v1.jsxs)(_v3.Flex, {
                  gap: (0, _v51.rem)("24"),
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v53.Header, {
                    size: "lg",
                    children: void 0 !== _v1 ? _v1 : _v49.default.defaultHeader
                  }), !!_v2 && (0, _v1.jsx)(_v17.Text, {
                    variant: "body-md",
                    children: void 0 !== _v2 ? _v2 : _v49.default.defaultSubHeader
                  }), _v3]
                }), (0, _v1.jsx)(_v16.Box, {
                  children: _v4
                })]
              }), _v5 && !_v8 && (0, _v1.jsx)(_v54.Image, {
                src: _v5,
                alt: "",
                onLoad: () => {
                  window.dispatchEvent(new Event("resize"));
                },
                aspectRatio: "9 / 16",
                maxWidth: (0, _v51.rem)(384),
                height: (0, _v51.rem)(625),
                borderRadius: `0 ${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)} 0`
              })]
            })
          })]
        })]
      });
    },
    _v58 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v41);
      return (0, _v1.jsx)(_v26.Button, {
        "data-testid": "upsell-secondary-cta",
        size: "md",
        variant: "tertiary",
        href: (0, _v45.appendPaywallParams)((0, _v45.appendTrackingQueryParams)(_v0.link, _v1.params), _v1.paywallTracking),
        target: "_blank",
        as: "a",
        onClick: () => {
          _v48({
            ..._v1.params,
            copy: _v0.text,
            device_type: _v1.device_type,
            path: window.location.href,
            target: window.location.pathname,
            target_path: _v0.link
          }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
            copy: _v0.text,
            target_path: (0, _v45.appendTrackingQueryParams)(_v0.link, _v1.params)
          });
        },
        width: "100%",
        children: _v0.text
      });
    },
    _v59 = _v49.default.upgrade,
    _v60 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v41),
        _v2 = _v0.modalConfig?.primaryCTAText ? _v0.modalConfig.primaryCTAText : _v59,
        _v3 = _v0.modalConfig?.primaryCTALink ? _v0.modalConfig.primaryCTALink : "/upgrade";
      return (0, _v1.jsx)(_v57, {
        dataTestId: "feature-upsell-container",
        headerText: _v0.modalConfig?.headerText,
        subHeaderText: _v0.modalConfig?.subHeaderText,
        imgSrc: _v0.modalConfig?.imgSrc,
        onClose: _v0.onClose,
        body: _v0.modalConfig?.body,
        footer: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v50, {
            text: _v2,
            link: _v3,
            variant: "upsell",
            onClick: () => {
              _v48({
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
          }), _v0.modalConfig?.secondaryCTAText && _v0.modalConfig?.secondaryCTALink && (0, _v1.jsx)(_v58, {
            text: _v0.modalConfig.secondaryCTAText,
            link: _v0.modalConfig.secondaryCTALink
          })]
        })
      });
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = _v0 => (0, _v1.jsx)(_v62.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.049 4c.72 0 1.398.345 1.822.93l2.698 3.72a2.261 2.261 0 0 1-.229 2.923l-7.746 7.766a2.25 2.25 0 0 1-3.188 0L2.66 11.573a2.261 2.261 0 0 1-.23-2.924l2.7-3.72A2.252 2.252 0 0 1 6.95 4H17.05Zm.4 2.295a.563.563 0 0 0-.9 0L14.083 9.59a.564.564 0 0 0 .45.903h4.928c.465 0 .73-.531.451-.903L17.45 6.295Z",
      fill: "currentColor"
    })
  });
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  (0, _v65.default)(_v66.Modal).withConfig({
    displayName: "styles__UpsellModal",
    componentId: "sc-9bccf073-0"
  })`
  ${_v0 => _v0.isBokeh && "font-family: 'ABCRepro-Regular', sans-serif !important;"}
  ${_v0 => _v0.hasFreeFeaturedBanner && "margin-top: 40px;"}
  background: var(--vimeo-colors-fill-surface);
  min-width: 62.5rem;
  width: 100%;
  height: auto;
  max-width: ${(0, _v51.rem)(0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
  max-height: 95vh !important;
  padding: 0;
  overflow: scroll;

  > div {
    max-height: 95vh !important;
    overflow: scroll;
  }
`, _v65.default.div.withConfig({
    displayName: "styles__ModalWrapper",
    componentId: "sc-9bccf073-1"
  })`
  padding: ${(0, _v51.rem)(32)} ${(0, _v51.rem)(32)} ${(0, _v51.rem)(16)};
`;
  let _v67 = _v65.default.div.withConfig({
    displayName: "styles__HeaderContainer",
    componentId: "sc-9bccf073-2"
  })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v51.rem)(24)} ${(0, _v51.rem)(24)};
  align-items: center;
  align-self: stretch;
`;
  _v65.default.div.withConfig({
    displayName: "styles__HeaderWrapper",
    componentId: "sc-9bccf073-3"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v51.rem)(28)};
  font-weight: 700;
  line-height: 118%;
  letter-spacing: ${(0, _v51.rem)(-1)};
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(4)};
`;
  let _v68 = _v65.default.p.withConfig({
    displayName: "styles__SubHeader",
    componentId: "sc-9bccf073-4"
  })`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--vimeo-colors-text-primary);
`;
  _v65.default.div.withConfig({
    displayName: "styles__PlansContainer",
    componentId: "sc-9bccf073-5"
  })`
  padding: 1rem 0 ${(0, _v51.rem)(20)} 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  z-index: 1;
  position: relative;
`;
  let _v69 = _v65.default.div.withConfig({
      displayName: "styles__FooterContainer",
      componentId: "sc-9bccf073-6"
    })`
  margin: 0 -1rem;
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`,
    _v70 = () => {
      let _v0 = (0, _v2.useContext)(_v41),
        _v1 = _v49.default.compareAllPlanFeatures;
      return (0, _v1.jsx)(_v69, {
        children: (0, _v1.jsx)(_v26.Button, {
          "data-testid": "upsell-cta",
          size: "md",
          href: (0, _v64.buildUpgradePlanUrl)(_v0.paywallTracking, {
            upsell: _v0.params.upsell_name || "none",
            integration: _v0.params.integration || "none",
            feature: _v0.params.feature || "none"
          }),
          target: "_blank",
          as: "a",
          variant: "minmal",
          onClick: () => {
            _v48({
              ..._v0.params,
              copy: _v1,
              device_type: _v0.device_type,
              path: window.location.href,
              target: "upgrade",
              target_path: "/upgrade"
            }, _v0.bpEventVersion), _v0.onButtonClick && _v0.onButtonClick({
              copy: _v1,
              target_path: "/upgrade"
            });
          },
          _hover: {},
          children: _v1
        })
      });
    },
    _v71 = _v0 => {
      let _v1 = (0, _v45.getModalSubheader)(_v0.modalConfig?.subHeaderText),
        _v2 = _v0.modalConfig?.headerText;
      return (0, _v1.jsxs)(_v67, {
        children: [(0, _v1.jsxs)(_v16.Box, {
          w: "100%",
          px: {
            base: (0, _v51.rem)(16),
            md: 0
          },
          children: ["" !== _v2 && null !== _v2 && (0, _v1.jsx)(_v53.Header, {
            size: "lg",
            "data-testid": "upsell-header-text",
            textAlign: "center",
            children: (0, _v45.getModalHeader)(_v0.modalConfig?.headerText)
          }), _v1 ? (0, _v1.jsx)(_v68, {
            "data-testid": "upsell-subheader-text",
            children: _v1
          }) : null]
        }), (0, _v1.jsx)(_v56, {
          margin: (0, _v51.rem)(8),
          onClose: _v0.onClose
        })]
      });
    };
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = _v0 => {
      let _v1 = _v0.previousCardPlan ? _v49.default.everythingInPlan(_v44.PLANS_DISPLAY_NAMES[_v0.previousCardPlan]) : _v49.default.keyFeatures,
        _v2 = (0, _v45.getPlanFeaturesList)(_v0.modalConfig, _v0.planData),
        _v3 = _v0.planData.tier,
        _v4 = (0, _v45.isRepackagingTier)(_v3) ? _v2?.length ?? 0 : _v3 === _v44.PLANS.ENTERPRISE ? 5 : [_v44.PLANS.STARTER, _v44.PLANS.PLUS].includes(_v3) ? 3 : 4;
      return _v2 && _v2.length > 0 ? (0, _v1.jsxs)(_v75.PlansFeaturesContainer, {
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm",
            xl: "heading-xs"
          },
          fontWeight: "600",
          children: _v1
        }), (0, _v1.jsx)(_v75.FeaturesWrapper, {
          children: _v2.slice(0, _v4).map((_v0, _v1) => (0, _v1.jsxs)(_v75.FeatureList, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v27.Checkmark, {
                height: (0, _v51.rem)(16),
                width: (0, _v51.rem)(16)
              })
            }), (0, _v1.jsx)(_v17.Text, {
              variant: {
                base: "body-md",
                md: "body-lg",
                xl: "body-md"
              },
              children: _v0
            })]
          }, `${_v3}-feature-${_v1}`))
        })]
      }) : null;
    },
    _v77 = ({
      planData: _v0,
      modalConfig: _v1,
      hideSubheading: _v2
    }) => {
      let _v3 = (0, _v45.getPlanSubHeading)(_v1, _v0),
        _v4 = (0, _v45.getBandwidthSubHeader)(_v0);
      return (0, _v1.jsxs)(_v75.PlanHeader, {
        style: {
          height: _v2 ? "" : "4rem"
        },
        children: [(0, _v1.jsx)(_v75.PlanTitle, {
          children: _v0.name
        }), (0, _v1.jsx)(_v53.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v4
        }), (!_v2 && !_v0.metadata.isBandwidthProduct && _v3 && _v3.length) > 0 ? (0, _v1.jsx)(_v75.PlanSubTitle, {
          children: _v3
        }) : null]
      });
    };
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = ({
    planData: _v0,
    displayMonthlyPlan: _v1
  }) => {
    let {
        entitlements: _v2
      } = _v0.metadata,
      _v3 = _v0.metadata.isBandwidthProduct,
      _v4 = (0, _v79.useViewer)(),
      _v5 = (0, _v45.isUkLocation)(_v4?.location),
      _v6 = (_v5 ? (0, _v45.getUkVatDisplayPrice)(_v0, _v1, _v3) : null) ?? (0, _v45.getPlanDisplayPrice)(_v0, _v1, _v3);
    return (0, _v1.jsx)(_v3.Flex, {
      flexDirection: "column",
      gap: {
        base: "xs",
        md: "sm",
        xl: "xs"
      },
      minHeight: {
        base: "initial",
        xl: (0, _v51.rem)(80)
      },
      maxHeight: {
        base: "initial",
        xl: (0, _v51.rem)(80)
      },
      children: _v0.tier === _v44.PLANS.ENTERPRISE ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: (0, _v1.jsx)(_v78.Building, {
            h: (0, _v51.rem)(40),
            w: (0, _v51.rem)(40)
          })
        }), (0, _v1.jsx)(_v17.Text, {
          variant: {
            base: "body-sm",
            md: "body-md",
            xl: "body-sm"
          },
          textColor: "text-secondary",
          marginBottom: {
            base: "md",
            md: "sm",
            xl: "md"
          },
          children: _v49.default.talkToTeam
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: _v6
        }), (0, _v1.jsxs)(_v17.Text, {
          variant: {
            base: "body-sm",
            md: "body-md",
            xl: "body-sm"
          },
          textColor: "text-secondary",
          marginBottom: {
            base: "md",
            md: "sm",
            xl: "md"
          },
          children: [_v3 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v44.SEAT_TIER_PLANS.includes(_v0.tier) ? _v2?.params?.videoStorageQuotaUnit === "video_size" ? _v49.default.perMonthBilledAnually : _v49.default.perSeatPerMonth : _v49.default.perMonth, (0, _v1.jsx)("br", {})]
          }), (0, _v45.getPlanBillingFrequencyCopy)(_v1, _v0, _v3), (0, _v1.jsx)("br", {}), _v5 ? _v49.default.inclVat20 : _v49.default.plusApplicableTax]
        })]
      })
    });
  };
  var _v81 = _v0.i(0);
  let _v82 = _v65.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-3c30b0dd-0"
    })`
  font-size: ${(0, _v51.rem)(14)};
  margin-top: ${(0, _v51.rem)(8)};
  padding: ${(0, _v51.rem)(11)} ${(0, _v51.rem)(16)};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: ${(0, _v51.rem)(17.64)};
  width: 100%;

  a:after {
    content: none;
  }

  a {
    text-decoration: underline !important;
  }
`,
    _v83 = ({
      allowFreeTrial: _v0,
      ctaTreatment: _v1 = "purchase_secondary",
      planData: _v2,
      displayMonthlyPlan: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(void 0),
        _v5 = (0, _v2.useRef)(void 0),
        [_v6, _v7] = (0, _v2.useState)(void 0),
        _v8 = (0, _v2.useContext)(_v41),
        _v9 = _v2.tier === _v44.PLANS.ENTERPRISE,
        _v10 = "free_trial_secondary" === _v1 && _v0,
        _v11 = "purchase_secondary" === _v1,
        _v12 = (0, _v2.useCallback)(() => {
          let {
              tier: _v0,
              price: _v1,
              currency: _v2
            } = _v2,
            _v3 = _v4?.current?.replace(/{\/?A}/g, "").trim();
          _v48({
            ..._v8.params,
            copy: _v3,
            currency: _v2.currencyCode,
            device_type: _v8.device_type,
            duration: _v3 ? "monthly" : "annual",
            is_new_pricing: (0, _v45.isSeatTierPlan)(_v0),
            path: window.location.href,
            plan_selected: _v0,
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            purchase_type: _v10 ? "trial" : "direct",
            target: "checkout",
            target_path: _v5.current
          }, _v8.bpEventVersion), _v8.onButtonClick && _v8.onButtonClick({
            copy: _v3,
            duration: _v3 ? "monthly" : "annual",
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            currency: _v2.currencyCode,
            plan_selected: _v0,
            target_path: _v5.current,
            free_trial: _v10
          });
        }, [_v3, _v10, _v2, _v8]),
        _v13 = (0, _v2.useMemo)(() => (0, _v20.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v45.appendPaywallParams)((0, _v45.appendExtraQueryParams)((0, _v45.appendTrackingQueryParams)(_v2.metadata.interactions.purchase.uri.freeTrial, _v8.params), (0, _v29.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
              onClick: _v12,
              rel: "noreferrer",
              children: _v0
            }, "start-fee-trial-link")
          },
          dictionary: {
            es: {
              singular: "o {A}iniciar una prueba gratis{/A}"
            },
            "de-DE": {
              singular: "oder {A}mache ein Probeabo{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}commencez l'essai gratuit{/A}"
            },
            "ja-JP": {
              singular: "または{A}無料トライアルを始める{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}무료로 체험해보세요{/A}"
            },
            "pt-BR": {
              singular: "ou {A}faça um teste gratuito{/A}"
            },
            "zh-CN": {
              singular: "或{A}开始免费试用{/A}"
            }
          }
        }), [_v12, _v2.metadata.interactions.purchase.uri.freeTrial, _v8.params, _v8.paywallTracking]),
        _v14 = (0, _v2.useMemo)(() => (0, _v20.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v45.appendPaywallParams)((0, _v45.appendExtraQueryParams)((0, _v45.appendTrackingQueryParams)((0, _v45.getPlanCTALink)(_v2, _v3, _v8.campaignOverride), _v8.params), (0, _v29.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
              onClick: _v12,
              rel: "noreferrer",
              children: _v0
            }, "purchase-now-link")
          },
          dictionary: {
            es: {
              singular: "o {A}comprar ahora{/A}"
            },
            "de-DE": {
              singular: "oder {A}jetzt kaufen{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}achetez maintenant{/A}"
            },
            "ja-JP": {
              singular: "または{A}今すぐ購入{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}지금 바로 구매하세요.{/A}"
            },
            "pt-BR": {
              singular: "ou {A}compre agora{/A}"
            },
            "zh-CN": {
              singular: "或者{A}立即购买{/A}"
            }
          }
        }), [_v12, _v2, _v3, _v8.params, _v8.campaignOverride, _v8.paywallTracking]);
      return (0, _v2.useEffect)(() => {
        let _v0,
          _v1 = "",
          _v2 = "";
        _v10 ? (_v0 = _v13, _v1 = "or start free trial", _v2 = _v2.metadata.interactions.purchase.uri.freeTrial) : _v11 && (_v0 = _v14, _v1 = "or {A}purchase now{/A}", _v2 = (0, _v45.getPlanCTALink)(_v2, _v3, _v8.campaignOverride)), _v4.current = _v1, _v5.current = _v2, _v7(_v0);
      }, [_v10, _v11, _v3, _v2, _v13, _v14]), _v6 && !_v9 ? (0, _v1.jsx)(_v82, {
        "data-testid": "upsell-cta",
        children: _v6
      }) : (0, _v1.jsx)(_v82, {
        children: " "
      });
    },
    _v84 = ({
      ctaTreatment: _v0,
      planData: _v1,
      displayMonthlyPlan: _v2,
      submitButtonText: _v3,
      buttonRadius: _v4,
      buttonXPadding: _v5,
      buttonYPadding: _v6,
      buttonBottomSpacing: _v7,
      border: _v8,
      color: _v9,
      backgroundColor: _v10,
      whiteSpace: _v11,
      allowFreeTrial: _v12
    }) => {
      let _v13,
        _v14,
        _v15,
        _v16 = (0, _v2.useContext)(_v41),
        _v17 = _v1.tier === _v44.PLANS.ENTERPRISE;
      _v0 || (_v0 = _v12 ? "purchase_secondary" : "free_trial_secondary"), _v17 ? (_v13 = _v49.default.contactSales, _v14 = "/enterprise/contact?mkc=ent-upgrade-plan-modal", _v15 = "direct") : _v12 && ("free_trial_only" === _v0 || "purchase_secondary" === _v0) ? (_v13 = _v49.default.startFreeTrial, _v14 = _v1.metadata.interactions.purchase.uri.freeTrial, _v15 = "trial") : (_v13 = _v49.default.upgrade, _v14 = (0, _v45.getPlanCTALink)(_v1, _v2, _v16.campaignOverride), _v15 = "direct"), _v3 && (_v13 = _v3);
      let _v18 = "purchase_secondary" === _v0 || "free_trial_secondary" === _v0 && _v12;
      return (0, _v1.jsxs)(_v16.Box, {
        w: "100%",
        marginBottom: (0, _v51.rem)(8),
        children: [(0, _v1.jsx)(_v26.Button, {
          "data-testid": "upsell-cta",
          onClick: () => {
            _v48({
              ..._v16.params,
              copy: _v13,
              currency: _v1.currency.currencyCode,
              device_type: _v16.device_type,
              duration: _v2 ? "monthly" : "annual",
              is_new_pricing: (0, _v45.isSeatTierPlan)(_v1.tier),
              path: window.location ? window.location.href : "",
              plan_selected: _v1.tier,
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              purchase_type: _v15,
              target: _v17 ? "enterprise_contact_page" : "checkout",
              target_path: _v14
            }, _v16.bpEventVersion), _v16.onButtonClick && _v16.onButtonClick({
              copy: _v13,
              duration: _v2 ? "monthly" : "annual",
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              currency: _v1.currency.currencyCode,
              plan_selected: _v1.tier,
              target_path: _v14,
              free_trial: _v12 && !_v17
            });
          },
          as: "a",
          target: "_blank",
          w: "100%",
          href: (0, _v45.appendExtraQueryParams)((0, _v45.appendPaywallParams)((0, _v45.appendTrackingQueryParams)(_v14, _v16.params), _v16.paywallTracking), _v17 ? void 0 : (0, _v29.getSatelliteCheckoutParamsFromCurrentLocation)()),
          size: "md",
          ...(!_v17 && {
            _hover: {
              backgroundColor: "vimeoBlue.300"
            }
          }),
          backgroundColor: _v10 || (_v17 ? "text-primary" : "fill-brand"),
          marginBottom: _v7,
          paddingY: _v6,
          paddingX: _v5,
          borderRadius: _v4,
          border: _v8,
          color: _v9,
          whiteSpace: _v11,
          children: _v13
        }), _v18 && (0, _v1.jsx)(_v83, {
          "data-testid": "upsell-secondary-cta",
          allowFreeTrial: _v12,
          ctaTreatment: _v0,
          displayMonthlyPlan: _v2,
          planData: _v1
        })]
      });
    },
    _v85 = _v0 => {
      let _v1 = _v0.planData.tier === _v44.PLANS.ENTERPRISE,
        _v2 = (0, _v74.useTheme)(),
        {
          showRecommendedBadge: _v3
        } = _v0,
        {
          colorMode: _v4
        } = (0, _v18.useColorMode)(),
        {
          semanticTokens: {
            colors: _v5
          }
        } = _v2,
        _v6 = "dark" === _v4 ? _v5["text-primary"].default : "white";
      return "dark" === _v4 ? _v5.grayscale["200"] : _v5.grayscale["700"], (0, _v1.jsxs)(_v16.Box, {
        display: "flex",
        maxW: {
          base: "100%",
          xl: "19.5rem"
        },
        padding: {
          base: "lg",
          md: "xl",
          xl: "lg"
        },
        flexDir: "column",
        alignItems: "flex-start",
        gap: {
          base: "md",
          md: "lg",
          xl: "md"
        },
        flex: "1 0 0",
        alignSelf: "stretch",
        background: _v6,
        borderRadius: (0, _v51.rem)(20),
        border: _v3 ? "4px solid #8a5ee8" : `${(0, _v51.rem)(1)} solid ${_v5.slate["200"]}`,
        borderTop: _v3 ? "none" : void 0,
        marginTop: {
          base: _v3 ? (0, _v51.rem)(20) : void 0,
          xl: 0
        },
        position: "relative",
        width: {
          base: "100%",
          md: (0, _v51.rem)(618),
          xl: "100%"
        },
        flexDirection: {
          base: "column",
          md: "row",
          xl: "column"
        },
        children: [_v0.showRecommendedBadge ? (0, _v1.jsx)(_v75.RecommendedBadge, {
          children: _v49.default.recommended
        }) : null, (0, _v1.jsxs)(_v3.Flex, {
          gap: "1rem",
          flexDirection: "column",
          width: {
            base: "100%",
            md: (0, _v51.rem)(220),
            xl: "100%"
          },
          children: [(0, _v1.jsx)(_v77, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            hideSubheading: _v0.hideSubheading
          }), (0, _v1.jsx)(_v80, {
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v84, {
            planData: _v0.planData,
            ctaTreatment: _v0.modalConfig?.ctaTreatment,
            allowFreeTrial: _v0?.allowFreeTrial,
            displayMonthlyPlan: _v0.displayMonthlyPlan,
            color: _v1 ? _v6 : "#0a0e12",
            backgroundColor: _v1 ? _v2?.modal?.planCard?.background ?? _v5["text-primary"].default : _v5["fill-brand"].default,
            border: _v1 ? `1px solid ${_v2?.modal?.enterprise?.border ?? "#000"}` : "none",
            buttonBottomSpacing: "0",
            whiteSpace: "break-spaces"
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "lg",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v81.default, {
            modalConfig: _v0.modalConfig,
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v76, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            previousCardPlan: _v0.previousCardPlan
          })]
        })]
      });
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = ["uri"],
    _v89 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v90 = () => {
      let {
          settings: _v0
        } = (0, _v10.useOrionSettings)(),
        _v1 = (0, _v79.useViewer)(),
        _v2 = _v1?.user?.id ?? null,
        _v3 = _v0.enable_cold_storage_plan_reorder,
        _v4 = !!_v2 && _v3 && "paid" !== (0, _v87.deriveViewerAuthStatus)(_v1),
        {
          data: _v5,
          isLoading: _v6
        } = (0, _v86.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v88,
          query: {
            filter: "cold_storage",
            perPage: 1
          },
          headers: _v89
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          data: _v7,
          isLoading: _v8
        } = (0, _v86.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v88,
          query: {
            filter: "cold_privacy",
            perPage: 1
          },
          headers: _v89
        } : null, {
          revalidateOnFocus: !1
        });
      if (!_v4) return {
        shouldReorder: !1,
        isResolving: !1
      };
      let _v9 = (_v5?.total ?? 0) > 0,
        _v10 = (_v7?.total ?? 0) > 0;
      return {
        shouldReorder: _v9 || _v10,
        isResolving: _v6 || _v8
      };
    },
    _v91 = _v0 => {
      let {
          showIndividualPlans: _v1
        } = (0, _v72.useB2BRepackagingContext)(),
        {
          shouldReorder: _v2,
          isResolving: _v3
        } = _v90(),
        _v4 = [...(_v0.modalConfig?.excludePlans ?? []), ...(_v1 ? [] : [_v44.PLANS.CREATOR, _v44.PLANS.PROFESSIONAL]), ...(_v2 ? [_v44.PLANS.STARTER, _v44.PLANS.PLUS] : [])];
      if (_v3) return null;
      let _v5 = (0, _v45.filterPlansData)(_v0.plansData, _v0.userData, _v4),
        _v6 = _v0.modalConfig?.hidePlansSummary || _v5.length > 0 && (0, _v45.isSolutionTier)(_v5[0].tier),
        _v7 = (0, _v45.isEligibleForFreeTrial)(_v0.userData) && _v5 && !!_v5[0].metadata.interactions.purchase.uri.freeTrial;
      return (0, _v1.jsx)(_v73.Stack, {
        position: "relative",
        zIndex: 1,
        padding: `1rem 0 ${(0, _v51.rem)(20)} 0`,
        direction: {
          base: "column",
          xl: "row"
        },
        gap: "md",
        justifyContent: "center",
        children: _v5.map((_v0, _v1) => {
          let _v2 = (0, _v45.getPreviousPlanTierCopy)(_v5, _v0, _v1),
            _v3 = _v1 > 0 ? _v5[_v1 - 1].tier : null;
          return _v1 < 4 && (0, _v1.jsx)(_v85, {
            planData: _v0,
            userData: _v0.userData,
            previousCardPlan: _v2,
            modalConfig: _v0.modalConfig,
            showRecommendedBadge: _v0.modalConfig?.recommendedPlan ? _v0.tier === _v0.modalConfig?.recommendedPlan : (0, _v45.showRecommendedBadge)(_v0, _v1, _v3),
            displayMonthlyPlan: (0, _v45.showMonthlyPlans)(_v0.plansData),
            hideSubheading: _v6,
            allowFreeTrial: _v7
          }, `plan-card-${_v0.tier}`);
        })
      });
    },
    _v92 = _v0 => {
      let {
          modalConfig: _v1,
          plansData: _v2
        } = _v0,
        _v3 = _v1?.featuredBannerText,
        _v4 = _v2?.length && (0, _v45.isSeatTierPlan)(_v2[0].tier) ? _v3 ?? (0, _v20.translate)({
          singular: "This feature is included in all paid plans",
          dictionary: {
            es: {
              singular: "Esta característica está incluida en todos los planes de pago."
            },
            "de-DE": {
              singular: "Diese Funktion ist in allen kostenpflichtigen Tarifen enthalten."
            },
            "fr-FR": {
              singular: "Cette fonctionnalité est incluse dans tous les abonnements payants"
            },
            "ja-JP": {
              singular: "この機能はすべての有料プランに含まれています"
            },
            "ko-KR": {
              singular: "이 기능은 모든 유료 요금제에 포함되어 있습니다."
            },
            "pt-BR": {
              singular: "O recurso está incluído em todos os planos pagos"
            },
            "zh-CN": {
              singular: "所有付费套餐均包含此功能"
            }
          }
        }) : (0, _v20.translate)({
          singular: "Upgrade to unlock more features",
          dictionary: {
            es: {
              singular: "Actualice su plan para desbloquear más funciones"
            },
            "de-DE": {
              singular: "Upgrade vornehmen, um weitere Funktionen freizuschalten"
            },
            "fr-FR": {
              singular: "Mettez votre abonnement à niveau pour débloquer plus de fonctionnalités"
            },
            "ja-JP": {
              singular: "アップグレードでさらに多くの機能にアクセス"
            },
            "ko-KR": {
              singular: "업그레이드하여 더 많은 기능을 이용해 보세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter acesso a mais recursos"
            },
            "zh-CN": {
              singular: "升级以解锁更多功能"
            }
          }
        });
      _v1 && (_v1.hasFreeFeaturedBanner = _v1?.hasFreeFeaturedBanner || void 0 !== _v3);
      let _v5 = _v1?.hasFreeFeaturedBanner;
      return (0, _v1.jsxs)(_v4.Modal, {
        "data-testid": "default-upsell-container",
        isOpen: !0,
        onClose: _v0.onClose,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
          top: {
            base: "initial",
            sm: "sm",
            md: "lg",
            xl: "initial"
          },
          marginTop: _v5 ? (0, _v51.rem)(40) : void 0,
          alignSelf: {
            base: "flex-start",
            xl: "center"
          },
          maxWidth: {
            sm: (0, _v51.rem)(375),
            md: (0, _v51.rem)(618),
            lg: (0, _v51.rem)(618),
            xl: (0, _v51.rem)(0)
          },
          children: (0, _v1.jsxs)(_v5.ModalBody, {
            padding: {
              base: "md",
              xl: "lg"
            },
            children: [_v5 && (0, _v1.jsx)(_v16.Box, {
              borderRadius: "xl",
              position: "absolute",
              width: "100%",
              top: (0, _v51.rem)(-40),
              left: 0,
              verticalAlign: "middle",
              justifyItems: "center",
              pt: "sm",
              pb: "sm",
              pr: "md",
              pl: "md",
              backgroundColor: "upsell-secondary",
              height: (0, _v51.rem)(80),
              zIndex: -1,
              children: (0, _v1.jsxs)(_v61.HStack, {
                children: [(0, _v1.jsx)(_v63, {
                  h: "xs",
                  w: "xs",
                  color: "white",
                  backgroundColor: "upsell-primary",
                  borderRadius: (0, _v51.rem)(6),
                  padding: (0, _v51.rem)(4)
                }), (0, _v1.jsx)(_v17.Text, {
                  variant: "body-lg",
                  color: "text-primary",
                  children: _v4
                })]
              })
            }), (0, _v1.jsx)(_v71, {
              modalConfig: _v1,
              onClose: _v0.onClose,
              userName: _v0.userData?.name
            }), _v0.userData && _v2 && (0, _v1.jsx)(_v91, {
              modalConfig: _v1,
              userData: _v0.userData,
              plansData: _v2
            }), (0, _v1.jsx)(_v70, {})]
          })
        })]
      });
    };
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  let _v95 = _v0 => (0, _v1.jsx)(_v62.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19.99 12.382a1 1 0 0 0 0-.764 1 1 0 0 0-.212-.325L14.124 5.64a1 1 0 0 0-1.414 1.414l3.951 3.95-11.725-.007a1.001 1.001 0 0 0-.928 1.389 1 1 0 0 0 .928.619l11.725-.007-3.95 3.95a1 1 0 1 0 1.413 1.414l5.654-5.654a1 1 0 0 0 .212-.325Z",
        fill: "currentColor"
      })
    }),
    _v96 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      margin: `${(0, _v51.rem)(8)} 0`,
      color: "white",
      fontWeight: 500,
      listStyleType: "none",
      children: (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v27.Checkmark, {
          position: "relative",
          top: (0, _v51.rem)(4),
          width: (0, _v51.rem)(20),
          height: (0, _v51.rem)(20),
          marginRight: (0, _v51.rem)(8),
          color: "white"
        }), _v0]
      })
    }),
    _v97 = () => {
      let _v0 = _v44.enterpriseDefaultFeatures.featuresList || [];
      return (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v96, {
          text: _v0
        }, String(_v1)))
      });
    },
    _v98 = ({
      src: _v0,
      title: _v1,
      onLoad: _v2
    }) => {
      let _v3 = (0, _v55.useIsMobile)();
      return (0, _v1.jsx)(_v16.Box, {
        position: "relative",
        overflow: "hidden",
        maxHeight: _v3 ? `calc(100vh - ${(0, _v51.rem)(172)})` : (0, _v51.rem)(687),
        maxWidth: _v3 ? "100%" : (0, _v51.rem)(600),
        minWidth: (0, _v51.rem)(375),
        height: (0, _v51.rem)(687),
        borderRadius: _v3 ? `0 0 ${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)}` : `0 ${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)} 0`,
        sx: {
          "& > iframe": {
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
            border: "0",
            overflow: "hidden"
          }
        },
        children: (0, _v1.jsx)("iframe", {
          id: "marktoFromIframe",
          src: _v0,
          title: _v1,
          onLoad: _v2
        })
      });
    },
    _v99 = ({
      modalConfig: _v0
    }) => {
      let {
          enterpriseTitle: _v1,
          enterpriseSubtitle: _v2
        } = _v0 || {},
        _v3 = (0, _v45.getEnterpriseModalTitle)(_v1),
        _v4 = (0, _v45.getEnterpriseSubtitle)(_v2);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v3 && (0, _v1.jsx)(_v53.Header, {
          as: "h1",
          size: "lg",
          marginBottom: (0, _v51.rem)(8),
          children: _v3
        }), _v4 && (0, _v1.jsx)(_v53.Header, {
          as: "h3",
          size: "xs",
          marginBottom: (0, _v51.rem)(24),
          children: _v4
        })]
      });
    },
    _v100 = ({
      userData: _v0,
      onClose: _v1,
      tracking: _v2,
      modalConfig: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(!0),
        {
          colors: _v6
        } = (0, _v74.useTheme)(),
        {
          colorMode: _v7
        } = (0, _v18.useColorMode)(),
        _v8 = (0, _v55.useIsMobile)(),
        _v9 = (0, _v2.useContext)(_v41);
      (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.data === _v44.CLOSE_EVENT_DATA && _v1();
        };
        return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
      }, [_v1]);
      let _v10 = {
          ..._v44.defaultBpEventParams,
          ..._v2.params,
          is_new_pricing: _v0 ? (0, _v45.isSeatTierPlan)(_v0?.membership?.type) : null,
          device_type: (0, _v45.getDeviceType)(),
          action_type: "click"
        },
        _v11 = _v3?.mkcCode ? "&mkc=" + _v3?.mkcCode : "",
        _v12 = _v44.ADVANCED_ENTERPRISE_UPSELL_FORM_URL + _v11 + "&tracking_param=" + encodeURIComponent(JSON.stringify(_v10)),
        _v13 = (0, _v45.getEnterpriseFooterLinkText)(_v3?.customFooterLinkText);
      return (0, _v1.jsxs)(_v4.Modal, {
        "data-testid": "enterprise-upsell-container",
        isOpen: !0,
        onClose: _v1,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {
          zIndex: 0
        }), _v4 && (0, _v1.jsx)(_v3.Flex, {
          position: "absolute",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          visibility: "visible",
          zIndex: 0,
          children: (0, _v1.jsx)(_v93.Spinner, {
            size: "md",
            color: _v6.vimeoBlue["600"]
          })
        }), (0, _v1.jsxs)(_v7.ModalContent, {
          maxW: _v8 ? (0, _v51.rem)(375) : (0, _v51.rem)(940),
          maxH: _v8 ? "100vh" : (0, _v51.rem)(820),
          padding: 0,
          visibility: _v4 ? "hidden" : "visible",
          zIndex: 0,
          children: [(0, _v1.jsx)(_v56, {
            onClose: _v1
          }), (0, _v1.jsx)(_v5.ModalBody, {
            padding: 0,
            maxH: _v8 ? "100vh" : (0, _v51.rem)(820),
            overflow: "hidden",
            borderRadius: (0, _v51.rem)(20),
            children: (0, _v1.jsxs)(_v52.Grid, {
              templateColumns: `${!_v8 ? `minmax(${(0, _v51.rem)(268)}, ${(0, _v51.rem)(340)}) minmax(${(0, _v51.rem)(350)}, ${(0, _v51.rem)(600)})` : "1fr"}`,
              height: "100%",
              maxH: _v8 ? "100vh" : (0, _v51.rem)(820),
              sx: {
                "::-webkit-scrollbar": {
                  display: "none"
                }
              },
              children: [(0, _v1.jsxs)(_v3.Flex, {
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "dark" === _v7 ? _v6.gray["900"] : _v6.blackAlpha["900"],
                height: _v8 ? (0, _v51.rem)(172) : "100%",
                maxWidth: _v8 ? "100%" : (0, _v51.rem)(400),
                minWidth: "md",
                padding: _v8 ? 6 : `${(0, _v51.rem)(32)} ${(0, _v51.rem)(40)}`,
                borderRadius: _v8 ? `${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)} 0 0` : `${(0, _v51.rem)(20)} 0 0 ${(0, _v51.rem)(20)}`,
                children: [(0, _v1.jsx)(_v3.Flex, {
                  flex: "1",
                  flexDirection: "column",
                  color: _v6.white,
                  paddingRight: 6,
                  children: (0, _v1.jsxs)(_v16.Box, {
                    children: [(0, _v1.jsx)(_v99, {
                      modalConfig: _v3
                    }), !_v8 && (0, _v1.jsx)(_v3.Flex, {
                      direction: "column",
                      fontSize: {
                        xs: "body-md",
                        sm: "body-md",
                        lg: "body-lg"
                      },
                      children: _v3?.customFeaturesList || (0, _v1.jsx)(_v97, {})
                    })]
                  })
                }), !_v8 && (0, _v1.jsxs)(_v94.Link, {
                  href: "/enterprise",
                  variant: "primary",
                  textDecoration: "underline",
                  color: _v6.white,
                  onClick: () => {
                    _v48({
                      ..._v9.params,
                      copy: _v13,
                      device_type: _v9.device_type,
                      path: window.location.href,
                      page: window.parent.location.pathname,
                      location: "upsell_modal",
                      target: "/enterprise",
                      target_path: "/upgrade",
                      feature: "upgrade_cta"
                    }, _v9.bpEventVersion), _v9.onButtonClick && _v9.onButtonClick({
                      copy: _v13,
                      target_path: "/enterprise"
                    });
                  },
                  children: [_v13, (0, _v1.jsx)(_v95, {
                    marginLeft: (0, _v51.rem)(6)
                  })]
                })]
              }), (0, _v1.jsx)(_v98, {
                title: _v49.default.contactUs,
                src: _v12,
                onLoad: () => {
                  _v5(!1);
                  let _v0 = document.getElementById("marktoFromIframe"),
                    _v1 = _v0?.contentDocument || _v0?.contentWindow?.document,
                    _v2 = () => {
                      let _v0 = _v1?.querySelector("div#__next > div:nth-child(3) > div > div");
                      if (!_v0) return void setTimeout(_v2, 100);
                      let _v1 = _v1?.createElement("style");
                      _v1 && (_v1.textContent = `

        div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow > span > button:hover {
          color: ${_v6.blackAlpha[900]} !important;
        }

        @media screen and (max-width: ${(0, _v51.rem)(375)}) {
          div#__next > div:nth-child(3) > div > div {
            overflow: auto;
            padding: ${(0, _v51.rem)(24)} ${(0, _v51.rem)(24)} 0 ${(0, _v51.rem)(24)};
            border-bottom: ${(0, _v51.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow {
            border-top: ${(0, _v51.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
            z-index: 1;
            position: sticky;
            bottom: 0;
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow::before {
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            background-image: radial-gradient(circle at 100% 100%, transparent ${(0, _v51.rem)(25)}, ${"dark" === _v7 ? _v6.gray[800] : _v6.white} ${(0, _v51.rem)(8)});
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow > span > button {
            margin: 0 !important;
          }

          div#__next > div:nth-child(3) {
            min-height: 100%;
            height: 100%;
          }

          div#__next > div:nth-child(3) > div {
            min-height: 100%;
            height: 100%;
          }

          html, body, div#__next {
            min-height: 100%;
            height: 100%;
          }
        }
      `, _v1?.head.appendChild(_v1)), _v0.style.minWidth = "100%";
                    };
                  _v2();
                }
              })]
            })
          })]
        })]
      });
    };
  var _v101 = _v0.i(0);
  let _v102 = "https://",
    _v103 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v104 = async (_v0, _v1) => {
      let _v2 = `${_v102}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v103(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v101.default)(_v4)).membership.type = (0, _v101.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v105 = async (_v0, _v1, _v2) => {
      let _v3 = `${_v102}${_v0}/me/subscription_plans?vuid=${(0, _v45.getVuid)()}`;
      _v2 && (_v3 += `&campaign_id=${_v2}`);
      let _v4 = await fetch(_v3, {
        method: "GET",
        headers: _v103(_v1.jwt)
      });
      if (_v4.ok) {
        let _v0 = await _v4.json();
        return (0, _v101.default)(_v0.data);
      }
      throw _v4;
    };
  var _v106 = _v0.i(0);
  let _v107 = ["feature"],
    _v108 = function (_v0) {
      let _v1,
        {
          apiUrl: _v2,
          userConfig: _v3
        } = _v0,
        {
          settings: _v4
        } = (0, _v10.useOrionSettings)(),
        [_v5, _v6] = (0, _v2.useState)({
          isShowing: !1,
          userData: null,
          plansData: null,
          hasTrackedImpression: !1
        }),
        {
          shouldReorder: _v7
        } = _v90(),
        _v8 = (0, _v9.useCampaignIdOverride)(),
        _v9 = _v0.onClose;
      (0, _v2.useEffect)(() => {
        let _v0 = async () => await _v104(_v2, _v3.jwt),
          _v1 = async () => await _v105(_v2, _v3, _v8);
        (async () => {
          var _v0, _v1;
          let _v2,
            _v3,
            _v4,
            [_v5, _v6] = await Promise.all([_v0(), _v1()]),
            _v7 = _v4.core_tier_enabled ? _v6 : _v6?.filter(_v0 => _v0.tier !== _v44.PLANS.CORE);
          _v6(_v0 => ({
            ..._v0,
            isShowing: !0,
            userData: _v5,
            plansData: _v7
          })), _v0 = _v5, _v1 = _v3.userId, _v2 = /\.ci\.vimeows.com$/.test(window.location.host) ? "staging" : "vimeo.dev" === window.location.host ? "development" : "production", _v3 = new _v42.Event("vimeo.web_global", 5, {
            user: {
              subscription_type: _v0.membership?.type,
              is_mod: _v0.membership?.badge?.type === "staff",
              session_id: null,
              teams: null,
              user_id: _v1 || null,
              vuid: (0, _v45.getVuid)(),
              flags: null,
              is_free_trial: _v0.membership?.subscription?.trial?.status === "free_trial"
            },
            application: {
              application: "vimeo",
              vimeo_language: (0, _v45.getLanguage)() || "en",
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
          }), _v4 = new _v42.Configuration("production" === _v2 ? _v42.Service.FRESNEL_PROD : _v42.Service.FRESNEL_DEV, _v3), _v42.BigPictureClient.configure(_v4), _v0.tracking.onOpen && _v0.tracking.onOpen();
        })();
      }, [_v0.tracking, _v2, _v3, _v8, _v4.core_tier_enabled]), (0, _v2.useEffect)(() => {
        let _v0 = Date.now();
        !_v5.hasTrackedImpression && _v5.userData?.membership?.type && (((_v0, _v1 = _v46) => {
          _v47({
            action_type: "impression",
            ..._v0
          }, _v1);
        })({
          ..._v0.tracking.params,
          loading_time: (Date.now() - _v0) / 0,
          is_new_pricing: (0, _v45.isSeatTierPlan)(_v5.userData?.membership?.type),
          device_type: (0, _v45.getDeviceType)()
        }, _v0.tracking.bpEventVersion), _v6(_v0 => ({
          ..._v0,
          hasTrackedImpression: !0
        })));
      }, [_v0.tracking, _v5.userData?.membership?.type, _v5.hasTrackedImpression]);
      let _v10 = _v5.userData?.membership?.type,
        _v11 = _v0.templateType;
      _v107.includes(_v0.templateType) || _v10 !== _v44.PLANS.ADVANCED && _v10 !== _v44.PLANS.PREMIUM && _v10 !== _v44.PLANS.TEAM_LIVE && _v10 !== _v44.PLANS.CUSTOM_SELF_SERVE && _v10 !== _v44.PLANS.STUDIO && _v10 !== _v44.PLANS.PRODUCTION || (0, _v45.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v11 = "enterprise");
      let _v12 = _v0.tracking.paywallTracking.paywallFeature,
        _v13 = _v0.tracking.paywallTracking.paywallTrigger,
        _v14 = (0, _v106.isBspLateStagePaywallKind)(_v4.late_stage_paywall_kind),
        _v15 = (0, _v106.resolvePrivacyOptionFromTrigger)(_v13),
        _v16 = (0, _v106.resolveVariant)(_v12),
        _v17 = "privacy" !== _v16 || _v15 ? _v16 : "generic",
        _v18 = "limits_only_bsp" === _v4.late_stage_paywall_kind && "generic" === _v17,
        _v19 = _v13?.toLowerCase() ?? "",
        _v20 = _v19.includes("cold_storage") || _v19.includes("cold_privacy") ? _v4.cold_storage_trigger_paywall_tier : _v4.limit_based_paywall_tier,
        _v21 = _v5.userData?.membership?.type && _v5.plansData ? (0, _v106.resolveTier)({
          currentTier: _v5.userData?.membership?.type,
          tierSetting: _v20,
          plansData: _v5.plansData,
          excludePlans: _v0.modalConfig?.excludePlans,
          variant: _v17
        }) : null,
        _v22 = "bsp_cards_generic_and_bsp_limits" === _v4.late_stage_paywall_kind || "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind,
        _v23 = "generic" === _v17 && _v22 && ![_v44.PLANS.STARTER, _v44.PLANS.STANDARD, _v44.PLANS.ADVANCED].includes(_v21),
        _v24 = "generic" === _v17 && _v22 ? "760px" : "560px",
        _v25 = _v14 && "default" === _v0.templateType && "enterprise" !== _v11 && !!_v21 && !_v18 && !_v23,
        _v26 = _v0.tracking.paywallTracking,
        _v27 = !!_v5.userData && (0, _v45.isEligibleForFreeTrial)(_v5.userData),
        {
          trackPaywallDismissed: _v28
        } = (0, _v40.usePaywallTracking)({
          ..._v0.tracking.paywallTracking,
          isVisible: _v5.isShowing
        }),
        _v29 = (0, _v2.useCallback)(() => {
          _v28(), _v9();
        }, [_v28, _v9]),
        _v30 = "default" === _v11 && !_v25 && "enterprise" !== _v10,
        _v31 = _v5.plansData?.some(_v0 => _v0.tier === _v44.PLANS.STARTER || _v0.tier === _v44.PLANS.PLUS) ?? !1,
        _v32 = _v5.isShowing && _v7 && _v30 && _v31,
        {
          trackColdStoragePlanReorderDisplayed: _v33
        } = (0, _v39.useColdStorageReorderTracking)(),
        _v34 = (0, _v2.useRef)(!1);
      switch ((0, _v2.useEffect)(() => {
        _v32 && !_v34.current && (_v34.current = !0, _v33({
          surface: "upsell_modal"
        }));
      }, [_v32, _v33]), _v11) {
        case "default":
          _v1 = _v25 && _v21 ? (0, _v1.jsxs)(_v4.Modal, {
            isOpen: !0,
            onClose: _v29,
            size: ["full", "md"],
            scrollBehavior: "inside",
            children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
              containerProps: {
                padding: {
                  base: "0 !important"
                }
              },
              maxWidth: {
                base: "100vw",
                md: _v24
              },
              width: {
                base: "100vw",
                md: _v24
              },
              height: {
                base: "100dvh",
                md: "auto"
              },
              minH: {
                base: "100dvh",
                md: "auto"
              },
              maxH: {
                base: "100dvh",
                md: "90vh"
              },
              borderRadius: {
                base: "0",
                md: "16px"
              },
              margin: {
                base: "0",
                md: "auto"
              },
              overflow: "hidden",
              position: "relative",
              children: [(0, _v1.jsx)(_v6.ModalCloseButton, {
                onClick: _v29,
                zIndex: 1
              }), (0, _v1.jsx)(_v5.ModalBody, {
                p: "24px",
                display: "flex",
                flex: "1",
                children: (0, _v1.jsx)(_v3.Flex, {
                  width: "100%",
                  children: (({
                    kind: _v0,
                    paywallTracking: _v1,
                    variant: _v2,
                    tier: _v3,
                    currentTier: _v4,
                    privacyOption: _v5,
                    isUserEligibleForFreeTrial: _v6
                  }) => {
                    switch (_v2) {
                      case "storage":
                        return (0, _v1.jsx)(_v25, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                      case "privacy":
                        return _v5 ? (0, _v1.jsx)(_v13.PrivacyLimitPaywall, {
                          tier: _v3,
                          privacyOption: _v5,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        }) : (0, _v1.jsx)(_v12.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                      default:
                        if ("bsp_cards_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v11.CardComparisonPaywall, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        if ("bsp_table_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v37, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        return (0, _v1.jsx)(_v12.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                    }
                  })({
                    kind: _v4.late_stage_paywall_kind,
                    paywallTracking: _v26,
                    variant: _v17,
                    tier: _v21,
                    currentTier: _v5.userData?.membership?.type ?? null,
                    privacyOption: _v15,
                    isUserEligibleForFreeTrial: _v27
                  })
                })
              })]
            })]
          }) : "enterprise" === _v10 ? (0, _v1.jsx)(_v100, {
            userData: _v5.userData,
            onClose: _v29,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v92, {
            userData: _v5.userData,
            plansData: _v5.plansData,
            modalConfig: {
              hidePlansSummary: !0,
              ..._v0.modalConfig
            },
            onClose: _v29,
            tracking: _v0.tracking
          });
          break;
        case "feature":
          _v1 = (0, _v1.jsx)(_v60, {
            modalConfig: _v0.modalConfig,
            onClose: _v29
          });
          break;
        case "enterprise":
          _v1 = (0, _v1.jsx)(_v100, {
            userData: _v5.userData,
            onClose: _v29,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          });
          break;
        default:
          _v1 = null;
      }
      return _v5.isShowing ? (0, _v1.jsx)(_v41.Provider, {
        value: {
          ..._v0.tracking,
          device_type: (0, _v45.getDeviceType)(),
          campaignOverride: _v8
        },
        children: _v1
      }) : null;
    };
  _v0.s(["default", 0, _v108], 0), _v0.s(["default", 0, _v108], 0);
}