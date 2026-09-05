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
  let _v25 = "vimeoBlue.700",
    _v26 = ({
      viewer: _v0,
      isAnnual: _v1,
      renewalDate: _v2,
      scheduledProductId: _v3
    }) => {
      let {
          locale: _v4
        } = (0, _v20.useGctlConfig)(),
        _v5 = (0, _v16.useStudioRenewalOfferData)({
          isEligible: !0,
          isAnnual: _v1,
          scheduledProductId: _v3
        }),
        {
          trackStudioRenewalOfferCtaClicked: _v6,
          trackStudioRenewalOfferAccepted: _v7,
          trackStudioRenewalOfferFailed: _v8
        } = (0, _v23.useStudioRenewalOfferTracking)(),
        {
          acceptRenewalOffer: _v9,
          isAccepting: _v10
        } = (0, _v14.useAcceptStudioRenewalOffer)(),
        _v11 = (0, _v19.useToast)(),
        [_v12, _v13] = (0, _v6.useState)(!1),
        _v14 = (0, _v6.useRef)(!1);
      (0, _v23.useStudioRenewalOfferDisplayed)({
        isOpen: _v12,
        savingsPercent: _v5.discount?.savingsPercent ?? 0,
        location: "top_nav"
      }), (0, _v23.useStudioRenewalOfferDismissed)({
        isOpen: _v12,
        savingsPercent: _v5.discount?.savingsPercent ?? 0,
        wasAcceptedRef: _v14,
        location: "top_nav"
      });
      let _v15 = (0, _v21.translate)({
          singular: "Renew at {PERCENT}% discount",
          replacements: {
            PERCENT: _v5.discount?.savingsPercent ?? 0
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
        _v16 = (0, _v6.useCallback)(async () => {
          let _v0 = _v5.discount,
            _v1 = _v1 ? _v5.studioPlan?.id?.annual ?? "" : _v5.studioPlan?.id?.monthly ?? "";
          if (null != _v0 && "" !== _v1) {
            _v6({
              copy: _v15,
              savingsPercent: _v0.savingsPercent,
              location: "top_nav"
            });
            try {
              await _v9({
                billingPlanId: _v1,
                discountPercent: _v0.savingsPercent
              }), _v14.current = !0;
            } catch (_v0) {
              _v8({
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
                location: "top_nav"
              }), _v11({
                variant: "warning",
                title: (0, _v21.translate)({
                  singular: "Something went wrong",
                  dictionary: {
                    es: {
                      singular: "Se ha producido un error"
                    },
                    "de-DE": {
                      singular: "Hier ist etwas schief gelaufen"
                    },
                    "fr-FR": {
                      singular: "Quelque chose a planté"
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다"
                    },
                    "pt-BR": {
                      singular: "Alguma coisa deu errado"
                    },
                    "zh-CN": {
                      singular: "出错了"
                    }
                  }
                })
              });
              return;
            }
            try {
              await _v7({
                savingsPercent: _v0.savingsPercent,
                periodicity: _v1 ? "annual" : "monthly",
                location: "top_nav"
              });
            } catch (_v0) {
              console.warn("Failed to track studio_renewal_offer_accepted", _v0);
            }
            _v13(!1), window.location.reload();
          }
        }, [_v9, _v15, _v1, _v5.discount, _v5.studioPlan, _v11, _v6, _v7, _v8]);
      return (0, _v1.jsxs)(_v2.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v18.Button, {
          size: "xs",
          onClick: () => {
            (0, _v24.trackNavigationActionEvent)({
              copy: _v15,
              element: "button",
              eventName: "vimeo.trigger_upsell",
              viewer: _v0,
              version: 7,
              additionalFields: {
                upsell_name: "top_nav_bar_renewal_offer"
              }
            }), _v13(!0);
          },
          sx: {
            bgColor: "vimeoBlue.600",
            color: "white",
            _hover: {
              bgColor: _v25
            },
            _active: {
              bgColor: _v25
            }
          },
          children: _v15
        }), (0, _v1.jsx)(_v13.StudioRenewalOfferModal, {
          isOpen: _v12,
          onClose: () => _v13(!1),
          savingsPercent: _v5.discount?.savingsPercent ?? 0,
          discountedMonthlyPrice: _v5.discount?.discountedMonthlyPrice ?? 0,
          fullMonthlyPrice: _v5.discount?.fullMonthlyPrice ?? 0,
          currencyCode: _v5.studioPlan?.currency?.currencyCode,
          locale: _v4,
          studioPlan: _v5.studioPlan,
          renewalDate: _v2,
          isAnnual: _v1,
          onRenew: () => {
            _v16();
          },
          isRenewing: _v10
        })]
      });
    };
  var _v27 = _v0.i(0);
  function _v28({
    children: _v0,
    ..._v1
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      as: "header",
      align: "center",
      justify: "space-between",
      width: "100%",
      paddingX: "lg",
      bgColor: "background",
      backdropFilter: "var(--vimeo-blur-lg)",
      minH: "2xl",
      ..._v1,
      sx: {
        ..._v1.sx
      },
      children: _v0
    });
  }
  _v28.LeftContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "sm",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v28.RightContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "md",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v28.GoBackButton = ({
    icon: _v0 = (0, _v1.jsx)(_v4.ArrowLeft, {}),
    variant: _v1 = "secondary",
    ..._v2
  }) => (0, _v1.jsx)(_v3.IconButton, {
    icon: _v0,
    variant: _v1,
    ..._v2
  }), _v28.VimeoLogo = _v27.VimeoLogo, _v28.Logo = _v5.NavbarLogo, _v28.Upgrade = ({
    viewer: _v0
  }) => {
    let _v1 = _v0 && _v0.user,
      _v2 = _v0 && _v0.teamUser,
      _v3 = (0, _v6.useRef)(!1),
      {
        capabilities: {
          hasEnterprise: _v4
        },
        loading: _v5
      } = (0, _v9.useCapability)(["hasEnterprise"], _v2?.ownerId),
      {
        capabilities: {
          canUpgrade: _v6
        },
        loading: _v7
      } = (0, _v9.useCapability)(["canUpgrade"], _v1?.id),
      _v8 = (0, _v8.useBreakpointValue)({
        base: !1,
        md: !0
      }),
      {
        isShown: _v9,
        billingPeriod: _v10,
        productId: _v11,
        renewalDate: _v12
      } = function () {
        let {
            settings: _v0
          } = (0, _v22.useOrionSettings)(),
          {
            areBusinessPlansEnforced: _v1,
            isWhitelistedForIndPlans: _v2
          } = (0, _v15.useB2BRepackagingContext)(),
          {
            tier: _v3,
            hasAutorenew: _v4,
            billingPeriod: _v5,
            productId: _v6,
            renewalDate: _v7,
            isLoading: _v8
          } = (0, _v17.useUpcomingTier)(),
          _v9 = (0, _v12.isPermanentDiscountOfferEligible)({
            isSettingEnabled: _v0.b2b_offer_permanent_discount_when_arr_off_top_nav,
            hasAutorenew: _v4,
            scheduledTier: _v3,
            areBusinessPlansEnforced: _v1,
            isWhitelistedForIndPlans: _v2
          }),
          _v10 = (0, _v16.useStudioRenewalOfferData)({
            isEligible: _v9,
            isAnnual: "month" !== _v5,
            scheduledProductId: _v6
          });
        return {
          isShown: _v9 && null != _v10.discount && !_v8,
          billingPeriod: _v5,
          productId: _v6,
          renewalDate: _v7
        };
      }(),
      _v13 = _v0 && !(_v7 || _v5) && _v6 && !_v4 && !_v0.isSimplifiedSite;
    if ((0, _v6.useEffect)(() => {
      _v0 && _v13 && !_v9 && !_v3.current && (_v3.current = !0, (0, _v24.trackNavigationViewEvent)({
        copy: "upgrade",
        element: "button",
        eventName: "vimeo.upsell_trigger_impression",
        additionalFields: {
          upsell_name: "top_nav_bar_upgrade"
        },
        viewer: _v0,
        version: 5
      }));
    }, [_v13, _v9, _v0]), !_v13) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v14 = (0, _v11.buildUpgradePlanUrl)({
      paywallTrigger: "top_navigation_upgrade_button",
      paywallLocation: "top_navigation",
      paywallFeature: "general"
    }, {
      upsell: "top_nav_bar_upgrade",
      integration: "none",
      feature: "general",
      paywall: "1",
      mkc: "global_top_nav"
    });
    return (0, _v1.jsx)(_v2.Flex, {
      alignItems: "center",
      gap: "8px",
      children: _v9 ? (0, _v1.jsx)(_v26, {
        viewer: _v0,
        isAnnual: "month" !== _v10,
        renewalDate: _v12,
        scheduledProductId: _v11
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v10.UpgradeBadge, {
          noMargin: !0,
          href: _v14,
          name: "top_nav_upgrade_button",
          location: "top_navigation",
          onClick: () => {
            (0, _v24.trackNavigationActionEvent)({
              copy: "upgrade",
              eventName: "vimeo.trigger_upsell",
              element: "button",
              viewer: _v0,
              version: 7,
              additionalFields: {
                upsell_name: "top_nav_bar_upgrade"
              }
            }), (0, _v24.trackNavigationActionEvent)({
              copy: "upgrade",
              element: "button",
              feature: "pricing",
              viewer: _v0,
              version: 7,
              additionalFields: {
                upsell_name: "top_nav_bar_upgrade"
              }
            });
          }
        }), _v8 && (0, _v1.jsx)(_v7.AccessEndingBadge, {
          surface: "top_nav_cta"
        })]
      })
    });
  }, _v0.s(["Navigation", 0, _v28], 0);
}