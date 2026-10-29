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
  let _v21 = _v20.default.div.withConfig({
      displayName: "styles__HeaderContainer",
      componentId: "sc-9bccf073-0"
    })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v12.rem)(24)} ${(0, _v12.rem)(24)};
  align-items: center;
  align-self: stretch;
`,
    _v22 = _v20.default.p.withConfig({
      displayName: "styles__SubHeader",
      componentId: "sc-9bccf073-1"
    })`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--vimeo-colors-text-primary);
`,
    _v23 = _v20.default.div.withConfig({
      displayName: "styles__FooterContainer",
      componentId: "sc-9bccf073-2"
    })`
  margin: 0 -1rem;
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = () => {
    let _v0 = (0, _v2.useContext)(_v25.default),
      _v1 = _v24.default.compareAllPlanFeatures;
    return (0, _v1.jsx)(_v23, {
      children: (0, _v1.jsx)(_v18.Button, {
        "data-testid": "upsell-cta",
        size: "md",
        href: (0, _v19.buildUpgradePlanUrl)(_v0.paywallTracking, {
          upsell: _v0.params.upsell_name || "none",
          integration: _v0.params.integration || "none",
          feature: _v0.params.feature || "none"
        }),
        target: "_blank",
        as: "a",
        variant: "minmal",
        onClick: () => {
          _v0.onButtonClick && _v0.onButtonClick({
            copy: _v1,
            target_path: "/upgrade"
          });
        },
        _hover: {},
        children: _v1
      })
    });
  };
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = _v0 => {
    let _v1 = (0, _v28.getModalSubheader)(_v0.modalConfig?.subHeaderText),
      _v2 = _v0.modalConfig?.headerText;
    return (0, _v1.jsxs)(_v21, {
      children: [(0, _v1.jsxs)(_v5.Box, {
        w: "100%",
        px: {
          base: (0, _v12.rem)(16),
          md: 0
        },
        children: ["" !== _v2 && null !== _v2 && (0, _v1.jsx)(_v27.Header, {
          size: "lg",
          "data-testid": "upsell-header-text",
          textAlign: "center",
          children: (0, _v28.getModalHeader)(_v0.modalConfig?.headerText)
        }), _v1 ? (0, _v1.jsx)(_v22, {
          "data-testid": "upsell-subheader-text",
          children: _v1
        }) : null]
      }), (0, _v1.jsx)(_v29.default, {
        margin: (0, _v12.rem)(8),
        onClose: _v0.onClose
      })]
    });
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = _v0 => {
      let _v1 = _v0.previousCardPlan ? _v24.default.everythingInPlan((0, _v39.getTierDisplayName)(_v0.previousCardPlan) ?? _v0.previousCardPlan) : _v24.default.keyFeatures,
        _v2 = (0, _v28.getPlanFeaturesList)(_v0.modalConfig, _v0.planData),
        _v3 = _v0.planData.tier,
        _v4 = (0, _v28.isRepackagingTier)(_v3) ? _v2?.length ?? 0 : _v3 === _v41.PLANS.ENTERPRISE ? 5 : [_v41.PLANS.STARTER, _v41.PLANS.PLUS].includes(_v3) ? 3 : 4;
      return _v2 && _v2.length > 0 ? (0, _v1.jsxs)(_v40.PlansFeaturesContainer, {
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm",
            xl: "heading-xs"
          },
          children: _v1
        }), (0, _v1.jsx)(_v40.FeaturesWrapper, {
          children: _v2.slice(0, _v4).map((_v0, _v1) => (0, _v1.jsxs)(_v40.FeatureList, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v38.Checkmark, {
                height: (0, _v12.rem)(16),
                width: (0, _v12.rem)(16)
              })
            }), (0, _v1.jsx)(_v11.Text, {
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
    _v43 = ({
      planData: _v0,
      modalConfig: _v1,
      hideSubheading: _v2
    }) => {
      let _v3 = (0, _v28.getPlanSubHeading)(_v1, _v0),
        _v4 = (0, _v28.getBandwidthSubHeader)(_v0);
      return (0, _v1.jsxs)(_v40.PlanHeader, {
        style: {
          height: _v2 ? "" : "4rem"
        },
        children: [(0, _v1.jsx)(_v40.PlanTitle, {
          children: _v0.name
        }), (0, _v1.jsx)(_v27.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v4
        }), (!_v2 && !_v0.metadata.isBandwidthProduct && _v3 && _v3.length) > 0 ? (0, _v1.jsx)(_v40.PlanSubTitle, {
          children: _v3
        }) : null]
      });
    };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = ({
    planData: _v0,
    displayMonthlyPlan: _v1,
    showAnnualAlternativeForMonthly: _v2
  }) => {
    let _v3 = _v0.metadata.isBandwidthProduct,
      _v4 = (0, _v28.getPlanDisplayPrice)(_v0, _v1, _v3),
      _v5 = (0, _v28.getPlanBillingFrequencyCopy)(_v1, _v0, _v3, _v2),
      _v6 = _v1 ? _v24.default.perMonthBilledMonthly : _v24.default.perMonthBilledAnually,
      _v7 = (0, _v28.shouldShowBillingFrequencyCopy)(_v1, _v0, _v3, _v2);
    return (0, _v1.jsx)(_v34.Flex, {
      flexDirection: "column",
      gap: {
        base: "xs",
        md: "sm",
        xl: "xs"
      },
      minHeight: {
        base: "initial",
        xl: (0, _v12.rem)(80)
      },
      maxHeight: {
        base: "initial",
        xl: (0, _v12.rem)(80)
      },
      children: _v0.tier === _v41.PLANS.ENTERPRISE ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: (0, _v1.jsx)(_v44.Building, {
            h: (0, _v12.rem)(40),
            w: (0, _v12.rem)(40)
          })
        }), (0, _v1.jsx)(_v11.Text, {
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
          children: _v24.default.talkToTeam
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: _v4
        }), (0, _v1.jsxs)(_v11.Text, {
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
            children: [_v41.SEAT_TIER_PLANS.includes(_v0.tier) ? (0, _v28.isSeatTierWithStorageQuota)(_v0, _v3) ? _v6 : _v24.default.perSeatPerMonth : _v24.default.perMonth, (0, _v1.jsx)("br", {})]
          }), _v7 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v5, (0, _v1.jsx)("br", {})]
          }), (0, _v45.isTaxInclusivePrices)(_v0.metadata) ? _v24.default.includingTax : _v24.default.plusApplicableTax]
        })]
      })
    });
  };
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = _v20.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-3c30b0dd-0"
    })`
  font-family: var(--vimeo-fonts-heading);
  font-size: ${(0, _v12.rem)(14)};
  margin-top: ${(0, _v12.rem)(8)};
  padding: ${(0, _v12.rem)(11)} ${(0, _v12.rem)(16)};
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: ${(0, _v12.rem)(17.64)};
  width: 100%;

  a:after {
    content: none;
  }

  a {
    text-decoration: underline !important;
  }
`,
    _v50 = ({
      allowFreeTrial: _v0,
      ctaTreatment: _v1 = "purchase_secondary",
      planData: _v2,
      displayMonthlyPlan: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(void 0),
        _v5 = (0, _v2.useRef)(void 0),
        [_v6, _v7] = (0, _v2.useState)(void 0),
        _v8 = (0, _v2.useContext)(_v25.default),
        _v9 = (0, _v16.useOrionSetting)("default_modal_purchase_now_link_enabled"),
        {
          stampCheckoutHref: _v10
        } = (0, _v14.useModalBundleState)(),
        _v11 = _v2.tier === _v41.PLANS.ENTERPRISE,
        _v12 = "free_trial_secondary" === _v1 && _v0,
        _v13 = "purchase_secondary" === _v1,
        _v14 = (0, _v28.getPlanFreeTrialLink)(_v2, {
          isMonthly: _v3,
          allowMonthlyTrial: _v8.allowMonthlyTrial
        }),
        _v15 = (0, _v2.useCallback)(() => {
          let {
              tier: _v0,
              price: _v1,
              currency: _v2
            } = _v2,
            _v3 = _v4?.current?.replace(/{\/?A}/g, "").trim();
          _v8.onButtonClick && _v8.onButtonClick({
            copy: _v3,
            duration: _v3 ? "monthly" : "annual",
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            currency: _v2.currencyCode,
            plan_selected: _v0,
            target_path: _v5.current,
            free_trial: _v12
          });
        }, [_v3, _v12, _v2, _v8]),
        _v16 = (0, _v2.useMemo)(() => (0, _v15.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: _v10((0, _v28.appendPaywallParams)((0, _v28.appendExtraQueryParams)((0, _v28.appendTrackingQueryParams)(_v14, _v8.params), (0, _v48.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking)),
              onClick: _v15,
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
        }), [_v15, _v10, _v14, _v8.params, _v8.paywallTracking]),
        _v17 = (0, _v2.useMemo)(() => (0, _v15.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: _v10((0, _v28.appendPaywallParams)((0, _v28.appendExtraQueryParams)((0, _v28.appendTrackingQueryParams)((0, _v28.getPlanCTALink)(_v2, _v3, _v8.campaignOverride), _v8.params), (0, _v48.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking)),
              onClick: _v15,
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
        }), [_v15, _v10, _v2, _v3, _v8.params, _v8.campaignOverride, _v8.paywallTracking]);
      (0, _v2.useEffect)(() => {
        let _v0,
          _v1 = "",
          _v2 = "";
        _v12 ? (_v0 = _v16, _v1 = "or start free trial", _v2 = _v14) : _v13 && (_v0 = _v17, _v1 = "or {A}purchase now{/A}", _v2 = (0, _v28.getPlanCTALink)(_v2, _v3, _v8.campaignOverride)), _v4.current = _v1, _v5.current = _v2, _v7(_v0);
      }, [_v12, _v13, _v3, _v2, _v16, _v17, _v14]);
      let _v18 = (0, _v28.shouldReserveSecondaryLinkSlot)(_v1, _v0, _v9);
      return !_v6 || _v11 || _v13 && !_v9 ? _v18 ? (0, _v1.jsx)(_v49, {
        children: " "
      }) : null : (0, _v1.jsx)(_v49, {
        "data-testid": "upsell-cta",
        children: _v6
      });
    },
    _v51 = ({
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
        _v15 = (0, _v2.useContext)(_v25.default),
        {
          stampCheckoutHref: _v16
        } = (0, _v14.useModalBundleState)(),
        _v17 = _v1.tier === _v41.PLANS.ENTERPRISE;
      _v0 || (_v0 = _v12 ? "purchase_secondary" : "free_trial_secondary"), _v17 ? (_v13 = _v24.default.contactSales, _v14 = "/enterprise/contact?mkc=ent-upgrade-plan-modal") : _v12 && ("free_trial_only" === _v0 || "purchase_secondary" === _v0) ? (_v13 = _v24.default.startFreeTrial, _v14 = (0, _v28.getPlanFreeTrialLink)(_v1, {
        isMonthly: _v2,
        allowMonthlyTrial: _v15.allowMonthlyTrial
      })) : (_v13 = _v24.default.upgrade, _v14 = (0, _v28.getPlanCTALink)(_v1, _v2, _v15.campaignOverride)), _v3 && (_v13 = _v3);
      let _v18 = "purchase_secondary" === _v0 || "free_trial_secondary" === _v0 && _v12;
      return (0, _v1.jsxs)(_v5.Box, {
        w: "100%",
        marginBottom: (0, _v12.rem)(8),
        children: [(0, _v1.jsx)(_v18.Button, {
          "data-testid": "upsell-cta",
          onClick: () => {
            _v15.onButtonClick && _v15.onButtonClick({
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
          href: _v16((0, _v28.appendExtraQueryParams)((0, _v28.appendPaywallParams)((0, _v28.appendTrackingQueryParams)(_v14, _v15.params), _v15.paywallTracking), _v17 ? void 0 : (0, _v48.getSatelliteCheckoutParamsFromCurrentLocation)()), !_v17),
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
        }), _v18 && (0, _v1.jsx)(_v50, {
          "data-testid": "upsell-secondary-cta",
          allowFreeTrial: _v12,
          ctaTreatment: _v0,
          displayMonthlyPlan: _v2,
          planData: _v1
        })]
      });
    },
    _v52 = new Set([_v41.PLANS.STARTER, _v41.PLANS.STANDARD, _v41.PLANS.ADVANCED, _v41.PLANS.CREATOR, _v41.PLANS.CORE, _v41.PLANS.PROFESSIONAL]),
    _v53 = _v0 => {
      let _v1 = _v0.planData.tier === _v41.PLANS.ENTERPRISE,
        _v2 = (0, _v36.useTheme)(),
        {
          showRecommendedBadge: _v3
        } = _v0,
        {
          colorMode: _v4
        } = (0, _v35.useColorMode)(),
        {
          offer: _v5,
          isBundleActive: _v6
        } = (0, _v14.useModalBundleState)(),
        _v7 = !_v1 && null !== _v5 && _v52.has(_v0.planData.tier) && "available" === _v0.planData.metadata.interactions.purchase.status,
        {
          semanticTokens: {
            colors: _v8
          }
        } = _v2,
        _v9 = "dark" === _v4 ? _v8["text-primary"].default : "white";
      return "dark" === _v4 ? _v8.grayscale["200"] : _v8.grayscale["700"], (0, _v1.jsxs)(_v5.Box, {
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
        background: _v9,
        borderRadius: (0, _v12.rem)(20),
        border: _v3 ? "4px solid #8a5ee8" : `${(0, _v12.rem)(1)} solid ${_v8.slate["200"]}`,
        borderTop: _v3 ? "none" : void 0,
        marginTop: {
          base: _v3 ? (0, _v12.rem)(20) : void 0,
          xl: 0
        },
        position: "relative",
        width: {
          base: "100%",
          md: (0, _v12.rem)(618),
          xl: "100%"
        },
        flexDirection: {
          base: "column",
          md: "row",
          xl: "column"
        },
        children: [_v0.showRecommendedBadge ? (0, _v1.jsx)(_v40.RecommendedBadge, {
          children: _v24.default.recommended
        }) : null, (0, _v1.jsxs)(_v34.Flex, {
          gap: "1rem",
          flexDirection: "column",
          width: {
            base: "100%",
            md: (0, _v12.rem)(220),
            xl: "100%"
          },
          children: [(0, _v1.jsx)(_v43, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            hideSubheading: _v0.hideSubheading
          }), _v7 && null !== _v5 && (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v37.BundlePlanCardStrip, {
              bundleType: _v5.bundleType,
              isVisible: _v6,
              price: _v5.price
            })
          }), (0, _v1.jsx)(_v46, {
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan,
            showAnnualAlternativeForMonthly: _v0.showAnnualAlternativeForMonthly
          }), (0, _v1.jsx)(_v51, {
            planData: _v0.planData,
            ctaTreatment: _v0.modalConfig?.ctaTreatment,
            allowFreeTrial: _v0?.allowFreeTrial,
            displayMonthlyPlan: _v0.displayMonthlyPlan,
            color: _v1 ? _v9 : "#0a0e12",
            backgroundColor: _v1 ? _v2?.modal?.planCard?.background ?? _v8["text-primary"].default : _v8["fill-brand"].default,
            border: _v1 ? `1px solid ${_v2?.modal?.enterprise?.border ?? "#000"}` : "none",
            buttonBottomSpacing: "0",
            whiteSpace: "break-spaces"
          })]
        }), (0, _v1.jsxs)(_v34.Flex, {
          gap: "lg",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v47.default, {
            modalConfig: _v0.modalConfig,
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v42, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            previousCardPlan: _v0.previousCardPlan
          })]
        })]
      });
    },
    _v54 = _v0 => {
      let {
          showIndividualPlans: _v1,
          coldStorageReorder: _v2,
          coldStorageResolving: _v3
        } = _v0,
        {
          second_free_trial_enabled: _v4,
          default_modal_monthly: _v5,
          homepage_paywall_monthly_free_trial: _v6
        } = (0, _v33.useOrionSettingsFields)(["second_free_trial_enabled", "default_modal_monthly", "homepage_paywall_monthly_free_trial"]),
        {
          capabilities: {
            hasSecondFreeTrialEligibility: _v7
          }
        } = (0, _v32.useCapability)(_v4 ? ["hasSecondFreeTrialEligibility"] : []),
        _v8 = !_v1,
        _v9 = [...(_v0.modalConfig?.excludePlans ?? []), ...(_v8 ? [_v41.PLANS.CREATOR, _v41.PLANS.PROFESSIONAL] : []), ...(_v2 ? [_v41.PLANS.STARTER, _v41.PLANS.PLUS] : [])];
      if (_v3) return null;
      let _v10 = (0, _v3.filterB2BRepackagingPlans)((0, _v28.filterPlansData)(_v0.plansData, _v0.userData, _v9), _v1),
        _v11 = _v0.modalConfig?.hidePlansSummary || _v10.length > 0 && (0, _v39.isSolutionTier)(_v10[0].tier),
        _v12 = (0, _v28.isEligibleForFreeTrial)(_v0.userData, _v4 && !!_v7),
        _v13 = (0, _v28.showMonthlyPlans)(_v0.plansData, _v5),
        _v14 = _v12 && _v10 && !!_v10[0].metadata.interactions.purchase.uri.freeTrial && (!_v13 || _v6);
      return (0, _v1.jsx)(_v31.Stack, {
        position: "relative",
        zIndex: 1,
        padding: `1rem 0 ${(0, _v12.rem)(20)} 0`,
        direction: {
          base: "column",
          xl: "row"
        },
        gap: "md",
        justifyContent: "center",
        children: _v10.map((_v0, _v1) => {
          let _v2 = (0, _v28.getPreviousPlanTierCopy)(_v10, _v0, _v1),
            _v3 = _v1 > 0 ? _v10[_v1 - 1].tier : null;
          return _v1 < 4 && (0, _v1.jsx)(_v53, {
            planData: _v0,
            userData: _v0.userData,
            previousCardPlan: _v2,
            modalConfig: _v0.modalConfig,
            showRecommendedBadge: _v0.modalConfig?.recommendedPlan ? _v0.tier === _v0.modalConfig?.recommendedPlan : (0, _v28.showRecommendedBadge)(_v0, _v1, _v3),
            displayMonthlyPlan: _v13,
            showAnnualAlternativeForMonthly: _v5,
            hideSubheading: _v11,
            allowFreeTrial: _v14
          }, `plan-card-${_v0.tier}`);
        })
      });
    };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = ["uri"],
    _v59 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v60 = () => {
      let _v0 = (0, _v16.useOrionSetting)("enable_cold_storage_plan_reorder"),
        _v1 = (0, _v57.useViewer)(),
        _v2 = _v1?.user?.id ?? null,
        _v3 = !!_v2 && _v0 && "paid" !== (0, _v56.deriveViewerAuthStatus)(_v1),
        {
          data: _v4,
          isLoading: _v5
        } = (0, _v55.useGetUserVideos)(() => _v3 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v58,
          query: {
            filter: "cold_storage",
            perPage: 1
          },
          headers: _v59
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          data: _v6,
          isLoading: _v7
        } = (0, _v55.useGetUserVideos)(() => _v3 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v58,
          query: {
            filter: "cold_privacy",
            perPage: 1
          },
          headers: _v59
        } : null, {
          revalidateOnFocus: !1
        });
      if (!_v3) return {
        shouldReorder: !1,
        isResolving: !1
      };
      let _v8 = (_v4?.total ?? 0) > 0,
        _v9 = (_v6?.total ?? 0) > 0;
      return {
        shouldReorder: _v8 || _v9,
        isResolving: _v5 || _v7
      };
    };
  _v0.s(["useColdStoragePlanReorder", 0, _v60], 0);
  let _v61 = "vimeo:default-modal-dismissed";
  _v0.s(["DEFAULT_MODAL_DISMISSED_EVENT", 0, _v61], 0), _v0.s(["default", 0, _v0 => {
    let {
        modalConfig: _v1,
        plansData: _v2
      } = _v0,
      _v3 = (0, _v16.useOrionSetting)("default_modal_monthly"),
      {
        showIndividualPlans: _v4
      } = (0, _v4.useB2BRepackagingContext)(),
      {
        shouldReorder: _v5,
        isResolving: _v6
      } = _v60(),
      _v7 = (0, _v2.useMemo)(() => {
        if (!_v0.userData || !_v2) return [];
        let _v0 = [...(_v1?.excludePlans ?? []), ...(_v4 ? [] : [_v41.PLANS.CREATOR, _v41.PLANS.PROFESSIONAL]), ...(_v5 ? [_v41.PLANS.STARTER, _v41.PLANS.PLUS] : [])];
        return (0, _v3.filterB2BRepackagingPlans)((0, _v28.filterPlansData)(_v2, _v0.userData, _v0), _v4).slice(0, 4);
      }, [_v0.userData, _v2, _v1?.excludePlans, _v4, _v5]),
      _v8 = (0, _v2.useMemo)(() => _v2 && 0 !== _v7.length ? (0, _v28.showMonthlyPlans)(_v2, _v3) ? ["monthly"] : ["yearly"] : [], [_v2, _v7, _v3]),
      {
        trackPaywallDismissed: _v9
      } = (0, _v17.usePaywallTracking)({
        ..._v0.tracking.paywallTracking,
        paywallStyle: "default_modal",
        paywallPlansDisplayed: _v7.map(_v0 => _v0.tier),
        paywallPeriodicitiesDisplayed: _v8,
        isVisible: !_v6
      }),
      _v10 = () => {
        _v9(), window.dispatchEvent(new CustomEvent(_v61)), _v0.onClose();
      },
      _v11 = _v1?.featuredBannerText,
      _v12 = !_v1?.suppressAllPaidPlansBanner && _v2?.length && (0, _v28.isSeatTierPlan)(_v2[0].tier) ? _v11 ?? (0, _v15.translate)({
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
      }) : (0, _v15.translate)({
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
    _v1 && (_v1.hasFreeFeaturedBanner = _v1?.hasFreeFeaturedBanner || void 0 !== _v11);
    let _v13 = _v1?.hasFreeFeaturedBanner;
    return (0, _v1.jsxs)(_v7.Modal, {
      "data-testid": "default-upsell-container",
      isOpen: !0,
      onClose: _v10,
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
        top: {
          base: "initial",
          sm: "sm",
          md: "lg",
          xl: "initial"
        },
        marginTop: _v13 ? (0, _v12.rem)(40) : void 0,
        alignSelf: {
          base: "flex-start",
          xl: "center"
        },
        maxWidth: {
          sm: (0, _v12.rem)(375),
          md: (0, _v12.rem)(618),
          lg: (0, _v12.rem)(618),
          xl: (0, _v12.rem)(0)
        },
        children: (0, _v1.jsxs)(_v8.ModalBody, {
          padding: {
            base: "md",
            xl: "lg"
          },
          children: [_v13 && (0, _v1.jsx)(_v5.Box, {
            borderRadius: "xl",
            position: "absolute",
            width: "100%",
            top: (0, _v12.rem)(-40),
            left: 0,
            verticalAlign: "middle",
            justifyItems: "center",
            pt: "sm",
            pb: "sm",
            pr: "md",
            pl: "md",
            backgroundColor: "upsell-secondary",
            height: (0, _v12.rem)(80),
            zIndex: -1,
            children: (0, _v1.jsxs)(_v6.HStack, {
              children: [(0, _v1.jsx)(_v13.Diamond, {
                h: "xs",
                w: "xs",
                color: "white",
                backgroundColor: "upsell-primary",
                borderRadius: (0, _v12.rem)(6),
                padding: (0, _v12.rem)(4)
              }), (0, _v1.jsx)(_v11.Text, {
                variant: "body-lg",
                color: "text-primary",
                children: _v12
              })]
            })
          }), (0, _v1.jsx)(_v30, {
            modalConfig: _v1,
            onClose: _v10,
            userName: _v0.userData?.name
          }), _v0.userData && _v2 && !_v6 && (0, _v1.jsx)(_v14.ModalBundleOffer, {
            periodicity: "monthly" === _v8[0] ? "monthly" : "annual",
            mode: _v0.bundleOffer?.mode,
            children: (0, _v1.jsx)(_v54, {
              modalConfig: _v1,
              userData: _v0.userData,
              plansData: _v2,
              showIndividualPlans: _v4,
              coldStorageReorder: _v5,
              coldStorageResolving: _v6
            })
          }), (0, _v1.jsx)(_v26, {})]
        })
      })]
    });
  }], 0);
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = ({
      onRequestEligibility: _v0
    }) => (0, _v1.jsxs)(_v72.AlertRoot, {
      variant: "info",
      borderRadius: (0, _v12.rem)(16),
      padding: {
        base: 3,
        md: 4
      },
      gap: 4,
      alignItems: "center",
      width: "100%",
      children: [(0, _v1.jsxs)(_v34.Flex, {
        direction: "column",
        gap: 1,
        width: "100%",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "body-lg",
          color: "text-primary",
          fontFamily: "heading",
          children: (0, _v15.translate)({
            singular: "Not a business?",
            dictionary: {
              es: {
                singular: "¿No es una empresa?"
              },
              "de-DE": {
                singular: "Kein Geschäftskonto?"
              },
              "fr-FR": {
                singular: "Pas une entreprise ?"
              },
              "ja-JP": {
                singular: "ビジネスではありませんか？"
              },
              "ko-KR": {
                singular: "비즈니스가 아니신가요?"
              },
              "pt-BR": {
                singular: "Não é uma empresa?"
              },
              "zh-CN": {
                singular: "不是企业账户？"
              }
            }
          })
        }), (0, _v1.jsxs)(_v11.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: [(0, _v15.translate)({
            singular: "Business accounts are not eligible for individual plans.",
            dictionary: {
              es: {
                singular: "Las cuentas empresariales no son elegibles para planes individuales."
              },
              "de-DE": {
                singular: "Geschäftskonten sind für Einzelpläne nicht berechtigt."
              },
              "fr-FR": {
                singular: "Les comptes professionnels ne sont pas éligibles aux plans individuels."
              },
              "ja-JP": {
                singular: "ビジネスアカウントは個人プランの対象外です。"
              },
              "ko-KR": {
                singular: "비즈니스 계정은 개인 요금제의 대상이 아닙니다."
              },
              "pt-BR": {
                singular: "Contas empresariais não são elegíveis para planos individuais."
              },
              "zh-CN": {
                singular: "企业账户不符合个人计划资格。"
              }
            }
          }), (0, _v1.jsx)("br", {}), (0, _v15.translate)({
            singular: "If you believe you have been misclassified, you can request eligibility for individual plans",
            dictionary: {
              es: {
                singular: "Si considera que ha sido clasificado erróneamente, puede solicitar la elegibilidad para planes individuales"
              },
              "de-DE": {
                singular: "Wenn Sie glauben, falsch eingestuft worden zu sein, können Sie die Berechtigung für Einzelpläne anfordern"
              },
              "fr-FR": {
                singular: "Si vous pensez avoir été mal classé, vous pouvez demander à être éligible aux plans individuels"
              },
              "ja-JP": {
                singular: "誤って分類されていると思われる場合は、個人プランの適用を申請できます"
              },
              "ko-KR": {
                singular: "자신이 잘못 분류되었다고 생각하시면 개인 요금제 자격을 요청할 수 있습니다"
              },
              "pt-BR": {
                singular: "Se você acredita que foi classificado incorretamente, pode solicitar elegibilidade para planos individuais"
              },
              "zh-CN": {
                singular: "如果您认为您被错误分类，您可以申请个人计划资格"
              }
            }
          })]
        })]
      }), (0, _v1.jsx)(_v18.Button, {
        size: "md",
        flexShrink: 0,
        bgColor: "blue.500",
        color: "white",
        _hover: {
          backgroundColor: "blue.600"
        },
        _dark: {
          bgColor: "blue.500",
          color: "white"
        },
        onClick: _v0,
        children: (0, _v15.translate)({
          singular: "Request now",
          dictionary: {
            es: {
              singular: "Solicitar ahora"
            },
            "de-DE": {
              singular: "Jetzt anfordern"
            },
            "fr-FR": {
              singular: "Demandez maintenant"
            },
            "ja-JP": {
              singular: "今すぐ申請"
            },
            "ko-KR": {
              singular: "지금 요청"
            },
            "pt-BR": {
              singular: "Solicitar agora"
            },
            "zh-CN": {
              singular: "立即申请"
            }
          }
        })
      })]
    }),
    _v74 = (0, _v12.rem)(20),
    _v75 = (_v0, _v1) => new Intl.NumberFormat("en", {
      style: "currency",
      currency: _v1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(_v0);
  _v0.s(["default", 0, ({
    modalConfig: _v0,
    studioPlan: _v1,
    professionalPlan: _v2,
    isAnnual: _v3,
    onClose: _v4,
    tracking: _v5
  }) => {
    let _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      {
        isWhitelistedForIndPlans: _v11,
        hasSubmittedSurvey: _v12
      } = (0, _v4.useB2BRepackagingContext)(),
      [_v13, _v14] = (0, _v2.useState)(!1),
      _v15 = (0, _v2.useRef)(!1),
      {
        acceptRenewalOffer: _v16
      } = (0, _v62.useAcceptStudioRenewalOffer)(),
      {
        trackStudioRenewalOfferCtaClicked: _v17,
        trackStudioRenewalOfferAccepted: _v18,
        trackStudioRenewalOfferFailed: _v19
      } = (0, _v71.useStudioRenewalOfferTracking)(),
      {
        trackIndividualEligibilityCtaClicked: _v20
      } = (0, _v70.useIndividualEligibilityTracking)(),
      {
        open: _v21,
        modal: _v22
      } = (0, _v63.useIndividualEligibilityModal)({
        initialStep: _v12 && !_v11 ? "not_qualified" : void 0
      }),
      _v23 = (0, _v65.useToast)(),
      _v24 = (0, _v28.getPlanFeaturesList)(_v0, _v1),
      _v25 = _v1.currency.currencyCode,
      _v26 = (_v6 = _v1.metadata.entitlements?.params, _v7 = _v6?.teamSeats ?? null, _v8 = _v6?.restrictedVideoStorageLimit ?? null, _v9 = _v6?.bandwidth ?? null, _v10 = [], null !== _v7 && _v10.push({
        icon: (0, _v1.jsx)(_v69.Users, {
          width: (0, _v12.rem)(20),
          height: (0, _v12.rem)(20)
        }),
        value: (0, _v15.translate)({
          singular: "{AMOUNT} users (up to {ADD_USERS})",
          replacements: {
            AMOUNT: _v7,
            ADD_USERS: 200
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
            },
            "de-DE": {
              singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
            },
            "fr-FR": {
              singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
            },
            "ja-JP": {
              singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
            },
            "ko-KR": {
              singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
            },
            "pt-BR": {
              singular: "{AMOUNT} usuários (até {ADD_USERS})"
            },
            "zh-CN": {
              singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
            }
          }
        })
      }), null !== _v8 && _v10.push({
        icon: (0, _v1.jsx)(_v67.ManagedStorage, {
          width: (0, _v12.rem)(20),
          height: (0, _v12.rem)(20)
        }),
        value: (0, _v15.translate)({
          singular: "{AMOUNT} managed storage",
          replacements: {
            AMOUNT: _v8
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento gestionado"
            },
            "de-DE": {
              singular: "{AMOUNT} verwalteter Speicherplatz"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage géré"
            },
            "ja-JP": {
              singular: "{AMOUNT} 管理対象ストレージ"
            },
            "ko-KR": {
              singular: "{AMOUNT} 관리형 저장소"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento gerenciado"
            },
            "zh-CN": {
              singular: "{AMOUNT} 托管存储"
            }
          }
        })
      }), _v10.push({
        icon: (0, _v1.jsx)(_v68.Speedometer, {
          width: (0, _v12.rem)(20),
          height: (0, _v12.rem)(20)
        }),
        value: _v9?.quotaPeriod === "year" ? (0, _v15.translate)({
          singular: "{AMOUNT}/yr managed bandwidth",
          replacements: {
            AMOUNT: _v9.periodicQuota ?? ""
          },
          dictionary: {
            es: {
              singular: "{AMOUNT}/yr ancho de banda gestionado"
            },
            "de-DE": {
              singular: "{AMOUNT}/yr verwaltete Bandbreite"
            },
            "fr-FR": {
              singular: "{AMOUNT}/yr de bande passante gérée"
            },
            "ja-JP": {
              singular: "{AMOUNT}/yr 管理対象帯域幅"
            },
            "ko-KR": {
              singular: "{AMOUNT}/yr 관리형 대역폭"
            },
            "pt-BR": {
              singular: "{AMOUNT}/ano de largura de banda gerenciada"
            },
            "zh-CN": {
              singular: "{AMOUNT}/yr 托管带宽"
            }
          }
        }) : (0, _v15.translate)({
          singular: "{AMOUNT}/mo managed bandwidth",
          replacements: {
            AMOUNT: _v9?.periodicQuota ?? ""
          },
          dictionary: {
            es: {
              singular: "{AMOUNT}/mo ancho de banda gestionado"
            },
            "de-DE": {
              singular: "{AMOUNT}/mo verwaltete Bandbreite"
            },
            "fr-FR": {
              singular: "{AMOUNT}/mo de bande passante gérée"
            },
            "ja-JP": {
              singular: "{AMOUNT}/mo 管理対象帯域幅"
            },
            "ko-KR": {
              singular: "{AMOUNT}/mo 관리형 대역폭"
            },
            "pt-BR": {
              singular: "{AMOUNT}/mês de largura de banda gerenciada"
            },
            "zh-CN": {
              singular: "{AMOUNT}/mo 托管带宽"
            }
          }
        })
      }), _v10),
      _v27 = _v3 ? _v1.price.annualMonthly : _v1.price.monthly,
      _v28 = _v3 ? _v2?.price.annualMonthly : _v2?.price.monthly,
      _v29 = null != _v27 && null != _v28 && _v28 > 0 && _v28 < _v27 ? Math.floor((_v27 - _v28) / _v27 * 100) : null;
    (0, _v71.useStudioRenewalOfferDisplayed)({
      isOpen: !0,
      savingsPercent: _v29 ?? 0,
      location: "upsell_modal"
    }), (0, _v71.useStudioRenewalOfferDismissed)({
      isOpen: !0,
      savingsPercent: _v29 ?? 0,
      wasAcceptedRef: _v15,
      location: "upsell_modal"
    });
    let _v30 = (0, _v15.translate)({
        singular: "Purchase at {PERCENT}% discount",
        replacements: {
          PERCENT: _v29 ?? 0
        },
        dictionary: {
          es: {
            singular: "Comprar con un {PERCENT}% de descuento"
          },
          "de-DE": {
            singular: "Kauf mit {PERCENT}% Rabatt"
          },
          "fr-FR": {
            singular: "Achetez avec {PERCENT}% de réduction"
          },
          "ja-JP": {
            singular: "{PERCENT}%割引で購入"
          },
          "ko-KR": {
            singular: "구매 시 {PERCENT}% 할인"
          },
          "pt-BR": {
            singular: "Compre com {PERCENT}% de desconto"
          },
          "zh-CN": {
            singular: "以 {PERCENT}% 折扣购买"
          }
        }
      }),
      _v31 = (0, _v2.useCallback)(() => {
        _v20({
          location: "upgrade_modal_banner"
        }), _v21("upgrade_modal_banner");
      }, [_v20, _v21]),
      _v32 = (0, _v2.useCallback)(async () => {
        if (null == _v29) return;
        let _v0 = _v3 ? _v1.id?.annual ?? "" : _v1.id?.monthly ?? "";
        if ("" !== _v0) {
          _v17({
            copy: _v30,
            savingsPercent: _v29,
            location: "upsell_modal"
          }), _v5.onButtonClick?.({
            copy: _v30,
            duration: _v3 ? "annual" : "monthly",
            price: _v28 ?? 0,
            currency: _v25,
            plan_selected: _v41.PLANS.STUDIO,
            target_path: "",
            free_trial: !1
          }), _v14(!0);
          try {
            await _v16({
              billingPlanId: _v0,
              discountPercent: _v29
            }), _v15.current = !0;
          } catch (_v0) {
            _v19({
              errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
              location: "upsell_modal"
            }), _v23({
              variant: "warning",
              title: (0, _v15.translate)({
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
            }), _v14(!1);
            return;
          }
          try {
            await _v18({
              savingsPercent: _v29,
              periodicity: _v3 ? "annual" : "monthly",
              location: "upsell_modal"
            });
          } catch (_v0) {
            console.warn("Failed to track studio_renewal_offer_accepted", _v0);
          }
          window.location.reload(), _v14(!1);
        }
      }, [_v16, _v30, _v3, _v28, _v29, _v25, _v1, _v23, _v17, _v18, _v19, _v5]);
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: !0,
      onClose: _v4,
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
        maxWidth: {
          base: "100%",
          md: (0, _v12.rem)(720)
        },
        alignSelf: "center",
        children: (0, _v1.jsxs)(_v8.ModalBody, {
          padding: {
            base: 4,
            md: 6
          },
          position: "relative",
          children: [(0, _v1.jsx)(_v29.default, {
            margin: (0, _v12.rem)(8),
            onClose: _v4
          }), (0, _v1.jsx)(_v21, {
            children: (0, _v1.jsx)(_v5.Box, {
              as: "h2",
              width: "100%",
              textAlign: "center",
              fontSize: {
                base: (0, _v12.rem)(24),
                md: (0, _v12.rem)(30)
              },
              fontFamily: "heading",
              color: "text-primary",
              marginBottom: (0, _v12.rem)(16),
              children: _v24.default.defaultHeader
            })
          }), (0, _v1.jsxs)(_v5.Box, {
            display: "flex",
            flexDirection: "column",
            width: (0, _v12.rem)(304),
            maxWidth: "100%",
            margin: "0 auto",
            position: "relative",
            children: [(0, _v1.jsx)(_v5.Box, {
              backgroundColor: "upsell-primary",
              color: "white",
              borderTopLeftRadius: _v74,
              borderTopRightRadius: _v74,
              paddingY: (0, _v12.rem)(6),
              textAlign: "center",
              fontSize: (0, _v12.rem)(12),
              fontFamily: "heading",
              letterSpacing: (0, _v12.rem)(.24),
              children: _v24.default.recommended
            }), (0, _v1.jsxs)(_v5.Box, {
              backgroundColor: "surface",
              border: "2px solid",
              borderColor: "upsell-primary",
              borderTop: "none",
              borderBottomLeftRadius: _v74,
              borderBottomRightRadius: _v74,
              padding: (0, _v12.rem)(24),
              display: "flex",
              flexDirection: "column",
              gap: (0, _v12.rem)(16),
              children: [(0, _v1.jsx)(_v5.Box, {
                fontFamily: "heading",
                fontSize: (0, _v12.rem)(22),
                color: "text-primary",
                children: _v1.name
              }), (0, _v1.jsxs)(_v5.Box, {
                display: "flex",
                flexDirection: "column",
                gap: (0, _v12.rem)(4),
                children: [(0, _v1.jsxs)(_v5.Box, {
                  display: "flex",
                  alignItems: "baseline",
                  gap: (0, _v12.rem)(8),
                  children: [(0, _v1.jsx)(_v5.Box, {
                    fontFamily: "heading",
                    fontSize: (0, _v12.rem)(30),
                    color: "text-primary",
                    children: null != _v28 ? _v75(_v28, _v25) : ""
                  }), (0, _v1.jsx)(_v5.Box, {
                    as: "span",
                    fontFamily: "body",
                    fontSize: (0, _v12.rem)(16),
                    color: "text-tertiary",
                    textDecoration: "line-through",
                    children: null != _v27 ? _v75(_v27, _v25) : ""
                  }), null != _v29 && (0, _v1.jsx)(_v64.Badge, {
                    size: "sm",
                    backgroundColor: "status-positive-secondary",
                    textColor: "status-positive-primary",
                    border: "none",
                    borderRadius: "999px",
                    px: 2,
                    py: 1,
                    children: (0, _v15.translate)({
                      singular: "Save {PERCENT}%",
                      replacements: {
                        PERCENT: _v29
                      },
                      dictionary: {
                        es: {
                          singular: "Ahorre {PERCENT}%"
                        },
                        "de-DE": {
                          singular: "Sparen Sie {PERCENT}%"
                        },
                        "fr-FR": {
                          singular: "Économisez {PERCENT}%"
                        },
                        "ja-JP": {
                          singular: "{PERCENT}%節約"
                        },
                        "ko-KR": {
                          singular: "{PERCENT}% 절약"
                        },
                        "pt-BR": {
                          singular: "Economize {PERCENT}%"
                        },
                        "zh-CN": {
                          singular: "节省 {PERCENT}%"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsx)(_v5.Box, {
                  fontFamily: "body",
                  fontSize: (0, _v12.rem)(12),
                  color: "text-secondary",
                  children: _v3 ? _v24.default.perMonthBilledAnually : _v24.default.perMonthBilledMonthly
                })]
              }), (0, _v1.jsx)(_v18.Button, {
                variant: "primary",
                size: "md",
                width: "100%",
                onClick: () => void _v32(),
                isLoading: _v13,
                isDisabled: _v13,
                children: _v30
              }), (0, _v1.jsx)(_v5.Box, {
                display: "flex",
                flexDirection: "column",
                gap: (0, _v12.rem)(4),
                children: _v26.map(_v0 => (0, _v1.jsxs)(_v5.Box, {
                  display: "flex",
                  gap: (0, _v12.rem)(4),
                  alignItems: "flex-start",
                  children: [(0, _v1.jsx)(_v5.Box, {
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: (0, _v12.rem)(2),
                    flexShrink: 0,
                    children: _v0.icon
                  }), (0, _v1.jsx)(_v5.Box, {
                    fontFamily: "body",
                    fontSize: (0, _v12.rem)(14),
                    color: "text-primary",
                    lineHeight: (0, _v12.rem)(20),
                    children: _v0.value
                  })]
                }, `studio-offer-quota-${_v0.value}`))
              }), (0, _v1.jsxs)(_v5.Box, {
                borderTop: "1px solid var(--vimeo-colors-stroke)",
                paddingTop: (0, _v12.rem)(12),
                children: [(0, _v1.jsx)(_v5.Box, {
                  fontFamily: "heading",
                  fontSize: (0, _v12.rem)(14),
                  color: "text-primary",
                  marginBottom: (0, _v12.rem)(4),
                  children: _v24.default.keyFeatures
                }), (0, _v1.jsx)(_v5.Box, {
                  as: "ul",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: (0, _v12.rem)(4),
                  children: (_v24 ?? []).map(_v0 => (0, _v1.jsxs)(_v5.Box, {
                    as: "li",
                    display: "flex",
                    gap: (0, _v12.rem)(4),
                    alignItems: "flex-start",
                    children: [(0, _v1.jsx)(_v5.Box, {
                      as: "span",
                      display: "flex",
                      alignItems: "flex-start",
                      paddingTop: (0, _v12.rem)(2),
                      flexShrink: 0,
                      children: (0, _v1.jsx)(_v66.CheckSmall, {
                        height: (0, _v12.rem)(16),
                        width: (0, _v12.rem)(16)
                      })
                    }), (0, _v1.jsx)(_v5.Box, {
                      fontFamily: "body",
                      fontSize: (0, _v12.rem)(14),
                      color: "text-primary",
                      lineHeight: (0, _v12.rem)(20),
                      children: _v0
                    })]
                  }, `studio-offer-feature-${_v0}`))
                })]
              })]
            })]
          }), (0, _v1.jsx)(_v5.Box, {
            marginTop: {
              base: 4,
              md: 6
            },
            children: (0, _v1.jsx)(_v73, {
              onRequestEligibility: _v31
            })
          }), (0, _v1.jsx)(_v5.Box, {
            marginTop: {
              base: 2,
              md: 4
            },
            children: (0, _v1.jsx)(_v26, {})
          }), _v22]
        })
      })]
    });
  }], 0);
}