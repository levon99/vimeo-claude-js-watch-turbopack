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
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  (0, _v41.default)(_v42.Modal).withConfig({
    displayName: "styles__UpsellModal",
    componentId: "sc-9bccf073-0"
  })`
  ${_v0 => _v0.isBokeh && "font-family: 'ABCRepro-Regular', sans-serif !important;"}
  ${_v0 => _v0.hasFreeFeaturedBanner && "margin-top: 40px;"}
  background: var(--vimeo-colors-fill-surface);
  min-width: 62.5rem;
  width: 100%;
  height: auto;
  max-width: ${(0, _v35.rem)(0)};
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
`, _v41.default.div.withConfig({
    displayName: "styles__ModalWrapper",
    componentId: "sc-9bccf073-1"
  })`
  padding: ${(0, _v35.rem)(32)} ${(0, _v35.rem)(32)} ${(0, _v35.rem)(16)};
`;
  let _v43 = _v41.default.div.withConfig({
    displayName: "styles__HeaderContainer",
    componentId: "sc-9bccf073-2"
  })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v35.rem)(24)} ${(0, _v35.rem)(24)};
  align-items: center;
  align-self: stretch;
`;
  _v41.default.div.withConfig({
    displayName: "styles__HeaderWrapper",
    componentId: "sc-9bccf073-3"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v35.rem)(28)};
  font-weight: 700;
  line-height: 118%;
  letter-spacing: ${(0, _v35.rem)(-1)};
  text-align: center;
  margin-bottom: ${(0, _v35.rem)(4)};
`;
  let _v44 = _v41.default.p.withConfig({
    displayName: "styles__SubHeader",
    componentId: "sc-9bccf073-4"
  })`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--vimeo-colors-text-primary);
`;
  _v41.default.div.withConfig({
    displayName: "styles__PlansContainer",
    componentId: "sc-9bccf073-5"
  })`
  padding: 1rem 0 ${(0, _v35.rem)(20)} 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  z-index: 1;
  position: relative;
`;
  let _v45 = _v41.default.div.withConfig({
    displayName: "styles__FooterContainer",
    componentId: "sc-9bccf073-6"
  })`
  margin: 0 -1rem;
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = () => {
    let _v0 = (0, _v2.useContext)(_v30.default),
      _v1 = _v47.default.compareAllPlanFeatures;
    return (0, _v1.jsx)(_v45, {
      children: (0, _v1.jsx)(_v39.Button, {
        "data-testid": "upsell-cta",
        size: "md",
        href: (0, _v40.buildUpgradePlanUrl)(_v0.paywallTracking, {
          upsell: _v0.params.upsell_name || "none",
          integration: _v0.params.integration || "none",
          feature: _v0.params.feature || "none"
        }),
        target: "_blank",
        as: "a",
        variant: "minmal",
        onClick: () => {
          _v46.default.trackButtonClick({
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
  };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = _v0 => {
    let _v1 = (0, _v50.getModalSubheader)(_v0.modalConfig?.subHeaderText),
      _v2 = _v0.modalConfig?.headerText;
    return (0, _v1.jsxs)(_v43, {
      children: [(0, _v1.jsxs)(_v32.Box, {
        w: "100%",
        px: {
          base: (0, _v35.rem)(16),
          md: 0
        },
        children: ["" !== _v2 && null !== _v2 && (0, _v1.jsx)(_v49.Header, {
          size: "lg",
          "data-testid": "upsell-header-text",
          textAlign: "center",
          children: (0, _v50.getModalHeader)(_v0.modalConfig?.headerText)
        }), _v1 ? (0, _v1.jsx)(_v44, {
          "data-testid": "upsell-subheader-text",
          children: _v1
        }) : null]
      }), (0, _v1.jsx)(_v51.default, {
        margin: (0, _v35.rem)(8),
        onClose: _v0.onClose
      })]
    });
  };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = _v0 => {
      let _v1 = _v0.previousCardPlan ? _v47.default.everythingInPlan((0, _v58.getTierDisplayName)(_v0.previousCardPlan) ?? _v0.previousCardPlan) : _v47.default.keyFeatures,
        _v2 = (0, _v50.getPlanFeaturesList)(_v0.modalConfig, _v0.planData),
        _v3 = _v0.planData.tier,
        _v4 = (0, _v50.isRepackagingTier)(_v3) ? _v2?.length ?? 0 : _v3 === _v60.PLANS.ENTERPRISE ? 5 : [_v60.PLANS.STARTER, _v60.PLANS.PLUS].includes(_v3) ? 3 : 4;
      return _v2 && _v2.length > 0 ? (0, _v1.jsxs)(_v59.PlansFeaturesContainer, {
        children: [(0, _v1.jsx)(_v34.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm",
            xl: "heading-xs"
          },
          fontWeight: "600",
          children: _v1
        }), (0, _v1.jsx)(_v59.FeaturesWrapper, {
          children: _v2.slice(0, _v4).map((_v0, _v1) => (0, _v1.jsxs)(_v59.FeatureList, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v57.Checkmark, {
                height: (0, _v35.rem)(16),
                width: (0, _v35.rem)(16)
              })
            }), (0, _v1.jsx)(_v34.Text, {
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
    _v62 = ({
      planData: _v0,
      modalConfig: _v1,
      hideSubheading: _v2
    }) => {
      let _v3 = (0, _v50.getPlanSubHeading)(_v1, _v0),
        _v4 = (0, _v50.getBandwidthSubHeader)(_v0);
      return (0, _v1.jsxs)(_v59.PlanHeader, {
        style: {
          height: _v2 ? "" : "4rem"
        },
        children: [(0, _v1.jsx)(_v59.PlanTitle, {
          children: _v0.name
        }), (0, _v1.jsx)(_v49.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v4
        }), (!_v2 && !_v0.metadata.isBandwidthProduct && _v3 && _v3.length) > 0 ? (0, _v1.jsx)(_v59.PlanSubTitle, {
          children: _v3
        }) : null]
      });
    };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
    planData: _v0,
    displayMonthlyPlan: _v1,
    showAnnualAlternativeForMonthly: _v2
  }) => {
    let {
        entitlements: _v3
      } = _v0.metadata,
      _v4 = _v0.metadata.isBandwidthProduct,
      _v5 = (0, _v65.useViewer)(),
      _v6 = (0, _v64.isUkLocation)(_v5?.location),
      _v7 = (_v6 ? (0, _v50.getUkVatDisplayPrice)(_v0, _v1, _v4) : null) ?? (0, _v50.getPlanDisplayPrice)(_v0, _v1, _v4),
      _v8 = (0, _v50.getPlanBillingFrequencyCopy)(_v1, _v0, _v4, _v2),
      _v9 = _v1 && _v2 ? _v47.default.perMonthBilledMonthly : _v47.default.perMonthBilledAnually;
    return (0, _v1.jsx)(_v7.Flex, {
      flexDirection: "column",
      gap: {
        base: "xs",
        md: "sm",
        xl: "xs"
      },
      minHeight: {
        base: "initial",
        xl: (0, _v35.rem)(80)
      },
      maxHeight: {
        base: "initial",
        xl: (0, _v35.rem)(80)
      },
      children: _v0.tier === _v60.PLANS.ENTERPRISE ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v34.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: (0, _v1.jsx)(_v63.Building, {
            h: (0, _v35.rem)(40),
            w: (0, _v35.rem)(40)
          })
        }), (0, _v1.jsx)(_v34.Text, {
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
          children: _v47.default.talkToTeam
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v34.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: _v7
        }), (0, _v1.jsxs)(_v34.Text, {
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
          children: [_v4 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v60.SEAT_TIER_PLANS.includes(_v0.tier) ? _v3?.params?.videoStorageQuotaUnit === "video_size" ? _v9 : _v47.default.perSeatPerMonth : _v47.default.perMonth, (0, _v1.jsx)("br", {})]
          }), _v8 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v8, (0, _v1.jsx)("br", {})]
          }), _v6 ? _v47.default.inclVat20 : _v47.default.plusApplicableTax]
        })]
      })
    });
  };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = _v41.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-3c30b0dd-0"
    })`
  font-size: ${(0, _v35.rem)(14)};
  margin-top: ${(0, _v35.rem)(8)};
  padding: ${(0, _v35.rem)(11)} ${(0, _v35.rem)(16)};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: ${(0, _v35.rem)(17.64)};
  width: 100%;

  a:after {
    content: none;
  }

  a {
    text-decoration: underline !important;
  }
`,
    _v70 = ({
      allowFreeTrial: _v0,
      ctaTreatment: _v1 = "purchase_secondary",
      planData: _v2,
      displayMonthlyPlan: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(void 0),
        _v5 = (0, _v2.useRef)(void 0),
        [_v6, _v7] = (0, _v2.useState)(void 0),
        _v8 = (0, _v2.useContext)(_v30.default),
        {
          stampCheckoutHref: _v9
        } = (0, _v37.useModalBundleState)(),
        _v10 = _v2.tier === _v60.PLANS.ENTERPRISE,
        _v11 = "free_trial_secondary" === _v1 && _v0,
        _v12 = "purchase_secondary" === _v1,
        _v13 = (0, _v50.getPlanFreeTrialLink)(_v2, {
          isMonthly: _v3,
          allowMonthlyTrial: _v8.allowMonthlyTrial
        }),
        _v14 = (0, _v2.useCallback)(() => {
          let {
              tier: _v0,
              price: _v1,
              currency: _v2
            } = _v2,
            _v3 = _v4?.current?.replace(/{\/?A}/g, "").trim();
          _v46.default.trackButtonClick({
            ..._v8.params,
            copy: _v3,
            currency: _v2.currencyCode,
            device_type: _v8.device_type,
            duration: _v3 ? "monthly" : "annual",
            is_new_pricing: (0, _v50.isSeatTierPlan)(_v0),
            path: window.location.href,
            plan_selected: _v0,
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            purchase_type: _v11 ? "trial" : "direct",
            target: "checkout",
            target_path: _v5.current
          }, _v8.bpEventVersion), _v8.onButtonClick && _v8.onButtonClick({
            copy: _v3,
            duration: _v3 ? "monthly" : "annual",
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            currency: _v2.currencyCode,
            plan_selected: _v0,
            target_path: _v5.current,
            free_trial: _v11
          });
        }, [_v3, _v11, _v2, _v8]),
        _v15 = (0, _v2.useMemo)(() => (0, _v38.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: _v9((0, _v50.appendPaywallParams)((0, _v50.appendExtraQueryParams)((0, _v50.appendTrackingQueryParams)(_v13, _v8.params), (0, _v68.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking)),
              onClick: _v14,
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
        }), [_v14, _v9, _v13, _v8.params, _v8.paywallTracking]),
        _v16 = (0, _v2.useMemo)(() => (0, _v38.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: _v9((0, _v50.appendPaywallParams)((0, _v50.appendExtraQueryParams)((0, _v50.appendTrackingQueryParams)((0, _v50.getPlanCTALink)(_v2, _v3, _v8.campaignOverride), _v8.params), (0, _v68.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking)),
              onClick: _v14,
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
        }), [_v14, _v9, _v2, _v3, _v8.params, _v8.campaignOverride, _v8.paywallTracking]);
      return (0, _v2.useEffect)(() => {
        let _v0,
          _v1 = "",
          _v2 = "";
        _v11 ? (_v0 = _v15, _v1 = "or start free trial", _v2 = _v13) : _v12 && (_v0 = _v16, _v1 = "or {A}purchase now{/A}", _v2 = (0, _v50.getPlanCTALink)(_v2, _v3, _v8.campaignOverride)), _v4.current = _v1, _v5.current = _v2, _v7(_v0);
      }, [_v11, _v12, _v3, _v2, _v15, _v16, _v13]), _v6 && !_v10 ? (0, _v1.jsx)(_v69, {
        "data-testid": "upsell-cta",
        children: _v6
      }) : (0, _v1.jsx)(_v69, {
        children: " "
      });
    },
    _v71 = ({
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
        _v16 = (0, _v2.useContext)(_v30.default),
        {
          stampCheckoutHref: _v17
        } = (0, _v37.useModalBundleState)(),
        _v18 = _v1.tier === _v60.PLANS.ENTERPRISE;
      _v0 || (_v0 = _v12 ? "purchase_secondary" : "free_trial_secondary"), _v18 ? (_v13 = _v47.default.contactSales, _v14 = "/enterprise/contact?mkc=ent-upgrade-plan-modal", _v15 = "direct") : _v12 && ("free_trial_only" === _v0 || "purchase_secondary" === _v0) ? (_v13 = _v47.default.startFreeTrial, _v14 = (0, _v50.getPlanFreeTrialLink)(_v1, {
        isMonthly: _v2,
        allowMonthlyTrial: _v16.allowMonthlyTrial
      }), _v15 = "trial") : (_v13 = _v47.default.upgrade, _v14 = (0, _v50.getPlanCTALink)(_v1, _v2, _v16.campaignOverride), _v15 = "direct"), _v3 && (_v13 = _v3);
      let _v19 = "purchase_secondary" === _v0 || "free_trial_secondary" === _v0 && _v12;
      return (0, _v1.jsxs)(_v32.Box, {
        w: "100%",
        marginBottom: (0, _v35.rem)(8),
        children: [(0, _v1.jsx)(_v39.Button, {
          "data-testid": "upsell-cta",
          onClick: () => {
            _v46.default.trackButtonClick({
              ..._v16.params,
              copy: _v13,
              currency: _v1.currency.currencyCode,
              device_type: _v16.device_type,
              duration: _v2 ? "monthly" : "annual",
              is_new_pricing: (0, _v50.isSeatTierPlan)(_v1.tier),
              path: window.location ? window.location.href : "",
              plan_selected: _v1.tier,
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              purchase_type: _v15,
              target: _v18 ? "enterprise_contact_page" : "checkout",
              target_path: _v14
            }, _v16.bpEventVersion), _v16.onButtonClick && _v16.onButtonClick({
              copy: _v13,
              duration: _v2 ? "monthly" : "annual",
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              currency: _v1.currency.currencyCode,
              plan_selected: _v1.tier,
              target_path: _v14,
              free_trial: _v12 && !_v18
            });
          },
          as: "a",
          target: "_blank",
          w: "100%",
          href: _v17((0, _v50.appendExtraQueryParams)((0, _v50.appendPaywallParams)((0, _v50.appendTrackingQueryParams)(_v14, _v16.params), _v16.paywallTracking), _v18 ? void 0 : (0, _v68.getSatelliteCheckoutParamsFromCurrentLocation)()), !_v18),
          size: "md",
          ...(!_v18 && {
            _hover: {
              backgroundColor: "vimeoBlue.300"
            }
          }),
          backgroundColor: _v10 || (_v18 ? "text-primary" : "fill-brand"),
          marginBottom: _v7,
          paddingY: _v6,
          paddingX: _v5,
          borderRadius: _v4,
          border: _v8,
          color: _v9,
          whiteSpace: _v11,
          children: _v13
        }), _v19 && (0, _v1.jsx)(_v70, {
          "data-testid": "upsell-secondary-cta",
          allowFreeTrial: _v12,
          ctaTreatment: _v0,
          displayMonthlyPlan: _v2,
          planData: _v1
        })]
      });
    },
    _v72 = new Set([_v60.PLANS.STARTER, _v60.PLANS.STANDARD, _v60.PLANS.ADVANCED, _v60.PLANS.CREATOR, _v60.PLANS.CORE, _v60.PLANS.PROFESSIONAL]),
    _v73 = _v0 => {
      let _v1 = _v0.planData.tier === _v60.PLANS.ENTERPRISE,
        _v2 = (0, _v55.useTheme)(),
        {
          showRecommendedBadge: _v3
        } = _v0,
        {
          colorMode: _v4
        } = (0, _v54.useColorMode)(),
        {
          offer: _v5,
          isBundleActive: _v6
        } = (0, _v37.useModalBundleState)(),
        _v7 = !_v1 && null !== _v5 && _v72.has(_v0.planData.tier) && "available" === _v0.planData.metadata.interactions.purchase.status,
        {
          semanticTokens: {
            colors: _v8
          }
        } = _v2,
        _v9 = "dark" === _v4 ? _v8["text-primary"].default : "white";
      return "dark" === _v4 ? _v8.grayscale["200"] : _v8.grayscale["700"], (0, _v1.jsxs)(_v32.Box, {
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
        borderRadius: (0, _v35.rem)(20),
        border: _v3 ? "4px solid #8a5ee8" : `${(0, _v35.rem)(1)} solid ${_v8.slate["200"]}`,
        borderTop: _v3 ? "none" : void 0,
        marginTop: {
          base: _v3 ? (0, _v35.rem)(20) : void 0,
          xl: 0
        },
        position: "relative",
        width: {
          base: "100%",
          md: (0, _v35.rem)(618),
          xl: "100%"
        },
        flexDirection: {
          base: "column",
          md: "row",
          xl: "column"
        },
        children: [_v0.showRecommendedBadge ? (0, _v1.jsx)(_v59.RecommendedBadge, {
          children: _v47.default.recommended
        }) : null, (0, _v1.jsxs)(_v7.Flex, {
          gap: "1rem",
          flexDirection: "column",
          width: {
            base: "100%",
            md: (0, _v35.rem)(220),
            xl: "100%"
          },
          children: [(0, _v1.jsx)(_v62, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            hideSubheading: _v0.hideSubheading
          }), _v7 && null !== _v5 && (0, _v1.jsx)(_v32.Box, {
            children: (0, _v1.jsx)(_v56.BundlePlanCardStrip, {
              bundleType: _v5.bundleType,
              isVisible: _v6,
              price: _v5.price
            })
          }), (0, _v1.jsx)(_v66, {
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan,
            showAnnualAlternativeForMonthly: _v0.showAnnualAlternativeForMonthly
          }), (0, _v1.jsx)(_v71, {
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
        }), (0, _v1.jsxs)(_v7.Flex, {
          gap: "lg",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v67.default, {
            modalConfig: _v0.modalConfig,
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v61, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            previousCardPlan: _v0.previousCardPlan
          })]
        })]
      });
    },
    _v74 = _v0 => {
      let {
          showIndividualPlans: _v1,
          coldStorageReorder: _v2,
          coldStorageResolving: _v3
        } = _v0,
        {
          settings: _v4
        } = (0, _v15.useOrionSettings)(),
        _v5 = _v4.second_free_trial_enabled,
        {
          capabilities: {
            hasSecondFreeTrialEligibility: _v6
          }
        } = (0, _v13.useCapability)(_v5 ? ["hasSecondFreeTrialEligibility"] : []),
        _v7 = !_v1,
        _v8 = [...(_v0.modalConfig?.excludePlans ?? []), ...(_v7 ? [_v60.PLANS.CREATOR, _v60.PLANS.PROFESSIONAL] : []), ...(_v2 ? [_v60.PLANS.STARTER, _v60.PLANS.PLUS] : [])];
      if (_v3) return null;
      let _v9 = (0, _v3.filterB2BRepackagingPlans)((0, _v50.filterPlansData)(_v0.plansData, _v0.userData, _v8), _v1),
        _v10 = _v0.modalConfig?.hidePlansSummary || _v9.length > 0 && (0, _v58.isSolutionTier)(_v9[0].tier),
        _v11 = (0, _v50.isEligibleForFreeTrial)(_v0.userData, _v5 && !!_v6),
        _v12 = (0, _v50.showMonthlyPlans)(_v0.plansData, _v4.default_modal_monthly),
        _v13 = _v11 && _v9 && !!_v9[0].metadata.interactions.purchase.uri.freeTrial && (!_v12 || _v4.homepage_paywall_monthly_free_trial);
      return (0, _v1.jsx)(_v53.Stack, {
        position: "relative",
        zIndex: 1,
        padding: `1rem 0 ${(0, _v35.rem)(20)} 0`,
        direction: {
          base: "column",
          xl: "row"
        },
        gap: "md",
        justifyContent: "center",
        children: _v9.map((_v0, _v1) => {
          let _v2 = (0, _v50.getPreviousPlanTierCopy)(_v9, _v0, _v1),
            _v3 = _v1 > 0 ? _v9[_v1 - 1].tier : null;
          return _v1 < 4 && (0, _v1.jsx)(_v73, {
            planData: _v0,
            userData: _v0.userData,
            previousCardPlan: _v2,
            modalConfig: _v0.modalConfig,
            showRecommendedBadge: _v0.modalConfig?.recommendedPlan ? _v0.tier === _v0.modalConfig?.recommendedPlan : (0, _v50.showRecommendedBadge)(_v0, _v1, _v3),
            displayMonthlyPlan: _v12,
            showAnnualAlternativeForMonthly: _v4.default_modal_monthly,
            hideSubheading: _v10,
            allowFreeTrial: _v13
          }, `plan-card-${_v0.tier}`);
        })
      });
    };
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = ["uri"],
    _v78 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v79 = () => {
      let {
          settings: _v0
        } = (0, _v15.useOrionSettings)(),
        _v1 = (0, _v65.useViewer)(),
        _v2 = _v1?.user?.id ?? null,
        _v3 = _v0.enable_cold_storage_plan_reorder,
        _v4 = !!_v2 && _v3 && "paid" !== (0, _v76.deriveViewerAuthStatus)(_v1),
        {
          data: _v5,
          isLoading: _v6
        } = (0, _v75.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v77,
          query: {
            filter: "cold_storage",
            perPage: 1
          },
          headers: _v78
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          data: _v7,
          isLoading: _v8
        } = (0, _v75.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v77,
          query: {
            filter: "cold_privacy",
            perPage: 1
          },
          headers: _v78
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
    _v80 = "vimeo:default-modal-dismissed";
  _v0.s(["DEFAULT_MODAL_DISMISSED_EVENT", 0, _v80], 0);
  let _v81 = _v0 => {
    let {
        modalConfig: _v1,
        plansData: _v2
      } = _v0,
      {
        settings: _v3
      } = (0, _v15.useOrionSettings)(),
      {
        showIndividualPlans: _v4
      } = (0, _v5.useB2BRepackagingContext)(),
      {
        shouldReorder: _v5,
        isResolving: _v6
      } = _v79(),
      _v7 = (0, _v2.useMemo)(() => {
        if (!_v0.userData || !_v2) return [];
        let _v0 = [...(_v1?.excludePlans ?? []), ...(_v4 ? [] : [_v60.PLANS.CREATOR, _v60.PLANS.PROFESSIONAL]), ...(_v5 ? [_v60.PLANS.STARTER, _v60.PLANS.PLUS] : [])];
        return (0, _v3.filterB2BRepackagingPlans)((0, _v50.filterPlansData)(_v2, _v0.userData, _v0), _v4).slice(0, 4);
      }, [_v0.userData, _v2, _v1?.excludePlans, _v4, _v5]),
      _v8 = (0, _v2.useMemo)(() => _v2 && 0 !== _v7.length ? (0, _v50.showMonthlyPlans)(_v2, _v3.default_modal_monthly) ? ["monthly"] : ["yearly"] : [], [_v2, _v7, _v3.default_modal_monthly]),
      {
        trackPaywallDismissed: _v9
      } = (0, _v26.usePaywallTracking)({
        ..._v0.tracking.paywallTracking,
        paywallStyle: "default_modal",
        paywallPlansDisplayed: _v7.map(_v0 => _v0.tier),
        paywallPeriodicitiesDisplayed: _v8,
        isVisible: !_v6
      }),
      _v10 = () => {
        _v9(), window.dispatchEvent(new CustomEvent(_v80)), _v0.onClose();
      },
      _v11 = _v1?.featuredBannerText,
      _v12 = !_v1?.suppressAllPaidPlansBanner && _v2?.length && (0, _v50.isSeatTierPlan)(_v2[0].tier) ? _v11 ?? (0, _v38.translate)({
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
      }) : (0, _v38.translate)({
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
    return (0, _v1.jsxs)(_v8.Modal, {
      "data-testid": "default-upsell-container",
      isOpen: !0,
      onClose: _v10,
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsx)(_v11.ModalContent, {
        top: {
          base: "initial",
          sm: "sm",
          md: "lg",
          xl: "initial"
        },
        marginTop: _v13 ? (0, _v35.rem)(40) : void 0,
        alignSelf: {
          base: "flex-start",
          xl: "center"
        },
        maxWidth: {
          sm: (0, _v35.rem)(375),
          md: (0, _v35.rem)(618),
          lg: (0, _v35.rem)(618),
          xl: (0, _v35.rem)(0)
        },
        children: (0, _v1.jsxs)(_v9.ModalBody, {
          padding: {
            base: "md",
            xl: "lg"
          },
          children: [_v13 && (0, _v1.jsx)(_v32.Box, {
            borderRadius: "xl",
            position: "absolute",
            width: "100%",
            top: (0, _v35.rem)(-40),
            left: 0,
            verticalAlign: "middle",
            justifyItems: "center",
            pt: "sm",
            pb: "sm",
            pr: "md",
            pl: "md",
            backgroundColor: "upsell-secondary",
            height: (0, _v35.rem)(80),
            zIndex: -1,
            children: (0, _v1.jsxs)(_v33.HStack, {
              children: [(0, _v1.jsx)(_v36.Diamond, {
                h: "xs",
                w: "xs",
                color: "white",
                backgroundColor: "upsell-primary",
                borderRadius: (0, _v35.rem)(6),
                padding: (0, _v35.rem)(4)
              }), (0, _v1.jsx)(_v34.Text, {
                variant: "body-lg",
                color: "text-primary",
                children: _v12
              })]
            })
          }), (0, _v1.jsx)(_v52, {
            modalConfig: _v1,
            onClose: _v10,
            userName: _v0.userData?.name
          }), _v0.userData && _v2 && !_v6 && (0, _v1.jsx)(_v37.ModalBundleOffer, {
            periodicity: "monthly" === _v8[0] ? "monthly" : "annual",
            mode: _v0.bundleOffer?.mode,
            children: (0, _v1.jsx)(_v74, {
              modalConfig: _v1,
              userData: _v0.userData,
              plansData: _v2,
              showIndividualPlans: _v4,
              coldStorageReorder: _v5,
              coldStorageResolving: _v6
            })
          }), (0, _v1.jsx)(_v48, {})]
        })
      })]
    });
  };
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = ({
      onRequestEligibility: _v0
    }) => (0, _v1.jsxs)(_v92.AlertRoot, {
      variant: "info",
      borderRadius: (0, _v35.rem)(16),
      padding: {
        base: 3,
        md: 4
      },
      gap: 4,
      alignItems: "center",
      width: "100%",
      children: [(0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: 1,
        width: "100%",
        children: [(0, _v1.jsx)(_v34.Text, {
          variant: "body-lg",
          color: "text-primary",
          fontFamily: "heading",
          children: (0, _v38.translate)({
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
        }), (0, _v1.jsxs)(_v34.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: [(0, _v38.translate)({
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
          }), (0, _v1.jsx)("br", {}), (0, _v38.translate)({
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
      }), (0, _v1.jsx)(_v39.Button, {
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
        children: (0, _v38.translate)({
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
    _v94 = (0, _v35.rem)(20),
    _v95 = (_v0, _v1) => new Intl.NumberFormat("en", {
      style: "currency",
      currency: _v1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(_v0),
    _v96 = ({
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
        } = (0, _v5.useB2BRepackagingContext)(),
        [_v13, _v14] = (0, _v2.useState)(!1),
        _v15 = (0, _v2.useRef)(!1),
        {
          acceptRenewalOffer: _v16
        } = (0, _v82.useAcceptStudioRenewalOffer)(),
        {
          trackStudioRenewalOfferCtaClicked: _v17,
          trackStudioRenewalOfferAccepted: _v18,
          trackStudioRenewalOfferFailed: _v19
        } = (0, _v91.useStudioRenewalOfferTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v20
        } = (0, _v90.useIndividualEligibilityTracking)(),
        {
          open: _v21,
          modal: _v22
        } = (0, _v83.useIndividualEligibilityModal)({
          initialStep: _v12 && !_v11 ? "not_qualified" : void 0
        }),
        _v23 = (0, _v85.useToast)(),
        _v24 = (0, _v2.useContext)(_v30.default),
        _v25 = (0, _v50.getPlanFeaturesList)(_v0, _v1),
        _v26 = _v1.currency.currencyCode,
        _v27 = (_v6 = _v1.metadata.entitlements?.params, _v7 = _v6?.teamSeats ?? null, _v8 = _v6?.restrictedVideoStorageLimit ?? null, _v9 = _v6?.bandwidth ?? null, _v10 = [], null !== _v7 && _v10.push({
          icon: (0, _v1.jsx)(_v89.Users, {
            width: (0, _v35.rem)(20),
            height: (0, _v35.rem)(20)
          }),
          value: (0, _v38.translate)({
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
          icon: (0, _v1.jsx)(_v87.ManagedStorage, {
            width: (0, _v35.rem)(20),
            height: (0, _v35.rem)(20)
          }),
          value: (0, _v38.translate)({
            singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
            replacements: {
              AMOUNT: _v8
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento gestionado para vídeos incrustables y no públicos"
              },
              "de-DE": {
                singular: "{AMOUNT} verwalteter Speicher für einbettbare und nicht-öffentliche Videos"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage géré pour les vidéos intégrables et non publiques"
              },
              "ja-JP": {
                singular: "{AMOUNT}の埋め込み可能および非公開動画向け管理ストレージ"
              },
              "ko-KR": {
                singular: "{AMOUNT} 임베드 가능 및 비공개 동영상용 관리형 저장공간"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento gerenciado para vídeos incorporáveis e não públicos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 托管存储，用于可嵌入和非公开视频"
              }
            }
          })
        }), _v10.push({
          icon: (0, _v1.jsx)(_v88.Speedometer, {
            width: (0, _v35.rem)(20),
            height: (0, _v35.rem)(20)
          }),
          value: _v9?.quotaPeriod === "year" ? (0, _v38.translate)({
            singular: "{AMOUNT} yearly bandwidth",
            replacements: {
              AMOUNT: _v9.periodicQuota ?? ""
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda anual"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} de bande passante annuelle"
              },
              "ja-JP": {
                singular: "{AMOUNT} の年間帯域幅"
              },
              "ko-KR": {
                singular: "{AMOUNT} 연간 대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda anual"
              },
              "zh-CN": {
                singular: "{AMOUNT} 年带宽"
              }
            }
          }) : (0, _v38.translate)({
            singular: "{AMOUNT} monthly bandwidth",
            replacements: {
              AMOUNT: _v9?.periodicQuota ?? ""
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
        }), _v10),
        _v28 = _v3 ? _v1.price.annualMonthly : _v1.price.monthly,
        _v29 = _v3 ? _v2?.price.annualMonthly : _v2?.price.monthly,
        _v30 = null != _v28 && null != _v29 && _v29 > 0 && _v29 < _v28 ? Math.floor((_v28 - _v29) / _v28 * 100) : null;
      (0, _v91.useStudioRenewalOfferDisplayed)({
        isOpen: !0,
        savingsPercent: _v30 ?? 0,
        location: "upsell_modal"
      }), (0, _v91.useStudioRenewalOfferDismissed)({
        isOpen: !0,
        savingsPercent: _v30 ?? 0,
        wasAcceptedRef: _v15,
        location: "upsell_modal"
      });
      let _v31 = (0, _v38.translate)({
          singular: "Purchase at {PERCENT}% discount",
          replacements: {
            PERCENT: _v30 ?? 0
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
        _v32 = (0, _v2.useCallback)(() => {
          _v20({
            location: "upgrade_modal_banner"
          }), _v21("upgrade_modal_banner");
        }, [_v20, _v21]),
        _v33 = (0, _v2.useCallback)(async () => {
          if (null == _v30) return;
          let _v0 = _v3 ? _v1.id?.annual ?? "" : _v1.id?.monthly ?? "";
          if ("" !== _v0) {
            _v17({
              copy: _v31,
              savingsPercent: _v30,
              location: "upsell_modal"
            }), _v46.default.trackButtonClick({
              ..._v5.params,
              copy: _v31,
              currency: _v26,
              device_type: _v24.device_type,
              duration: _v3 ? "annual" : "monthly",
              is_new_pricing: !0,
              is_discount: !0,
              path: window.location ? window.location.href : "",
              plan_selected: _v60.PLANS.STUDIO,
              price: _v29 ?? 0,
              purchase_type: "direct",
              target: "in_place_purchase"
            }, _v5.bpEventVersion), _v5.onButtonClick?.({
              copy: _v31,
              duration: _v3 ? "annual" : "monthly",
              price: _v29 ?? 0,
              currency: _v26,
              plan_selected: _v60.PLANS.STUDIO,
              target_path: "",
              free_trial: !1
            }), _v14(!0);
            try {
              await _v16({
                billingPlanId: _v0,
                discountPercent: _v30
              }), _v15.current = !0;
            } catch (_v0) {
              _v19({
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
                location: "upsell_modal"
              }), _v23({
                variant: "warning",
                title: (0, _v38.translate)({
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
                savingsPercent: _v30,
                periodicity: _v3 ? "annual" : "monthly",
                location: "upsell_modal"
              });
            } catch (_v0) {
              console.warn("Failed to track studio_renewal_offer_accepted", _v0);
            }
            window.location.reload(), _v14(!1);
          }
        }, [_v16, _v31, _v3, _v29, _v30, _v26, _v1, _v23, _v17, _v18, _v19, _v5, _v24.device_type]);
      return (0, _v1.jsxs)(_v8.Modal, {
        isOpen: !0,
        onClose: _v4,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsx)(_v11.ModalContent, {
          maxWidth: {
            base: "100%",
            md: (0, _v35.rem)(720)
          },
          alignSelf: "center",
          children: (0, _v1.jsxs)(_v9.ModalBody, {
            padding: {
              base: 4,
              md: 6
            },
            position: "relative",
            children: [(0, _v1.jsx)(_v51.default, {
              margin: (0, _v35.rem)(8),
              onClose: _v4
            }), (0, _v1.jsx)(_v43, {
              children: (0, _v1.jsx)(_v32.Box, {
                as: "h2",
                width: "100%",
                textAlign: "center",
                fontSize: {
                  base: (0, _v35.rem)(24),
                  md: (0, _v35.rem)(30)
                },
                fontFamily: "heading",
                color: "text-primary",
                marginBottom: (0, _v35.rem)(16),
                children: _v47.default.defaultHeader
              })
            }), (0, _v1.jsxs)(_v32.Box, {
              display: "flex",
              flexDirection: "column",
              width: (0, _v35.rem)(304),
              maxWidth: "100%",
              margin: "0 auto",
              position: "relative",
              children: [(0, _v1.jsx)(_v32.Box, {
                backgroundColor: "upsell-primary",
                color: "white",
                borderTopLeftRadius: _v94,
                borderTopRightRadius: _v94,
                paddingY: (0, _v35.rem)(6),
                textAlign: "center",
                fontSize: (0, _v35.rem)(12),
                fontFamily: "heading",
                letterSpacing: (0, _v35.rem)(.24),
                children: _v47.default.recommended
              }), (0, _v1.jsxs)(_v32.Box, {
                backgroundColor: "surface",
                border: "2px solid",
                borderColor: "upsell-primary",
                borderTop: "none",
                borderBottomLeftRadius: _v94,
                borderBottomRightRadius: _v94,
                padding: (0, _v35.rem)(24),
                display: "flex",
                flexDirection: "column",
                gap: (0, _v35.rem)(16),
                children: [(0, _v1.jsx)(_v32.Box, {
                  fontFamily: "heading",
                  fontSize: (0, _v35.rem)(22),
                  color: "text-primary",
                  children: _v1.name
                }), (0, _v1.jsxs)(_v32.Box, {
                  display: "flex",
                  flexDirection: "column",
                  gap: (0, _v35.rem)(4),
                  children: [(0, _v1.jsxs)(_v32.Box, {
                    display: "flex",
                    alignItems: "baseline",
                    gap: (0, _v35.rem)(8),
                    children: [(0, _v1.jsx)(_v32.Box, {
                      fontFamily: "heading",
                      fontSize: (0, _v35.rem)(30),
                      color: "text-primary",
                      children: null != _v29 ? _v95(_v29, _v26) : ""
                    }), (0, _v1.jsx)(_v32.Box, {
                      as: "span",
                      fontFamily: "body",
                      fontSize: (0, _v35.rem)(16),
                      color: "text-tertiary",
                      textDecoration: "line-through",
                      children: null != _v28 ? _v95(_v28, _v26) : ""
                    }), null != _v30 && (0, _v1.jsx)(_v84.Badge, {
                      size: "sm",
                      backgroundColor: "status-positive-secondary",
                      textColor: "status-positive-primary",
                      border: "none",
                      borderRadius: "999px",
                      px: 2,
                      py: 1,
                      children: (0, _v38.translate)({
                        singular: "Save {PERCENT}%",
                        replacements: {
                          PERCENT: _v30
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
                  }), (0, _v1.jsx)(_v32.Box, {
                    fontFamily: "body",
                    fontSize: (0, _v35.rem)(12),
                    color: "text-secondary",
                    children: _v3 ? _v47.default.perMonthBilledAnually : _v47.default.perMonthBilledMonthly
                  })]
                }), (0, _v1.jsx)(_v39.Button, {
                  variant: "primary",
                  size: "md",
                  width: "100%",
                  onClick: () => void _v33(),
                  isLoading: _v13,
                  isDisabled: _v13,
                  children: _v31
                }), (0, _v1.jsx)(_v32.Box, {
                  display: "flex",
                  flexDirection: "column",
                  gap: (0, _v35.rem)(4),
                  children: _v27.map(_v0 => (0, _v1.jsxs)(_v32.Box, {
                    display: "flex",
                    gap: (0, _v35.rem)(4),
                    alignItems: "flex-start",
                    children: [(0, _v1.jsx)(_v32.Box, {
                      display: "flex",
                      alignItems: "flex-start",
                      paddingTop: (0, _v35.rem)(2),
                      flexShrink: 0,
                      children: _v0.icon
                    }), (0, _v1.jsx)(_v32.Box, {
                      fontFamily: "body",
                      fontSize: (0, _v35.rem)(14),
                      color: "text-primary",
                      lineHeight: (0, _v35.rem)(20),
                      children: _v0.value
                    })]
                  }, `studio-offer-quota-${_v0.value}`))
                }), (0, _v1.jsxs)(_v32.Box, {
                  borderTop: "1px solid var(--vimeo-colors-stroke)",
                  paddingTop: (0, _v35.rem)(12),
                  children: [(0, _v1.jsx)(_v32.Box, {
                    fontFamily: "heading",
                    fontSize: (0, _v35.rem)(14),
                    color: "text-primary",
                    marginBottom: (0, _v35.rem)(4),
                    children: _v47.default.keyFeatures
                  }), (0, _v1.jsx)(_v32.Box, {
                    as: "ul",
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: (0, _v35.rem)(4),
                    children: (_v25 ?? []).map(_v0 => (0, _v1.jsxs)(_v32.Box, {
                      as: "li",
                      display: "flex",
                      gap: (0, _v35.rem)(4),
                      alignItems: "flex-start",
                      children: [(0, _v1.jsx)(_v32.Box, {
                        as: "span",
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: (0, _v35.rem)(2),
                        flexShrink: 0,
                        children: (0, _v1.jsx)(_v86.CheckSmall, {
                          height: (0, _v35.rem)(16),
                          width: (0, _v35.rem)(16)
                        })
                      }), (0, _v1.jsx)(_v32.Box, {
                        fontFamily: "body",
                        fontSize: (0, _v35.rem)(14),
                        color: "text-primary",
                        lineHeight: (0, _v35.rem)(20),
                        children: _v0
                      })]
                    }, `studio-offer-feature-${_v0}`))
                  })]
                })]
              })]
            }), (0, _v1.jsx)(_v32.Box, {
              marginTop: {
                base: 4,
                md: 6
              },
              children: (0, _v1.jsx)(_v93, {
                onRequestEligibility: _v32
              })
            }), (0, _v1.jsx)(_v32.Box, {
              marginTop: {
                base: 2,
                md: 4
              },
              children: (0, _v1.jsx)(_v48, {})
            }), _v22]
          })
        })]
      });
    };
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = _v0 => (0, _v1.jsx)(_v100.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.99 12.382a1 1 0 0 0 0-.764 1 1 0 0 0-.212-.325L14.124 5.64a1 1 0 0 0-1.414 1.414l3.951 3.95-11.725-.007a1.001 1.001 0 0 0-.928 1.389 1 1 0 0 0 .928.619l11.725-.007-3.95 3.95a1 1 0 1 0 1.413 1.414l5.654-5.654a1 1 0 0 0 .212-.325Z",
      fill: "currentColor"
    })
  });
  var _v102 = _v0.i(0);
  let _v103 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v7.Flex, {
      margin: `${(0, _v35.rem)(8)} 0`,
      color: "white",
      fontWeight: 500,
      listStyleType: "none",
      children: (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v57.Checkmark, {
          position: "relative",
          top: (0, _v35.rem)(4),
          width: (0, _v35.rem)(20),
          height: (0, _v35.rem)(20),
          marginRight: (0, _v35.rem)(8),
          color: "white"
        }), _v0]
      })
    }),
    _v104 = () => {
      let _v0 = _v60.enterpriseDefaultFeatures.featuresList || [];
      return (0, _v1.jsx)(_v7.Flex, {
        direction: "column",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v103, {
          text: _v0
        }, String(_v1)))
      });
    },
    _v105 = ({
      src: _v0,
      title: _v1,
      onLoad: _v2
    }) => {
      let _v3 = (0, _v102.useIsMobile)();
      return (0, _v1.jsx)(_v32.Box, {
        position: "relative",
        overflow: "hidden",
        maxHeight: _v3 ? `calc(100vh - ${(0, _v35.rem)(172)})` : (0, _v35.rem)(687),
        maxWidth: _v3 ? "100%" : (0, _v35.rem)(600),
        minWidth: (0, _v35.rem)(375),
        height: (0, _v35.rem)(687),
        borderRadius: _v3 ? `0 0 ${(0, _v35.rem)(20)} ${(0, _v35.rem)(20)}` : `0 ${(0, _v35.rem)(20)} ${(0, _v35.rem)(20)} 0`,
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
    _v106 = ({
      modalConfig: _v0
    }) => {
      let {
          enterpriseTitle: _v1,
          enterpriseSubtitle: _v2
        } = _v0 || {},
        _v3 = (0, _v50.getEnterpriseModalTitle)(_v1),
        _v4 = (0, _v50.getEnterpriseSubtitle)(_v2);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v3 && (0, _v1.jsx)(_v49.Header, {
          as: "h1",
          size: "lg",
          marginBottom: (0, _v35.rem)(8),
          children: _v3
        }), _v4 && (0, _v1.jsx)(_v49.Header, {
          as: "h3",
          size: "xs",
          marginBottom: (0, _v35.rem)(24),
          children: _v4
        })]
      });
    },
    _v107 = ({
      userData: _v0,
      onClose: _v1,
      tracking: _v2,
      modalConfig: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(!0),
        {
          colors: _v6
        } = (0, _v55.useTheme)(),
        {
          colorMode: _v7
        } = (0, _v54.useColorMode)(),
        _v8 = (0, _v102.useIsMobile)(),
        _v9 = (0, _v2.useContext)(_v30.default);
      (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.data === _v60.CLOSE_EVENT_DATA && _v1();
        };
        return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
      }, [_v1]);
      let _v10 = {
          ..._v60.defaultBpEventParams,
          ..._v2.params,
          is_new_pricing: _v0 ? (0, _v50.isSeatTierPlan)(_v0?.membership?.type) : null,
          device_type: (0, _v50.getDeviceType)(),
          action_type: "click"
        },
        _v11 = _v3?.mkcCode ? "&mkc=" + _v3?.mkcCode : "",
        _v12 = _v60.ADVANCED_ENTERPRISE_UPSELL_FORM_URL + _v11 + "&tracking_param=" + encodeURIComponent(JSON.stringify(_v10)),
        _v13 = (0, _v50.getEnterpriseFooterLinkText)(_v3?.customFooterLinkText);
      return (0, _v1.jsxs)(_v8.Modal, {
        "data-testid": "enterprise-upsell-container",
        isOpen: !0,
        onClose: _v1,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v12.ModalOverlay, {
          zIndex: 0
        }), _v4 && (0, _v1.jsx)(_v7.Flex, {
          position: "absolute",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          visibility: "visible",
          zIndex: 0,
          children: (0, _v1.jsx)(_v98.Spinner, {
            size: "md",
            color: _v6.vimeoBlue["600"]
          })
        }), (0, _v1.jsxs)(_v11.ModalContent, {
          maxW: _v8 ? (0, _v35.rem)(375) : (0, _v35.rem)(940),
          maxH: _v8 ? "100vh" : (0, _v35.rem)(820),
          padding: 0,
          visibility: _v4 ? "hidden" : "visible",
          zIndex: 0,
          children: [(0, _v1.jsx)(_v51.default, {
            onClose: _v1
          }), (0, _v1.jsx)(_v9.ModalBody, {
            padding: 0,
            maxH: _v8 ? "100vh" : (0, _v35.rem)(820),
            overflow: "hidden",
            borderRadius: (0, _v35.rem)(20),
            children: (0, _v1.jsxs)(_v97.Grid, {
              templateColumns: `${!_v8 ? `minmax(${(0, _v35.rem)(268)}, ${(0, _v35.rem)(340)}) minmax(${(0, _v35.rem)(350)}, ${(0, _v35.rem)(600)})` : "1fr"}`,
              height: "100%",
              maxH: _v8 ? "100vh" : (0, _v35.rem)(820),
              sx: {
                "::-webkit-scrollbar": {
                  display: "none"
                }
              },
              children: [(0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "dark" === _v7 ? _v6.gray["900"] : _v6.blackAlpha["900"],
                height: _v8 ? (0, _v35.rem)(172) : "100%",
                maxWidth: _v8 ? "100%" : (0, _v35.rem)(400),
                minWidth: "md",
                padding: _v8 ? 6 : `${(0, _v35.rem)(32)} ${(0, _v35.rem)(40)}`,
                borderRadius: _v8 ? `${(0, _v35.rem)(20)} ${(0, _v35.rem)(20)} 0 0` : `${(0, _v35.rem)(20)} 0 0 ${(0, _v35.rem)(20)}`,
                children: [(0, _v1.jsx)(_v7.Flex, {
                  flex: "1",
                  flexDirection: "column",
                  color: _v6.white,
                  paddingRight: 6,
                  children: (0, _v1.jsxs)(_v32.Box, {
                    children: [(0, _v1.jsx)(_v106, {
                      modalConfig: _v3
                    }), !_v8 && (0, _v1.jsx)(_v7.Flex, {
                      direction: "column",
                      fontSize: {
                        xs: "body-md",
                        sm: "body-md",
                        lg: "body-lg"
                      },
                      children: _v3?.customFeaturesList || (0, _v1.jsx)(_v104, {})
                    })]
                  })
                }), !_v8 && (0, _v1.jsxs)(_v99.Link, {
                  href: "/enterprise",
                  variant: "primary",
                  textDecoration: "underline",
                  color: _v6.white,
                  onClick: () => {
                    _v46.default.trackButtonClick({
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
                  children: [_v13, (0, _v1.jsx)(_v101, {
                    marginLeft: (0, _v35.rem)(6)
                  })]
                })]
              }), (0, _v1.jsx)(_v105, {
                title: _v47.default.contactUs,
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

        @media screen and (max-width: ${(0, _v35.rem)(375)}) {
          div#__next > div:nth-child(3) > div > div {
            overflow: auto;
            padding: ${(0, _v35.rem)(24)} ${(0, _v35.rem)(24)} 0 ${(0, _v35.rem)(24)};
            border-bottom: ${(0, _v35.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow {
            border-top: ${(0, _v35.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
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
            background-image: radial-gradient(circle at 100% 100%, transparent ${(0, _v35.rem)(25)}, ${"dark" === _v7 ? _v6.gray[800] : _v6.white} ${(0, _v35.rem)(8)});
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
  var _v108 = _v0.i(0);
  let _v109 = "https://",
    _v110 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v111 = async (_v0, _v1) => {
      let _v2 = `${_v109}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v110(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v108.default)(_v4)).membership.type = (0, _v108.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v112 = async (_v0, _v1, _v2) => {
      let _v3 = `${_v109}${_v0}/me/subscription_plans?vuid=${(0, _v50.getVuid)()}`;
      _v2 && (_v3 += `&campaign_id=${_v2}`);
      let _v4 = await fetch(_v3, {
        method: "GET",
        headers: _v110(_v1.jwt)
      });
      if (_v4.ok) {
        let _v0 = await _v4.json();
        return (0, _v108.default)(_v0.data);
      }
      throw _v4;
    };
  var _v113 = _v0.i(0);
  let _v114 = new Set(["limit_based_bsp", "limits_only_bsp", "bsp_cards_generic_and_bsp_limits", "bsp_table_generic_and_bsp_limits", "pcp_based"]),
    _v115 = _v0 => _v114.has(_v0),
    _v116 = _v0 => "pcp_based" === _v0,
    _v117 = (_v0, _v1) => "storage_limit" === _v0 || "quota" === _v0 && void 0 !== _v1 && _v116(_v1) ? "storage" : "privacy" === _v0 || "showcase_privacy" === _v0 ? "privacy" : "generic",
    _v118 = (_v0, _v1) => _v116(_v0) ? "plans_comparison" : "storage" === _v1 ? "storage_limit" : "privacy" === _v1 ? "privacy_limit" : "bsp_cards_generic_and_bsp_limits" === _v0 ? "card_comparison" : "bsp_table_generic_and_bsp_limits" === _v0 ? "table_comparison" : "generic_limit",
    _v119 = _v0 => {
      let _v1 = _v0?.toLowerCase();
      return _v1 ? _v1.includes("unlisted_privacy") ? "unlisted" : _v1.includes("disable_privacy") ? "hide_from_vimeo" : _v1.includes("password_privacy") ? "password" : _v1.includes("cold_privacy") ? "generic" : null : null;
    },
    _v120 = ({
      paywallFeature: _v0,
      plansData: _v1
    }) => {
      let _v2;
      return "privacy" === _v117(_v0) && (_v2 = _v1.find(_v0 => _v0.tier === _v60.PLANS.CREATOR), (0, _v113.isCreatorRestrictedForFeature)({
        creatorPlan: _v2,
        feature: "privacy"
      }));
    };
  _v0.s(["isBspLateStagePaywallKind", 0, _v115, "isPcpLateStagePaywallKind", 0, _v116, "isPrivacyPaywallOnUnlistedRestrictedCreator", 0, _v120, "resolvePaywallStyle", 0, _v118, "resolvePrivacyOptionFromTrigger", 0, _v119, "resolveVariant", 0, _v117], 0);
  let _v121 = ["feature"],
    _v122 = ["monthly", "yearly"],
    _v123 = ["yearly"],
    _v124 = function (_v0) {
      let _v1,
        {
          apiUrl: _v2,
          userConfig: _v3
        } = _v0,
        {
          settings: _v4
        } = (0, _v15.useOrionSettings)(),
        {
          showIndividualPlans: _v5
        } = (0, _v5.useB2BRepackagingContext)(),
        [_v6, _v7] = (0, _v2.useState)({
          isShowing: !1,
          userData: null,
          plansData: null,
          hasTrackedImpression: !1
        }),
        {
          shouldReorder: _v8
        } = _v79(),
        _v9 = (0, _v14.useCampaignIdOverride)(),
        _v10 = _v0.onClose;
      (0, _v2.useEffect)(() => {
        let _v0 = !1,
          _v1 = async () => await _v111(_v2, _v3.jwt),
          _v2 = async () => await _v112(_v2, _v3, _v9);
        return (async () => {
          try {
            let [_v0, _v1] = await Promise.all([_v1(), _v2()]);
            if (_v0) return;
            let _v2 = (0, _v27.applyPlanAvailabilityPolicy)(_v1, {
              coreTierEnabled: _v4.core_tier_enabled
            });
            _v7(_v0 => ({
              ..._v0,
              isShowing: !0,
              userData: _v0,
              plansData: _v2
            })), _v46.default.configure(_v0, _v3.userId), _v0.tracking.onOpen && _v0.tracking.onOpen();
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v0.tracking, _v2, _v3, _v9, _v4.core_tier_enabled]), (0, _v2.useEffect)(() => {
        let _v0 = Date.now();
        !_v6.hasTrackedImpression && _v6.userData?.membership?.type && (_v46.default.trackImpression({
          ..._v0.tracking.params,
          loading_time: (Date.now() - _v0) / 0,
          is_new_pricing: (0, _v50.isSeatTierPlan)(_v6.userData?.membership?.type),
          device_type: (0, _v50.getDeviceType)()
        }, _v0.tracking.bpEventVersion), _v7(_v0 => ({
          ..._v0,
          hasTrackedImpression: !0
        })));
      }, [_v0.tracking, _v6.userData?.membership?.type, _v6.hasTrackedImpression]);
      let _v11 = _v6.userData?.membership?.type,
        {
          isEligible: _v12,
          isLoading: _v13
        } = (0, _v6.useIsPermanentDiscountOfferEligible)(),
        {
          studioPlan: _v14,
          professionalPlan: _v15
        } = (0, _v6.usePermanentDiscountOfferPlans)(_v6.plansData),
        _v16 = (0, _v2.useMemo)(() => null != _v14 ? (0, _v4.resolveStudioRenewalDiscount)({
          studioPlan: _v14,
          professionalPlan: _v15 ?? null,
          isAnnual: !(0, _v50.showMonthlyPlans)(_v6.plansData ?? [])
        }) : null, [_v14, _v15, _v6.plansData]),
        _v17 = "default" === _v0.templateType && _v12 && null != _v16,
        _v18 = _v0.templateType;
      _v121.includes(_v0.templateType) || _v11 !== _v60.PLANS.ADVANCED && _v11 !== _v60.PLANS.PREMIUM && _v11 !== _v60.PLANS.TEAM_LIVE && _v11 !== _v60.PLANS.CUSTOM_SELF_SERVE && _v11 !== _v60.PLANS.STUDIO && _v11 !== _v60.PLANS.PRODUCTION || (0, _v50.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v18 = "enterprise"), _v17 && (_v18 = _v0.templateType);
      let _v19 = _v0.tracking.paywallTracking.paywallFeature,
        _v20 = _v0.tracking.paywallTracking.paywallTrigger,
        _v21 = _v0.bundleOffer?.mode === "claim",
        _v22 = _v115(_v4.late_stage_paywall_kind),
        _v23 = _v116(_v4.late_stage_paywall_kind),
        _v24 = _v119(_v20),
        _v25 = _v117(_v19, _v4.late_stage_paywall_kind),
        _v26 = "privacy" !== _v25 || _v24 ? _v25 : "generic",
        _v27 = "limits_only_bsp" === _v4.late_stage_paywall_kind && "generic" === _v26,
        _v28 = _v20?.toLowerCase() ?? "",
        _v29 = _v28.includes("cold_storage") || _v28.includes("cold_privacy") ? _v4.cold_storage_trigger_paywall_tier : _v4.limit_based_paywall_tier,
        _v30 = (0, _v2.useMemo)(() => _v6.plansData ? (0, _v3.filterB2BRepackagingPlans)(_v6.plansData, _v5) : null, [_v6.plansData, _v5]),
        _v31 = _v6.userData?.membership?.type && _v30 ? (0, _v29.resolveRecommendedTier)({
          currentTier: _v6.userData?.membership?.type,
          tierSetting: _v29,
          plansData: _v30,
          excludePlans: _v0.modalConfig?.excludePlans,
          variant: _v26
        }) : null,
        _v32 = "bsp_cards_generic_and_bsp_limits" === _v4.late_stage_paywall_kind || "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind,
        _v33 = "generic" === _v26 && _v32 && ![_v60.PLANS.STARTER, _v60.PLANS.STANDARD, _v60.PLANS.ADVANCED].includes(_v31),
        _v34 = "generic" === _v26 && _v32,
        _v35 = !_v21 && _v22 && "default" === _v0.templateType && "enterprise" !== _v18 && !_v17 && !!_v31 && !_v27 && !_v33,
        _v36 = _v35 && !_v23 && !_v34,
        _v37 = (0, _v24.useLimitPaywallBundleOffer)({
          enabled: _v36
        }),
        _v38 = _v34 ? "760px" : _v23 ? "480px" : null !== _v37 ? "600px" : "560px",
        _v39 = "enterprise" === _v18 || "default" === _v18 && "enterprise" === _v11 ? "enterprise_modal" : "default" === _v18 ? "default_modal" : "custom_modal",
        _v40 = _v35 ? _v118(_v4.late_stage_paywall_kind, _v26) : _v39,
        _v41 = _v6.userData?.membership?.type ?? null,
        _v42 = (0, _v2.useMemo)(() => _v35 && _v31 ? _v34 ? [_v41, _v31].filter(Boolean) : [_v31] : void 0, [_v35, _v34, _v31, _v41]),
        _v43 = _v35 ? _v23 ? _v122 : _v34 ? "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind ? _v123 : _v122 : void 0 : void 0,
        _v44 = _v35 ? _v42 ?? [] : [],
        _v45 = _v35 ? _v43 ?? [] : [],
        _v46 = _v0.tracking.paywallTracking,
        _v47 = _v4.second_free_trial_enabled,
        {
          capabilities: {
            hasSecondFreeTrialEligibility: _v48
          }
        } = (0, _v13.useCapability)(_v47 ? ["hasSecondFreeTrialEligibility"] : []),
        _v49 = !!_v6.userData && (0, _v50.isEligibleForFreeTrial)(_v6.userData, _v47 && !!_v48),
        _v50 = !!_v6.plansData && _v120({
          paywallFeature: _v19,
          plansData: _v6.plansData
        }),
        _v51 = !_v21 && !_v17 && (_v35 || "default" === _v18 && "enterprise" !== _v11),
        _v52 = _v49 && (_v6.plansData ?? []).some(_v28.hasFreeTrialPurchasePath),
        {
          isResolving: _v53,
          variant: _v54
        } = (0, _v23.usePaywallOneTap)({
          isPaywallReady: _v51 && _v6.isShowing && !_v52
        }),
        _v55 = _v54 ? _v6.plansData?.find(_v0 => String(_v0.tier) === _v23.ONE_TAP_TIER) : void 0,
        _v56 = _v54 && _v55 ? {
          variant: _v54,
          plan: _v55
        } : null,
        {
          trackPaywallDismissed: _v57,
          trackPaywallCtaClicked: _v58
        } = (0, _v26.usePaywallTracking)({
          ..._v0.tracking.paywallTracking,
          paywallStyle: _v56 ? "one_tap_upsell" : _v40,
          paywallPlansDisplayed: _v56 ? [_v23.ONE_TAP_TIER] : _v44,
          paywallPeriodicitiesDisplayed: _v56 ? [_v56.variant.isMonthly ? "monthly" : "yearly"] : _v45,
          isVisible: _v6.isShowing && "offer" !== _v0.templateType && (_v35 || "default_modal" !== _v39)
        }),
        _v59 = (0, _v2.useCallback)(() => {
          _v57(), "default" === _v18 && window.dispatchEvent(new CustomEvent(_v80)), _v10();
        }, [_v10, _v18, _v57]),
        _v60 = "default" === _v18 && !_v35 && "enterprise" !== _v11,
        _v61 = _v6.plansData?.some(_v0 => _v0.tier === _v60.PLANS.STARTER || _v0.tier === _v60.PLANS.PLUS) ?? !1,
        _v62 = _v6.isShowing && _v8 && _v60 && _v61,
        {
          trackColdStoragePlanReorderDisplayed: _v63
        } = (0, _v25.useColdStorageReorderTracking)(),
        _v64 = (0, _v2.useRef)(!1);
      switch ((0, _v2.useEffect)(() => {
        _v62 && !_v64.current && (_v64.current = !0, _v63({
          surface: "upsell_modal"
        }));
      }, [_v62, _v63]), _v18) {
        case "default":
          _v1 = _v56 ? (0, _v1.jsx)(_v19.OneTapPaywallModal, {
            plan: _v56.plan,
            onClose: _v59,
            paywallTracking: _v46,
            ..._v56.variant
          }) : _v35 && _v31 ? (0, _v1.jsxs)(_v8.Modal, {
            isOpen: !0,
            onClose: _v59,
            size: _v23 ? "md" : ["full", "md"],
            scrollBehavior: "inside",
            children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
              containerProps: {
                padding: {
                  base: _v23 ? "16px !important" : "0 !important"
                }
              },
              maxWidth: {
                base: _v23 ? "100%" : "100vw",
                md: _v38
              },
              width: {
                base: "100%",
                md: _v38
              },
              height: {
                base: _v23 ? "auto" : "100dvh",
                md: "auto"
              },
              minH: {
                base: _v23 ? "auto" : "100dvh",
                md: "auto"
              },
              maxH: {
                base: _v23 ? "92dvh" : "100dvh",
                md: _v23 ? "92vh" : "90vh"
              },
              borderRadius: {
                base: _v23 ? "16px" : "0",
                md: "16px"
              },
              margin: {
                base: _v23 ? "auto" : "0",
                md: "auto"
              },
              overflow: "hidden",
              position: "relative",
              children: [(0, _v1.jsx)(_v10.ModalCloseButton, {
                zIndex: 1
              }), (0, _v1.jsx)(_v9.ModalBody, {
                p: "24px",
                display: "flex",
                flex: "1",
                children: (0, _v1.jsx)(_v7.Flex, {
                  width: "100%",
                  children: (({
                    kind: _v0,
                    paywallTracking: _v1,
                    variant: _v2,
                    tier: _v3,
                    currentTier: _v4,
                    privacyOption: _v5,
                    isUserEligibleForFreeTrial: _v6,
                    showOtherPlans: _v7,
                    defaultPeriodicity: _v8,
                    monthlyFreeTrial: _v9,
                    onCtaClick: _v10
                  }) => {
                    if (_v116(_v0)) return (0, _v1.jsx)(_v18.LateStagePcpPaywall, {
                      variant: _v2,
                      privacyOption: _v5,
                      tier: _v3,
                      paywallTracking: _v1,
                      isUserEligibleForFreeTrial: _v6,
                      showOtherPlans: _v7,
                      defaultPeriodicity: _v8,
                      monthlyFreeTrial: _v9,
                      isExistingSubscriber: null !== _v4 && _v4 !== _v60.PLANS.FREE,
                      isLimitTriggered: "storage_limit" === _v1.paywallFeature,
                      onCtaClick: _v10
                    });
                    switch (_v2) {
                      case "storage":
                        return (0, _v1.jsx)(_v21.StorageLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6,
                          onCtaClick: _v10
                        });
                      case "privacy":
                        return _v5 ? (0, _v1.jsx)(_v20.PrivacyLimitPaywall, {
                          tier: _v3,
                          privacyOption: _v5,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        }) : (0, _v1.jsx)(_v17.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                      default:
                        if ("bsp_cards_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v16.CardComparisonPaywall, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        if ("bsp_table_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v22.TableComparisonPaywall, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        return (0, _v1.jsx)(_v17.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                    }
                  })({
                    kind: _v4.late_stage_paywall_kind,
                    paywallTracking: _v46,
                    variant: _v26,
                    tier: _v31,
                    currentTier: _v6.userData?.membership?.type ?? null,
                    privacyOption: _v24,
                    isUserEligibleForFreeTrial: _v49,
                    showOtherPlans: _v4.pcp_other_plans_enabled,
                    defaultPeriodicity: _v4.pcp_paywall_default_periodicity,
                    monthlyFreeTrial: _v4.homepage_paywall_monthly_free_trial,
                    onCtaClick: _v58
                  })
                })
              })]
            })]
          }) : _v17 && _v14 ? (0, _v1.jsx)(_v96, {
            studioPlan: _v14,
            professionalPlan: _v15,
            isAnnual: !(0, _v50.showMonthlyPlans)(_v6.plansData ?? []),
            onClose: _v59,
            tracking: _v0.tracking
          }) : "enterprise" === _v11 ? (0, _v1.jsx)(_v107, {
            userData: _v6.userData,
            onClose: _v59,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v81, {
            userData: _v6.userData,
            plansData: _v6.plansData,
            modalConfig: {
              hidePlansSummary: !0,
              ..._v0.modalConfig,
              suppressAllPaidPlansBanner: _v50
            },
            bundleOffer: _v0.bundleOffer,
            onClose: _v10,
            tracking: _v0.tracking
          });
          break;
        case "feature":
          _v1 = (0, _v1.jsx)(_v31.default, {
            modalConfig: _v0.modalConfig,
            onClose: _v59
          });
          break;
        case "enterprise":
          _v1 = (0, _v1.jsx)(_v107, {
            userData: _v6.userData,
            onClose: _v59,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          });
          break;
        default:
          _v1 = null;
      }
      return !_v6.isShowing || _v51 && _v53 || _v13 ? null : (0, _v1.jsx)(_v30.default.Provider, {
        value: {
          ..._v0.tracking,
          device_type: (0, _v50.getDeviceType)(),
          campaignOverride: _v9,
          allowMonthlyTrial: _v4.homepage_paywall_monthly_free_trial
        },
        children: _v1
      });
    };
  _v0.s(["default", 0, _v124], 0), _v0.s(["default", 0, _v124], 0);
}