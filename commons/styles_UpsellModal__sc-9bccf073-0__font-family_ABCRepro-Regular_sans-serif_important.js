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
    _v29 = _v0.i(0);
  (0, _v28.default)(_v29.Modal).withConfig({
    displayName: "styles__UpsellModal",
    componentId: "sc-9bccf073-0"
  })`
  ${_v0 => _v0.isBokeh && "font-family: 'ABCRepro-Regular', sans-serif !important;"}
  ${_v0 => _v0.hasFreeFeaturedBanner && "margin-top: 40px;"}
  background: var(--vimeo-colors-fill-surface);
  min-width: 62.5rem;
  width: 100%;
  height: auto;
  max-width: ${(0, _v23.rem)(0)};
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
`, _v28.default.div.withConfig({
    displayName: "styles__ModalWrapper",
    componentId: "sc-9bccf073-1"
  })`
  padding: ${(0, _v23.rem)(32)} ${(0, _v23.rem)(32)} ${(0, _v23.rem)(16)};
`;
  let _v30 = _v28.default.div.withConfig({
    displayName: "styles__HeaderContainer",
    componentId: "sc-9bccf073-2"
  })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v23.rem)(24)} ${(0, _v23.rem)(24)};
  align-items: center;
  align-self: stretch;
`;
  _v28.default.div.withConfig({
    displayName: "styles__HeaderWrapper",
    componentId: "sc-9bccf073-3"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v23.rem)(28)};
  font-weight: 700;
  line-height: 118%;
  letter-spacing: ${(0, _v23.rem)(-1)};
  text-align: center;
  margin-bottom: ${(0, _v23.rem)(4)};
`;
  let _v31 = _v28.default.p.withConfig({
    displayName: "styles__SubHeader",
    componentId: "sc-9bccf073-4"
  })`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--vimeo-colors-text-primary);
`;
  _v28.default.div.withConfig({
    displayName: "styles__PlansContainer",
    componentId: "sc-9bccf073-5"
  })`
  padding: 1rem 0 ${(0, _v23.rem)(20)} 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  z-index: 1;
  position: relative;
`;
  let _v32 = _v28.default.div.withConfig({
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
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = () => {
    let _v0 = (0, _v2.useContext)(_v18.default),
      _v1 = _v34.default.compareAllPlanFeatures;
    return (0, _v1.jsx)(_v32, {
      children: (0, _v1.jsx)(_v26.Button, {
        "data-testid": "upsell-cta",
        size: "md",
        href: (0, _v27.buildUpgradePlanUrl)(_v0.paywallTracking, {
          upsell: _v0.params.upsell_name || "none",
          integration: _v0.params.integration || "none",
          feature: _v0.params.feature || "none"
        }),
        target: "_blank",
        as: "a",
        variant: "minmal",
        onClick: () => {
          _v33.default.trackButtonClick({
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
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = _v0 => {
    let _v1 = (0, _v37.getModalSubheader)(_v0.modalConfig?.subHeaderText),
      _v2 = _v0.modalConfig?.headerText;
    return (0, _v1.jsxs)(_v30, {
      children: [(0, _v1.jsxs)(_v20.Box, {
        w: "100%",
        px: {
          base: (0, _v23.rem)(16),
          md: 0
        },
        children: ["" !== _v2 && null !== _v2 && (0, _v1.jsx)(_v36.Header, {
          size: "lg",
          "data-testid": "upsell-header-text",
          textAlign: "center",
          children: (0, _v37.getModalHeader)(_v0.modalConfig?.headerText)
        }), _v1 ? (0, _v1.jsx)(_v31, {
          "data-testid": "upsell-subheader-text",
          children: _v1
        }) : null]
      }), (0, _v1.jsx)(_v38.default, {
        margin: (0, _v23.rem)(8),
        onClose: _v0.onClose
      })]
    });
  };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v0 => {
      let _v1 = _v0.previousCardPlan ? _v34.default.everythingInPlan(_v46.PLANS_DISPLAY_NAMES[_v0.previousCardPlan]) : _v34.default.keyFeatures,
        _v2 = (0, _v37.getPlanFeaturesList)(_v0.modalConfig, _v0.planData),
        _v3 = _v0.planData.tier,
        _v4 = (0, _v37.isRepackagingTier)(_v3) ? _v2?.length ?? 0 : _v3 === _v46.PLANS.ENTERPRISE ? 5 : [_v46.PLANS.STARTER, _v46.PLANS.PLUS].includes(_v3) ? 3 : 4;
      return _v2 && _v2.length > 0 ? (0, _v1.jsxs)(_v45.PlansFeaturesContainer, {
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm",
            xl: "heading-xs"
          },
          fontWeight: "600",
          children: _v1
        }), (0, _v1.jsx)(_v45.FeaturesWrapper, {
          children: _v2.slice(0, _v4).map((_v0, _v1) => (0, _v1.jsxs)(_v45.FeatureList, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v44.Checkmark, {
                height: (0, _v23.rem)(16),
                width: (0, _v23.rem)(16)
              })
            }), (0, _v1.jsx)(_v22.Text, {
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
    _v48 = ({
      planData: _v0,
      modalConfig: _v1,
      hideSubheading: _v2
    }) => {
      let _v3 = (0, _v37.getPlanSubHeading)(_v1, _v0),
        _v4 = (0, _v37.getBandwidthSubHeader)(_v0);
      return (0, _v1.jsxs)(_v45.PlanHeader, {
        style: {
          height: _v2 ? "" : "4rem"
        },
        children: [(0, _v1.jsx)(_v45.PlanTitle, {
          children: _v0.name
        }), (0, _v1.jsx)(_v36.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v4
        }), (!_v2 && !_v0.metadata.isBandwidthProduct && _v3 && _v3.length) > 0 ? (0, _v1.jsx)(_v45.PlanSubTitle, {
          children: _v3
        }) : null]
      });
    };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ({
    planData: _v0,
    displayMonthlyPlan: _v1
  }) => {
    let {
        entitlements: _v2
      } = _v0.metadata,
      _v3 = _v0.metadata.isBandwidthProduct,
      _v4 = (0, _v50.useViewer)(),
      _v5 = (0, _v37.isUkLocation)(_v4?.location),
      _v6 = (_v5 ? (0, _v37.getUkVatDisplayPrice)(_v0, _v1, _v3) : null) ?? (0, _v37.getPlanDisplayPrice)(_v0, _v1, _v3);
    return (0, _v1.jsx)(_v3.Flex, {
      flexDirection: "column",
      gap: {
        base: "xs",
        md: "sm",
        xl: "xs"
      },
      minHeight: {
        base: "initial",
        xl: (0, _v23.rem)(80)
      },
      maxHeight: {
        base: "initial",
        xl: (0, _v23.rem)(80)
      },
      children: _v0.tier === _v46.PLANS.ENTERPRISE ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: (0, _v1.jsx)(_v49.Building, {
            h: (0, _v23.rem)(40),
            w: (0, _v23.rem)(40)
          })
        }), (0, _v1.jsx)(_v22.Text, {
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
          children: _v34.default.talkToTeam
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: _v6
        }), (0, _v1.jsxs)(_v22.Text, {
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
            children: [_v46.SEAT_TIER_PLANS.includes(_v0.tier) ? _v2?.params?.videoStorageQuotaUnit === "video_size" ? _v34.default.perMonthBilledAnually : _v34.default.perSeatPerMonth : _v34.default.perMonth, (0, _v1.jsx)("br", {})]
          }), (0, _v37.getPlanBillingFrequencyCopy)(_v1, _v0, _v3), (0, _v1.jsx)("br", {}), _v5 ? _v34.default.inclVat20 : _v34.default.plusApplicableTax]
        })]
      })
    });
  };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = _v28.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-3c30b0dd-0"
    })`
  font-size: ${(0, _v23.rem)(14)};
  margin-top: ${(0, _v23.rem)(8)};
  padding: ${(0, _v23.rem)(11)} ${(0, _v23.rem)(16)};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: ${(0, _v23.rem)(17.64)};
  width: 100%;

  a:after {
    content: none;
  }

  a {
    text-decoration: underline !important;
  }
`,
    _v55 = ({
      allowFreeTrial: _v0,
      ctaTreatment: _v1 = "purchase_secondary",
      planData: _v2,
      displayMonthlyPlan: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(void 0),
        _v5 = (0, _v2.useRef)(void 0),
        [_v6, _v7] = (0, _v2.useState)(void 0),
        _v8 = (0, _v2.useContext)(_v18.default),
        _v9 = _v2.tier === _v46.PLANS.ENTERPRISE,
        _v10 = "free_trial_secondary" === _v1 && _v0,
        _v11 = "purchase_secondary" === _v1,
        _v12 = (0, _v2.useCallback)(() => {
          let {
              tier: _v0,
              price: _v1,
              currency: _v2
            } = _v2,
            _v3 = _v4?.current?.replace(/{\/?A}/g, "").trim();
          _v33.default.trackButtonClick({
            ..._v8.params,
            copy: _v3,
            currency: _v2.currencyCode,
            device_type: _v8.device_type,
            duration: _v3 ? "monthly" : "annual",
            is_new_pricing: (0, _v37.isSeatTierPlan)(_v0),
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
        _v13 = (0, _v2.useMemo)(() => (0, _v25.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v37.appendPaywallParams)((0, _v37.appendExtraQueryParams)((0, _v37.appendTrackingQueryParams)(_v2.metadata.interactions.purchase.uri.freeTrial, _v8.params), (0, _v53.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
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
        _v14 = (0, _v2.useMemo)(() => (0, _v25.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v37.appendPaywallParams)((0, _v37.appendExtraQueryParams)((0, _v37.appendTrackingQueryParams)((0, _v37.getPlanCTALink)(_v2, _v3, _v8.campaignOverride), _v8.params), (0, _v53.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
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
        _v10 ? (_v0 = _v13, _v1 = "or start free trial", _v2 = _v2.metadata.interactions.purchase.uri.freeTrial) : _v11 && (_v0 = _v14, _v1 = "or {A}purchase now{/A}", _v2 = (0, _v37.getPlanCTALink)(_v2, _v3, _v8.campaignOverride)), _v4.current = _v1, _v5.current = _v2, _v7(_v0);
      }, [_v10, _v11, _v3, _v2, _v13, _v14]), _v6 && !_v9 ? (0, _v1.jsx)(_v54, {
        "data-testid": "upsell-cta",
        children: _v6
      }) : (0, _v1.jsx)(_v54, {
        children: " "
      });
    },
    _v56 = ({
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
        _v16 = (0, _v2.useContext)(_v18.default),
        _v17 = _v1.tier === _v46.PLANS.ENTERPRISE;
      _v0 || (_v0 = _v12 ? "purchase_secondary" : "free_trial_secondary"), _v17 ? (_v13 = _v34.default.contactSales, _v14 = "/enterprise/contact?mkc=ent-upgrade-plan-modal", _v15 = "direct") : _v12 && ("free_trial_only" === _v0 || "purchase_secondary" === _v0) ? (_v13 = _v34.default.startFreeTrial, _v14 = _v1.metadata.interactions.purchase.uri.freeTrial, _v15 = "trial") : (_v13 = _v34.default.upgrade, _v14 = (0, _v37.getPlanCTALink)(_v1, _v2, _v16.campaignOverride), _v15 = "direct"), _v3 && (_v13 = _v3);
      let _v18 = "purchase_secondary" === _v0 || "free_trial_secondary" === _v0 && _v12;
      return (0, _v1.jsxs)(_v20.Box, {
        w: "100%",
        marginBottom: (0, _v23.rem)(8),
        children: [(0, _v1.jsx)(_v26.Button, {
          "data-testid": "upsell-cta",
          onClick: () => {
            _v33.default.trackButtonClick({
              ..._v16.params,
              copy: _v13,
              currency: _v1.currency.currencyCode,
              device_type: _v16.device_type,
              duration: _v2 ? "monthly" : "annual",
              is_new_pricing: (0, _v37.isSeatTierPlan)(_v1.tier),
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
          href: (0, _v37.appendExtraQueryParams)((0, _v37.appendPaywallParams)((0, _v37.appendTrackingQueryParams)(_v14, _v16.params), _v16.paywallTracking), _v17 ? void 0 : (0, _v53.getSatelliteCheckoutParamsFromCurrentLocation)()),
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
        }), _v18 && (0, _v1.jsx)(_v55, {
          "data-testid": "upsell-secondary-cta",
          allowFreeTrial: _v12,
          ctaTreatment: _v0,
          displayMonthlyPlan: _v2,
          planData: _v1
        })]
      });
    },
    _v57 = _v0 => {
      let _v1 = _v0.planData.tier === _v46.PLANS.ENTERPRISE,
        _v2 = (0, _v43.useTheme)(),
        {
          showRecommendedBadge: _v3
        } = _v0,
        {
          colorMode: _v4
        } = (0, _v42.useColorMode)(),
        {
          semanticTokens: {
            colors: _v5
          }
        } = _v2,
        _v6 = "dark" === _v4 ? _v5["text-primary"].default : "white";
      return "dark" === _v4 ? _v5.grayscale["200"] : _v5.grayscale["700"], (0, _v1.jsxs)(_v20.Box, {
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
        borderRadius: (0, _v23.rem)(20),
        border: _v3 ? "4px solid #8a5ee8" : `${(0, _v23.rem)(1)} solid ${_v5.slate["200"]}`,
        borderTop: _v3 ? "none" : void 0,
        marginTop: {
          base: _v3 ? (0, _v23.rem)(20) : void 0,
          xl: 0
        },
        position: "relative",
        width: {
          base: "100%",
          md: (0, _v23.rem)(618),
          xl: "100%"
        },
        flexDirection: {
          base: "column",
          md: "row",
          xl: "column"
        },
        children: [_v0.showRecommendedBadge ? (0, _v1.jsx)(_v45.RecommendedBadge, {
          children: _v34.default.recommended
        }) : null, (0, _v1.jsxs)(_v3.Flex, {
          gap: "1rem",
          flexDirection: "column",
          width: {
            base: "100%",
            md: (0, _v23.rem)(220),
            xl: "100%"
          },
          children: [(0, _v1.jsx)(_v48, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            hideSubheading: _v0.hideSubheading
          }), (0, _v1.jsx)(_v51, {
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v56, {
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
          children: [(0, _v1.jsx)(_v52.default, {
            modalConfig: _v0.modalConfig,
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v47, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            previousCardPlan: _v0.previousCardPlan
          })]
        })]
      });
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ["uri"],
    _v61 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v62 = () => {
      let {
          settings: _v0
        } = (0, _v10.useOrionSettings)(),
        _v1 = (0, _v50.useViewer)(),
        _v2 = _v1?.user?.id ?? null,
        _v3 = _v0.enable_cold_storage_plan_reorder,
        _v4 = !!_v2 && _v3 && "paid" !== (0, _v59.deriveViewerAuthStatus)(_v1),
        {
          data: _v5,
          isLoading: _v6
        } = (0, _v58.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v60,
          query: {
            filter: "cold_storage",
            perPage: 1
          },
          headers: _v61
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          data: _v7,
          isLoading: _v8
        } = (0, _v58.useGetUserVideos)(() => _v4 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v60,
          query: {
            filter: "cold_privacy",
            perPage: 1
          },
          headers: _v61
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
    _v63 = _v0 => {
      let {
          showIndividualPlans: _v1
        } = (0, _v40.useB2BRepackagingContext)(),
        {
          shouldReorder: _v2,
          isResolving: _v3
        } = _v62(),
        _v4 = [...(_v0.modalConfig?.excludePlans ?? []), ...(_v1 ? [] : [_v46.PLANS.CREATOR, _v46.PLANS.PROFESSIONAL]), ...(_v2 ? [_v46.PLANS.STARTER, _v46.PLANS.PLUS] : [])];
      if (_v3) return null;
      let _v5 = (0, _v37.filterPlansData)(_v0.plansData, _v0.userData, _v4),
        _v6 = _v0.modalConfig?.hidePlansSummary || _v5.length > 0 && (0, _v37.isSolutionTier)(_v5[0].tier),
        _v7 = (0, _v37.isEligibleForFreeTrial)(_v0.userData) && _v5 && !!_v5[0].metadata.interactions.purchase.uri.freeTrial;
      return (0, _v1.jsx)(_v41.Stack, {
        position: "relative",
        zIndex: 1,
        padding: `1rem 0 ${(0, _v23.rem)(20)} 0`,
        direction: {
          base: "column",
          xl: "row"
        },
        gap: "md",
        justifyContent: "center",
        children: _v5.map((_v0, _v1) => {
          let _v2 = (0, _v37.getPreviousPlanTierCopy)(_v5, _v0, _v1),
            _v3 = _v1 > 0 ? _v5[_v1 - 1].tier : null;
          return _v1 < 4 && (0, _v1.jsx)(_v57, {
            planData: _v0,
            userData: _v0.userData,
            previousCardPlan: _v2,
            modalConfig: _v0.modalConfig,
            showRecommendedBadge: _v0.modalConfig?.recommendedPlan ? _v0.tier === _v0.modalConfig?.recommendedPlan : (0, _v37.showRecommendedBadge)(_v0, _v1, _v3),
            displayMonthlyPlan: (0, _v37.showMonthlyPlans)(_v0.plansData),
            hideSubheading: _v6,
            allowFreeTrial: _v7
          }, `plan-card-${_v0.tier}`);
        })
      });
    },
    _v64 = _v0 => {
      let {
          modalConfig: _v1,
          plansData: _v2
        } = _v0,
        _v3 = _v1?.featuredBannerText,
        _v4 = _v2?.length && (0, _v37.isSeatTierPlan)(_v2[0].tier) ? _v3 ?? (0, _v25.translate)({
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
        }) : (0, _v25.translate)({
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
          marginTop: _v5 ? (0, _v23.rem)(40) : void 0,
          alignSelf: {
            base: "flex-start",
            xl: "center"
          },
          maxWidth: {
            sm: (0, _v23.rem)(375),
            md: (0, _v23.rem)(618),
            lg: (0, _v23.rem)(618),
            xl: (0, _v23.rem)(0)
          },
          children: (0, _v1.jsxs)(_v5.ModalBody, {
            padding: {
              base: "md",
              xl: "lg"
            },
            children: [_v5 && (0, _v1.jsx)(_v20.Box, {
              borderRadius: "xl",
              position: "absolute",
              width: "100%",
              top: (0, _v23.rem)(-40),
              left: 0,
              verticalAlign: "middle",
              justifyItems: "center",
              pt: "sm",
              pb: "sm",
              pr: "md",
              pl: "md",
              backgroundColor: "upsell-secondary",
              height: (0, _v23.rem)(80),
              zIndex: -1,
              children: (0, _v1.jsxs)(_v21.HStack, {
                children: [(0, _v1.jsx)(_v24.Diamond, {
                  h: "xs",
                  w: "xs",
                  color: "white",
                  backgroundColor: "upsell-primary",
                  borderRadius: (0, _v23.rem)(6),
                  padding: (0, _v23.rem)(4)
                }), (0, _v1.jsx)(_v22.Text, {
                  variant: "body-lg",
                  color: "text-primary",
                  children: _v4
                })]
              })
            }), (0, _v1.jsx)(_v39, {
              modalConfig: _v1,
              onClose: _v0.onClose,
              userName: _v0.userData?.name
            }), _v0.userData && _v2 && (0, _v1.jsx)(_v63, {
              modalConfig: _v1,
              userData: _v0.userData,
              plansData: _v2
            }), (0, _v1.jsx)(_v35, {})]
          })
        })]
      });
    };
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = _v0 => (0, _v1.jsx)(_v68.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.99 12.382a1 1 0 0 0 0-.764 1 1 0 0 0-.212-.325L14.124 5.64a1 1 0 0 0-1.414 1.414l3.951 3.95-11.725-.007a1.001 1.001 0 0 0-.928 1.389 1 1 0 0 0 .928.619l11.725-.007-3.95 3.95a1 1 0 1 0 1.413 1.414l5.654-5.654a1 1 0 0 0 .212-.325Z",
      fill: "currentColor"
    })
  });
  var _v70 = _v0.i(0);
  let _v71 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      margin: `${(0, _v23.rem)(8)} 0`,
      color: "white",
      fontWeight: 500,
      listStyleType: "none",
      children: (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v44.Checkmark, {
          position: "relative",
          top: (0, _v23.rem)(4),
          width: (0, _v23.rem)(20),
          height: (0, _v23.rem)(20),
          marginRight: (0, _v23.rem)(8),
          color: "white"
        }), _v0]
      })
    }),
    _v72 = () => {
      let _v0 = _v46.enterpriseDefaultFeatures.featuresList || [];
      return (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v71, {
          text: _v0
        }, String(_v1)))
      });
    },
    _v73 = ({
      src: _v0,
      title: _v1,
      onLoad: _v2
    }) => {
      let _v3 = (0, _v70.useIsMobile)();
      return (0, _v1.jsx)(_v20.Box, {
        position: "relative",
        overflow: "hidden",
        maxHeight: _v3 ? `calc(100vh - ${(0, _v23.rem)(172)})` : (0, _v23.rem)(687),
        maxWidth: _v3 ? "100%" : (0, _v23.rem)(600),
        minWidth: (0, _v23.rem)(375),
        height: (0, _v23.rem)(687),
        borderRadius: _v3 ? `0 0 ${(0, _v23.rem)(20)} ${(0, _v23.rem)(20)}` : `0 ${(0, _v23.rem)(20)} ${(0, _v23.rem)(20)} 0`,
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
    _v74 = ({
      modalConfig: _v0
    }) => {
      let {
          enterpriseTitle: _v1,
          enterpriseSubtitle: _v2
        } = _v0 || {},
        _v3 = (0, _v37.getEnterpriseModalTitle)(_v1),
        _v4 = (0, _v37.getEnterpriseSubtitle)(_v2);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v3 && (0, _v1.jsx)(_v36.Header, {
          as: "h1",
          size: "lg",
          marginBottom: (0, _v23.rem)(8),
          children: _v3
        }), _v4 && (0, _v1.jsx)(_v36.Header, {
          as: "h3",
          size: "xs",
          marginBottom: (0, _v23.rem)(24),
          children: _v4
        })]
      });
    },
    _v75 = ({
      userData: _v0,
      onClose: _v1,
      tracking: _v2,
      modalConfig: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(!0),
        {
          colors: _v6
        } = (0, _v43.useTheme)(),
        {
          colorMode: _v7
        } = (0, _v42.useColorMode)(),
        _v8 = (0, _v70.useIsMobile)(),
        _v9 = (0, _v2.useContext)(_v18.default);
      (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.data === _v46.CLOSE_EVENT_DATA && _v1();
        };
        return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
      }, [_v1]);
      let _v10 = {
          ..._v46.defaultBpEventParams,
          ..._v2.params,
          is_new_pricing: _v0 ? (0, _v37.isSeatTierPlan)(_v0?.membership?.type) : null,
          device_type: (0, _v37.getDeviceType)(),
          action_type: "click"
        },
        _v11 = _v3?.mkcCode ? "&mkc=" + _v3?.mkcCode : "",
        _v12 = _v46.ADVANCED_ENTERPRISE_UPSELL_FORM_URL + _v11 + "&tracking_param=" + encodeURIComponent(JSON.stringify(_v10)),
        _v13 = (0, _v37.getEnterpriseFooterLinkText)(_v3?.customFooterLinkText);
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
          children: (0, _v1.jsx)(_v66.Spinner, {
            size: "md",
            color: _v6.vimeoBlue["600"]
          })
        }), (0, _v1.jsxs)(_v7.ModalContent, {
          maxW: _v8 ? (0, _v23.rem)(375) : (0, _v23.rem)(940),
          maxH: _v8 ? "100vh" : (0, _v23.rem)(820),
          padding: 0,
          visibility: _v4 ? "hidden" : "visible",
          zIndex: 0,
          children: [(0, _v1.jsx)(_v38.default, {
            onClose: _v1
          }), (0, _v1.jsx)(_v5.ModalBody, {
            padding: 0,
            maxH: _v8 ? "100vh" : (0, _v23.rem)(820),
            overflow: "hidden",
            borderRadius: (0, _v23.rem)(20),
            children: (0, _v1.jsxs)(_v65.Grid, {
              templateColumns: `${!_v8 ? `minmax(${(0, _v23.rem)(268)}, ${(0, _v23.rem)(340)}) minmax(${(0, _v23.rem)(350)}, ${(0, _v23.rem)(600)})` : "1fr"}`,
              height: "100%",
              maxH: _v8 ? "100vh" : (0, _v23.rem)(820),
              sx: {
                "::-webkit-scrollbar": {
                  display: "none"
                }
              },
              children: [(0, _v1.jsxs)(_v3.Flex, {
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "dark" === _v7 ? _v6.gray["900"] : _v6.blackAlpha["900"],
                height: _v8 ? (0, _v23.rem)(172) : "100%",
                maxWidth: _v8 ? "100%" : (0, _v23.rem)(400),
                minWidth: "md",
                padding: _v8 ? 6 : `${(0, _v23.rem)(32)} ${(0, _v23.rem)(40)}`,
                borderRadius: _v8 ? `${(0, _v23.rem)(20)} ${(0, _v23.rem)(20)} 0 0` : `${(0, _v23.rem)(20)} 0 0 ${(0, _v23.rem)(20)}`,
                children: [(0, _v1.jsx)(_v3.Flex, {
                  flex: "1",
                  flexDirection: "column",
                  color: _v6.white,
                  paddingRight: 6,
                  children: (0, _v1.jsxs)(_v20.Box, {
                    children: [(0, _v1.jsx)(_v74, {
                      modalConfig: _v3
                    }), !_v8 && (0, _v1.jsx)(_v3.Flex, {
                      direction: "column",
                      fontSize: {
                        xs: "body-md",
                        sm: "body-md",
                        lg: "body-lg"
                      },
                      children: _v3?.customFeaturesList || (0, _v1.jsx)(_v72, {})
                    })]
                  })
                }), !_v8 && (0, _v1.jsxs)(_v67.Link, {
                  href: "/enterprise",
                  variant: "primary",
                  textDecoration: "underline",
                  color: _v6.white,
                  onClick: () => {
                    _v33.default.trackButtonClick({
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
                  children: [_v13, (0, _v1.jsx)(_v69, {
                    marginLeft: (0, _v23.rem)(6)
                  })]
                })]
              }), (0, _v1.jsx)(_v73, {
                title: _v34.default.contactUs,
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

        @media screen and (max-width: ${(0, _v23.rem)(375)}) {
          div#__next > div:nth-child(3) > div > div {
            overflow: auto;
            padding: ${(0, _v23.rem)(24)} ${(0, _v23.rem)(24)} 0 ${(0, _v23.rem)(24)};
            border-bottom: ${(0, _v23.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow {
            border-top: ${(0, _v23.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
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
            background-image: radial-gradient(circle at 100% 100%, transparent ${(0, _v23.rem)(25)}, ${"dark" === _v7 ? _v6.gray[800] : _v6.white} ${(0, _v23.rem)(8)});
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
  var _v76 = _v0.i(0);
  let _v77 = "https://",
    _v78 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v79 = async (_v0, _v1) => {
      let _v2 = `${_v77}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v78(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v76.default)(_v4)).membership.type = (0, _v76.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v80 = async (_v0, _v1, _v2) => {
      let _v3 = `${_v77}${_v0}/me/subscription_plans?vuid=${(0, _v37.getVuid)()}`;
      _v2 && (_v3 += `&campaign_id=${_v2}`);
      let _v4 = await fetch(_v3, {
        method: "GET",
        headers: _v78(_v1.jwt)
      });
      if (_v4.ok) {
        let _v0 = await _v4.json();
        return (0, _v76.default)(_v0.data);
      }
      throw _v4;
    };
  var _v81 = _v0.i(0);
  let _v82 = ["feature"],
    _v83 = function (_v0) {
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
        } = _v62(),
        _v8 = (0, _v9.useCampaignIdOverride)(),
        _v9 = _v0.onClose;
      (0, _v2.useEffect)(() => {
        let _v0 = async () => await _v79(_v2, _v3.jwt),
          _v1 = async () => await _v80(_v2, _v3, _v8);
        (async () => {
          let [_v0, _v1] = await Promise.all([_v0(), _v1()]),
            _v2 = _v4.core_tier_enabled ? _v1 : _v1?.filter(_v0 => _v0.tier !== _v46.PLANS.CORE);
          _v6(_v0 => ({
            ..._v0,
            isShowing: !0,
            userData: _v0,
            plansData: _v2
          })), _v33.default.configure(_v0, _v3.userId), _v0.tracking.onOpen && _v0.tracking.onOpen();
        })();
      }, [_v0.tracking, _v2, _v3, _v8, _v4.core_tier_enabled]), (0, _v2.useEffect)(() => {
        let _v0 = Date.now();
        !_v5.hasTrackedImpression && _v5.userData?.membership?.type && (_v33.default.trackImpression({
          ..._v0.tracking.params,
          loading_time: (Date.now() - _v0) / 0,
          is_new_pricing: (0, _v37.isSeatTierPlan)(_v5.userData?.membership?.type),
          device_type: (0, _v37.getDeviceType)()
        }, _v0.tracking.bpEventVersion), _v6(_v0 => ({
          ..._v0,
          hasTrackedImpression: !0
        })));
      }, [_v0.tracking, _v5.userData?.membership?.type, _v5.hasTrackedImpression]);
      let _v10 = _v5.userData?.membership?.type,
        _v11 = _v0.templateType;
      _v82.includes(_v0.templateType) || _v10 !== _v46.PLANS.ADVANCED && _v10 !== _v46.PLANS.PREMIUM && _v10 !== _v46.PLANS.TEAM_LIVE && _v10 !== _v46.PLANS.CUSTOM_SELF_SERVE && _v10 !== _v46.PLANS.STUDIO && _v10 !== _v46.PLANS.PRODUCTION || (0, _v37.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v11 = "enterprise");
      let _v12 = _v0.tracking.paywallTracking.paywallFeature,
        _v13 = _v0.tracking.paywallTracking.paywallTrigger,
        _v14 = (0, _v81.isBspLateStagePaywallKind)(_v4.late_stage_paywall_kind),
        _v15 = (0, _v81.resolvePrivacyOptionFromTrigger)(_v13),
        _v16 = (0, _v81.resolveVariant)(_v12),
        _v17 = "privacy" !== _v16 || _v15 ? _v16 : "generic",
        _v18 = "limits_only_bsp" === _v4.late_stage_paywall_kind && "generic" === _v17,
        _v19 = _v13?.toLowerCase() ?? "",
        _v20 = _v19.includes("cold_storage") || _v19.includes("cold_privacy") ? _v4.cold_storage_trigger_paywall_tier : _v4.limit_based_paywall_tier,
        _v21 = _v5.userData?.membership?.type && _v5.plansData ? (0, _v81.resolveTier)({
          currentTier: _v5.userData?.membership?.type,
          tierSetting: _v20,
          plansData: _v5.plansData,
          excludePlans: _v0.modalConfig?.excludePlans,
          variant: _v17
        }) : null,
        _v22 = "bsp_cards_generic_and_bsp_limits" === _v4.late_stage_paywall_kind || "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind,
        _v23 = "generic" === _v17 && _v22 && ![_v46.PLANS.STARTER, _v46.PLANS.STANDARD, _v46.PLANS.ADVANCED].includes(_v21),
        _v24 = "generic" === _v17 && _v22 ? "760px" : "560px",
        _v25 = _v14 && "default" === _v0.templateType && "enterprise" !== _v11 && !!_v21 && !_v18 && !_v23,
        _v26 = _v0.tracking.paywallTracking,
        _v27 = !!_v5.userData && (0, _v37.isEligibleForFreeTrial)(_v5.userData),
        {
          trackPaywallDismissed: _v28
        } = (0, _v17.usePaywallTracking)({
          ..._v0.tracking.paywallTracking,
          isVisible: _v5.isShowing
        }),
        _v29 = (0, _v2.useCallback)(() => {
          _v28(), _v9();
        }, [_v28, _v9]),
        _v30 = "default" === _v11 && !_v25 && "enterprise" !== _v10,
        _v31 = _v5.plansData?.some(_v0 => _v0.tier === _v46.PLANS.STARTER || _v0.tier === _v46.PLANS.PLUS) ?? !1,
        _v32 = _v5.isShowing && _v7 && _v30 && _v31,
        {
          trackColdStoragePlanReorderDisplayed: _v33
        } = (0, _v16.useColdStorageReorderTracking)(),
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
                        return (0, _v1.jsx)(_v14.StorageLimitPaywall, {
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
                        if ("bsp_table_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v15.TableComparisonPaywall, {
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
          }) : "enterprise" === _v10 ? (0, _v1.jsx)(_v75, {
            userData: _v5.userData,
            onClose: _v29,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v64, {
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
          _v1 = (0, _v1.jsx)(_v19.default, {
            modalConfig: _v0.modalConfig,
            onClose: _v29
          });
          break;
        case "enterprise":
          _v1 = (0, _v1.jsx)(_v75, {
            userData: _v5.userData,
            onClose: _v29,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          });
          break;
        default:
          _v1 = null;
      }
      return _v5.isShowing ? (0, _v1.jsx)(_v18.default.Provider, {
        value: {
          ..._v0.tracking,
          device_type: (0, _v37.getDeviceType)(),
          campaignOverride: _v8
        },
        children: _v1
      }) : null;
    };
  _v0.s(["default", 0, _v83], 0), _v0.s(["default", 0, _v83], 0);
}