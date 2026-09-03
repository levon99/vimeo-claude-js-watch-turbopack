{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCardVerificationTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("card_verification_modal_displayed", {
        variant: _v0.variant,
        card_brand: _v0.cardBrand ?? null
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("card_verification_modal_clicked", {
          variant: _v0.variant,
          element: _v0.element
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("card_verification_page_displayed", {
          variant: _v0.variant
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("card_verification_page_clicked", {
          variant: _v0.variant,
          element: _v0.element
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("card_verification_submitted", {});
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("card_verification_completed", {});
      }, [_v0]);
    return {
      trackModalDisplayed: _v1,
      trackModalClicked: _v2,
      trackPageDisplayed: _v3,
      trackPageClicked: _v4,
      trackSubmitted: _v5,
      trackCompleted: _v6,
      trackFailed: (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("card_verification_failed", {});
      }, [_v0]),
      trackBalanceWithoutGracePeriod: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("card_verification_balance_without_grace_period", {
        variant: _v0.variant,
        balance_unit: _v0.balanceUnit ?? null,
        currency: _v0.currency ?? null
      }), !0), [_v0])
    };
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["AddPaymentMethodButtonContainer", 0, _v0 => {
    let {
      buttonText: _v1,
      isDisabled: _v2,
      isLoading: _v3,
      canSave: _v4,
      onSubmit: _v5,
      onCancel: _v6,
      hideCancel: _v7
    } = _v0;
    return (0, _v3.jsxs)(_v5.Flex, {
      align: "center",
      justify: {
        base: "center",
        md: _v7 ? "center" : "space-between"
      },
      direction: {
        base: "column-reverse",
        md: "row"
      },
      gap: {
        base: "8px",
        md: "0"
      },
      width: "100%",
      children: [!_v7 && (0, _v3.jsx)(_v4.Button, {
        variant: "secondary",
        as: "a",
        href: "/settings/billing",
        width: {
          base: "100%",
          md: "auto"
        },
        onClick: _v6,
        children: (0, _v6.translate)({
          singular: "Cancel",
          dictionary: {
            es: {
              singular: "Cancelar"
            },
            "de-DE": {
              singular: "Abbrechen"
            },
            "fr-FR": {
              singular: "Annuler"
            },
            "ja-JP": {
              singular: "キャンセル"
            },
            "ko-KR": {
              singular: "취소"
            },
            "pt-BR": {
              singular: "Cancelar"
            },
            "zh-CN": {
              singular: "取消"
            }
          }
        })
      }), (0, _v3.jsx)(_v4.Button, {
        width: _v7 ? "100%" : {
          base: "100%",
          md: "auto"
        },
        isLoading: _v3,
        isDisabled: _v2 || !_v4,
        onClick: _v5,
        children: _v1
      })]
    });
  }], 0);
}