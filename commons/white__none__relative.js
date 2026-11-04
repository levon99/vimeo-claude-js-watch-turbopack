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
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v7.Flex, {
      margin: `${(0, _v34.rem)(8)} 0`,
      color: "white",
      fontWeight: 500,
      listStyleType: "none",
      children: (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v43.Checkmark, {
          position: "relative",
          top: (0, _v34.rem)(4),
          width: (0, _v34.rem)(20),
          height: (0, _v34.rem)(20),
          marginRight: (0, _v34.rem)(8),
          color: "white"
        }), _v0]
      })
    }),
    _v46 = () => {
      let _v0 = _v44.enterpriseDefaultFeatures.featuresList || [];
      return (0, _v1.jsx)(_v7.Flex, {
        direction: "column",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v45, {
          text: _v0
        }, String(_v1)))
      });
    },
    _v47 = ({
      src: _v0,
      title: _v1,
      onLoad: _v2
    }) => {
      let _v3 = (0, _v42.useIsMobile)();
      return (0, _v1.jsx)(_v40.Box, {
        position: "relative",
        overflow: "hidden",
        maxHeight: _v3 ? `calc(100vh - ${(0, _v34.rem)(172)})` : (0, _v34.rem)(687),
        maxWidth: _v3 ? "100%" : (0, _v34.rem)(600),
        minWidth: (0, _v34.rem)(375),
        height: (0, _v34.rem)(687),
        borderRadius: _v3 ? `0 0 ${(0, _v34.rem)(20)} ${(0, _v34.rem)(20)}` : `0 ${(0, _v34.rem)(20)} ${(0, _v34.rem)(20)} 0`,
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
    };
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = ({
    modalConfig: _v0
  }) => {
    let {
        enterpriseTitle: _v1,
        enterpriseSubtitle: _v2
      } = _v0 || {},
      _v3 = (0, _v49.getEnterpriseModalTitle)(_v1),
      _v4 = (0, _v49.getEnterpriseSubtitle)(_v2);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v3 && (0, _v1.jsx)(_v48.Header, {
        as: "h1",
        size: "lg",
        marginBottom: (0, _v34.rem)(8),
        children: _v3
      }), _v4 && (0, _v1.jsx)(_v48.Header, {
        as: "h3",
        size: "xs",
        marginBottom: (0, _v34.rem)(24),
        children: _v4
      })]
    });
  };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = ({
    userData: _v0,
    onClose: _v1,
    tracking: _v2,
    modalConfig: _v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!0),
      {
        colors: _v6
      } = (0, _v36.useTheme)(),
      {
        colorMode: _v7
      } = (0, _v39.useColorMode)(),
      _v8 = (0, _v42.useIsMobile)(),
      _v9 = (0, _v2.useContext)(_v30.default);
    (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
        _v0.data === _v44.CLOSE_EVENT_DATA && _v1();
      };
      return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
    }, [_v1]);
    let _v10 = {
        ..._v44.defaultEnterpriseTrackingParams,
        ..._v2.params,
        is_new_pricing: _v0 ? (0, _v49.isSeatTierPlan)(_v0?.membership?.type) : null,
        device_type: (0, _v49.getDeviceType)(),
        action_type: "click"
      },
      _v11 = _v3?.mkcCode ? "&mkc=" + _v3?.mkcCode : "",
      _v12 = _v44.ADVANCED_ENTERPRISE_UPSELL_FORM_URL + _v11 + "&tracking_param=" + encodeURIComponent(JSON.stringify(_v10)),
      _v13 = (0, _v49.getEnterpriseFooterLinkText)(_v3?.customFooterLinkText);
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
        children: (0, _v1.jsx)(_v37.Spinner, {
          size: "md",
          color: _v6.vimeoBlue["600"]
        })
      }), (0, _v1.jsxs)(_v11.ModalContent, {
        maxW: _v8 ? (0, _v34.rem)(375) : (0, _v34.rem)(940),
        maxH: _v8 ? "100vh" : (0, _v34.rem)(820),
        padding: 0,
        visibility: _v4 ? "hidden" : "visible",
        zIndex: 0,
        children: [(0, _v1.jsx)(_v52.default, {
          onClose: _v1
        }), (0, _v1.jsx)(_v9.ModalBody, {
          padding: 0,
          maxH: _v8 ? "100vh" : (0, _v34.rem)(820),
          overflow: "hidden",
          borderRadius: (0, _v34.rem)(20),
          children: (0, _v1.jsxs)(_v35.Grid, {
            templateColumns: `${!_v8 ? `minmax(${(0, _v34.rem)(268)}, ${(0, _v34.rem)(340)}) minmax(${(0, _v34.rem)(350)}, ${(0, _v34.rem)(600)})` : "1fr"}`,
            height: "100%",
            maxH: _v8 ? "100vh" : (0, _v34.rem)(820),
            sx: {
              "::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: [(0, _v1.jsxs)(_v7.Flex, {
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "dark" === _v7 ? _v6.gray["900"] : _v6.blackAlpha["900"],
              height: _v8 ? (0, _v34.rem)(172) : "100%",
              maxWidth: _v8 ? "100%" : (0, _v34.rem)(400),
              minWidth: "md",
              padding: _v8 ? 6 : `${(0, _v34.rem)(32)} ${(0, _v34.rem)(40)}`,
              borderRadius: _v8 ? `${(0, _v34.rem)(20)} ${(0, _v34.rem)(20)} 0 0` : `${(0, _v34.rem)(20)} 0 0 ${(0, _v34.rem)(20)}`,
              children: [(0, _v1.jsx)(_v7.Flex, {
                flex: "1",
                flexDirection: "column",
                color: _v6.white,
                paddingRight: 6,
                children: (0, _v1.jsxs)(_v40.Box, {
                  children: [(0, _v1.jsx)(_v50, {
                    modalConfig: _v3
                  }), !_v8 && (0, _v1.jsx)(_v7.Flex, {
                    direction: "column",
                    fontSize: {
                      xs: "body-md",
                      sm: "body-md",
                      lg: "body-lg"
                    },
                    children: _v3?.customFeaturesList || (0, _v1.jsx)(_v46, {})
                  })]
                })
              }), !_v8 && (0, _v1.jsxs)(_v38.Link, {
                href: "/enterprise",
                variant: "primary",
                textDecoration: "underline",
                color: _v6.white,
                onClick: () => {
                  _v9.onButtonClick && _v9.onButtonClick({
                    copy: _v13,
                    target_path: "/enterprise"
                  });
                },
                children: [_v13, (0, _v1.jsx)(_v41.ArrowRightSmall, {
                  marginLeft: (0, _v34.rem)(6)
                })]
              })]
            }), (0, _v1.jsx)(_v47, {
              title: _v51.default.contactUs,
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

        @media screen and (max-width: ${(0, _v34.rem)(375)}) {
          div#__next > div:nth-child(3) > div > div {
            overflow: auto;
            padding: ${(0, _v34.rem)(24)} ${(0, _v34.rem)(24)} 0 ${(0, _v34.rem)(24)};
            border-bottom: ${(0, _v34.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow {
            border-top: ${(0, _v34.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
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
            background-image: radial-gradient(circle at 100% 100%, transparent ${(0, _v34.rem)(25)}, ${"dark" === _v7 ? _v6.gray[800] : _v6.white} ${(0, _v34.rem)(8)});
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
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = "https://",
    _v57 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v58 = async (_v0, _v1) => {
      let _v2 = `${_v56}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v57(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v55.default)(_v4)).membership.type = (0, _v55.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v59 = async (_v0, _v1, _v2, _v3 = !0) => {
      let _v4 = `${_v56}${_v0}/me/subscription_plans?vuid=${(0, _v49.getVuid)()}`;
      _v3 || (_v4 += "&include_tax=false"), _v2 && (_v4 += `&campaign_id=${_v2}`);
      let _v5 = await fetch(_v4, {
        method: "GET",
        headers: _v57(_v1.jwt)
      });
      if (_v5.ok) {
        let _v0 = await _v5.json();
        return (0, _v55.default)(_v0.data);
      }
      throw _v5;
    };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = new Set(["limit_based_bsp", "limits_only_bsp", "bsp_cards_generic_and_bsp_limits", "bsp_table_generic_and_bsp_limits", "pcp_based"]),
    _v63 = _v0 => _v62.has(_v0),
    _v64 = _v0 => "pcp_based" === _v0,
    _v65 = (_v0, _v1) => "storage_limit" === _v0 || "storage_limit_approaching" === _v0 || "quota" === _v0 && void 0 !== _v1 && _v64(_v1) ? "storage" : "privacy" === _v0 || "showcase_privacy" === _v0 ? "privacy" : "generic",
    _v66 = (_v0, _v1) => _v64(_v0) ? "plans_comparison" : "storage" === _v1 ? "storage_limit" : "privacy" === _v1 ? "privacy_limit" : "bsp_cards_generic_and_bsp_limits" === _v0 ? "card_comparison" : "bsp_table_generic_and_bsp_limits" === _v0 ? "table_comparison" : "generic_limit",
    _v67 = _v0 => {
      let _v1 = _v0?.toLowerCase();
      return _v1 ? _v1.includes("unlisted_privacy") ? "unlisted" : _v1.includes("disable_privacy") ? "hide_from_vimeo" : _v1.includes("password_privacy") ? "password" : _v1.includes("free_tier_unlisted") || _v1.includes("cold_privacy") ? "generic" : null : null;
    },
    _v68 = ({
      paywallFeature: _v0,
      plansData: _v1
    }) => {
      let _v2;
      return "privacy" === _v65(_v0) && (_v2 = _v1.find(_v0 => _v0.tier === _v44.PLANS.CREATOR), (0, _v61.isCreatorRestrictedForFeature)({
        creatorPlan: _v2,
        feature: "privacy"
      }));
    };
  _v0.s(["isBspLateStagePaywallKind", 0, _v63, "isPcpLateStagePaywallKind", 0, _v64, "isPrivacyPaywallOnUnlistedRestrictedCreator", 0, _v68, "resolvePaywallStyle", 0, _v66, "resolvePrivacyOptionFromTrigger", 0, _v67, "resolveVariant", 0, _v65], 0);
  let _v69 = ["feature"],
    _v70 = ["monthly", "yearly"],
    _v71 = ["yearly"],
    _v72 = function (_v0) {
      let _v1,
        {
          apiUrl: _v2,
          userConfig: _v3
        } = _v0,
        {
          core_tier_enabled: _v4,
          late_stage_paywall_kind: _v5,
          cold_storage_trigger_paywall_tier: _v6,
          limit_based_paywall_tier: _v7,
          second_free_trial_enabled: _v8,
          pcp_other_plans_enabled: _v9,
          pcp_paywall_default_periodicity: _v10,
          homepage_paywall_monthly_free_trial: _v11,
          show_tax_inclusive_prices: _v12
        } = (0, _v15.useOrionSettingsFields)(["core_tier_enabled", "late_stage_paywall_kind", "cold_storage_trigger_paywall_tier", "limit_based_paywall_tier", "second_free_trial_enabled", "pcp_other_plans_enabled", "pcp_paywall_default_periodicity", "homepage_paywall_monthly_free_trial", "show_tax_inclusive_prices"]),
        {
          showIndividualPlans: _v13
        } = (0, _v5.useB2BRepackagingContext)(),
        [_v14, _v15] = (0, _v2.useState)({
          isShowing: !1,
          userData: null,
          plansData: null
        }),
        {
          shouldReorder: _v16
        } = (0, _v54.useColdStoragePlanReorder)(),
        {
          campaignId: _v17,
          isLoading: _v18
        } = (0, _v14.useCampaignIdOverride)(),
        _v19 = _v0.onClose;
      (0, _v2.useEffect)(() => {
        let _v0 = !1;
        if (_v18) return () => {
          _v0 = !0;
        };
        let _v1 = async () => await _v58(_v2, _v3.jwt),
          _v2 = async () => await _v59(_v2, _v3, _v17, _v12 ?? !1);
        return (async () => {
          try {
            let [_v0, _v1] = await Promise.all([_v1(), _v2()]);
            if (_v0) return;
            let _v2 = (0, _v27.applyPlanAvailabilityPolicy)(_v1, {
              coreTierEnabled: _v4
            });
            _v15(_v0 => ({
              ..._v0,
              isShowing: !0,
              userData: _v0,
              plansData: _v2
            })), _v0.tracking.onOpen && _v0.tracking.onOpen();
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v0.tracking, _v2, _v3, _v17, _v18, _v4, _v12]);
      let _v20 = _v14.userData?.membership?.type,
        {
          isEligible: _v21,
          isLoading: _v22
        } = (0, _v6.useIsPermanentDiscountOfferEligible)(),
        {
          studioPlan: _v23,
          professionalPlan: _v24
        } = (0, _v6.usePermanentDiscountOfferPlans)(_v14.plansData),
        _v25 = (0, _v2.useMemo)(() => null != _v23 ? (0, _v4.resolveStudioRenewalDiscount)({
          studioPlan: _v23,
          professionalPlan: _v24 ?? null,
          isAnnual: !(0, _v49.showMonthlyPlans)(_v14.plansData ?? [])
        }) : null, [_v23, _v24, _v14.plansData]),
        _v26 = "default" === _v0.templateType && _v21 && null != _v25,
        _v27 = _v0.templateType;
      _v69.includes(_v0.templateType) || _v20 !== _v44.PLANS.ADVANCED && _v20 !== _v44.PLANS.PREMIUM && _v20 !== _v44.PLANS.TEAM_LIVE && _v20 !== _v44.PLANS.CUSTOM_SELF_SERVE && _v20 !== _v44.PLANS.STUDIO && _v20 !== _v44.PLANS.PRODUCTION || (0, _v49.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v27 = "enterprise"), _v26 && (_v27 = _v0.templateType);
      let _v28 = _v0.tracking.paywallTracking.paywallFeature,
        _v29 = _v0.tracking.paywallTracking.paywallTrigger,
        _v30 = _v0.bundleOffer?.mode === "claim",
        _v31 = _v63(_v5),
        _v32 = _v64(_v5),
        _v33 = _v67(_v29),
        _v34 = _v65(_v28, _v5),
        _v35 = "privacy" !== _v34 || _v33 ? _v34 : "generic",
        _v36 = "limits_only_bsp" === _v5 && "generic" === _v35,
        _v37 = _v29?.toLowerCase() ?? "",
        _v38 = _v37.includes("cold_storage") || _v37.includes("cold_privacy"),
        _v39 = (0, _v2.useMemo)(() => _v14.plansData ? (0, _v3.filterB2BRepackagingPlans)(_v14.plansData, _v13) : null, [_v14.plansData, _v13]),
        _v40 = _v14.userData?.membership?.type && _v39 ? (0, _v29.resolveRecommendedTier)({
          currentTier: _v14.userData?.membership?.type,
          tierSetting: _v38 ? _v6 : _v7,
          plansData: _v39,
          excludePlans: _v0.modalConfig?.excludePlans,
          variant: _v35
        }) : null,
        _v41 = "bsp_cards_generic_and_bsp_limits" === _v5 || "bsp_table_generic_and_bsp_limits" === _v5,
        _v42 = "generic" === _v35 && _v41 && ![_v44.PLANS.STARTER, _v44.PLANS.STANDARD, _v44.PLANS.ADVANCED].includes(_v40),
        _v43 = "generic" === _v35 && _v41,
        _v44 = !_v30 && _v31 && "default" === _v0.templateType && "enterprise" !== _v27 && !_v26 && !!_v40 && !_v36 && !_v42,
        _v45 = _v44 && !_v32 && !_v43,
        _v46 = (0, _v24.useLimitPaywallBundleOffer)({
          enabled: _v45
        }),
        _v47 = _v43 ? "760px" : _v32 ? "480px" : null !== _v46 ? "600px" : "560px",
        _v48 = "enterprise" === _v27 || "default" === _v27 && "enterprise" === _v20 ? "enterprise_modal" : "default" === _v27 ? "default_modal" : "custom_modal",
        _v49 = _v44 ? _v66(_v5, _v35) : _v48,
        _v50 = _v14.userData?.membership?.type ?? null,
        _v51 = (0, _v2.useMemo)(() => _v44 && _v40 ? _v43 ? [_v50, _v40].filter(Boolean) : [_v40] : void 0, [_v44, _v43, _v40, _v50]),
        _v52 = _v44 ? _v32 ? _v70 : _v43 ? "bsp_table_generic_and_bsp_limits" === _v5 ? _v71 : _v70 : void 0 : void 0,
        _v53 = _v44 ? _v51 ?? [] : [],
        _v54 = _v44 ? _v52 ?? [] : [],
        _v55 = _v0.tracking.paywallTracking,
        {
          capabilities: {
            hasSecondFreeTrialEligibility: _v56
          }
        } = (0, _v13.useCapability)(_v8 ? ["hasSecondFreeTrialEligibility"] : []),
        _v57 = !!_v14.userData && (0, _v49.isEligibleForFreeTrial)(_v14.userData, _v8 && !!_v56),
        _v58 = !!_v14.plansData && _v68({
          paywallFeature: _v28,
          plansData: _v14.plansData
        }),
        _v59 = !_v30 && !_v26 && (_v44 || "default" === _v27 && "enterprise" !== _v20),
        _v60 = _v57 && (_v14.plansData ?? []).some(_v28.hasFreeTrialPurchasePath),
        {
          isResolving: _v61,
          variant: _v62,
          accountAddress: _v63
        } = (0, _v23.usePaywallOneTap)({
          isPaywallReady: _v59 && _v14.isShowing && !_v60
        }),
        _v64 = _v62 ? _v14.plansData?.find(_v0 => String(_v0.tier) === _v23.ONE_TAP_TIER) : void 0,
        _v65 = _v62 && _v64 ? {
          variant: _v62,
          plan: _v64
        } : null,
        {
          trackPaywallDismissed: _v66,
          trackPaywallCtaClicked: _v67
        } = (0, _v26.usePaywallTracking)({
          ..._v0.tracking.paywallTracking,
          paywallStyle: _v65 ? "one_tap_upsell" : _v49,
          paywallPlansDisplayed: _v65 ? [_v23.ONE_TAP_TIER] : _v53,
          paywallPeriodicitiesDisplayed: _v65 ? [_v65.variant.isMonthly ? "monthly" : "yearly"] : _v54,
          isVisible: _v14.isShowing && "offer" !== _v0.templateType && (_v44 || "default_modal" !== _v48)
        }),
        _v68 = (0, _v2.useCallback)(() => {
          _v66(), "default" === _v27 && window.dispatchEvent(new CustomEvent(_v60.DEFAULT_MODAL_DISMISSED_EVENT)), _v19();
        }, [_v19, _v27, _v66]),
        _v69 = "default" === _v27 && !_v44 && "enterprise" !== _v20,
        _v70 = _v14.plansData?.some(_v0 => _v0.tier === _v44.PLANS.STARTER || _v0.tier === _v44.PLANS.PLUS) ?? !1,
        _v71 = _v14.isShowing && _v16 && _v69 && _v70,
        {
          trackColdStoragePlanReorderDisplayed: _v72
        } = (0, _v25.useColdStorageReorderTracking)(),
        _v73 = (0, _v2.useRef)(!1);
      switch ((0, _v2.useEffect)(() => {
        _v71 && !_v73.current && (_v73.current = !0, _v72({
          surface: "upsell_modal"
        }));
      }, [_v71, _v72]), _v27) {
        case "default":
          _v1 = _v65 && _v63 ? (0, _v1.jsx)(_v19.OneTapPaywallModal, {
            plan: _v65.plan,
            onClose: _v68,
            billingAddress: _v63,
            paywallTracking: _v55,
            ..._v65.variant
          }) : _v44 && _v40 ? (0, _v1.jsxs)(_v8.Modal, {
            isOpen: !0,
            onClose: _v68,
            size: _v32 ? "md" : ["full", "md"],
            scrollBehavior: "inside",
            children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
              containerProps: {
                padding: {
                  base: _v32 ? "16px !important" : "0 !important"
                }
              },
              maxWidth: {
                base: _v32 ? "100%" : "100vw",
                md: _v47
              },
              width: {
                base: "100%",
                md: _v47
              },
              height: {
                base: _v32 ? "auto" : "100dvh",
                md: "auto"
              },
              minH: {
                base: _v32 ? "auto" : "100dvh",
                md: "auto"
              },
              maxH: {
                base: _v32 ? "92dvh" : "100dvh",
                md: _v32 ? "92vh" : "90vh"
              },
              borderRadius: {
                base: _v32 ? "16px" : "0",
                md: "16px"
              },
              margin: {
                base: _v32 ? "auto" : "0",
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
                    if (_v64(_v0)) return (0, _v1.jsx)(_v18.LateStagePcpPaywall, {
                      variant: _v2,
                      privacyOption: _v5,
                      tier: _v3,
                      paywallTracking: _v1,
                      isUserEligibleForFreeTrial: _v6,
                      showOtherPlans: _v7,
                      defaultPeriodicity: _v8,
                      monthlyFreeTrial: _v9,
                      isExistingSubscriber: null !== _v4 && _v4 !== _v44.PLANS.FREE,
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
                    kind: _v5,
                    paywallTracking: _v55,
                    variant: _v35,
                    tier: _v40,
                    currentTier: _v14.userData?.membership?.type ?? null,
                    privacyOption: _v33,
                    isUserEligibleForFreeTrial: _v57,
                    showOtherPlans: _v9,
                    defaultPeriodicity: _v10,
                    monthlyFreeTrial: _v11,
                    onCtaClick: _v67
                  })
                })
              })]
            })]
          }) : _v26 && _v23 ? (0, _v1.jsx)(_v33.default, {
            studioPlan: _v23,
            professionalPlan: _v24,
            isAnnual: !(0, _v49.showMonthlyPlans)(_v14.plansData ?? []),
            onClose: _v68,
            tracking: _v0.tracking
          }) : "enterprise" === _v20 ? (0, _v1.jsx)(_v53, {
            userData: _v14.userData,
            onClose: _v68,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v32.default, {
            userData: _v14.userData,
            plansData: _v14.plansData,
            modalConfig: {
              hidePlansSummary: !0,
              ..._v0.modalConfig,
              suppressAllPaidPlansBanner: _v58
            },
            bundleOffer: _v0.bundleOffer,
            onClose: _v19,
            tracking: _v0.tracking
          });
          break;
        case "feature":
          _v1 = (0, _v1.jsx)(_v31.default, {
            modalConfig: _v0.modalConfig,
            onClose: _v68
          });
          break;
        case "enterprise":
          _v1 = (0, _v1.jsx)(_v53, {
            userData: _v14.userData,
            onClose: _v68,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          });
          break;
        default:
          _v1 = null;
      }
      return !_v14.isShowing || _v59 && _v61 || _v22 ? null : (0, _v1.jsx)(_v30.default.Provider, {
        value: {
          ..._v0.tracking,
          device_type: (0, _v49.getDeviceType)(),
          campaignOverride: _v17,
          allowMonthlyTrial: _v11
        },
        children: _v1
      });
    };
  _v0.s(["default", 0, _v72], 0), _v0.s(["default", 0, _v72], 0);
}