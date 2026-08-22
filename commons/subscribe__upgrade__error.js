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
  let _v16 = ({
      billingCountry: _v0,
      creatorProductAction: _v1,
      isBusinessUserEntity: _v2,
      isMonthly: _v3,
      postalCode: _v4,
      viewerCountry: _v5
    }) => {
      if (!_v4 && !_v5 && !_v0) return;
      let _v6 = !!_v4 && (0, _v14.isZipCodeIsRequiredAutorenewalOptInRange)(_v4),
        _v7 = !!_v1 && "subscribe" !== _v1;
      return _v6 || "subscribe" === _v1 ? {
        hasOptedInToAutorenew: (("DE" === _v5 || "DE" === _v0) && !_v3 && !_v2 || !!_v7) && null,
        hasAgreedToTerms: _v7
      } : null;
    },
    _v17 = () => {
      let _v0 = (0, _v9.useViewer)(),
        _v1 = (0, _v10.useGetUserName)(),
        {
          settings: _v2
        } = (0, _v8.useOrionSettings)(),
        _v3 = _v2.use_juno_billing,
        {
          dispatch: _v4,
          state: {
            billingPlan: _v5,
            checkoutType: _v6,
            currentSubscription: _v7,
            isMonthly: _v8,
            isBusinessUserEntity: _v9,
            tier: _v10,
            creatorProductId: _v11,
            creatorProductAction: _v12
          }
        } = (0, _v15.useStateContext)(),
        {
          dispatch: _v13,
          state: {
            orderPreview: _v14
          }
        } = (0, _v15.useApiStateContext)(),
        [, _v15] = (0, _v2.default)(_v11.ORDER_ID_LOCAL_STORAGE_KEY, void 0),
        [_v16, _v17] = (0, _v4.usePostMeOrdersPreview)(),
        [_v18, _v19] = (0, _v5.usePostMeOrdersUpdatePreview)();
      return ((0, _v1.useEffect)(function () {
        let _v0;
        if (_v17.called ? _v0 = _v17 : _v19.called && (_v0 = _v19), _v0 && (_v13({
          type: _v12.ApiActionTypes.ORDER_PREVIEW,
          payload: _v0
        }), _v0.data)) {
          let _v0 = _v0.data?.error;
          _v4({
            type: _v12.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v0 ? _v13({
            type: _v12.ApiActionTypes.ORDER_PREVIEW,
            payload: {
              ..._v0,
              data: null,
              error: Error(_v0)
            }
          }) : (_v13({
            type: _v12.ApiActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v0.loading || (_v4({
            type: _v12.ActionTypes.ORDER_PREVIEW,
            payload: _v0.data
          }), _v15(_v0.data.id)));
        }
      }, [_v13, _v17, _v19, _v4, _v15]), (0, _v1.useEffect)(function () {
        let _v0 = _v14.data,
          _v1 = _v16({
            billingCountry: _v0?.billingAddress?.country,
            creatorProductAction: _v12,
            isBusinessUserEntity: _v9,
            isMonthly: _v8,
            postalCode: _v0?.billingAddress?.postalCode,
            viewerCountry: _v0?.location
          });
        void 0 !== _v1 && _v4({
          type: _v12.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
          payload: _v1
        });
      }, [_v0?.location, _v8, _v9, _v14.data, _v4]), _v10 && (0, _v13.isCreatorProductTier)(_v10)) ? [_v0 => _v16({
        select: [],
        variables: {
          useJuno: !1,
          billingAddress: _v0.billingAddress,
          currency: _v0.currency,
          firstName: _v1.firstName,
          lastName: _v1.lastName,
          couponCode: _v0.couponCode,
          vatId: _v0.vatId,
          isTrial: _v0.isTrial,
          items: [{
            productId: _v11 ?? void 0,
            quantity: 1
          }].map(_v13.transformToOrderItemOptions)
        }
      }), _v14] : "upgrade" === _v6 && _v7 && _v5 ? [(_v0, _v1) => {
        let _v2 = _v1 || _v5.id;
        (0, _v13.isUpgradeToPlanAlreadyOnSubscription)(_v2, _v7) ? _v4({
          type: _v12.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v7.translate)({
              singular: "You are already on this plan.",
              dictionary: {
                es: {
                  singular: "Ya estás en este plan"
                },
                "de-DE": {
                  singular: "Sie sind bereits in diesem Tarif"
                },
                "fr-FR": {
                  singular: "Vous êtes déjà sur ce forfait"
                },
                "ja-JP": {
                  singular: "すでにこのプランをご利用中です"
                },
                "ko-KR": {
                  singular: "이미 이 요금제를 이용 중입니다"
                },
                "pt-BR": {
                  singular: "Você já está neste plano"
                },
                "zh-CN": {
                  singular: "您已在此计划中"
                }
              }
            })
          }
        }) : _v18({
          select: [],
          variables: {
            type: _v6,
            billingPlanId: _v2,
            subscriptionId: _v7.id,
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode
          }
        });
      }, _v14] : [_v0 => {
        let _v1;
        return _v16({
          select: [],
          variables: {
            useJuno: _v3,
            billingAddress: (_v1 = _v0.billingAddress) && Object.keys(_v1).length > 0 && Object.values(_v1).some(_v0 => "" !== _v0) ? _v1 : void 0,
            currency: _v0.currency,
            firstName: _v1.firstName,
            lastName: _v1.lastName,
            couponCode: _v0.couponCode,
            vatId: _v0.vatId,
            isTrial: _v0.isTrial,
            items: (_v0.items || []).map(_v13.transformToOrderItemOptions)
          }
        });
      }, _v14];
    };
  _v0.s(["useGetOrCreateOrderPreview", 0, () => {
    let {
        settings: _v0
      } = (0, _v8.useOrionSettings)(),
      _v1 = _v0.use_juno_billing,
      {
        dispatch: _v2,
        state: {
          billingPlan: _v3,
          checkoutType: _v4,
          currentSubscription: _v5,
          isFreeTrial: _v6,
          isMonthly: _v7,
          isRenewNow: _v8,
          isBusinessUserEntity: _v9,
          subscriptionProduct: _v10,
          selectedPaymentMethod: _v11,
          tier: _v12,
          creatorProductAction: _v13,
          creatorProductId: _v14,
          order: _v15,
          defaultPromoCodeId: _v16
        }
      } = (0, _v15.useStateContext)(),
      _v17 = (0, _v9.useViewer)(),
      _v18 = (0, _v10.useGetUserName)(),
      [_v19, _v20] = (0, _v2.default)(_v11.ORDER_ID_LOCAL_STORAGE_KEY, null),
      [_v21, _v22] = (0, _v5.usePostMeOrdersUpdatePreview)(),
      [_v23, _v24] = (0, _v4.usePostMeOrdersPreview)(),
      [_v25, _v26] = (0, _v3.useGetMeOrderLazy)(),
      [_v27, _v28] = (0, _v6.useGetPromocodeLazy)(),
      _v29 = (0, _v1.useRef)({
        key: null,
        attempts: 0
      }),
      [_v30, _v31] = (0, _v1.useState)(0),
      [_v32, _v33] = (0, _v1.useState)(),
      {
        data: _v34,
        error: _v35
      } = _v32 || {},
      [_v36, _v37] = (0, _v1.useState)(null),
      _v38 = _v12 && (0, _v13.isCreatorProductTier)(_v12);
    return (0, _v1.useEffect)(() => {
      if (_v16 && _v28.error && !_v28.loading) return void _v37(_v16);
      if (_v16) {
        let _v0;
        _v20(null), _v37(null), _v28.loading || (_v0 = _v28.data, _v0?.id === _v16 || _v0?.metadata?.batchCode === _v16) || _v27({
          where: {
            promoCodeId: _v16
          },
          select: ["code", "id", "metadata"]
        });
      }
    }, [_v16, _v27, _v20, _v28.loading, _v28.data]), (0, _v1.useEffect)(function () {
      var _v0, _v1;
      let _v2,
        _v3,
        _v4 = (_v0 = _v15?.couponCode, _v1 = _v28.data, _v2 = _v0 || _v1?.code, "string" == typeof (_v3 = _v1?.metadata?.batchCode) && _v3 && (_v2 = _v3), _v2 && _v2 !== _v36 ? _v2 : void 0);
      if (!_v17 || !_v10 || !_v3 && !_v8 || void 0 === _v5 || _v19 === _v34?.id || _v38 && !_v14 || _v24.loading || _v22.loading || _v26.loading) return;
      let _v5 = (({
        billingPlanId: _v0,
        checkoutType: _v1,
        couponCode: _v2,
        creatorProductId: _v3,
        isCreatorProduct: _v4,
        isRenewNow: _v5,
        orderId: _v6,
        paymentMethodId: _v7,
        subscriptionId: _v8
      }) => JSON.stringify({
        checkoutType: _v1,
        isCreatorProduct: _v4,
        isRenewNow: _v5,
        billingPlanId: _v0 ?? null,
        subscriptionId: _v8 ?? null,
        paymentMethodId: _v7 ?? null,
        couponCode: _v2 ?? null,
        creatorProductId: _v3 ?? null,
        orderId: _v6
      }))({
        billingPlanId: _v3?.id,
        checkoutType: _v4,
        couponCode: _v4,
        creatorProductId: _v14,
        isCreatorProduct: _v38,
        isRenewNow: _v8,
        orderId: _v19,
        paymentMethodId: _v11?.id,
        subscriptionId: _v5?.id
      });
      if (_v29.current.key !== _v5 && (_v29.current = {
        key: _v5,
        attempts: 0
      }), !(_v29.current.attempts >= 4)) if (_v38) {
        let _v0 = _v11?.type === "PAYMENT_METHOD_TYPES_CARD" ? _v11.card?.billingAddress : void 0;
        _v23({
          select: [],
          variables: {
            useJuno: !1,
            firstName: _v18.firstName,
            lastName: _v18.lastName,
            currency: _v3?.price?.currency || "",
            billingAddress: _v0,
            isTrial: !1,
            items: [{
              productId: _v14 ?? void 0,
              quantity: 1
            }],
            couponCode: _v4
          }
        });
      } else if (_v19 && "purchase" === _v4) _v25({
        select: [],
        where: {
          orderId: _v19
        }
      });else if (_v5 && ("upgrade" === _v4 || "renew" === _v4)) {
        if ("upgrade" === _v4 && (0, _v13.isUpgradeToPlanAlreadyOnSubscription)(_v3?.id, _v5)) return void _v2({
          type: _v12.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v7.translate)({
              singular: "You are already on this plan.",
              dictionary: {
                es: {
                  singular: "Ya estás en este plan"
                },
                "de-DE": {
                  singular: "Sie sind bereits in diesem Tarif"
                },
                "fr-FR": {
                  singular: "Vous êtes déjà sur ce forfait"
                },
                "ja-JP": {
                  singular: "すでにこのプランをご利用中です"
                },
                "ko-KR": {
                  singular: "이미 이 요금제를 이용 중입니다"
                },
                "pt-BR": {
                  singular: "Você já está neste plano"
                },
                "zh-CN": {
                  singular: "您已在此计划中"
                }
              }
            })
          }
        });
        _v21({
          select: [],
          variables: {
            type: _v4,
            billingPlanId: "renew" === _v4 ? "" : _v3?.id ?? "",
            subscriptionId: _v5.id,
            paymentMethodId: _v11?.id,
            couponCode: _v4
          }
        });
      } else _v23({
        select: [],
        variables: {
          useJuno: _v1,
          firstName: _v18.firstName,
          lastName: _v18.lastName,
          currency: _v3?.price?.currency ?? "",
          isTrial: _v6,
          items: [{
            billingPlanId: _v3?.id,
            quantity: 1
          }],
          couponCode: _v4
        }
      });
    }, [_v36, _v28.data, _v15, _v3, _v4, _v5, _v25, _v6, _v7, _v8, _v19, _v34?.id, _v23, _v21, _v10, _v18.firstName, _v18.lastName, _v17, _v11, _v13, _v14, _v38, _v1, _v30]), (0, _v1.useEffect)(function () {
      if (!(_v32?.error && !_v32.loading)) return;
      let _v0 = _v29.current.attempts + 1;
      if (_v29.current.attempts = _v0, _v0 >= 4) return;
      let _v1 = setTimeout(() => _v31(_v0 => _v0 + 1), 0 * 2 ** (_v0 - 1));
      return () => clearTimeout(_v1);
    }, [_v32]), (0, _v1.useEffect)(function () {
      let _v0;
      _v24.called ? _v0 = _v24 : _v22.called ? _v0 = _v22 : _v26.called && (_v0 = _v26), _v0 && (_v33({
        ..._v0,
        data: _v0.data ?? null
      }), _v0.data && (_v2({
        type: _v12.ActionTypes.ORDER_PREVIEW,
        payload: _v0.data
      }), _v20(_v0.data.id)));
    }, [_v2, _v26, _v24, _v22, _v20]), (0, _v1.useEffect)(function () {
      if (_v34 && _v10) {
        if (_v10.isCreatorProduct || _v10.isBandwidthProduct) return;
        let _v0 = _v3?.id;
        ("purchase" !== _v4 || _v34.currency === _v3?.price?.currency) && _v34.isTrial == _v6 && (_v34.items?.find(_v0 => _v0.billingPlanId === _v0) || _v8) || (_v20(null), _v2({
          type: _v12.ActionTypes.ORDER_PREVIEW,
          payload: null
        }));
      }
    }, [_v3, _v2, _v6, _v7, _v8, _v34, _v20, _v10, _v4]), (0, _v1.useEffect)(function () {
      _v35 && (404 === _v35.status ? (_v20(null), _v2({
        type: _v12.ActionTypes.ORDER_PREVIEW,
        payload: null
      })) : 400 === _v35.status && (async () => {
        let _v0 = "";
        if (_v35.res?.body instanceof ReadableStream) {
          if (!_v35.res.body.locked) {
            let _v0 = _v35.res.body.getReader(),
              _v1 = new TextDecoder();
            for (;;) {
              let {
                done: _v0,
                value: _v1
              } = await _v0.read();
              if (_v0) break;
              _v0 += _v1.decode(_v1, {
                stream: !0
              });
            }
          }
        } else _v0 = "string" == typeof _v35.res?.body ? _v35.res.body : JSON.stringify(_v35);
        let _v1 = _v0.toLowerCase().includes("invalid coupon code"),
          _v2 = _v28.data?.code;
        if (_v1 && _v2) {
          _v2({
            type: _v12.ActionTypes.ORDER_PREVIEW,
            payload: null
          }), _v37(_v2);
          return;
        }
      })());
    }, [_v2, _v35, _v20, _v28.data?.code]), (0, _v1.useEffect)(function () {
      let _v0 = _v16({
        billingCountry: _v34?.billingAddress?.country,
        creatorProductAction: _v13,
        isBusinessUserEntity: _v9,
        isMonthly: _v7,
        postalCode: _v34?.billingAddress?.postalCode,
        viewerCountry: _v17?.location
      });
      void 0 !== _v0 && _v2({
        type: _v12.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
        payload: _v0
      });
    }, [_v17?.location, _v9, _v34?.billingAddress?.postalCode, _v34?.billingAddress?.country, _v7, _v2, _v13]), {
      isLoading: _v32?.loading,
      order: _v32?.data,
      error: _v32?.error
    };
  }, "useUpdateOrderPreview", 0, _v17, "useUpdateOrderPreviewWithDebounce", 0, (_v0 = 600) => {
    let [_v1, _v2] = _v17(),
      _v3 = (0, _v1.useRef)(_v1);
    (0, _v1.useEffect)(() => {
      _v3.current = _v1;
    }, [_v1]);
    let _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useCallback)((..._v0) => {
        clearTimeout(_v4.current ?? void 0), _v4.current = setTimeout(() => {
          _v4.current = null, _v3.current(..._v0);
        }, _v0);
      }, [_v0]);
    return (0, _v1.useEffect)(() => () => clearTimeout(_v4.current ?? void 0), []), [_v5, _v2];
  }]);
}