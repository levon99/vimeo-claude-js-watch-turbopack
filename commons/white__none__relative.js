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
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = ({
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
        ..._v44.defaultBpEventParams,
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
        children: [(0, _v1.jsx)(_v53.default, {
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
                  _v51.default.trackButtonClick({
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
                children: [_v13, (0, _v1.jsx)(_v41.ArrowRightSmall, {
                  marginLeft: (0, _v34.rem)(6)
                })]
              })]
            }), (0, _v1.jsx)(_v47, {
              title: _v52.default.contactUs,
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
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = "https://",
    _v58 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v59 = async (_v0, _v1) => {
      let _v2 = `${_v57}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v58(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v56.default)(_v4)).membership.type = (0, _v56.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v60 = async (_v0, _v1, _v2) => {
      let _v3 = `${_v57}${_v0}/me/subscription_plans?vuid=${(0, _v49.getVuid)()}`;
      _v2 && (_v3 += `&campaign_id=${_v2}`);
      let _v4 = await fetch(_v3, {
        method: "GET",
        headers: _v58(_v1.jwt)
      });
      if (_v4.ok) {
        let _v0 = await _v4.json();
        return (0, _v56.default)(_v0.data);
      }
      throw _v4;
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = new Set(["limit_based_bsp", "limits_only_bsp", "bsp_cards_generic_and_bsp_limits", "bsp_table_generic_and_bsp_limits", "pcp_based"]),
    _v64 = _v0 => _v63.has(_v0),
    _v65 = _v0 => "pcp_based" === _v0,
    _v66 = (_v0, _v1) => "storage_limit" === _v0 || "quota" === _v0 && void 0 !== _v1 && _v65(_v1) ? "storage" : "privacy" === _v0 || "showcase_privacy" === _v0 ? "privacy" : "generic",
    _v67 = (_v0, _v1) => _v65(_v0) ? "plans_comparison" : "storage" === _v1 ? "storage_limit" : "privacy" === _v1 ? "privacy_limit" : "bsp_cards_generic_and_bsp_limits" === _v0 ? "card_comparison" : "bsp_table_generic_and_bsp_limits" === _v0 ? "table_comparison" : "generic_limit",
    _v68 = _v0 => {
      let _v1 = _v0?.toLowerCase();
      return _v1 ? _v1.includes("unlisted_privacy") ? "unlisted" : _v1.includes("disable_privacy") ? "hide_from_vimeo" : _v1.includes("password_privacy") ? "password" : _v1.includes("cold_privacy") ? "generic" : null : null;
    },
    _v69 = ({
      paywallFeature: _v0,
      plansData: _v1
    }) => {
      let _v2;
      return "privacy" === _v66(_v0) && (_v2 = _v1.find(_v0 => _v0.tier === _v44.PLANS.CREATOR), (0, _v62.isCreatorRestrictedForFeature)({
        creatorPlan: _v2,
        feature: "privacy"
      }));
    };
  _v0.s(["isBspLateStagePaywallKind", 0, _v64, "isPcpLateStagePaywallKind", 0, _v65, "isPrivacyPaywallOnUnlistedRestrictedCreator", 0, _v69, "resolvePaywallStyle", 0, _v67, "resolvePrivacyOptionFromTrigger", 0, _v68, "resolveVariant", 0, _v66], 0);
  let _v70 = ["feature"],
    _v71 = ["monthly", "yearly"],
    _v72 = ["yearly"],
    _v73 = function (_v0) {
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
        } = (0, _v55.useColdStoragePlanReorder)(),
        _v9 = (0, _v14.useCampaignIdOverride)(),
        _v10 = _v0.onClose;
      (0, _v2.useEffect)(() => {
        let _v0 = !1,
          _v1 = async () => await _v59(_v2, _v3.jwt),
          _v2 = async () => await _v60(_v2, _v3, _v9);
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
            })), _v51.default.configure(_v0, _v3.userId), _v0.tracking.onOpen && _v0.tracking.onOpen();
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v0.tracking, _v2, _v3, _v9, _v4.core_tier_enabled]), (0, _v2.useEffect)(() => {
        let _v0 = Date.now();
        !_v6.hasTrackedImpression && _v6.userData?.membership?.type && (_v51.default.trackImpression({
          ..._v0.tracking.params,
          loading_time: (Date.now() - _v0) / 0,
          is_new_pricing: (0, _v49.isSeatTierPlan)(_v6.userData?.membership?.type),
          device_type: (0, _v49.getDeviceType)()
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
          isAnnual: !(0, _v49.showMonthlyPlans)(_v6.plansData ?? [])
        }) : null, [_v14, _v15, _v6.plansData]),
        _v17 = "default" === _v0.templateType && _v12 && null != _v16,
        _v18 = _v0.templateType;
      _v70.includes(_v0.templateType) || _v11 !== _v44.PLANS.ADVANCED && _v11 !== _v44.PLANS.PREMIUM && _v11 !== _v44.PLANS.TEAM_LIVE && _v11 !== _v44.PLANS.CUSTOM_SELF_SERVE && _v11 !== _v44.PLANS.STUDIO && _v11 !== _v44.PLANS.PRODUCTION || (0, _v49.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v18 = "enterprise"), _v17 && (_v18 = _v0.templateType);
      let _v19 = _v0.tracking.paywallTracking.paywallFeature,
        _v20 = _v0.tracking.paywallTracking.paywallTrigger,
        _v21 = _v0.bundleOffer?.mode === "claim",
        _v22 = _v64(_v4.late_stage_paywall_kind),
        _v23 = _v65(_v4.late_stage_paywall_kind),
        _v24 = _v68(_v20),
        _v25 = _v66(_v19, _v4.late_stage_paywall_kind),
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
        _v33 = "generic" === _v26 && _v32 && ![_v44.PLANS.STARTER, _v44.PLANS.STANDARD, _v44.PLANS.ADVANCED].includes(_v31),
        _v34 = "generic" === _v26 && _v32,
        _v35 = !_v21 && _v22 && "default" === _v0.templateType && "enterprise" !== _v18 && !_v17 && !!_v31 && !_v27 && !_v33,
        _v36 = _v35 && !_v23 && !_v34,
        _v37 = (0, _v24.useLimitPaywallBundleOffer)({
          enabled: _v36
        }),
        _v38 = _v34 ? "760px" : _v23 ? "480px" : null !== _v37 ? "600px" : "560px",
        _v39 = "enterprise" === _v18 || "default" === _v18 && "enterprise" === _v11 ? "enterprise_modal" : "default" === _v18 ? "default_modal" : "custom_modal",
        _v40 = _v35 ? _v67(_v4.late_stage_paywall_kind, _v26) : _v39,
        _v41 = _v6.userData?.membership?.type ?? null,
        _v42 = (0, _v2.useMemo)(() => _v35 && _v31 ? _v34 ? [_v41, _v31].filter(Boolean) : [_v31] : void 0, [_v35, _v34, _v31, _v41]),
        _v43 = _v35 ? _v23 ? _v71 : _v34 ? "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind ? _v72 : _v71 : void 0 : void 0,
        _v44 = _v35 ? _v42 ?? [] : [],
        _v45 = _v35 ? _v43 ?? [] : [],
        _v46 = _v0.tracking.paywallTracking,
        _v47 = _v4.second_free_trial_enabled,
        {
          capabilities: {
            hasSecondFreeTrialEligibility: _v48
          }
        } = (0, _v13.useCapability)(_v47 ? ["hasSecondFreeTrialEligibility"] : []),
        _v49 = !!_v6.userData && (0, _v49.isEligibleForFreeTrial)(_v6.userData, _v47 && !!_v48),
        _v50 = !!_v6.plansData && _v69({
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
          _v57(), "default" === _v18 && window.dispatchEvent(new CustomEvent(_v61.DEFAULT_MODAL_DISMISSED_EVENT)), _v10();
        }, [_v10, _v18, _v57]),
        _v60 = "default" === _v18 && !_v35 && "enterprise" !== _v11,
        _v61 = _v6.plansData?.some(_v0 => _v0.tier === _v44.PLANS.STARTER || _v0.tier === _v44.PLANS.PLUS) ?? !1,
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
                    if (_v65(_v0)) return (0, _v1.jsx)(_v18.LateStagePcpPaywall, {
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
          }) : _v17 && _v14 ? (0, _v1.jsx)(_v33.default, {
            studioPlan: _v14,
            professionalPlan: _v15,
            isAnnual: !(0, _v49.showMonthlyPlans)(_v6.plansData ?? []),
            onClose: _v59,
            tracking: _v0.tracking
          }) : "enterprise" === _v11 ? (0, _v1.jsx)(_v54, {
            userData: _v6.userData,
            onClose: _v59,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v32.default, {
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
          _v1 = (0, _v1.jsx)(_v54, {
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
          device_type: (0, _v49.getDeviceType)(),
          campaignOverride: _v9,
          allowMonthlyTrial: _v4.homepage_paywall_monthly_free_trial
        },
        children: _v1
      });
    };
  _v0.s(["default", 0, _v73], 0), _v0.s(["default", 0, _v73], 0);
}