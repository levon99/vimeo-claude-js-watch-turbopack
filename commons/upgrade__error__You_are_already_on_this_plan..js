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
  let _v16 = _v0 => null !== _v0.addOns && void 0 !== _v0.addOns && _v0.addOns.length > 0,
    _v17 = () => {
      let _v0 = (0, _v10.useGetUserName)(),
        {
          settings: _v1
        } = (0, _v8.useOrionSettings)(),
        _v2 = _v1.use_juno_billing,
        {
          dispatch: _v3,
          state: {
            billingPlan: _v4,
            bundleAddOn: _v5,
            checkoutType: _v6,
            currentSubscription: _v7,
            isBundleChecked: _v8,
            tier: _v9,
            creatorProductId: _v10
          }
        } = (0, _v15.useStateContext)(),
        {
          dispatch: _v11,
          state: {
            orderPreview: _v12
          }
        } = (0, _v15.useApiStateContext)(),
        [, _v13] = (0, _v2.default)(_v12.ORDER_ID_LOCAL_STORAGE_KEY, void 0),
        [_v14, _v15] = (0, _v4.usePostMeOrdersPreview)(),
        [_v16, _v17] = (0, _v5.usePostMeOrdersUpdatePreview)();
      return ((0, _v1.useEffect)(function () {
        let _v0;
        if (_v15.called ? _v0 = _v15 : _v17.called && (_v0 = _v17), _v0 && (_v11({
          type: _v13.ApiActionTypes.ORDER_PREVIEW,
          payload: _v0
        }), _v0.data)) {
          let _v0 = _v0.data?.error;
          _v3({
            type: _v13.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v0 ? _v11({
            type: _v13.ApiActionTypes.ORDER_PREVIEW,
            payload: {
              ..._v0,
              data: null,
              error: Error(_v0)
            }
          }) : (_v11({
            type: _v13.ApiActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v0.loading || (_v3({
            type: _v13.ActionTypes.ORDER_PREVIEW,
            payload: _v0.data
          }), _v13(_v0.data.id)));
        }
      }, [_v11, _v15, _v17, _v3, _v13]), _v9 && (0, _v14.isCreatorProductTier)(_v9)) ? [_v0 => _v14({
        select: [],
        variables: {
          useJuno: !1,
          billingAddress: _v0.billingAddress,
          currency: _v0.currency,
          firstName: _v0.firstName,
          lastName: _v0.lastName,
          couponCode: _v0.couponCode,
          vatId: _v0.vatId,
          isTrial: _v0.isTrial,
          items: [{
            productId: _v10 ?? void 0,
            quantity: 1
          }].map(_v14.transformToOrderItemOptions)
        }
      }), _v12] : "upgrade" === _v6 && _v7 && _v4 ? [(_v0, _v1) => {
        let _v2 = _v1 || _v4.id;
        (0, _v14.isUpgradeToPlanAlreadyOnSubscription)(_v2, _v7) ? _v3({
          type: _v13.ActionTypes.PAYMENT_ALERT,
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
        }) : _v16({
          select: [],
          variables: {
            type: _v6,
            billingPlanId: _v2,
            subscriptionId: _v7.id,
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode,
            addOns: (0, _v11.getBundleOrderAddOns)(_v5, _v8)
          }
        });
      }, _v12] : [_v0 => {
        let _v1;
        return _v14({
          select: [],
          variables: {
            useJuno: _v2,
            billingAddress: (_v1 = _v0.billingAddress) && Object.keys(_v1).length > 0 && Object.values(_v1).some(_v0 => "" !== _v0) ? _v1 : void 0,
            currency: _v0.currency,
            firstName: _v0.firstName,
            lastName: _v0.lastName,
            couponCode: _v0.couponCode,
            vatId: _v0.vatId,
            isTrial: _v0.isTrial,
            items: (_v0.items || []).map(_v14.transformToOrderItemOptions),
            addOns: (0, _v11.getBundleOrderAddOns)(_v5, _v8)
          }
        });
      }, _v12];
    };
  _v0.s(["orderHasBundle", 0, _v16, "useGetOrCreateOrderPreview", 0, () => {
    let {
        settings: _v0
      } = (0, _v8.useOrionSettings)(),
      _v1 = _v0.use_juno_billing,
      {
        dispatch: _v2,
        state: {
          billingPlan: _v3,
          bundleAddOn: _v4,
          checkoutType: _v5,
          currentSubscription: _v6,
          isFreeTrial: _v7,
          isBundleChecked: _v8,
          isMonthly: _v9,
          isRenewNow: _v10,
          subscriptionProduct: _v11,
          selectedPaymentMethod: _v12,
          tier: _v13,
          creatorProductAction: _v14,
          creatorProductId: _v15,
          order: _v16,
          defaultPromoCodeId: _v17
        }
      } = (0, _v15.useStateContext)(),
      _v18 = (0, _v9.useViewer)(),
      _v19 = (0, _v10.useGetUserName)(),
      [_v20, _v21] = (0, _v2.default)(_v12.ORDER_ID_LOCAL_STORAGE_KEY, null),
      {
        state: {
          orderPreview: _v22
        }
      } = (0, _v15.useApiStateContext)(),
      [_v23, _v24] = (0, _v5.usePostMeOrdersUpdatePreview)(),
      [_v25, _v26] = (0, _v4.usePostMeOrdersPreview)(),
      [_v27, _v28] = (0, _v3.useGetMeOrderLazy)(),
      [_v29, _v30] = (0, _v6.useGetPromocodeLazy)(),
      _v31 = (0, _v1.useRef)({
        key: null,
        attempts: 0
      }),
      [_v32, _v33] = (0, _v1.useState)(0),
      [_v34, _v35] = (0, _v1.useState)(),
      {
        data: _v36,
        error: _v37
      } = _v34 || {},
      [_v38, _v39] = (0, _v1.useState)(null),
      _v40 = _v13 && (0, _v14.isCreatorProductTier)(_v13),
      _v41 = (0, _v1.useRef)(null);
    (0, _v1.useEffect)(() => {
      if (_v17 && _v30.error && !_v30.loading) return void _v39(_v17);
      if (_v17) {
        let _v0;
        _v21(null), _v39(null), _v30.loading || (_v0 = _v30.data, _v0?.id === _v17 || _v0?.metadata?.batchCode === _v17) || _v29({
          where: {
            promoCodeId: _v17
          },
          select: ["code", "id", "metadata"]
        });
      }
    }, [_v17, _v29, _v21, _v30.loading, _v30.data]), (0, _v1.useEffect)(function () {
      var _v0, _v1;
      let _v2,
        _v3,
        _v4 = (_v0 = _v16?.couponCode, _v1 = _v30.data, _v2 = _v0 || _v1?.code, "string" == typeof (_v3 = _v1?.metadata?.batchCode) && _v3 && (_v2 = _v3), _v2 && _v2 !== _v38 ? _v2 : void 0),
        _v5 = (0, _v11.getBundleOrderAddOns)(_v4, _v8);
      if (!_v18 || !_v11 || !_v3 && !_v10 || void 0 === _v6 || _v20 === _v36?.id || _v40 && !_v15 || _v26.loading || _v24.loading || _v28.loading) return;
      let _v6 = (({
        billingPlanId: _v0,
        checkoutType: _v1,
        couponCode: _v2,
        creatorProductId: _v3,
        isBundleChecked: _v4,
        isCreatorProduct: _v5,
        isRenewNow: _v6,
        orderId: _v7,
        paymentMethodId: _v8,
        subscriptionId: _v9
      }) => JSON.stringify({
        checkoutType: _v1,
        isBundleChecked: _v4,
        isCreatorProduct: _v5,
        isRenewNow: _v6,
        billingPlanId: _v0 ?? null,
        subscriptionId: _v9 ?? null,
        paymentMethodId: _v8 ?? null,
        couponCode: _v2 ?? null,
        creatorProductId: _v3 ?? null,
        orderId: _v7
      }))({
        billingPlanId: _v3?.id,
        checkoutType: _v5,
        couponCode: _v4,
        creatorProductId: _v15,
        isBundleChecked: _v8 && null !== _v4,
        isCreatorProduct: _v40,
        isRenewNow: _v10,
        orderId: _v20,
        paymentMethodId: _v12?.id,
        subscriptionId: _v6?.id
      });
      if (_v31.current.key !== _v6 && (_v31.current = {
        key: _v6,
        attempts: 0
      }), !(_v31.current.attempts >= 4)) if (_v40) {
        let _v0 = _v12?.type === "PAYMENT_METHOD_TYPES_CARD" ? _v12.card?.billingAddress : void 0;
        _v25({
          select: [],
          variables: {
            useJuno: !1,
            firstName: _v19.firstName,
            lastName: _v19.lastName,
            currency: _v3?.price?.currency || "",
            billingAddress: _v0,
            isTrial: !1,
            items: [{
              productId: _v15 ?? void 0,
              quantity: 1
            }],
            couponCode: _v4
          }
        });
      } else if (_v20 && "purchase" === _v5) _v27({
        select: [],
        where: {
          orderId: _v20
        }
      });else if (_v6 && ("upgrade" === _v5 || "renew" === _v5)) {
        if ("upgrade" === _v5 && (0, _v14.isUpgradeToPlanAlreadyOnSubscription)(_v3?.id, _v6)) return void _v2({
          type: _v13.ActionTypes.PAYMENT_ALERT,
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
        _v23({
          select: [],
          variables: {
            type: _v5,
            billingPlanId: "renew" === _v5 ? "" : _v3?.id ?? "",
            subscriptionId: _v6.id,
            paymentMethodId: _v12?.id,
            couponCode: _v4,
            addOns: _v5
          }
        });
      } else _v25({
        select: [],
        variables: {
          useJuno: _v1,
          firstName: _v19.firstName,
          lastName: _v19.lastName,
          currency: _v3?.price?.currency ?? "",
          isTrial: _v7,
          items: [{
            billingPlanId: _v3?.id,
            quantity: 1
          }],
          couponCode: _v4,
          addOns: _v5
        }
      });
    }, [_v38, _v30.data, _v16, _v3, _v4, _v5, _v6, _v27, _v7, _v8, _v9, _v10, _v20, _v36?.id, _v25, _v23, _v11, _v19.firstName, _v19.lastName, _v18, _v12, _v14, _v15, _v40, _v1, _v32]), (0, _v1.useEffect)(function () {
      if (!(_v34?.error && !_v34.loading)) return;
      let _v0 = _v31.current.attempts + 1;
      if (_v31.current.attempts = _v0, _v0 >= 4) return;
      let _v1 = setTimeout(() => _v33(_v0 => _v0 + 1), 0 * 2 ** (_v0 - 1));
      return () => clearTimeout(_v1);
    }, [_v34]), (0, _v1.useEffect)(function () {
      let _v0;
      _v26.called ? _v0 = _v26 : _v24.called ? _v0 = _v24 : _v28.called && (_v0 = _v28), _v0 && (_v35({
        ..._v0,
        data: _v0.data ?? null
      }), _v0.data && (_v2({
        type: _v13.ActionTypes.ORDER_PREVIEW,
        payload: _v0.data
      }), _v21(_v0.data.id)));
    }, [_v2, _v28, _v26, _v24, _v21]), (0, _v1.useEffect)(function () {
      if (_v36 && _v11) {
        if (_v11.isCreatorProduct || _v11.isBandwidthProduct) return;
        let _v0 = _v3?.id;
        ("purchase" !== _v5 || _v36.currency === _v3?.price?.currency) && _v36.isTrial == _v7 && (_v36.items?.find(_v0 => _v0.billingPlanId === _v0) || _v10) || (_v21(null), _v2({
          type: _v13.ActionTypes.ORDER_PREVIEW,
          payload: null
        }));
      }
    }, [_v3, _v2, _v7, _v9, _v10, _v36, _v21, _v11, _v5]), (0, _v1.useEffect)(function () {
      let _v0 = null !== _v4 && _v8;
      if (!_v16 || _v16(_v16) === _v0 || _v26.loading || _v24.loading) return;
      let _v1 = `${_v4?.addOnId ?? "none"}:${_v8}`;
      if (_v41.current !== _v1) if (_v41.current = _v1, ("upgrade" === _v5 || "renew" === _v5) && _v6) {
        if ("upgrade" === _v5 && (0, _v14.isUpgradeToPlanAlreadyOnSubscription)(_v3?.id ?? "", _v6)) return void _v2({
          type: _v13.ActionTypes.PAYMENT_ALERT,
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
        _v23({
          select: [],
          variables: {
            type: _v5,
            billingPlanId: "renew" === _v5 ? "" : _v3?.id ?? "",
            subscriptionId: _v6.id,
            paymentMethodId: _v16.paymentMethodId,
            couponCode: _v16.couponCode,
            addOns: (0, _v11.getBundleOrderAddOns)(_v4, _v8)
          }
        });
      } else {
        var _v2;
        "purchase" === _v5 && _v25({
          select: [],
          variables: {
            useJuno: _v1,
            firstName: _v19.firstName,
            lastName: _v19.lastName,
            billingAddress: (_v2 = _v16.billingAddress) && [_v2.address, _v2.city, _v2.state, _v2.postalCode].some(_v0 => null != _v0 && "" !== _v0) ? _v16.billingAddress : void 0,
            currency: _v16.currency,
            isTrial: _v16.isTrial,
            items: (_v16.items || []).map(_v14.transformToOrderItemOptions),
            couponCode: _v16.couponCode,
            vatId: _v16.vatId,
            addOns: (0, _v11.getBundleOrderAddOns)(_v4, _v8)
          }
        });
      }
    }, [_v3?.id, _v4, _v5, _v6, _v8, _v16, _v25, _v26.loading, _v23, _v24.loading, _v19.firstName, _v19.lastName, _v1, _v2]), (0, _v1.useEffect)(function () {
      _v37 && (404 === _v37.status ? (_v21(null), _v2({
        type: _v13.ActionTypes.ORDER_PREVIEW,
        payload: null
      })) : 400 === _v37.status && (async () => {
        let _v0 = "";
        if (_v37.res?.body instanceof ReadableStream) {
          if (!_v37.res.body.locked) {
            let _v0 = _v37.res.body.getReader(),
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
        } else _v0 = "string" == typeof _v37.res?.body ? _v37.res.body : JSON.stringify(_v37);
        let _v1 = _v0.toLowerCase().includes("invalid coupon code"),
          _v2 = _v30.data?.code;
        if (_v1 && _v2) {
          _v2({
            type: _v13.ActionTypes.ORDER_PREVIEW,
            payload: null
          }), _v39(_v2);
          return;
        }
      })());
    }, [_v2, _v37, _v21, _v30.data?.code]);
    let _v42 = !!_v34?.loading || _v26.loading || _v24.loading || _v28.loading || _v22.loading;
    return (0, _v1.useEffect)(function () {
      _v2({
        type: _v13.ActionTypes.SET_ORDER_PREVIEW_LOADING,
        payload: _v42
      });
    }, [_v2, _v42]), {
      isLoading: _v34?.loading,
      order: _v34?.data,
      error: _v34?.error
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
  }], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ["issuer_decline", "suspected_fraud", "insufficient_funds", "expired_or_invalid_card", "stored_credential_invalid", "issuer_unavailable", "do_not_honor", "other_decline", "client_validation"],
    _v26 = _v0 => {
      switch (_v0) {
        case "issuer_decline":
        case "do_not_honor":
          return (0, _v7.translate)({
            singular: "Your card issuer declined the payment. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "El emisor de su tarjeta rechazó el pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller hat die Zahlung abgelehnt. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "L'émetteur de votre carte a refusé le paiement. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社が支払いを拒否しました。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "카드 발급사가 결제를 거부했습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O emissor do cartão recusou o pagamento. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "发卡行拒绝了付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "suspected_fraud":
          return (0, _v7.translate)({
            singular: "Your payment couldn't be completed. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo completar su pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Zahlung konnte nicht abgeschlossen werden. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement n'a pas pu être effectué. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "支払いを完了できませんでした。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "결제를 완료할 수 없습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Seu pagamento não pôde ser concluído. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法完成付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "insufficient_funds":
          return (0, _v7.translate)({
            singular: "Your card was declined due to insufficient funds. Please try a different payment method.",
            dictionary: {
              es: {
                singular: "Su tarjeta fue rechazada por fondos insuficientes. Intente con otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Karte wurde aufgrund unzureichender Deckung abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé pour insuffisance de fonds. Veuillez essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "残高不足のためカードが拒否されました。別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "잔액 부족으로 카드 결제가 거부되었습니다. 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O cartão foi recusado por fundos insuficientes. Tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "因账户余额不足，卡片被拒绝。请尝试其他付款方式。"
              }
            }
          });
        case "expired_or_invalid_card":
          return (0, _v7.translate)({
            singular: "Your card information appears to be expired or invalid. Please check your details or try a different card.",
            dictionary: {
              es: {
                singular: "La información de su tarjeta parece estar caducada o ser inválida. Verifique sus datos o pruebe con otra tarjeta."
              },
              "de-DE": {
                singular: "Ihre Kartendaten scheinen abgelaufen oder ungültig zu sein. Bitte prüfen Sie Ihre Angaben oder versuchen Sie eine andere Karte."
              },
              "fr-FR": {
                singular: "Les informations de votre carte semblent expirées ou invalides. Veuillez vérifier vos informations ou essayer une autre carte."
              },
              "ja-JP": {
                singular: "カード情報が期限切れ、または無効のようです。情報を確認するか、別のカードをご利用ください。"
              },
              "ko-KR": {
                singular: "카드 정보가 만료되었거나 유효하지 않은 것으로 보입니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
              },
              "pt-BR": {
                singular: "As informações do seu cartão parecem expiradas ou inválidas. Verifique os dados ou tente outro cartão."
              },
              "zh-CN": {
                singular: "您的卡信息似乎已过期或无效。请核对信息或尝试使用其他卡。"
              }
            }
          });
        case "stored_credential_invalid":
          return (0, _v7.translate)({
            singular: "We couldn't use your saved payment method. Please re-enter your card details or try a different payment method.",
            dictionary: {
              es: {
                singular: "No pudimos usar su método de pago guardado. Vuelva a introducir los datos de su tarjeta o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Wir konnten Ihre gespeicherte Zahlungsmethode nicht verwenden. Bitte geben Sie Ihre Kartendaten erneut ein oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Nous n'avons pas pu utiliser votre moyen de paiement enregistré. Veuillez ressaisir les informations de votre carte ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "保存されている支払い方法を使用できませんでした。カード情報を再入力するか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "저장된 결제 수단을 사용할 수 없습니다. 카드 정보를 다시 입력하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível usar o método de pagamento salvo. Por favor, reinsira os dados do cartão ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "我们无法使用您保存的付款方式。请重新输入卡片信息或尝试其他付款方式。"
              }
            }
          });
        case "issuer_unavailable":
          return (0, _v7.translate)({
            singular: "Your card issuer couldn't be reached. Please try again in a few minutes or use a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo contactar con el emisor de su tarjeta. Inténtelo de nuevo en unos minutos o use otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller konnte nicht erreicht werden. Bitte versuchen Sie es in wenigen Minuten erneut oder verwenden Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Impossible de joindre l'émetteur de votre carte. Veuillez réessayer dans quelques minutes ou utiliser un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社に接続できませんでした。数分後に再度お試しいただくか、別の支払い方法をご利用ください。"
              },
              "ko-KR": {
                singular: "카드 발급사에 연결할 수 없습니다. 몇 분 후에 다시 시도하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível contatar o emissor do cartão. Tente novamente em alguns minutos ou use um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法联系到发卡行。请稍后几分钟再试或使用其他付款方式。"
              }
            }
          });
        case "client_validation":
          return (0, _v7.translate)({
            singular: "Some of your payment details are missing or invalid. Please check the form and try again.",
            dictionary: {
              es: {
                singular: "Algunos de los datos de pago faltan o son inválidos. Revise el formulario y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Einige Ihrer Zahlungsangaben fehlen oder sind ungültig. Bitte prüfen Sie das Formular und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Certaines de vos informations de paiement sont manquantes ou invalides. Veuillez vérifier le formulaire et réessayer."
              },
              "ja-JP": {
                singular: "支払い情報の一部が不足しているか無効です。フォームを確認して、再度お試しください。"
              },
              "ko-KR": {
                singular: "결제 정보의 일부가 누락되었거나 유효하지 않습니다. 양식을 확인한 후 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Alguns dados do seu pagamento estão ausentes ou inválidos. Verifique o formulário e tente novamente."
              },
              "zh-CN": {
                singular: "您的部分付款信息缺失或无效。请检查表单并重试。"
              }
            }
          });
        default:
          return (0, _v7.translate)({
            singular: "Your payment was declined. Please try a different payment method or contact your bank.",
            dictionary: {
              es: {
                singular: "Su pago fue rechazado. Pruebe otro método de pago o póngase en contacto con su banco."
              },
              "de-DE": {
                singular: "Ihre Zahlung wurde abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode oder kontaktieren Sie Ihre Bank."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé. Veuillez essayer un autre moyen de paiement ou contacter votre banque."
              },
              "ja-JP": {
                singular: "支払いが拒否されました。別の支払い方法をお試しいただくか、銀行にお問い合わせください。"
              },
              "ko-KR": {
                singular: "결제가 거부되었습니다. 다른 결제 수단을 사용해 보시거나 은행에 문의해 주세요."
              },
              "pt-BR": {
                singular: "Seu pagamento foi recusado. Tente um método de pagamento diferente ou entre em contato com seu banco."
              },
              "zh-CN": {
                singular: "付款被拒绝。请尝试其他付款方式或联系您的银行。"
              }
            }
          });
      }
    },
    _v27 = {
      insufficient_funds: "insufficient_funds",
      card_velocity_exceeded: "insufficient_funds",
      withdrawal_count_limit_exceeded: "insufficient_funds",
      card_declined: "issuer_decline",
      approve_with_id: "issuer_decline",
      call_issuer: "issuer_decline",
      transaction_not_allowed: "issuer_decline",
      do_not_honor: "do_not_honor",
      expired_card: "expired_or_invalid_card",
      incorrect_cvc: "expired_or_invalid_card",
      invalid_cvc: "expired_or_invalid_card",
      incorrect_number: "expired_or_invalid_card",
      invalid_number: "expired_or_invalid_card",
      invalid_expiry_month: "expired_or_invalid_card",
      invalid_expiry_year: "expired_or_invalid_card",
      invalid_account: "expired_or_invalid_card",
      fraudulent: "suspected_fraud",
      lost_card: "suspected_fraud",
      stolen_card: "suspected_fraud",
      pickup_card: "suspected_fraud",
      merchant_blacklist: "suspected_fraud",
      restricted_card: "suspected_fraud",
      issuer_not_available: "issuer_unavailable",
      processing_error: "issuer_unavailable",
      reenter_transaction: "issuer_unavailable",
      try_again_later: "issuer_unavailable",
      new_account_information_available: "stored_credential_invalid"
    },
    _v28 = (_v0, _v1, {
      failingField: _v2,
      rawCode: _v3
    } = {}) => ({
      source: _v0,
      decline_category: _v1,
      failing_field: _v2 ?? null,
      error_code: _v3 ?? null,
      error_message: _v26(_v1)
    }),
    _v29 = _v0 => {
      switch (_v0.source) {
        case "zuora_hpm":
          return _v0.rawGatewayInfo ? {
            source: "chase",
            decline_category: null,
            failing_field: null,
            error_code: _v0.rawGatewayInfo.responseCode || null,
            error_message: _v0.rawGatewayInfo.responseMessage || null
          } : _v28("zuora_hpm", "client_validation", {
            failingField: _v0.formField || null,
            rawCode: _v0.formErrorCode || null
          });
        case "stripe":
          let _v0 = (_v0.code ?? "").trim().toLowerCase();
          if (_v0.startsWith("incomplete")) return _v28("stripe", "client_validation", {
            rawCode: _v0 || null
          });
          let _v1 = _v27[_v0];
          return _v1 ? _v28("stripe", _v1, {
            rawCode: _v0
          }) : _v0 ? _v28("stripe", "other_decline", {
            rawCode: _v0
          }) : {
            source: "stripe",
            decline_category: null,
            failing_field: null,
            error_code: null,
            error_message: _v0.message || null
          };
        case "paypal":
          return {
            source: "paypal",
            decline_category: null,
            failing_field: null,
            error_code: null,
            error_message: _v0.message || (0, _v7.translate)({
              singular: "Unable to connect to PayPal.",
              dictionary: {
                es: {
                  singular: "No se pudo conectar con PayPal."
                },
                "de-DE": {
                  singular: "Die Verbindung zu PayPal konnte nicht hergestellt werden."
                },
                "fr-FR": {
                  singular: "Impossible de se connecter à PayPal."
                },
                "ja-JP": {
                  singular: "PayPalに接続できませんでした。"
                },
                "ko-KR": {
                  singular: "PayPal에 연결할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível conectar ao PayPal."
                },
                "zh-CN": {
                  singular: "无法连接到 PayPal。"
                }
              }
            })
          };
        case "juno_vgs":
          let _v2 = (_v0.category ?? "").trim().toLowerCase(),
            _v3 = (_v0.declineKind ?? "").trim().toLowerCase(),
            _v4 = (_v0.code ?? "").trim().toLowerCase(),
            _v5 = "" !== _v4 ? _v4 : "" !== _v2 ? _v2 : null;
          if ("validation" === _v2) return _v28("juno_vgs", "client_validation", {
            rawCode: _v5
          });
          if ("decline" === _v2 || "user_action_required" === _v2 || "terminal" === _v2) return "insufficient_funds" === _v4 ? _v28("juno_vgs", "insufficient_funds", {
            rawCode: _v4
          }) : "fraud" === _v4 || "suspected_fraud" === _v4 ? _v28("juno_vgs", "suspected_fraud", {
            rawCode: _v4
          }) : "expired_card" === _v4 || "invalid_card" === _v4 ? _v28("juno_vgs", "expired_or_invalid_card", {
            rawCode: _v4
          }) : "retryable" === _v3 ? _v28("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : _v28("juno_vgs", "issuer_decline", {
            rawCode: _v5
          });
          return "retryable" === _v2 ? _v28("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : "" !== _v2 ? _v28("juno_vgs", "other_decline", {
            rawCode: _v5
          }) : {
            source: "juno_vgs",
            decline_category: null,
            failing_field: null,
            error_code: "" !== _v4 ? _v4 : null,
            error_message: _v0.message ?? null
          };
      }
    },
    _v30 = !1,
    _v31 = () => !_v30 && (_v30 = !0, !0);
  _v0.s(["acquireCheckoutFailedLatch", 0, _v31, "canonicalMessageForCategory", 0, _v26, "classifyClientDecline", 0, _v29, "isDeclineCategory", 0, _v0 => "string" == typeof _v0 && _v25.includes(_v0), "resetCheckoutFailedLatch", 0, () => {
    _v30 = !1;
  }], 0);
  let _v32 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"],
    _v33 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"];
  _v0.s(["trackAddPaymentMethodAddClick", 0, _v0 => {
    (0, _v24.sendBpEventWithContexts)("vimeo.add_payment_method_add_click", {
      ...(0, _v23.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v20.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v21.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v22.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v19.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodCancelClick", 0, _v0 => {
    (0, _v24.sendBpEventWithContexts)("vimeo.add_payment_method_cancel_click", {
      ...(0, _v23.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v20.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v21.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v22.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v19.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodError", 0, (_v0, _v1) => {
    (0, _v24.sendBpEventWithContexts)("vimeo.add_payment_method_error", {
      ...(0, _v23.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v20.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v21.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v22.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0,
      error_copy: _v1
    });
  }, "trackAddPaymentMethodPageview", 0, _v0 => {
    (0, _v24.sendBpEventWithContexts)("vimeo.add_payment_method_pageview", {
      ...(0, _v23.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v20.buildProductAnalyticsBpContext)({
        location: "not_applicable_pageview",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v21.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v22.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodSuccess", 0, _v0 => {
    (0, _v24.sendBpEventWithContexts)("vimeo.add_payment_method_success", {
      ...(0, _v23.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v20.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v21.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v22.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackCheckoutFormAction", 0, ({
    actionType: _v0,
    location: _v1,
    errorId: _v2,
    errorCopy: _v3,
    checkoutState: _v4,
    viewer: _v5,
    searchParams: _v6
  }) => {
    let _v7 = _v4.order?.items?.[0].quantity ?? 1,
      _v8 = _v4.order?.promoCode,
      _v9 = _v4?.billingPlan?.id,
      _v10 = _v32.includes(_v4.tier) ? _v4.tier : null,
      _v11 = _v33.includes(_v4.tier) ? _v4.tier : "seat_subscription";
    _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.checkout_form_action", 18, {
      action_type: _v0,
      bot_score: 0,
      checkout_product_ids: [],
      checkout_subscription_type: _v10,
      consumer_renewal_prohibited: !1,
      currency: _v4.order?.currency ?? "",
      device_type: null,
      is_signup_checkout: !1,
      error_copy: _v3 ?? null,
      error_id: _v2 ?? null,
      is_trial_purchase: _v4.isFreeTrial ?? !1,
      location: _v1,
      mobile_app_user_id: _v4.iosUserId ?? null,
      path: window?.location?.href ?? null,
      promo_code: _v8?.code ?? null,
      referrer_path: document?.referrer ?? null,
      seat_total: _v7,
      store: _v11,
      subtotal: _v4.order?.subtotalAmount?.formatted ?? "",
      target_path: null,
      tax: _v4.order?.totalTaxAmount?.formatted ?? "",
      user_account_type_at_checkout: _v5.user?.account ?? "",
      user_seat_count_at_checkout: 0,
      user_selection: _v4.isBusinessUserEntity ? _v12.USER_ENTITY_BUSINESS : _v12.USER_ENTITY_PERSONAL,
      upsell_name: _v6?.get("upsell"),
      feature: _v6?.get("feature"),
      billing_plan_id: _v9 || null
    }));
  }, "trackFailedOrder", 0, ({
    order: _v0,
    errorResponse: _v1,
    selectedPaymentMethod: _v2,
    source: _v3 = "zuora_hpm",
    stripeErrorCode: _v4,
    checkoutTracking: _v5
  }) => {
    let _v6 = {};
    _v2 && _v2.card ? (_v6.billing_address_state = _v2.card?.billingAddress?.state, _v6.billing_address_postal_code = _v2.card?.billingAddress?.postalCode, _v6.billing_address_country = _v2.card?.billingAddress?.country, _v6.credit_card_brand = _v2.card?.brand, _v6.credit_card_bin = _v2.card?.bin) : (_v6.billing_address_state = _v0.billingAddress?.state, _v6.billing_address_postal_code = _v0.billingAddress?.postalCode, _v6.billing_address_country = _v0.billingAddress?.country);
    let _v7 = _v0.items.map(_v0 => {
        let _v1 = (0, _v14.transformToOrderItemOptions)(_v0);
        return {
          billing_plan_id: _v1.billingPlanId ?? "",
          quantity: _v1.quantity
        };
      }),
      {
        formErrorCode: _v8,
        formErrorMessage: _v9,
        formField: _v10,
        rawGatewayInfo: _v11
      } = _v1;
    if (_v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.order_failure", 4, {
      client_error_message: _v11 ? null : _v9,
      client_error_code: _v11 ? null : _v8,
      gateway_response_message: _v11 ? _v11.responseMessage : null,
      gateway_status_code: _v11 ? parseInt(_v11.responseCode) : null,
      user_id: _v0.userId,
      order_id: _v0.id,
      currency: _v0.currency,
      is_trial: !!_v0.isTrial,
      billing_address_state: _v6.billing_address_state ?? null,
      billing_address_postal_code: _v6.billing_address_postal_code ?? null,
      billing_address_country: _v6.billing_address_country ?? null,
      tax_exempt: !!_v0.taxExempt,
      subtotal_amount: _v0.subtotalAmount.formatted,
      total_amount: _v0.totalAmount.formatted,
      total_discount: _v0.totalDiscount.formatted,
      total_tax_amount: _v0.totalTaxAmount.formatted,
      credit_card_brand: _v6.credit_card_brand ?? null,
      credit_card_bin: _v6.credit_card_bin ?? null,
      location: "frontend",
      order_items: _v7
    })), !_v31()) return;
    let _v12 = _v29("stripe" === _v3 ? {
      source: "stripe",
      code: _v4,
      message: _v9
    } : {
      source: "zuora_hpm",
      formErrorCode: _v8,
      formErrorMessage: _v9,
      formField: _v10,
      rawGatewayInfo: _v11
    });
    _v5.trackCheckoutFailed({
      tier: _v5.tier,
      periodicity: _v5.periodicity,
      isFreeTrial: _v5.isFreeTrial,
      source: _v12.source,
      decline_category: _v12.decline_category,
      failing_field: _v12.failing_field,
      error_code: _v12.error_code,
      error_message: _v12.error_message
    });
  }, "trackOrderFailure", 0, ({
    userId: _v0,
    description: _v1
  }) => {
    _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.order_failure", 4, {
      client_error_message: _v1,
      client_error_code: null,
      gateway_response_message: null,
      gateway_status_code: null,
      user_id: _v0,
      order_id: "0",
      currency: "USD",
      is_trial: !1,
      billing_address_state: null,
      billing_address_postal_code: null,
      billing_address_country: null,
      tax_exempt: !1,
      subtotal_amount: null,
      total_amount: null,
      total_discount: null,
      total_tax_amount: null,
      credit_card_brand: null,
      credit_card_bin: null,
      location: "frontend",
      order_items: []
    }));
  }, "trackZuoraOrderStep", 0, ({
    user_id: _v0,
    hpm_session_id: _v1,
    flow_type: _v2,
    step_name: _v3,
    step_message: _v4,
    purchase_type: _v5,
    payment_method_id: _v6,
    zuora_order_id: _v7
  }) => {
    _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.zuora_purchase_steps", 1, {
      user_id: _v0,
      unix_time: Date.now(),
      hpm_session_id: _v1,
      flow_type: _v2 ?? null,
      component: "client",
      step_name: _v3,
      step_message: _v4 ?? null,
      purchase_type: _v5 ?? null,
      payment_method_id: _v6 ?? null,
      zuora_order_id: _v7 ?? null
    }));
  }], 0);
}