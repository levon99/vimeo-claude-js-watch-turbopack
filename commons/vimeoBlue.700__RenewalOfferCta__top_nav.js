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
    _v15 = _v0.i(0);
  let _v16 = "vimeoBlue.700";
  _v0.s(["RenewalOfferCta", 0, ({
    isAnnual: _v0,
    renewalDate: _v1,
    scheduledProductId: _v2
  }) => {
    let {
        locale: _v3
      } = (0, _v12.useGctlConfig)(),
      _v4 = (0, _v7.useStudioRenewalOfferData)({
        isEligible: !0,
        isAnnual: _v0,
        scheduledProductId: _v2
      }),
      {
        trackStudioRenewalOfferCtaClicked: _v5,
        trackStudioRenewalOfferAccepted: _v6,
        trackStudioRenewalOfferFailed: _v7
      } = (0, _v15.useStudioRenewalOfferTracking)(),
      {
        acceptRenewalOffer: _v8,
        isAccepting: _v9
      } = (0, _v5.useAcceptStudioRenewalOffer)(),
      _v10 = (0, _v11.useToast)(),
      [_v11, _v12] = (0, _v2.useState)(!1),
      _v13 = (0, _v2.useRef)(!1);
    (0, _v15.useStudioRenewalOfferDisplayed)({
      isOpen: _v11,
      savingsPercent: _v4.discount?.savingsPercent ?? 0,
      location: "top_nav"
    }), (0, _v15.useStudioRenewalOfferDismissed)({
      isOpen: _v11,
      savingsPercent: _v4.discount?.savingsPercent ?? 0,
      wasAcceptedRef: _v13,
      location: "top_nav"
    });
    let _v14 = (0, _v13.translate)({
        singular: "Renew at {PERCENT}% discount",
        replacements: {
          PERCENT: _v4.discount?.savingsPercent ?? 0
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
      _v15 = (0, _v2.useCallback)(async () => {
        let _v0 = _v4.discount,
          _v1 = _v0 ? _v4.studioPlan?.id?.annual ?? "" : _v4.studioPlan?.id?.monthly ?? "";
        if (null != _v0 && "" !== _v1) {
          _v5({
            copy: _v14,
            savingsPercent: _v0.savingsPercent,
            location: "top_nav"
          });
          try {
            await _v8({
              billingPlanId: _v1,
              discountPercent: _v0.savingsPercent
            }), _v13.current = !0;
          } catch (_v0) {
            _v7({
              errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
              location: "top_nav"
            }), _v10({
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
            await _v6({
              savingsPercent: _v0.savingsPercent,
              periodicity: _v0 ? "annual" : "monthly",
              location: "top_nav"
            });
          } catch (_v0) {
            console.warn("Failed to track studio_renewal_offer_accepted", _v0);
          }
          _v12(!1), window.location.reload();
        }
      }, [_v8, _v14, _v0, _v4.discount, _v4.studioPlan, _v10, _v5, _v6, _v7]);
    return (0, _v1.jsxs)(_v10.Flex, {
      alignItems: "center",
      children: [(0, _v1.jsx)(_v9.Button, {
        size: "xs",
        onClick: () => {
          _v12(!0);
        },
        sx: {
          bgColor: "vimeoBlue.600",
          color: "white",
          _hover: {
            bgColor: _v16
          },
          _active: {
            bgColor: _v16
          }
        },
        children: _v14
      }), (0, _v1.jsx)(_v4.StudioRenewalOfferModal, {
        isOpen: _v11,
        onClose: () => _v12(!1),
        savingsPercent: _v4.discount?.savingsPercent ?? 0,
        discountedMonthlyPrice: _v4.discount?.discountedMonthlyPrice ?? 0,
        fullMonthlyPrice: _v4.discount?.fullMonthlyPrice ?? 0,
        currencyCode: _v4.studioPlan?.currency?.currencyCode,
        locale: _v3,
        studioPlan: _v4.studioPlan,
        renewalDate: _v1,
        isAnnual: _v0,
        onRenew: () => {
          _v15();
        },
        isRenewing: _v9
      })]
    });
  }, "useIsRenewalOfferShown", 0, function () {
    let _v0 = (0, _v14.useOrionSetting)("b2b_offer_permanent_discount_when_arr_off_top_nav"),
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
        isSettingEnabled: _v0,
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