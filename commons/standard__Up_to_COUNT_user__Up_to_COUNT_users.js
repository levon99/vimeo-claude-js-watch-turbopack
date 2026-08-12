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
    _v21 = _v0.i(0);
  let _v22 = "standard",
    _v23 = {
      t1: {
        showSavedCard: !0,
        isMonthly: !1
      },
      t2: {
        showSavedCard: !1,
        isMonthly: !1
      },
      t3: {
        showSavedCard: !1,
        isMonthly: !0
      }
    },
    _v24 = _v0 => (0, _v18.isInPlaceChargeable)(_v0) && (0, _v18.filterSavedPaymentMethods)(_v0) && !(0, _v18.isPaymentMethodExpired)(_v0) && !(0, _v19.isAutorenewalOptInProtected)(_v0.card?.billingAddress);
  function _v25({
    params: _v0
  }) {
    let _v1 = {
        h: (0, _v9.rem)(16),
        w: (0, _v9.rem)(16)
      },
      _v2 = [_v0?.teamSeats != null && {
        icon: (0, _v1.jsx)(_v12.Users, {
          ..._v1
        }),
        label: (0, _v14.translate)({
          singular: "Up to {COUNT} user",
          plural: "Up to {COUNT} users",
          count: _v0.teamSeats,
          replacements: {
            COUNT: String(_v0.teamSeats)
          },
          dictionary: {
            es: {
              singular: "Hasta {COUNT} usuario",
              plural: "Hasta {COUNT} usuarios"
            },
            "de-DE": {
              singular: "Bis zu {COUNT} Nutzer",
              plural: "Bis zu {COUNT} Nutzer"
            },
            "fr-FR": {
              singular: "Jusqu'à {COUNT} utilisateur",
              plural: "Jusqu'à {COUNT} utilisateurs"
            },
            "ja-JP": {
              singular: "最大{COUNT}ユーザー",
              plural: "最大{COUNT}ユーザー"
            },
            "ko-KR": {
              singular: "최대 {COUNT}명의 사용자",
              plural: "최대 {COUNT}명의 사용자"
            },
            "pt-BR": {
              singular: "Até {COUNT} usuário",
              plural: "Até {COUNT} usuários"
            },
            "zh-CN": {
              singular: "最多 {COUNT} 位用户",
              plural: "最多 {COUNT} 位用户"
            }
          }
        })
      }, _v0?.videoStoragePeriodicQuota && {
        icon: (0, _v1.jsx)(_v10.Database, {
          ..._v1
        }),
        label: (0, _v14.translate)({
          singular: "{AMOUNT} storage",
          replacements: {
            AMOUNT: _v0.videoStoragePeriodicQuota
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento"
            },
            "de-DE": {
              singular: "{AMOUNT} Speicherplatz"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage"
            },
            "ja-JP": {
              singular: "{AMOUNT}のストレージ"
            },
            "ko-KR": {
              singular: "총 저장 공간 {AMOUNT}"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento"
            },
            "zh-CN": {
              singular: "{AMOUNT} 存储空间"
            }
          }
        })
      }, _v0?.bandwidth?.periodicQuota && {
        icon: (0, _v1.jsx)(_v11.Speedometer, {
          ..._v1
        }),
        label: (0, _v14.translate)({
          singular: "{AMOUNT} monthly bandwidth",
          replacements: {
            AMOUNT: _v0.bandwidth.periodicQuota
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de ancho de banda mensual"
            },
            "de-DE": {
              singular: "{AMOUNT} monatliche Bandbreite"
            },
            "fr-FR": {
              singular: "{AMOUNT} de bande passante mensuelle"
            },
            "ja-JP": {
              singular: "{AMOUNT}の月間帯域幅"
            },
            "ko-KR": {
              singular: "{AMOUNT} 월간 대역폭"
            },
            "pt-BR": {
              singular: "{AMOUNT} de largura de banda mensal"
            },
            "zh-CN": {
              singular: "{AMOUNT} 每月带宽"
            }
          }
        })
      }].filter(Boolean);
    return (0, _v1.jsx)(_v3.Flex, {
      direction: "column",
      gap: (0, _v9.rem)(12),
      children: _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v3.Flex, {
        alignItems: "center",
        gap: (0, _v9.rem)(8),
        children: [_v0.icon, (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          children: _v0.label
        })]
      }, _v1))
    });
  }
  _v0.s(["ONE_TAP_TIER", 0, _v22, "usePaywallOneTap", 0, function ({
    isPaywallReady: _v0
  }) {
    var _v1, _v2;
    let _v3,
      _v4 = (0, _v16.useViewer)(),
      {
        settings: _v5,
        isLoadingResponse: _v6
      } = (0, _v21.useOrionSettings)(),
      _v7 = _v4?.teamUser?.accountType ?? _v4?.user?.account,
      _v8 = !!_v4?.user && "free" === _v7,
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v17.useGetMePaymentMethods)(_v8 ? {
        select: _v18.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      } : () => null),
      _v11 = _v23[_v5.paywall_one_tap_arm ?? "control"],
      _v12 = _v8 && (_v6 || _v10),
      _v13 = _v8 && !_v6 && (_v1 = _v9?.data ?? [], _v2 = !!_v11?.isMonthly, (_v3 = _v1.filter(_v24)).length > 0 && (_v2 || !_v3.some(_v0 => _v0.card?.billingAddress?.country === "DE"))),
      {
        trackOneTapEligible: _v14
      } = (0, _v20.useOneTapUpsellTracking)(),
      _v15 = (0, _v2.useRef)(!1);
    return (0, _v2.useEffect)(() => {
      !_v15.current && _v0 && _v13 && (_v15.current = !0, _v14({
        tier: _v22,
        periodicity: _v11?.isMonthly ? "monthly" : "annual"
      }));
    }, [_v11?.isMonthly, _v13, _v0, _v14]), {
      isResolving: _v12,
      variant: _v0 && _v13 ? _v11 ?? null : null
    };
  }], 0), _v0.s(["OneTapPaywallModal", 0, function ({
    plan: _v0,
    onClose: _v1,
    isMonthly: _v2,
    showSavedCard: _v3,
    paywallTracking: _v4
  }) {
    let _v5 = (0, _v16.useViewer)(),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v13.usePostMeOrders)(),
      [_v10, ..._v11] = (_v5?.user?.name ?? "").split(" "),
      _v12 = _v11.join(" ") || "_",
      _v13 = _v0.name ?? _v22,
      _v14 = (0, _v1.jsx)(_v25, {
        params: _v0.metadata?.entitlements?.params
      }),
      _v15 = (0, _v14.translate)({
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
      });
    return (0, _v1.jsxs)(_v4.Modal, {
      isOpen: !0,
      onClose: _v1,
      size: "md",
      closeOnOverlayClick: !_v6,
      children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
        maxWidth: (0, _v9.rem)(560),
        borderRadius: (0, _v9.rem)(24),
        padding: 0,
        children: [(0, _v1.jsx)(_v5.ModalCloseButton, {
          top: (0, _v9.rem)(34),
          right: (0, _v9.rem)(32),
          zIndex: 1,
          isDisabled: _v6
        }), (0, _v1.jsx)(_v15.UpsellCard, {
          plan: _v0,
          displayName: _v13,
          quota: _v14,
          title: (0, _v14.translate)({
            singular: "Everything you need to grow",
            dictionary: {
              es: {
                singular: "Todo lo que necesitas para crecer"
              },
              "de-DE": {
                singular: "Alles, was Sie brauchen, um zu wachsen"
              },
              "fr-FR": {
                singular: "Tout ce dont vous avez besoin pour vous développer"
              },
              "ja-JP": {
                singular: "成長に必要なすべて"
              },
              "ko-KR": {
                singular: "성장에 필요한 모든 것"
              },
              "pt-BR": {
                singular: "Tudo o que você precisa para crescer"
              },
              "zh-CN": {
                singular: "让您成长所需的一切"
              }
            }
          }),
          subtitle: (0, _v14.translate)({
            singular: "More storage, player branding, review pages, custom end screens, and deeper analytics.",
            dictionary: {
              es: {
                singular: "Más almacenamiento, personalización del reproductor, páginas de revisión, pantallas finales personalizadas y análisis más detallados."
              },
              "de-DE": {
                singular: "Mehr Speicher, Player-Branding, Review-Seiten, benutzerdefinierte Endscreens und detailliertere Analysen."
              },
              "fr-FR": {
                singular: "Plus de stockage, personnalisation du lecteur, pages de révision, écrans de fin personnalisés et analyses plus approfondies."
              },
              "ja-JP": {
                singular: "ストレージ容量の増加、プレイヤーブランディング、レビュー用ページ、カスタム終了画面、より詳細な分析。"
              },
              "ko-KR": {
                singular: "더 많은 저장 공간, 플레이어 브랜딩, 리뷰 페이지, 맞춤형 종료 화면 및 심층 분석."
              },
              "pt-BR": {
                singular: "Mais armazenamento, personalização do player, páginas de revisão, telas finais personalizadas e análises mais aprofundadas."
              },
              "zh-CN": {
                singular: "更多存储空间、播放器品牌定制、审阅页面、自定义结束画面，以及更深入的分析。"
              }
            }
          }),
          isModal: !0,
          ctaLabel: _v15,
          showSavedCard: _v3,
          isMonthly: _v2,
          isFreeTrial: !1,
          continueLabel: (0, _v14.translate)({
            singular: "Maybe later",
            dictionary: {
              es: {
                singular: "Quizá más tarde"
              },
              "de-DE": {
                singular: "Vielleicht später"
              },
              "fr-FR": {
                singular: "Peut-être plus tard"
              },
              "ja-JP": {
                singular: "後で"
              },
              "ko-KR": {
                singular: "나중에"
              },
              "pt-BR": {
                singular: "Talvez depois"
              },
              "zh-CN": {
                singular: "稍后再说"
              }
            }
          }),
          next: window.location.pathname,
          checkoutTracking: _v4,
          accountRequiresOptIn: !1,
          accountGateLoading: !1,
          freshPurchase: {
            charge: (_v0, _v1) => {
              _v8({
                select: ["id", "orderId", "shouldBlockPurchase"],
                variables: (({
                  billingPlanId: _v0,
                  currency: _v1,
                  card: _v2,
                  firstName: _v3,
                  lastName: _v4,
                  hpmSessionId: _v5
                }) => {
                  let _v6 = _v2.card?.billingAddress;
                  if (!_v6) throw Error("one-tap charge requires a billing address on the saved card");
                  return {
                    currency: _v1,
                    billingAddress: {
                      address: _v6.address ?? "",
                      city: _v6.city ?? "",
                      country: _v6.country ?? "",
                      postalCode: _v6.postalCode ?? "",
                      state: _v6.state ?? ""
                    },
                    firstName: _v3,
                    lastName: _v4,
                    isTrial: !1,
                    items: [{
                      billingPlanId: _v0,
                      quantity: 1
                    }],
                    paymentFormType: "PAYMENT_METHOD_TYPES_CC_REF" === _v2.type ? 4 : 2,
                    paymentMethodId: _v2.id,
                    userEntity: "personal",
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    hpmSessionId: _v5
                  };
                })({
                  billingPlanId: _v0,
                  currency: _v0.currency?.currencyCode ?? "USD",
                  card: _v1,
                  firstName: _v10 || "_",
                  lastName: _v12,
                  hpmSessionId: _v5?.xsrft ?? ""
                })
              });
            },
            state: _v9
          },
          onUpgrade: () => {
            window.location.href = `/onboarding?product_name=${encodeURIComponent(_v13)}&upsold=1`;
          },
          onContinue: _v1,
          isLocked: _v6,
          onChargingChange: _v7
        })]
      })]
    });
  }], 0);
  var _v26 = _v0.i(0),
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
  function _v37({
    paywallTracking: _v0
  }) {
    return (0, _v1.jsx)(_v31.Link, {
      "data-testid": "limit-paywall-other-plans-link",
      href: (0, _v32.buildUpgradePlanUrl)(_v0),
      variant: "inline-secondary",
      color: "inherit",
      fontSize: "inherit",
      textDecoration: "underline",
      _hover: {
        color: "inherit",
        textDecoration: "underline"
      },
      children: (0, _v14.translate)({
        singular: "see other plans",
        dictionary: {
          es: {
            singular: "ver otros planes"
          },
          "de-DE": {
            singular: "andere Pläne ansehen"
          },
          "fr-FR": {
            singular: "voir les autres forfaits"
          },
          "ja-JP": {
            singular: "他のプランを見る"
          },
          "ko-KR": {
            singular: "다른 요금제 보기"
          },
          "pt-BR": {
            singular: "ver outros planos"
          },
          "zh-CN": {
            singular: "查看其他计划"
          }
        }
      })
    });
  }
  function _v38({
    isTrial: _v0,
    otherPlansLocation: _v1,
    paywallTracking: _v2,
    planName: _v3,
    subscriptionTier: _v4,
    uploadDefaultsUrl: _v5,
    onCtaClick: _v6
  }) {
    return (0, _v1.jsxs)(_v34.PaywallCTAsWrapper, {
      children: [(0, _v1.jsx)(_v35.PurchaseButton, {
        subscriptionTier: _v4,
        isTrial: _v0,
        planName: _v3,
        paywallTracking: _v2
      }), "subtitle_link" !== _v1 ? (0, _v1.jsx)(_v33.OtherPlansButton, {
        paywallTracking: _v2,
        onCtaClick: _v6
      }) : null, _v5 ? (0, _v1.jsx)(_v36.UploadDefaultsButton, {
        href: _v5,
        onCtaClick: _v6
      }) : null]
    });
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  _v0.s(["PrivacyLimitPaywall", 0, function ({
    tier: _v0 = "standard",
    privacyOption: _v1 = "unlisted",
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    let _v4 = "generic" === _v1,
      {
        settings: _v5
      } = (0, _v21.useOrionSettings)(),
      _v6 = (0, _v29.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.[0],
      _v8 = (0, _v30.hasFreeTrialPurchasePath)(_v7),
      _v9 = _v7?.name ?? (_v0 ? (0, _v26.default)(`${_v0}`) : ""),
      _v10 = (0, _v28.useColorModeValue)("https://i.vimeocdn.com/custom_asset/967fe8edf9f28375f1d3988ed28585d9?region=us", "https://i.vimeocdn.com/custom_asset/fd161e8907c7bd204bcdd8ca6379312a?region=us"),
      {
        lockedOption: _v11,
        displayedOptions: _v12
      } = (0, _v40.useUpsellPrivacyOptions)(_v1),
      _v13 = "subtitle_link" === _v5.limit_paywall_other_plans_location;
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
        children: [(0, _v1.jsx)(_v27.Box, {
          width: "192px",
          height: "140px",
          minHeight: "93px",
          flex: "1 1 140px",
          backgroundImage: `url(${_v10})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginY: "8px"
        }), (0, _v1.jsxs)(_v3.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            textAlign: "center",
            children: _v4 ? (0, _v14.translate)({
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
            }) : (0, _v14.translate)({
              singular: "{FEATURE_NAME} is not available",
              replacements: {
                FEATURE_NAME: _v11.title
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
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-sm",
            color: "text-primary",
            textAlign: "center",
            paddingX: "16px",
            children: _v13 ? _v4 ? (0, _v14.translate)({
              singular: "Some privacy settings aren’t included in your current plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} to use more privacy settings.",
              replacements: {
                PLAN_NAME: _v9,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v37, {
                  paywallTracking: _v2
                })
              },
              dictionary: {
                es: {
                  singular: "Algunos ajustes de privacidad no están incluidos en su plan actual. Actualice a {PLAN_NAME} o {OTHER_PLANS_LINK} para usar más ajustes de privacidad."
                },
                "de-DE": {
                  singular: "Einige Datenschutzeinstellungen sind in Ihrem aktuellen Plan nicht enthalten. Aktualisieren Sie auf {PLAN_NAME} oder {OTHER_PLANS_LINK}, um weitere Datenschutzeinstellungen nutzen zu können."
                },
                "fr-FR": {
                  singular: "Certaines options de confidentialité ne sont pas incluses dans votre forfait actuel. Passez à {PLAN_NAME} ou à {OTHER_PLANS_LINK} pour utiliser davantage d'options de confidentialité."
                },
                "ja-JP": {
                  singular: "現在のプランでは一部のプライバシー設定が含まれていません。{PLAN_NAME} または {OTHER_PLANS_LINK} にアップグレードすると、より多くのプライバシー設定をご利用いただけます。"
                },
                "ko-KR": {
                  singular: "일부 프라이버시 설정은 현재 요금제에 포함되어 있지 않습니다. 더 많은 프라이버시 설정을 사용하려면 {PLAN_NAME} 또는 {OTHER_PLANS_LINK}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Algumas configurações de privacidade não estão incluídas no seu plano atual. Atualize para {PLAN_NAME} ou {OTHER_PLANS_LINK} para usar mais configurações de privacidade."
                },
                "zh-CN": {
                  singular: "您当前的计划不包含某些隐私设置。升级到 {PLAN_NAME} 或 {OTHER_PLANS_LINK} 即可使用更多隐私设置。"
                }
              }
            }) : (0, _v14.translate)({
              singular: "This privacy feature isn’t included in your current plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} to use {FEATURE_NAME}.",
              replacements: {
                PLAN_NAME: _v9,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v37, {
                  paywallTracking: _v2
                }),
                FEATURE_NAME: _v11.title
              },
              dictionary: {
                es: {
                  singular: "Esta función de privacidad no está incluida en su plan actual. Actualice a {PLAN_NAME} o {OTHER_PLANS_LINK} para usar {FEATURE_NAME}."
                },
                "de-DE": {
                  singular: "Diese Datenschutzfunktion ist in Ihrem aktuellen Plan nicht enthalten. Aktualisieren Sie auf {PLAN_NAME} oder {OTHER_PLANS_LINK}, um {FEATURE_NAME} nutzen zu können."
                },
                "fr-FR": {
                  singular: "Cette fonctionnalité de confidentialité n'est pas incluse dans votre forfait actuel. Passez à {PLAN_NAME} ou à {OTHER_PLANS_LINK} pour utiliser {FEATURE_NAME}."
                },
                "ja-JP": {
                  singular: "このプライバシー機能は現在のプランに含まれていません。{PLAN_NAME} または {OTHER_PLANS_LINK} にアップグレードすると、{FEATURE_NAME} をご利用いただけます。"
                },
                "ko-KR": {
                  singular: "이 프라이버시 기능은 현재 요금제에 포함되어 있지 않습니다. {FEATURE_NAME}을(를) 사용하려면 {PLAN_NAME} 또는 {OTHER_PLANS_LINK}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Esse recurso de privacidade não está incluído no seu plano atual. Atualize para {PLAN_NAME} ou {OTHER_PLANS_LINK} para usar {FEATURE_NAME}."
                },
                "zh-CN": {
                  singular: "此隐私功能不包含在您当前的计划中。升级到 {PLAN_NAME} 或 {OTHER_PLANS_LINK} 即可使用 {FEATURE_NAME}。"
                }
              }
            }) : _v4 ? (0, _v14.translate)({
              singular: "Some privacy settings aren’t included in your current plan. All instances have been set to private.",
              dictionary: {
                es: {
                  singular: "Algunas configuraciones de privacidad no están incluidas en su plan actual. Todas las instancias se han configurado como privadas."
                },
                "de-DE": {
                  singular: "Einige Datenschutzeinstellungen sind in Ihrem aktuellen Plan nicht enthalten. Alle Instanzen wurden auf privat gesetzt."
                },
                "fr-FR": {
                  singular: "Certaines options de confidentialité ne sont pas incluses dans votre forfait actuel. Toutes les instances ont été définies comme privées."
                },
                "ja-JP": {
                  singular: "いくつかのプライバシー設定は現在のプランに含まれていません。すべてのインスタンスはプライベートに設定されました。"
                },
                "ko-KR": {
                  singular: "일부 개인정보 보호 설정은 현재 요금제에 포함되어 있지 않습니다. 모든 인스턴스가 비공개로 설정되었습니다."
                },
                "pt-BR": {
                  singular: "Algumas configurações de privacidade não estão incluídas no seu plano atual. Todas as instâncias foram definidas como privadas."
                },
                "zh-CN": {
                  singular: "某些隐私设置不包含在您当前的计划中。所有实例已设置为私有。"
                }
              }
            }) : (0, _v14.translate)({
              singular: "This privacy feature isn’t included in your current plan. Upgrade to {PLAN_NAME} to use {FEATURE_NAME}.",
              replacements: {
                PLAN_NAME: _v9,
                FEATURE_NAME: _v11.title
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
        }), (0, _v1.jsx)(_v39.PrivacyOptionsPreview, {
          options: _v12,
          marginBottom: "-16px"
        })]
      }), (0, _v1.jsx)(_v38, {
        subscriptionTier: _v0,
        isTrial: _v8 && _v3,
        planName: _v9,
        paywallTracking: _v2,
        otherPlansLocation: _v5.limit_paywall_other_plans_location
      })]
    });
  }], 0);
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v0.s(["StorageLimitPaywall", 0, function ({
    tier: _v0 = "standard",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1,
    onCtaClick: _v3
  }) {
    let {
        settings: _v4
      } = (0, _v21.useOrionSettings)(),
      _v5 = (0, _v29.useGetSubscriptionPlansData)([_v0], void 0, !1),
      {
        currentStorageLimit: _v6,
        currentRestrictedStorageLimit: _v7,
        hasRestrictedStorageLimit: _v8
      } = (0, _v43.useCurrentStorageLimit)(),
      {
        hasRestrictiveUploadDefaults: _v9,
        uploadDefaultsUrl: _v10
      } = (0, _v44.useUploadDefaultsCta)(),
      _v11 = _v5?.find(_v0 => _v0.tier === _v0) ?? _v5?.[0],
      _v12 = (0, _v41.selectStorageQuota)(_v11?.metadata?.entitlements?.params ?? {}),
      _v13 = "restricted" === _v12.scope,
      _v14 = String(_v12.quantity ?? ""),
      _v15 = _v7 || _v6,
      _v16 = _v11?.name ?? (_v0 ? (0, _v26.default)(`${_v0}`) : ""),
      _v17 = (0, _v28.useColorModeValue)("https://i.vimeocdn.com/custom_asset/c3e7bb4028bc2edb60f54310fadd1000", "https://i.vimeocdn.com/custom_asset/e9c789e68e6e64c62a6fe8d321438a92"),
      _v18 = (0, _v30.hasFreeTrialPurchasePath)(_v11),
      _v19 = "subtitle_link" === _v4.limit_paywall_other_plans_location;
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
        children: [(0, _v1.jsx)(_v27.Box, {
          width: "192px",
          height: "140px",
          minHeight: "93px",
          flex: "1 1 140px",
          backgroundImage: `url(${_v17})`,
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
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            textAlign: "center",
            flexShrink: 0,
            children: (0, _v14.translate)({
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
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-sm",
            color: "text-primary",
            textAlign: "center",
            flexShrink: 0,
            children: _v19 ? _v13 ? (0, _v14.translate)({
              singular: "You’ve reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                PLAN_NAME: _v16,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v37, {
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
            }) : (0, _v14.translate)({
              singular: "You’ve reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} or {OTHER_PLANS_LINK} for more storage.",
              replacements: {
                STORAGE_LIMIT: _v15,
                PLAN_NAME: _v16,
                OTHER_PLANS_LINK: () => (0, _v1.jsx)(_v37, {
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
            }) : _v13 ? (0, _v14.translate)({
              singular: "You’ve reached the limit for embeddable and non-public videos on your current plan. Upgrade to {PLAN_NAME} for more storage.",
              replacements: {
                PLAN_NAME: _v16
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
            }) : (0, _v14.translate)({
              singular: "You’ve reached the {STORAGE_LIMIT} storage limit for this plan. Upgrade to {PLAN_NAME} to use more space.",
              replacements: {
                STORAGE_LIMIT: _v15,
                PLAN_NAME: _v16
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
        }), (0, _v1.jsx)(_v42.StorageLimitMeter, {
          currentLimit: _v15,
          targetLimit: _v14,
          planName: _v16,
          marginTop: "24px"
        })]
      }), (0, _v1.jsx)(_v38, {
        subscriptionTier: _v0,
        isTrial: _v18 && _v2,
        planName: _v16,
        paywallTracking: _v1,
        otherPlansLocation: _v4.limit_paywall_other_plans_location,
        uploadDefaultsUrl: _v8 && _v9 ? _v10 : void 0,
        onCtaClick: _v3
      })]
    });
  }], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  function _v52({
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
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-sm",
          letterSpacing: "-0.03em",
          flex: "1",
          children: _v0
        }), _v1 && (0, _v1.jsx)(_v51.Tooltip, {
          label: _v1,
          placement: "top",
          hasArrow: !0,
          maxW: "260px",
          children: (0, _v1.jsx)(_v27.Box, {
            flexShrink: 0,
            cursor: "pointer",
            color: "text-secondary",
            display: "inline-flex",
            children: (0, _v1.jsx)(_v53, {})
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
        children: (0, _v1.jsx)(_v54, {
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
        children: (0, _v1.jsx)(_v54, {
          value: _v3
        })
      })]
    });
  }
  function _v53() {
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
  function _v54({
    value: _v0,
    size: _v1 = "md"
  }) {
    let _v2 = "sm" === _v1 ? 16 : 20;
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v47.Checkmark, {
      width: _v2,
      height: _v2
    }) : (0, _v1.jsx)(_v48.CloseX, {
      width: _v2,
      height: _v2,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v8.Text, {
      fontSize: "sm" === _v1 ? "body-sm" : "body-lg",
      textAlign: "center",
      lineHeight: "1.2",
      children: _v0
    });
  }
  var _v55 = _v0.i(0);
  function _v56({
    value: _v0
  }) {
    return "boolean" == typeof _v0 ? _v0 ? (0, _v1.jsx)(_v47.Checkmark, {
      width: 16,
      height: 16
    }) : (0, _v1.jsx)(_v48.CloseX, {
      width: 16,
      height: 16,
      color: "#9CA3AF",
      opacity: .6
    }) : (0, _v1.jsx)(_v8.Text, {
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
      _v6 = (0, _v29.useGetSubscriptionPlansData)(["free", "starter", "standard", "advanced"], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v1) ?? _v6?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased"),
      _v8 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.find(_v0 => "starter" === _v0.tier || "standard" === _v0.tier || "advanced" === _v0.tier),
      _v9 = (0, _v30.hasFreeTrialPurchasePath)(_v8) && _v3,
      _v10 = !!_v8,
      _v11 = _v8?.currency?.currencyCode ?? _v7?.currency?.currencyCode ?? "USD",
      _v12 = _v7?.tier === "free" ? (_v4 = _v11, _v5 = (0, _v14.getCurrentLocale)(), new Intl.NumberFormat(_v5, {
        style: "currency",
        currency: _v4,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(0)) : _v7?.metadata?.purchasedProduct?.displayPriceFormatted ?? _v7?.priceFormatted?.annualMonthly ?? "",
      _v13 = _v8?.priceFormatted?.annualMonthly ?? "",
      _v14 = _v8?.name ?? (0, _v26.default)(`${_v0}`),
      _v15 = _v7?.name ?? "",
      _v16 = (0, _v55.getComparisonFeatures)({
        currentPlan: _v7,
        targetPlan: _v8,
        currentTier: _v7?.tier,
        targetTier: _v0
      }),
      _v17 = () => {
        let _v0 = (0, _v49.buildCheckoutUrl)({
          ..._v2,
          tier: _v0,
          isTrial: _v9
        });
        window.location.assign(_v0);
      },
      _v18 = _v9 ? (0, _v14.translate)({
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
      }) : (0, _v14.translate)({
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
      children: [(0, _v1.jsx)(_v50.ComparisonPaywallHeader, {
        tierName: _v14
      }), (0, _v1.jsxs)(_v27.Box, {
        display: {
          base: "none",
          md: "grid"
        },
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "0 8px",
        width: "100%",
        children: [(0, _v1.jsx)(_v27.Box, {}), (0, _v1.jsxs)(_v3.Flex, {
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
          children: [(0, _v1.jsx)(_v27.Box, {
            position: "absolute",
            left: "14px",
            top: "11px",
            children: (0, _v1.jsx)(_v45.Badge, {
              variant: "secondary",
              size: "sm",
              children: (0, _v14.translate)({
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
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            width: "100%",
            children: _v15
          }), (0, _v1.jsx)(_v3.Flex, {
            direction: "column",
            height: "72px",
            pb: "8px",
            width: "100%",
            children: (0, _v1.jsx)(_v8.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })
          }), (0, _v1.jsx)(_v27.Box, {
            height: "40px",
            opacity: 0,
            width: "100%",
            children: (0, _v1.jsx)(_v46.Button, {
              size: "md",
              variant: "tertiary",
              width: "100%",
              isDisabled: !0,
              children: (0, _v14.translate)({
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
          children: [(0, _v1.jsx)(_v27.Box, {
            position: "absolute",
            left: "16px",
            top: "12px",
            children: (0, _v1.jsx)(_v45.Badge, {
              variant: "upgrade",
              size: "sm",
              children: (0, _v14.translate)({
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
          }), (0, _v1.jsx)(_v8.Text, {
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
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v13
            }), (0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              fontSize: "body-sm",
              color: "text-secondary",
              lineHeight: "1.2",
              children: [(0, _v1.jsx)(_v8.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v14.translate)({
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
              }), (0, _v1.jsx)(_v8.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v14.translate)({
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
          }), (0, _v1.jsx)(_v46.Button, {
            size: "md",
            variant: "primary",
            width: "100%",
            onClick: _v17,
            isDisabled: !_v10,
            children: _v18
          })]
        }), _v16.map((_v0, _v1) => (0, _v1.jsx)(_v52, {
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
            children: [(0, _v1.jsx)(_v27.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v45.Badge, {
                variant: "secondary",
                size: "sm",
                children: (0, _v14.translate)({
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
            }), (0, _v1.jsx)(_v27.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v8.Text, {
                variant: "heading-sm",
                children: _v15
              })
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "heading-lg",
              letterSpacing: "-0.04em",
              children: _v12
            })]
          }), (0, _v1.jsx)(_v27.Box, {
            flex: "1"
          }), _v16.map(_v0 => (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "2px",
            px: "md",
            py: "sm",
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v56, {
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
            children: [(0, _v1.jsx)(_v27.Box, {
              position: "absolute",
              left: "12px",
              top: "10px",
              children: (0, _v1.jsx)(_v45.Badge, {
                variant: "upgrade",
                size: "sm",
                children: (0, _v14.translate)({
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
            }), (0, _v1.jsx)(_v27.Box, {
              pt: "24px",
              children: (0, _v1.jsx)(_v8.Text, {
                variant: "heading-sm",
                children: _v14
              })
            }), (0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              pb: "sm",
              children: [(0, _v1.jsx)(_v8.Text, {
                variant: "heading-lg",
                letterSpacing: "-0.04em",
                children: _v13
              }), (0, _v1.jsx)(_v8.Text, {
                fontSize: "12px",
                color: "text-secondary",
                children: (0, _v14.translate)({
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
            }), (0, _v1.jsx)(_v46.Button, {
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
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: _v0.name
            }), (0, _v1.jsx)(_v56, {
              value: _v0.targetValue
            })]
          }, _v0.name))]
        })]
      }), (0, _v1.jsx)(_v3.Flex, {
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
        children: (0, _v1.jsx)(_v33.OtherPlansButton, {
          paywallTracking: _v2
        })
      })]
    });
  }], 0);
  let _v57 = (0, _v2.createContext)({
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
  _v0.s(["default", 0, _v57], 0);
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = 41,
    _v63 = (_v0, _v1 = _v62) => _v58.BigPictureClient.sendEvent(new _v58.Event("vimeo.upgrade_action", _v1, (0, _v59.deepSnakeCase)({
      ..._v60.defaultBpEventParams,
      ..._v0
    }))),
    _v64 = {
      configure: (_v0, _v1) => {
        let _v2 = /\.ci\.vimeows.com$/.test(window.location.host) ? "staging" : "vimeo.dev" === window.location.host ? "development" : "production",
          _v3 = new _v58.Event("vimeo.web_global", 5, {
            user: {
              subscription_type: _v0.membership?.type,
              is_mod: _v0.membership?.badge?.type === "staff",
              session_id: null,
              teams: null,
              user_id: _v1 || null,
              vuid: (0, _v61.getVuid)(),
              flags: null,
              is_free_trial: _v0.membership?.subscription?.trial?.status === "free_trial"
            },
            application: {
              application: "vimeo",
              vimeo_language: (0, _v61.getLanguage)() || "en",
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
          _v4 = new _v58.Configuration("production" === _v2 ? _v58.Service.FRESNEL_PROD : _v58.Service.FRESNEL_DEV, _v3);
        _v58.BigPictureClient.configure(_v4);
      },
      trackImpression: (_v0, _v1 = _v62) => {
        _v63({
          action_type: "impression",
          ..._v0
        }, _v1);
      },
      trackButtonClick: (_v0, _v1 = _v62) => {
        _v63({
          action_type: "click",
          ..._v0
        }, _v1);
      },
      trackDismiss: (_v0, _v1 = _v62) => {
        _v63({
          action_type: "dismiss",
          ..._v0
        }, _v1);
      }
    };
  _v0.s(["default", 0, _v64], 0);
  var _v65 = _v0.i(0);
  let _v66 = _v0 => (0, _v1.jsx)(_v46.Button, {
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
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = _v0 => {
    let _v1 = (0, _v2.useContext)(_v57);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v5.ModalCloseButton, {
        "data-testid": "close-upsell-button",
        margin: _v0?.margin,
        zIndex: 0,
        onClick: () => {
          _v64.trackDismiss({
            ..._v1.params,
            device_type: _v1.device_type
          }, _v1.bpEventVersion), _v1.onClose && _v1.onClose(), _v0.onClose();
        }
      })
    });
  };
  _v0.s(["default", 0, _v72], 0);
  let _v73 = _v0 => {
      let {
          headerText: _v1,
          subHeaderText: _v2,
          body: _v3,
          footer: _v4,
          imgSrc: _v5,
          dataTestId: _v6,
          onClose: _v7
        } = _v0,
        _v8 = (0, _v71.useIsMobile)();
      return (0, _v1.jsxs)(_v4.Modal, {
        isOpen: !0,
        onClose: _v7,
        children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
          "data-testid": _v6,
          maxW: "fit-content",
          height: (0, _v9.rem)(625),
          children: [(0, _v1.jsx)(_v72, {
            onClose: _v7
          }), (0, _v1.jsx)(_v67.ModalBody, {
            padding: 0,
            children: (0, _v1.jsxs)(_v68.Grid, {
              templateColumns: `${(0, _v9.rem)(320)} 1fr`,
              height: "100%",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v3.Flex, {
                padding: "6",
                flexDirection: "column",
                justifyContent: "space-between",
                children: [(0, _v1.jsxs)(_v3.Flex, {
                  gap: (0, _v9.rem)("24"),
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v69.Header, {
                    size: "lg",
                    children: void 0 !== _v1 ? _v1 : _v65.default.defaultHeader
                  }), !!_v2 && (0, _v1.jsx)(_v8.Text, {
                    variant: "body-md",
                    children: void 0 !== _v2 ? _v2 : _v65.default.defaultSubHeader
                  }), _v3]
                }), (0, _v1.jsx)(_v27.Box, {
                  children: _v4
                })]
              }), _v5 && !_v8 && (0, _v1.jsx)(_v70.Image, {
                src: _v5,
                alt: "",
                onLoad: () => {
                  window.dispatchEvent(new Event("resize"));
                },
                aspectRatio: "9 / 16",
                maxWidth: (0, _v9.rem)(384),
                height: (0, _v9.rem)(625),
                borderRadius: `0 ${(0, _v9.rem)(20)} ${(0, _v9.rem)(20)} 0`
              })]
            })
          })]
        })]
      });
    },
    _v74 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v57);
      return (0, _v1.jsx)(_v46.Button, {
        "data-testid": "upsell-secondary-cta",
        size: "md",
        variant: "tertiary",
        href: (0, _v61.appendPaywallParams)((0, _v61.appendTrackingQueryParams)(_v0.link, _v1.params), _v1.paywallTracking),
        target: "_blank",
        as: "a",
        onClick: () => {
          _v64.trackButtonClick({
            ..._v1.params,
            copy: _v0.text,
            device_type: _v1.device_type,
            path: window.location.href,
            target: window.location.pathname,
            target_path: _v0.link
          }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
            copy: _v0.text,
            target_path: (0, _v61.appendTrackingQueryParams)(_v0.link, _v1.params)
          });
        },
        width: "100%",
        children: _v0.text
      });
    },
    _v75 = _v65.default.upgrade;
  _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v2.useContext)(_v57),
      _v2 = _v0.modalConfig?.primaryCTAText ? _v0.modalConfig.primaryCTAText : _v75,
      _v3 = _v0.modalConfig?.primaryCTALink ? _v0.modalConfig.primaryCTALink : "/upgrade";
    return (0, _v1.jsx)(_v73, {
      dataTestId: "feature-upsell-container",
      headerText: _v0.modalConfig?.headerText,
      subHeaderText: _v0.modalConfig?.subHeaderText,
      imgSrc: _v0.modalConfig?.imgSrc,
      onClose: _v0.onClose,
      body: _v0.modalConfig?.body,
      footer: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v66, {
          text: _v2,
          link: _v3,
          variant: "upsell",
          onClick: () => {
            _v64.trackButtonClick({
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
        }), _v0.modalConfig?.secondaryCTAText && _v0.modalConfig?.secondaryCTALink && (0, _v1.jsx)(_v74, {
          text: _v0.modalConfig.secondaryCTAText,
          link: _v0.modalConfig.secondaryCTALink
        })]
      })
    });
  }], 0);
}