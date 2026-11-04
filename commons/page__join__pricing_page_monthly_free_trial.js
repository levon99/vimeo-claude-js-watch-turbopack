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
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = (_v0, _v1, _v2) => (0, _v18.authAttributionUrl)(_v0, (0, _v18.buildAuthAttribution)({
    flowId: null,
    entry: _v1,
    originRoute: _v2,
    surfaceType: "page",
    initialIntent: "join",
    entryTimestamp: null
  }));
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    planData: _v1,
    showFreeTrial: _v2 = !1,
    location: _v3,
    showYearly: _v4,
    isMobileBreakpoint: _v5,
    upcomingTier: _v6,
    effectiveTier: _v7,
    hasScheduledRepackTier: _v8 = !1,
    renewalDiscountPercent: _v9,
    onRenewalDiscount: _v10,
    onPurchaseIntercept: _v11,
    postCheckoutUrl: _v12
  }) => {
    let _v13,
      _v14,
      _v15 = (0, _v10.useToast)(),
      _v16 = (0, _v4.useContext)(_v35.OverridesContext),
      {
        cardSurface: _v17,
        compact: _v18
      } = _v16,
      _v19 = (0, _v34.getPlanCardPresentation)(_v17, _v18),
      _v20 = (0, _v17.useOrionSettingsFields)(["pricing_page_monthly_free_trial", "second_free_trial_enabled"]),
      _v21 = _v19.ctaSize,
      {
        isRepackagingData: _v22,
        plansData: _v23
      } = (0, _v4.useContext)(_v36.PlansDataContext),
      {
        trackPricingPagePlanSelected: _v24
      } = (0, _v20.usePricingTracking)(),
      _v25 = (0, _v38.useBundleOfferStore)(),
      _v26 = (0, _v38.useBundleOfferSelector)(_v0 => !_v0.intercepts && _v0.isEnabled && _v0.isBundleActive),
      _v27 = _v0 => _v26 && !_v41 ? _v25.getState().reconcileCheckoutHref(_v0) ?? _v0 : _v0,
      _v28 = (0, _v2.useSearchParams)(),
      _v29 = (0, _v3.useRouter)(),
      _v30 = (0, _v19.useAuthPageEntry)(),
      _v31 = (0, _v18.resolveAuthOriginRoute)(_v29.pathname),
      [_v32, _v33] = (0, _v4.useState)(!1),
      [_v34, _v35] = (0, _v4.useState)(!1),
      [_v36, _v37] = (0, _v4.useState)(!1),
      {
        metadata: _v38,
        name: _v39,
        tier: _v40
      } = _v1,
      _v41 = "enterprise" === _v40,
      _v42 = void 0 !== _v6 && _v40 === _v6,
      _v43 = (0, _v31.useViewer)(),
      _v44 = (0, _v24.getTierComparisonRank)(_v40) ?? 0,
      _v45 = void 0 !== _v7 ? (0, _v24.getTierComparisonRank)(_v7) ?? 0 : void 0,
      _v46 = void 0 !== _v45 && _v44 < _v45 && "free" !== _v40,
      _v47 = void 0 !== _v45 && _v44 > _v45 && "free" !== _v40,
      _v48 = (0, _v21.findPurchasedPlanForTier)(_v23, _v7),
      _v49 = void 0 !== _v7 && (0, _v24.isLegacyPaidTier)(_v7),
      _v50 = void 0 !== _v7 && (0, _v24.isPaidRepackagingTier)(_v7),
      _v51 = (0, _v24.isPaidRepackagingTier)(_v40),
      _v52 = void 0 !== _v7 && _v40 === _v7,
      _v53 = !_v8 && _v49 && _v51 && !_v52,
      _v54 = !_v49 && !_v50 && _v46 || _v49 && !_v51 && _v46,
      _v55 = _v53 || _v50 && !_v52 || _v54,
      _v56 = _v23?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased"),
      _v57 = _v56?.name ?? (void 0 !== _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : ""),
      _v58 = _v43?.teamUser?.ownerId ?? _v43?.user?.id,
      {
        data: _v59,
        isLoading: _v60
      } = (0, _v15.useGetUserSettingsBillingMembership)(() => _v55 && null != _v58 ? {
        select: ["subscriptionId", "hasAutorenew", "endDate", "gracePeriodType", "vendor", "billingPeriod"],
        where: {
          userId: _v58
        }
      } : null),
      {
        subscriptionId: _v61,
        subscriptionEndDate: _v62,
        gracePeriodType: _v63,
        isInGracePeriod: _v64,
        supportsGraceDowngrade: _v65,
        hasAutorenew: _v66,
        billingPeriod: _v67,
        isWeeklyBilling: _v68
      } = (0, _v32.getDowngradeSubscriptionState)(_v59, _v60),
      _v69 = _v67 === _v28.UserPlanType.Year ? "annual" : _v67 === _v28.UserPlanType.Month ? "monthly" : _v67 === _v28.UserPlanType.Week ? "weekly" : null,
      _v70 = null === _v69 ? "unknown" : (0, _v37.comparePlanPrices)(_v48, _v1, _v69),
      _v71 = _v53 && ("lower" === _v70 || "equal" === _v70 || "unknown" === _v70 && !_v47),
      _v72 = _v50 && !_v52 && "equal" === _v70,
      _v73 = _v71 || _v50 && !_v52 && "lower" === _v70 || _v72 || _v50 && !_v52 && "unknown" === _v70 && _v46 || _v54,
      _v74 = _v66 || _v36,
      _v75 = _v67 === _v28.UserPlanType.Year ? _v28.UserPlanType.Year : _v67 === _v28.UserPlanType.Month ? _v28.UserPlanType.Month : _v4 ? _v28.UserPlanType.Year : _v28.UserPlanType.Month,
      {
        scheduledOrder: _v76
      } = (0, _v29.useScheduledOrder)(_v61, _v7, _v74),
      _v77 = (0, _v22.usePlanFeaturesForBillingPlan)(_v76?.billingPlanId),
      _v78 = _v77?.restrictedVideoStorageLimit ?? (0, _v21.findPurchasedPlanForTier)(_v23, _v7)?.metadata?.entitlements?.params?.restrictedVideoStorageLimit,
      _v79 = (0, _v16.translate)({
        singular: "Your next plan",
        dictionary: {
          es: {
            singular: "Próximo plan"
          },
          "de-DE": {
            singular: "Bevorstehender Tarif"
          },
          "fr-FR": {
            singular: "Plan à venir"
          },
          "ja-JP": {
            singular: "今後のプラン"
          },
          "ko-KR": {
            singular: "예정된 요금제"
          },
          "pt-BR": {
            singular: "Próximo plano"
          },
          "zh-CN": {
            singular: "即将到来的计划"
          }
        }
      }),
      _v80 = (0, _v16.translate)({
        singular: "Current plan",
        dictionary: {
          es: {
            singular: "Plan actual"
          },
          "de-DE": {
            singular: "Aktueller Plan"
          },
          "fr-FR": {
            singular: "Forfait actuel"
          },
          "ja-JP": {
            singular: "現在のプラン"
          },
          "ko-KR": {
            singular: "현재 요금제"
          },
          "pt-BR": {
            singular: "Plano atual"
          },
          "zh-CN": {
            singular: "当前计划"
          }
        }
      }),
      _v81 = (0, _v16.translate)({
        singular: "Contact Sales",
        dictionary: {
          es: {
            singular: "Comunicarse con Ventas"
          },
          "de-DE": {
            singular: "Sales-Team kontaktieren"
          },
          "fr-FR": {
            singular: "Service commercial"
          },
          "ja-JP": {
            singular: "営業チームへ問い合わせる"
          },
          "ko-KR": {
            singular: "영업팀에 문의"
          },
          "pt-BR": {
            singular: "Falar com vendas"
          },
          "zh-CN": {
            singular: "联系销售"
          }
        }
      }),
      _v82 = (0, _v16.translate)({
        singular: "Move to {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v39
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Zu {PLAN_NAME} wechseln"
          },
          "fr-FR": {
            singular: "Basculer vers {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME}に移行"
          },
          "ko-KR": {
            singular: "{PLAN_NAME}로 이동"
          },
          "pt-BR": {
            singular: "Mudar para {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "切换到 {PLAN_NAME}"
          }
        }
      }),
      _v83 = (0, _v16.translate)({
        singular: "Downgrade to {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v39
        },
        dictionary: {
          es: {
            singular: "Bajar a {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Auf {PLAN_NAME} herabstufen"
          },
          "fr-FR": {
            singular: "Rétrograder vers {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME}にダウングレード"
          },
          "ko-KR": {
            singular: "{PLAN_NAME}으로 다운그레이드"
          },
          "pt-BR": {
            singular: "Rebaixar para {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "降级到 {PLAN_NAME}"
          }
        }
      }),
      _v84 = (0, _v16.translate)({
        singular: "Upgrade to {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v39
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Upgrade auf {PLAN_NAME} vornehmen"
          },
          "fr-FR": {
            singular: "Passez à l'abonnement {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME} にアップグレード"
          },
          "ko-KR": {
            singular: "{PLAN_NAME} 요금제로 업그레이드"
          },
          "pt-BR": {
            singular: "Fazer upgrade para {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "升级到 {PLAN_NAME}"
          }
        }
      }),
      _v85 = (0, _v16.translate)({
        singular: "Get {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v39
        },
        dictionary: {
          es: {
            singular: "Obtén {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Jetzt {PLAN_NAME} erhalten"
          },
          "fr-FR": {
            singular: "Obtenez {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME} を申し込む"
          },
          "ko-KR": {
            singular: "지금 {PLAN_NAME} 이용하기"
          },
          "pt-BR": {
            singular: "Obtenha {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "获取 {PLAN_NAME}"
          }
        }
      }),
      _v86 = (0, _v16.translate)({
        singular: "Renew at {PERCENT}% discount",
        replacements: {
          PERCENT: _v9 ?? 0
        },
        dictionary: {
          es: {
            singular: "Renovar con un descuento del {PERCENT}%"
          },
          "de-DE": {
            singular: "Erneuern mit {PERCENT}% Rabatt"
          },
          "fr-FR": {
            singular: "Renouvelez avec une réduction de {PERCENT}%"
          },
          "ja-JP": {
            singular: "{PERCENT}%割引で更新"
          },
          "ko-KR": {
            singular: "{PERCENT}% 할인으로 갱신"
          },
          "pt-BR": {
            singular: "Renove com {PERCENT}% de desconto"
          },
          "zh-CN": {
            singular: "以 {PERCENT}% 折扣续订"
          }
        }
      }),
      {
        capabilities: {
          hasPaid: _v87,
          hasMonthlyBilling: _v88,
          inAppSubscription: _v89
        }
      } = (0, _v12.useCapability)(["hasPaid", "hasMonthlyBilling", "inAppSubscription"]),
      _v90 = !_v87 && _v43?.user != null && "free" !== _v40,
      _v91 = _v53 && ("higher" === _v70 || "unknown" === _v70 && _v47) || _v50 && !_v52 && "higher" === _v70 || _v50 && !_v52 && "unknown" === _v70 && _v47 || _v90 || !_v49 && !_v50 && _v47,
      _v92 = _v73 && !_v5 && _v87 && (_v88 && _v4 || !_v88 && !_v4),
      _v93 = _v73 && _v68 ? (0, _v16.translate)({
        singular: "Plan changes are not available on weekly plans",
        dictionary: {
          es: {
            singular: "Los cambios de plan no están disponibles en planes semanales"
          },
          "de-DE": {
            singular: "Planänderungen sind bei Wochenplänen nicht verfügbar"
          },
          "fr-FR": {
            singular: "Les modifications d'abonnement ne sont pas disponibles pour les forfaits hebdomadaires."
          },
          "ja-JP": {
            singular: "週次プランではプランの変更はできません"
          },
          "ko-KR": {
            singular: "주간 요금제에서는 요금제 변경이 불가능합니다."
          },
          "pt-BR": {
            singular: "Alterações de plano não estão disponíveis em planos semanais"
          },
          "zh-CN": {
            singular: "周计划不支持更改"
          }
        }
      }) : _v92 ? (0, _v16.translate)({
        singular: "Plan changes are only available at your current billing period",
        dictionary: {
          es: {
            singular: "Los cambios de plan solo están disponibles durante su período de facturación actual"
          },
          "de-DE": {
            singular: "Planänderungen sind nur in Ihrem aktuellen Abrechnungszeitraum möglich"
          },
          "fr-FR": {
            singular: "Les modifications de forfait ne sont possibles que pendant votre période de facturation en cours"
          },
          "ja-JP": {
            singular: "プランの変更は現在の請求期間中のみ可能です"
          },
          "ko-KR": {
            singular: "요금제 변경은 현재 청구 기간에만 가능합니다"
          },
          "pt-BR": {
            singular: "Alterações de plano só estão disponíveis no seu período de cobrança atual"
          },
          "zh-CN": {
            singular: "计划更改仅在您当前的计费周期内可用"
          }
        }
      }) : null,
      _v94 = _v73 && _v64 && (!_v61 || !_v65),
      [_v95, _v96] = (0, _v13.default)(_v25.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, ""),
      _v97 = _v0 => {
        let _v1 = !_v4 && _v20.pricing_page_monthly_free_trial ? _v0?.replace(/\/trial(\?|$)/, "/monthly/trial$1") : _v0,
          _v2 = new URLSearchParams(_v28);
        _v2.delete(_v11.BUNDLE_OFFER_TOGGLE_PARAM);
        let _v3 = _v2.toString();
        if (!_v1 || !_v3) return _v27(_v1 || "");
        let _v4 = _v1.includes("?") ? "&" : "?";
        return _v27(`${_v1}${_v4}${_v3}`);
      },
      _v98 = !_v41 && !_v43?.user,
      _v99 = (0, _v30.appendPostCheckoutUrl)(_v97(_v38.interactions?.purchase?.uri?.freeTrial), _v12),
      _v100 = (0, _v4.useMemo)(() => _v98 && _v99 ? _v39(_v99, "pricing_free_trial", _v31) : _v99, [_v98, _v99, _v31]),
      _v101 = (_v13 = _v38.interactions?.purchase?.uri?.[_v4 ? "annual" : "monthly"], _v14 = "", _v41 && _v3 ? _v14 = (_v0 => {
        switch (_v0) {
          case "vertical":
            return "?mkc=ent-upgrade-plan-card";
          case "horizontal":
            return "?mkc=ent-upgrade-plan-horizontal";
          case "table":
            return "?mkc=ent-upgrade-plan-compare";
          default:
            return "";
        }
      })(_v3) : _v16.ctaQueryParams && (_v14 = `?${_v16.ctaQueryParams}`), _v5 && _v38?.purchasedProduct == null && !(_v87 && !_v88) && (_v14.includes("?") ? _v14 += "&show_billing_plans=1" : _v14 = "?show_billing_plans=1"), (0, _v30.appendPostCheckoutUrl)(_v97(_v13 + _v14), _v12)),
      _v102 = (0, _v4.useMemo)(() => _v98 && _v101 ? _v39(_v101, "pricing_purchase", _v31) : _v101, [_v98, _v101, _v31]),
      _v103 = _v38?.interactions?.purchase?.status,
      _v104 = _v38?.purchasedProduct?.isMonthly,
      _v105 = _v16.ctaTreatment,
      _v106 = (0, _v23.getEffectivePurchaseStatus)({
        purchaseStatus: _v103,
        tier: _v40,
        isViewingAnnual: _v4,
        isPurchasedMonthly: _v104
      }),
      _v107 = "purchased" === _v106 && !_v42 && !_v73,
      _v108 = _v22 && (_v42 || _v107),
      _v109 = _v42 ? _v79 : _v108 ? _v80 : _v73 ? _v71 || _v72 ? _v82 : _v83 : _v41 ? _v81 : null != _v9 ? _v86 : _v91 && _v43?.user ? _v84 : _v85,
      _v110 = _v0 => {
        let _v1 = _v4 ? _v0.id.annual : _v0.id.monthly;
        _v0.metadata.isPsPlan && _v1 !== _v95 && _v96(_v1);
      },
      _v111 = !0 === _v16.hidePaidPlanSecondaryLinks,
      _v112 = !_v20.second_free_trial_enabled && !!_v43?.user?.capabilities?.hasSecondFreeTrialEligibility,
      _v113 = _v2 && !_v112,
      _v114 = !_v111 && _v113 && !_v42 && !_v73,
      _v115 = !_v111 && !_v42 && !_v73 && (_v113 || _v105 === _v33.CTA_TREATMENT.free_trial_secondary || _v105 === _v33.CTA_TREATMENT.free_trial_only) && _v105 !== _v33.CTA_TREATMENT.purchase_only,
      _v116 = _v42 || "available" !== _v106 || _v89 || _v55 && _v60,
      _v117 = _v4 ? "yearly" : "monthly",
      _v118 = _v41 ? "contact_sales" : _v40,
      _v119 = _v108 ? {
        variant: "secondary",
        bgColor: "transparent",
        borderColor: "darkBlueAlpha.300",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "text-primary",
        _dark: {
          bgColor: "transparent",
          color: "text-primary",
          borderColor: "input-fill",
          _disabled: {
            bgColor: "transparent",
            pointerEvents: "none"
          }
        },
        _disabled: {
          bgColor: "transparent",
          pointerEvents: "none"
        },
        opacity: .5
      } : _v73 ? {
        variant: "secondary"
      } : _v41 || "free" === _v1.tier ? {
        variant: "primary",
        bgColor: "text-primary",
        _hover: {
          backgroundColor: _v41 ? "gray.200" : "vimeoBlue.300"
        },
        _dark: {
          bgColor: "text-primary",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: _v41 ? "gray.200" : "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      } : {
        variant: "tertiary",
        bgColor: _v116 ? "text-primary" : "fill-brand",
        _hover: {
          backgroundColor: "vimeoBlue.300"
        },
        _dark: {
          bgColor: _v116 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      },
      _v120 = (_v0, _v1, _v2, _v3) => {
        if (!_v3 || !_v98) return void ((_v0, _v1) => {
          if (!_v11) return _v1();
          let _v2 = _v0.currentTarget,
            _v3 = _v2 instanceof HTMLAnchorElement && _v2.href ? _v2.getAttribute("href") : null;
          _v0.preventDefault(), _v11(_v0 => {
            let _v1 = _v0 ?? _v3;
            _v1 && window.location.assign(_v1), _v1();
          }, _v3);
        })(_v0, _v1);
        if (_v11) {
          _v0.preventDefault(), _v11(_v0 => {
            window.location.assign(_v30(_v2, "join", _v0 ?? _v3)), _v1();
          }, _v3);
          return;
        }
        (0, _v14.isPlainLeftClick)(_v0) && (_v0.preventDefault(), window.location.assign(_v30(_v2, "join", _v3))), _v1();
      },
      _v121 = (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v21,
        width: "100%",
        href: _v41 ? _v101 : _v100,
        ...(!_v41 && {
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        }),
        _dark: {
          bgColor: _v41 || "free" === _v1.tier || _v116 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _hover: {
            backgroundColor: _v41 ? "gray.200" : "vimeoBlue.300"
          }
        },
        bgColor: _v41 ? "text-primary" : "fill-brand",
        variant: _v41 ? "primary" : "tertiary",
        onClick: _v0 => _v120(_v0, () => {
          _v24({
            plan: _v118,
            periodicity: _v117,
            freeTrial: !_v41
          }), _v110(_v1);
        }, "pricing_free_trial", _v99),
        ..._v0,
        children: _v41 ? (0, _v16.translate)({
          singular: "Contact sales",
          dictionary: {
            es: {
              singular: "Comunicarse con Ventas"
            },
            "de-DE": {
              singular: "Sales-Team kontaktieren"
            },
            "fr-FR": {
              singular: "Service commercial"
            },
            "ja-JP": {
              singular: "営業チームへ問い合わせる"
            },
            "ko-KR": {
              singular: "영업팀에 문의"
            },
            "pt-BR": {
              singular: "Falar com vendas"
            },
            "zh-CN": {
              singular: "联系销售"
            }
          }
        }) : "table" === _v3 ? (0, _v16.translate)({
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
        }) : _v16.paidPlanCtaLabel ?? (0, _v16.translate)({
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
        })
      }),
      _v122 = (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v102,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v120(_v0, () => {
                _v24({
                  plan: _v118,
                  periodicity: _v117,
                  freeTrial: !1
                }), _v110(_v1);
              }, "pricing_purchase", _v101),
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
        })
      });
    return _v105 !== _v33.CTA_TREATMENT.free_trial_primary || _v42 || _v73 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(!_v105 || _v105 === _v33.CTA_TREATMENT.purchase_only || _v105 === _v33.CTA_TREATMENT.purchase_primary) && (_v73 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Tooltip, {
          label: _v93 ?? "",
          isDisabled: null === _v93,
          placement: "top",
          children: (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v6.Button, {
              size: _v21,
              width: "100%",
              ..._v119,
              isDisabled: null !== _v93 || _v94,
              onClick: () => {
                _v24({
                  plan: _v118,
                  periodicity: _v117,
                  freeTrial: !1
                }), (0, _v32.shouldShowAutoRenewRetentionModal)(_v64, _v74) ? _v35(!0) : _v33(!0);
              },
              ..._v0,
              children: _v109
            })
          })
        }), (0, _v1.jsx)(_v26.AutoRenewRetentionModal, {
          isOpen: _v34,
          onClose: () => _v35(!1),
          onAutoRenewEnabled: () => {
            _v37(!0), _v35(!1), _v33(!0);
          },
          onError: _v0 => {
            _v15({
              variant: "warning",
              title: _v0 ?? (0, _v16.translate)({
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
          },
          subscriptionId: _v61,
          currentPlanName: _v57,
          currentTier: _v7 ?? "",
          currentManagedStorage: _v78,
          targetTier: _v40,
          endDate: _v62
        }), (0, _v1.jsx)(_v27.DowngradeFlowModal, {
          isOpen: _v32,
          onClose: () => _v33(!1),
          onSuccess: () => {
            window.location.reload();
          },
          onError: _v0 => {
            _v15({
              variant: "warning",
              title: _v0 ?? (0, _v16.translate)({
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
          },
          membership: {
            subscriptionId: _v61,
            tier: _v7,
            billingPeriod: _v75,
            isFreeTrial: !1,
            renewalDate: _v62,
            hasAutorenew: _v74,
            gracePeriodType: _v65 ? _v63 : null
          },
          currentPlanName: _v57,
          currentTier: _v7,
          currentManagedStorage: _v78,
          targetTier: _v40,
          targetPlanName: _v39,
          targetBillingPlanId: (_v75 === _v28.UserPlanType.Year ? _v1.id.annual : _v1.id.monthly) ?? "",
          targetPlanData: _v1,
          planChangeKind: _v71 || _v72 ? "move" : "downgrade",
          surface: "plan_card"
        })]
      }) : null != _v9 && _v10 ? (0, _v1.jsx)(_v6.Button, {
        size: _v21,
        width: "100%",
        onClick: () => {
          _v10();
        },
        ..._v0,
        children: _v109
      }) : (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v21,
        width: "100%",
        href: _v102,
        isDisabled: _v116,
        "aria-disabled": _v116,
        ..._v119,
        onClick: _v0 => _v120(_v0, () => {
          _v24({
            plan: _v118,
            periodicity: _v117,
            freeTrial: !1
          }), _v110(_v1);
        }, "pricing_purchase", _v101),
        ..._v0,
        children: _v109
      })), _v115 && (0, _v1.jsx)(() => !_v87 && (_v4 || _v20.pricing_page_monthly_free_trial) ? (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v100,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v120(_v0, () => {
                _v24({
                  plan: _v118,
                  periodicity: _v117,
                  freeTrial: !0
                }), _v110(_v1);
              }, "pricing_free_trial", _v99),
              children: _v0
            }, "free-trial-link")
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
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {}), {})]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v121, _v114 && _v122]
    });
  }], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    hrefRedirect: _v1 = "/home",
    onPurchaseIntercept: _v2
  }) => {
    let _v3 = (0, _v4.useContext)(_v42.ViewerContext),
      [_v4, _v5] = (0, _v4.useState)(!1);
    return (0, _v1.jsx)(_v40.LoginJoinModal, {
      type: "join",
      xsrft: _v3?.xsrft || "",
      shouldOptIntoMarketing: _v3?.shouldOptIntoMarketing,
      onSuccess: () => {
        window.location.href = _v1;
      },
      isShowing: _v4,
      onDismiss: () => _v5(!1),
      faContainer: "upgrade-plan",
      children: () => (0, _v1.jsx)(_v6.Button, {
        size: "lg",
        width: "100%",
        isDisabled: _v3?.user?.account === _v41.AccountType.Free,
        variant: "tertiary",
        onClick: () => {
          _v2 ? _v2(() => {
            _v3?.user ? window.location.href = _v1 : _v5(!0);
          }) : _v3?.user ? window.location.href = _v1 : _v5(!0);
        },
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "darkBlueAlpha.300",
        "data-testid": "sign-up-button",
        _dark: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "input-fill",
          color: "text-primary"
        },
        ..._v0,
        children: _v3?.user?.account === _v41.AccountType.Free ? (0, _v16.translate)({
          singular: "Current plan",
          dictionary: {
            es: {
              singular: "Plan actual"
            },
            "de-DE": {
              singular: "Aktueller Plan"
            },
            "fr-FR": {
              singular: "Forfait actuel"
            },
            "ja-JP": {
              singular: "現在のプラン"
            },
            "ko-KR": {
              singular: "현재 요금제"
            },
            "pt-BR": {
              singular: "Plano atual"
            },
            "zh-CN": {
              singular: "当前计划"
            }
          }
        }) : (0, _v16.translate)({
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
    });
  }], 0);
}