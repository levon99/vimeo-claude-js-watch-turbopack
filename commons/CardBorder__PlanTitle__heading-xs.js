{
  "use strict";

  _v0.s(["CardBorder", () => _v36, "PlanTitle", () => _v38, "default", () => _v41], 0);
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
    _v27 = _v0.i(0);
  let _v28 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Text, {
      variant: "heading-xs",
      margin: 0,
      textDecoration: "underline",
      cursor: "pointer",
      letterSpacing: (0, _v7.rem)(.48),
      children: _v0
    }),
    _v29 = () => (0, _v1.jsx)(_v4.Box, {
      padding: `0 ${(0, _v7.rem)(40)}`,
      width: "100%",
      position: "absolute",
      bottom: (0, _v7.rem)(36),
      onClick: () => {
        document.getElementById("compare_plans_table_header")?.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: (0, _v1.jsx)(_v28, {
        children: (0, _v10.translate)({
          singular: "Compare all features",
          dictionary: {
            es: {
              singular: "Comparar todas las funciones"
            },
            "de-DE": {
              singular: "Alle Funktionen vergleichen"
            },
            "fr-FR": {
              singular: "Comparez toutes les fonctionnalités"
            },
            "ja-JP": {
              singular: "すべての機能を比較"
            },
            "ko-KR": {
              singular: "모든 기능 비교하기"
            },
            "pt-BR": {
              singular: "Compare todos os recursos"
            },
            "zh-CN": {
              singular: "比较所有功能"
            }
          }
        })
      })
    });
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = ({
      targetView: _v0,
      onSwitch: _v1,
      isMobileBreakpoint: _v2
    }) => {
      let _v3 = "business" === _v0,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v33.usePricingTracking)(),
        _v6 = _v3 ? (0, _v10.translate)({
          singular: "Looking for Business solutions?",
          dictionary: {
            es: {
              singular: "¿Busca soluciones para empresas?"
            },
            "de-DE": {
              singular: "Suchen Sie nach Lösungen für Unternehmen?"
            },
            "fr-FR": {
              singular: "Vous recherchez des solutions pour les entreprises ?"
            },
            "ja-JP": {
              singular: "ビジネス向けソリューションをお探しですか？"
            },
            "ko-KR": {
              singular: "기업용 솔루션을 찾고 계신가요?"
            },
            "pt-BR": {
              singular: "Procurando soluções para Empresas?"
            },
            "zh-CN": {
              singular: "正在寻找企业解决方案吗？"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Looking for Individual plans?",
          dictionary: {
            es: {
              singular: "¿Busca planes para particulares?"
            },
            "de-DE": {
              singular: "Suchen Sie nach Plänen für Privatpersonen?"
            },
            "fr-FR": {
              singular: "Vous recherchez des offres pour les particuliers ?"
            },
            "ja-JP": {
              singular: "個人向けプランをお探しですか？"
            },
            "ko-KR": {
              singular: "개인용 요금제를 찾고 계신가요?"
            },
            "pt-BR": {
              singular: "Procurando planos para pessoas?"
            },
            "zh-CN": {
              singular: "正在寻找个人套餐吗？"
            }
          }
        }),
        _v7 = _v3 ? (0, _v10.translate)({
          singular: "See plans for Business",
          dictionary: {
            es: {
              singular: "Ver planes para empresas"
            },
            "de-DE": {
              singular: "Pläne für Unternehmen ansehen"
            },
            "fr-FR": {
              singular: "Voir les offres pour les entreprises"
            },
            "ja-JP": {
              singular: "ビジネス向けプランを見る"
            },
            "ko-KR": {
              singular: "기업용 요금제 보기"
            },
            "pt-BR": {
              singular: "Veja planos para Empresas"
            },
            "zh-CN": {
              singular: "查看企业套餐"
            }
          }
        }) : (0, _v10.translate)({
          singular: "See plans for Individuals",
          dictionary: {
            es: {
              singular: "Ver planes para particulares"
            },
            "de-DE": {
              singular: "Pläne für Privatpersonen ansehen"
            },
            "fr-FR": {
              singular: "Voir les offres pour les particuliers"
            },
            "ja-JP": {
              singular: "個人向けプランを見る"
            },
            "ko-KR": {
              singular: "개인용 요금제 보기"
            },
            "pt-BR": {
              singular: "Veja planos para Pessoas"
            },
            "zh-CN": {
              singular: "查看个人套餐"
            }
          }
        });
      return (0, _v1.jsx)(_v4.Box, {
        width: _v2 ? "100%" : "25%",
        minWidth: _v2 ? "100%" : (0, _v7.rem)(330),
        display: _v2 ? "block" : "table-cell",
        verticalAlign: "middle",
        position: "relative",
        "data-cross-sell": !0,
        margin: "0 auto",
        border: `${(0, _v7.rem)(8)} solid transparent`,
        children: (0, _v1.jsxs)(_v4.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          paddingX: (0, _v7.rem)(32),
          paddingBottom: (0, _v7.rem)(32),
          gap: (0, _v7.rem)(24),
          children: [(0, _v1.jsx)(_v4.Box, {
            width: "170px",
            height: "160px",
            flexShrink: 0,
            sx: {
              aspectRatio: "17/16",
              mixBlendMode: "multiply",
              '[data-theme="dark"] &': {
                filter: "invert(1)",
                mixBlendMode: "unset"
              }
            },
            children: (0, _v1.jsx)("img", {
              src: "https://i.vimeocdn.com/custom_asset/e58fa4e3c2cfe590481538dd301730c4",
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }
            })
          }), (0, _v1.jsx)(_v5.Header, {
            as: "h3",
            size: "lg",
            textAlign: "center",
            children: _v6
          }), (0, _v1.jsx)(_v32.Button, {
            variant: "primary",
            size: "lg",
            bgColor: "text-primary",
            width: "100%",
            borderRadius: (0, _v7.rem)(16),
            onClick: () => {
              _v3 ? _v4({
                entryPoint: "button"
              }) : _v5({
                entryPoint: "button"
              }), _v1(), _v2 && window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            },
            children: _v7
          })]
        })
      });
    },
    _v35 = new Set(["starter", "standard", "advanced"]),
    _v36 = ({
      purchaseStatus: _v0 = "",
      showBadge: _v1 = !1,
      showCardBorder: _v2 = !1,
      compact: _v3 = !1,
      ..._v4
    }) => (0, _v1.jsx)(_v4.Box, {
      background: "var(--vimeo-colors-fill-surface)",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      borderRadius: _v3 ? "1.75rem" : {
        base: "1.5rem",
        md: "2.3rem"
      },
      border: _v1 ? {
        base: "#8a5ee8 solid 0.15rem",
        md: "#8a5ee8 solid 0.28rem"
      } : "purchased" === _v0 ? {
        border: "#8a5ee8 solid 0.15rem",
        md: "#f4f5f6 solid 0.15rem"
      } : {
        base: _v2 ? "var(--vimeo-colors-stroke) solid 0.125rem" : "var(--vimeo-colors-fill-surface) solid 0.1rem"
      },
      children: _v4.children
    }),
    _v37 = ({
      isDisabled: _v0,
      compact: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v4.Box, {
      opacity: _v0 ? .6 : 1,
      position: "relative",
      padding: "1.25rem",
      paddingX: _v1 ? "1.25rem" : {
        base: "1.25rem",
        md: "2.5rem"
      },
      paddingY: _v1 ? "1.25rem" : {
        base: "1.25rem",
        md: "2.85rem"
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      children: _v2.children
    }),
    _v38 = ({
      allowWrap: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Header, {
      wordBreak: "break-word",
      display: "flex",
      columnGap: "0.5rem",
      whiteSpace: _v0 ? void 0 : "nowrap",
      flexWrap: _v0 ? "wrap" : void 0,
      alignItems: "center",
      fontWeight: 500,
      as: _v1.as,
      size: _v1.size,
      children: _v1.children
    }),
    _v39 = _v0 => (0, _v1.jsx)(_v4.Box, {
      minHeight: "72px",
      children: _v0.children
    }),
    _v40 = ({
      planData: _v0,
      showBadge: _v1,
      showYearly: _v2,
      isBillingFreqToggleAvailable: _v3,
      showStrikePrice: _v4,
      isMobileBreakpoint: _v5,
      planView: _v6,
      renewalDiscount: _v7,
      onStudioRenewal: _v8,
      renderFreePlanCta: _v9,
      ignoreCurrentPlanState: _v10,
      bundleStripTiers: _v11,
      bundleStripAvailableOnly: _v12 = !1
    }) => {
      let {
          width: _v13
        } = (0, _v14.useWindowSize)(),
        _v14 = _v5 && _v13 > 768,
        {
          tier: _v15,
          name: _v16,
          metadata: _v17
        } = _v0,
        _v18 = (0, _v3.useContext)(_v23.PlansDataContext),
        _v19 = (0, _v3.useContext)(_v22.OverridesContext),
        {
          isFlatRateData: _v20,
          isSolutionData: _v21,
          isRepackagingData: _v22,
          downgradeEnabled: _v23,
          effectiveTier: _v24,
          upcomingTier: _v25
        } = _v18,
        _v26 = _v17.entitlements?.params?.videoStoragePeriodicQuota || _v17.entitlements?.params?.videoStorageQuotaCap,
        _v27 = _v17.entitlements?.params?.videoStorageQuotaPeriod,
        _v28 = _v17.entitlements?.params?.bandwidth?.periodicQuota,
        _v29 = _v17?.interactions?.purchase?.status,
        _v30 = _v17?.purchasedProduct?.isMonthly,
        _v31 = void 0 !== _v25 && _v15 === _v25,
        _v32 = _v22 && void 0 !== _v25,
        _v33 = "annual" === (0, _v13.resolveBillingPeriod)(_v0, _v2 ? "annual" : "monthly"),
        _v34 = (0, _v12.getEffectivePurchaseStatus)({
          purchaseStatus: _v29,
          tier: _v15,
          isViewingAnnual: _v33,
          isPurchasedMonthly: _v30
        }),
        _v35 = !_v10 && "available" !== _v34,
        _v36 = (_v35 || _v31) && _v22,
        _v37 = _v36 ? .7 : 1,
        _v38 = (0, _v27.useBundleCtaIntercept)(_v15),
        _v39 = (0, _v27.useBundleOfferSelector)(_v0 => _v0.isBundleActive),
        _v40 = (0, _v27.useBundleOfferSelector)(_v0 => _v0.isEnabled),
        _v41 = (0, _v27.useBundleOfferSelector)(_v0 => _v0.bundleType),
        _v42 = (0, _v27.useBundleOfferSelector)(_v0 => _v0.price),
        _v43 = (_v11 ?? _v35).has(_v15) && _v40 && null !== _v41 && (!_v12 || "available" === _v34),
        _v44 = !!_v19?.compact,
        _v45 = _v14 && (0, _v7.rem)(586) || _v5 && "50%" || "25%",
        _v46 = _v14 && "auto" || _v5 && "100%" || (0, _v7.rem)(330);
      if (_v35 && !_v31 && _v5 && !_v22 && !_v23) return null;
      let _v47 = !_v20 || _v22,
        _v48 = !("free" === _v15 && _v5);
      return (0, _v1.jsxs)(_v4.Box, {
        width: _v45,
        position: "relative",
        margin: _v1 && "purchased" !== _v34 ? `${(0, _v7.rem)(40)} auto 0` : "0 auto",
        minWidth: _v46,
        display: _v5 || "customSelfServe" === _v15 ? "block" : "table-cell",
        border: `${(0, _v7.rem)(8)} solid transparent`,
        children: [(0, _v1.jsx)(_v25.default, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsx)(_v36, {
          showBadge: _v1,
          purchaseStatus: _v10 ? "available" : _v34,
          showCardBorder: _v19?.showCardBorder,
          compact: _v44
        }), (0, _v1.jsx)(_v37, {
          isDisabled: _v35 && !_v22,
          compact: _v44,
          children: (0, _v1.jsxs)(_v4.Box, {
            className: "card-section-container",
            gap: _v14 ? "lg" : void 0,
            display: _v14 ? "flex" : void 0,
            margin: _v14 ? "0 auto" : void 0,
            children: [(0, _v1.jsxs)(_v4.Box, {
              paddingBottom: _v32 ? (0, _v7.rem)(16) : void 0,
              children: [(0, _v1.jsxs)(_v38, {
                as: "h1",
                size: _v44 ? "md" : "lg",
                allowWrap: _v22,
                children: [(0, _v1.jsx)(_v4.Box, {
                  as: "span",
                  opacity: _v37,
                  children: _v16
                }), " ", (0, _v1.jsx)(_v26.default, {
                  showBadge: "purchased" === _v34 && !_v10
                })]
              }), _v17.isBandwidthProduct && (0, _v1.jsx)(_v4.Box, {
                opacity: _v37,
                children: (0, _v1.jsx)(_v5.Header, {
                  size: "sm",
                  children: "enterprise" !== _v15 ? `${_v28} annual bandwidth` : ""
                })
              }), !_v21 && _v19?.subHeadingType?.[_v15] && (0, _v1.jsx)(_v39, {
                children: (0, _v1.jsx)(_v4.Box, {
                  opacity: _v37,
                  children: (0, _v1.jsx)(_v18.default, {
                    tier: _v15
                  })
                })
              }), _v43 && null !== _v41 && (0, _v1.jsx)(_v4.Box, {
                opacity: _v37,
                marginTop: (0, _v7.rem)(12),
                marginBottom: (0, _v7.rem)(8),
                children: (0, _v1.jsx)(_v9.BundlePlanCardStrip, {
                  bundleType: _v41,
                  isVisible: _v39,
                  price: _v42
                })
              }), !("free" === _v15 && _v5) && (0, _v1.jsx)(_v4.Box, {
                className: "plan-pricing-section",
                opacity: _v37,
                children: (0, _v1.jsx)(_v19.default, {
                  planData: _v0,
                  showYearly: _v33,
                  isBillingFreqToggleAvailable: _v3,
                  disabled: _v35,
                  showStrikePrice: _v4,
                  isMobileBreakpoint: _v5,
                  renewalDiscount: _v7
                })
              }), (0, _v1.jsx)(_v4.Box, {
                marginTop: _v44 ? 12 : 24,
                marginBottom: _v32 || _v44 ? 12 : 24,
                opacity: _v36 ? .5 : 1,
                children: "free" === _v15 ? _v9 ? _v9() : (0, _v1.jsx)(_v31.default, {
                  location: "vertical"
                }) : (0, _v1.jsx)(_v30.default, {
                  planData: _v0,
                  showYearly: _v33,
                  showFreeTrial: _v0.metadata?.interactions?.purchase?.uri?.freeTrial !== null,
                  location: "vertical",
                  isMobileBreakpoint: _v5,
                  upcomingTier: _v25,
                  effectiveTier: _v24,
                  renewalDiscountPercent: _v7?.savingsPercent,
                  onRenewalDiscount: _v8,
                  onPurchaseIntercept: _v38
                })
              }), _v32 && (0, _v1.jsxs)(_v4.Box, {
                "aria-hidden": !_v31,
                visibility: _v31 ? void 0 : "hidden",
                display: "flex",
                gap: (0, _v7.rem)(8),
                alignItems: "flex-start",
                background: "var(--vimeo-colors-status-info-secondary, rgba(190,227,248,0.48))",
                borderRadius: (0, _v7.rem)(8),
                paddingLeft: (0, _v7.rem)(12),
                paddingRight: (0, _v7.rem)(8),
                paddingY: (0, _v7.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v4.Box, {
                  paddingY: (0, _v7.rem)(2),
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v8.InfoCircle, {
                    boxSize: (0, _v7.rem)(20),
                    color: "status-info-primary"
                  })
                }), (0, _v1.jsx)(_v6.Text, {
                  variant: "body-sm",
                  children: (0, _v10.translate)({
                    singular: "Starting from the next renewal, you will be moved to the new {B}{PLAN_NAME}{/B} plan.",
                    replacements: {
                      PLAN_NAME: _v16,
                      B: _v0 => (0, _v1.jsx)(_v6.Text, {
                        as: "span",
                        fontWeight: 500,
                        variant: "body-sm",
                        children: _v0
                      }, "plan-name")
                    },
                    dictionary: {
                      es: {
                        singular: "A partir de la próxima renovación, se le trasladará al nuevo plan {B}{PLAN_NAME}{/B}."
                      },
                      "de-DE": {
                        singular: "Ab der nächsten Verlängerung werden Sie auf den neuen {B}{PLAN_NAME}{/B}-Plan umgestellt."
                      },
                      "fr-FR": {
                        singular: "À partir du prochain renouvellement, vous passerez au nouveau plan {B}{PLAN_NAME}{/B}."
                      },
                      "ja-JP": {
                        singular: "次回の更新時より、新しい{B}{PLAN_NAME}{/B}プランに移行されます。"
                      },
                      "ko-KR": {
                        singular: "다음 갱신부터 새 {B}{PLAN_NAME}{/B} 요금제로 이동됩니다."
                      },
                      "pt-BR": {
                        singular: "A partir da próxima renovação, você será migrado para o novo plano {B}{PLAN_NAME}{/B}."
                      },
                      "zh-CN": {
                        singular: "从下次续订开始，您将被转移到新的 {B}{PLAN_NAME}{/B} 计划。"
                      }
                    }
                  })
                })]
              })]
            }), _v48 && (0, _v1.jsxs)(_v4.Box, {
              opacity: _v37,
              children: [_v47 && (0, _v1.jsx)(_v15.default, {
                planData: _v0,
                showYearly: _v2
              }), (0, _v1.jsx)(_v16.default, {
                planData: _v0,
                quotaPeriod: _v27,
                periodicQuota: "free" === _v15 && null !== _v26 ? _v26 : _v17.entitlements?.params?.videoStoragePeriodicQuota || 0,
                planView: _v6
              })]
            })]
          })
        }), !_v5 && !_v44 && (0, _v1.jsx)(_v29, {})]
      });
    },
    _v41 = ({
      showYearly: _v0,
      isBillingFreqToggleAvailable: _v1,
      isPageTopToggleVisible: _v2,
      badgePlan: _v3,
      showStrikePrice: _v4,
      isMobileBreakpoint: _v5,
      planView: _v6 = "individual",
      onSwitchView: _v7,
      businessTiers: _v8,
      showCrossSellCard: _v9 = !0,
      studioRenewalTier: _v10,
      studioRenewalDiscount: _v11,
      onStudioRenewal: _v12,
      renderFreePlanCta: _v13,
      ignoreCurrentPlanState: _v14,
      bundleStripTiers: _v15,
      bundleStripAvailableOnly: _v16 = !1
    }) => {
      let _v17 = (0, _v3.useContext)(_v22.OverridesContext),
        _v18 = !!_v17?.compact,
        {
          plansData: _v19,
          isRepackagingData: _v20,
          hideFreePlan: _v21,
          hideIndividualPlans: _v22
        } = (0, _v3.useContext)(_v23.PlansDataContext),
        _v23 = (0, _v3.useRef)(null),
        {
          shouldReorder: _v24,
          isResolving: _v25
        } = (0, _v24.useColdStoragePlanReorder)(),
        {
          settings: _v26
        } = (0, _v11.useOrionSettings)(),
        _v27 = _v26.enable_low_tier_below_fold,
        _v28 = _v24 || _v27,
        _v29 = (0, _v3.useMemo)(() => !_v19 || !_v28 || _v20 || _v5 ? _v19 : (_v0 => {
          let _v1 = _v0.findIndex(_v0 => "free" !== _v0.tier);
          if (_v1 < 0 || _v1 === _v0.length - 1) return _v0;
          let _v2 = [..._v0],
            [_v3] = _v2.splice(_v1, 1);
          return _v2.push(_v3), _v2;
        })(_v19), [_v19, _v28, _v20, _v5]),
        _v30 = (0, _v3.useMemo)(() => _v29 ? _v17?.plans ? _v29.filter(_v0 => _v17.plans?.includes(_v0.tier)) : _v17?.excludedPlans ? _v29.filter(_v0 => !_v17.excludedPlans?.includes(_v0.tier)) : _v5 ? _v29 : _v29.length > _v20.maxVerticalCards ? _v29.slice(0, -1) : _v29 : [], [_v29, _v17, _v5]),
        _v31 = (0, _v3.useMemo)(() => {
          if (!_v19 || !_v20) return [];
          let _v0 = _v19.some(_v0 => "core" === _v0.tier);
          return _v21.REPACKAGING_INDIVIDUAL_VIEW_TIERS.reduce((_v0, _v1) => {
            if ((_v21 || _v0) && "free" === _v1) return _v0;
            let _v2 = _v19.find(_v0 => _v0.tier === _v1);
            return _v2 && _v0.push(_v2), _v0;
          }, []);
        }, [_v19, _v20, _v21]),
        _v32 = (0, _v3.useMemo)(() => _v8 ?? ["professional", "studio", "enterprise"], [_v8]),
        _v33 = (0, _v3.useMemo)(() => _v19 && _v20 ? _v32.reduce((_v0, _v1) => {
          let _v2 = _v19.find(_v0 => _v0.tier === _v1);
          return _v2 && _v0.push(_v2), _v0;
        }, []) : [], [_v19, _v20, _v32]),
        _v34 = "individual" === _v6 ? _v31 : _v33,
        _v35 = (0, _v3.useCallback)(() => {
          let _v0 = _v23.current;
          if (!_v0 || _v5) return;
          let _v1 = Array.from(_v0.querySelectorAll(".plan-pricing-section"));
          _v1.forEach(_v0 => {
            _v0.style.minHeight = "unset";
          });
          let _v2 = _v1.reduce((_v0, _v1) => Math.max(_v0, _v1.scrollHeight), 0);
          _v1.forEach(_v0 => {
            _v0.style.minHeight = `${_v2}px`;
          });
          let _v3 = _v20 ? `[data-panel="${_v6}"] .card-section-container` : ".card-section-container",
            _v4 = new Map(),
            _v5 = Array.from(_v0.querySelectorAll(_v3));
          _v5.length && (_v5.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0.style.height = "auto", _v0.style.minHeight = "unset", _v4.set(_v1, Math.max(_v4.get(_v1) || 0, _v0.scrollHeight));
            });
          }), _v5 || _v5.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0 && _v0.style && (_v0.style.minHeight = (0, _v7.rem)(_v4.get(_v1)), _v0.style.height = "auto");
            });
          }));
        }, [_v20, _v6, _v5]);
      (0, _v3.useEffect)(() => {
        let _v0 = (0, _v2.default)(_v35, 300);
        return window.addEventListener("resize", _v0), () => {
          window.removeEventListener("resize", _v0);
        };
      }, [_v20, _v6, _v5, _v35]), (0, _v3.useEffect)(() => {
        if (!_v19 || _v5) return;
        let _v0 = requestAnimationFrame(_v35);
        return () => cancelAnimationFrame(_v0);
      }, [_v35, _v1, _v5, _v6, _v19, _v13, _v4, _v0]), (0, _v3.useEffect)(() => {
        if (_v20) {
          let _v0 = setTimeout(_v35, 450);
          return () => clearTimeout(_v0);
        }
      }, [_v6, _v20, _v35]);
      let _v36 = (0, _v3.useCallback)(_v0 => {
          _v0 && _v23.current && _v35();
        }, [_v35]),
        _v37 = (0, _v3.useCallback)((_v0, _v1) => (_v5 && !_v18 ? [..._v0].reverse() : _v0).map(_v0 => (0, _v1.jsx)(_v40, {
          showBadge: _v3 === _v0.tier,
          planData: _v0,
          showYearly: _v0,
          isBillingFreqToggleAvailable: _v1,
          showStrikePrice: _v4,
          isMobileBreakpoint: _v5,
          planView: _v1,
          renewalDiscount: _v0.tier === _v10 ? _v11 : null,
          onStudioRenewal: _v12,
          renderFreePlanCta: _v13,
          ignoreCurrentPlanState: _v14,
          bundleStripTiers: _v15,
          bundleStripAvailableOnly: _v16
        }, _v0.name)), [_v3, _v18, _v1, _v5, _v4, _v0, _v10, _v11, _v12, _v13, _v14, _v15, _v16]);
      if (!_v19 || _v25 && !_v20 && !_v5) return null;
      if (_v20 && _v7) {
        let _v0 = "business" === _v6;
        if (_v22) {
          let _v0 = _v5 ? 0 : Math.max(0, 3 - _v33.length),
            _v1 = _v0 > 0 && (0, _v1.jsx)(_v4.Box, {
              display: "table-cell",
              width: `${25 * _v0 / 2}%`,
              minWidth: (0, _v7.rem)(165 * _v0),
              border: `${(0, _v7.rem)(8)} solid transparent`,
              "aria-hidden": !0
            });
          return (0, _v1.jsx)(_v4.Box, {
            marginTop: _v5 ? 0 : (0, _v7.rem)(50),
            padding: `0 ${(0, _v7.rem)(2)}`,
            ref: _v36,
            children: (0, _v1.jsxs)(_v4.Box, {
              margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
              display: _v5 ? "block" : "table",
              width: "100%",
              maxWidth: "1440px",
              sx: _v5 ? void 0 : {
                tableLayout: "fixed"
              },
              ref: _v23,
              "data-panel": "business",
              children: [_v1, _v37(_v33, "business"), _v1]
            })
          });
        }
        return _v5 ? (0, _v1.jsx)(_v4.Box, {
          marginTop: 0,
          padding: `0 ${(0, _v7.rem)(2)}`,
          ref: _v36,
          children: (0, _v1.jsxs)(_v4.Box, {
            margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
            width: "100%",
            ref: _v23,
            children: [_v37(_v34, _v6), _v9 && (0, _v1.jsx)(_v34, {
              targetView: _v0 ? "individual" : "business",
              onSwitch: _v7,
              isMobileBreakpoint: _v5
            })]
          })
        }) : (0, _v1.jsx)(_v4.Box, {
          marginTop: (0, _v7.rem)(50),
          padding: `0 ${(0, _v7.rem)(2)}`,
          ref: _v36,
          children: (0, _v1.jsx)(_v4.Box, {
            margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
            overflow: "hidden",
            paddingTop: (0, _v7.rem)(40),
            maxWidth: "1440px",
            ref: _v23,
            children: (0, _v1.jsxs)(_v4.Box, {
              display: "flex",
              width: "200%",
              sx: {
                transition: "transform 400ms ease-in-out",
                transform: _v0 ? "translateX(-50%)" : "translateX(0)"
              },
              children: [(0, _v1.jsxs)(_v4.Box, {
                "data-panel": "individual",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v37(_v31, "individual"), _v9 && (0, _v1.jsx)(_v34, {
                  targetView: "business",
                  onSwitch: _v7,
                  isMobileBreakpoint: _v5
                })]
              }), (0, _v1.jsxs)(_v4.Box, {
                "data-panel": "business",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v9 && (0, _v1.jsx)(_v34, {
                  targetView: "individual",
                  onSwitch: _v7,
                  isMobileBreakpoint: _v5
                }), _v37(_v33, "business")]
              })]
            })
          })
        });
      }
      return _v30.length ? (0, _v1.jsxs)(_v4.Box, {
        marginTop: _v5 ? 0 : _v18 ? _v3 ? (0, _v7.rem)(28) : 0 : (0, _v7.rem)(50),
        padding: `0 ${(0, _v7.rem)(2)}`,
        ref: _v36,
        children: [(0, _v1.jsx)(_v4.Box, {
          margin: _v18 ? `0 auto ${(0, _v7.rem)(8)}` : `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
          display: "table",
          width: "100%",
          maxWidth: "1440px",
          sx: {
            tableLayout: "fixed"
          },
          ref: _v23,
          children: _v37(_v30)
        }), _v29 && _v29.length > _v20.maxVerticalCards && !_v17?.plans && !_v17?.excludedPlans?.includes(_v29[_v29.length - 1].tier) && !_v5 && (0, _v1.jsx)(_v4.Box, {
          margin: "0 auto",
          maxWidth: "1440px",
          children: (0, _v1.jsx)(_v17.default, {
            showBadge: _v3 === _v29[_v29.length - 1]?.tier,
            planData: _v29[_v29.length - 1],
            showYearly: _v0,
            isPageTopToggleVisible: _v2
          })
        })]
      }) : null;
    };
}