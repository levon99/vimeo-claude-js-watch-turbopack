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
    _v16 = _v0.i(0);
  let _v17 = "vimeoBlue.700";
  _v0.s(["RenewalOfferCta", 0, ({
    viewer: _v0,
    isAnnual: _v1,
    renewalDate: _v2,
    scheduledProductId: _v3
  }) => {
    let {
        locale: _v4
      } = (0, _v12.useGctlConfig)(),
      _v5 = (0, _v7.useStudioRenewalOfferData)({
        isEligible: !0,
        isAnnual: _v1,
        scheduledProductId: _v3
      }),
      {
        trackStudioRenewalOfferCtaClicked: _v6,
        trackStudioRenewalOfferAccepted: _v7,
        trackStudioRenewalOfferFailed: _v8
      } = (0, _v15.useStudioRenewalOfferTracking)(),
      {
        acceptRenewalOffer: _v9,
        isAccepting: _v10
      } = (0, _v5.useAcceptStudioRenewalOffer)(),
      _v11 = (0, _v11.useToast)(),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = (0, _v2.useRef)(!1);
    (0, _v15.useStudioRenewalOfferDisplayed)({
      isOpen: _v12,
      savingsPercent: _v5.discount?.savingsPercent ?? 0,
      location: "top_nav"
    }), (0, _v15.useStudioRenewalOfferDismissed)({
      isOpen: _v12,
      savingsPercent: _v5.discount?.savingsPercent ?? 0,
      wasAcceptedRef: _v14,
      location: "top_nav"
    });
    let _v15 = (0, _v13.translate)({
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
      _v16 = (0, _v2.useCallback)(async () => {
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
              title: (0, _v13.translate)({
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
    return (0, _v1.jsxs)(_v10.Flex, {
      alignItems: "center",
      children: [(0, _v1.jsx)(_v9.Button, {
        size: "xs",
        onClick: () => {
          (0, _v16.trackNavigationActionEvent)({
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
            bgColor: _v17
          },
          _active: {
            bgColor: _v17
          }
        },
        children: _v15
      }), (0, _v1.jsx)(_v4.StudioRenewalOfferModal, {
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
  }, "useIsRenewalOfferShown", 0, function () {
    let {
        settings: _v0
      } = (0, _v14.useOrionSettings)(),
      {
        areBusinessPlansEnforced: _v1,
        isWhitelistedForIndPlans: _v2
      } = (0, _v6.useB2BRepackagingContext)(),
      {
        tier: _v3,
        hasAutorenew: _v4,
        billingPeriod: _v5,
        productId: _v6,
        renewalDate: _v7,
        isLoading: _v8
      } = (0, _v8.useUpcomingTier)(),
      _v9 = (0, _v3.isPermanentDiscountOfferEligible)({
        isSettingEnabled: _v0.b2b_offer_permanent_discount_when_arr_off_top_nav,
        hasAutorenew: _v4,
        scheduledTier: _v3,
        areBusinessPlansEnforced: _v1,
        isWhitelistedForIndPlans: _v2
      }),
      _v10 = (0, _v7.useStudioRenewalOfferData)({
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
  }]);
}