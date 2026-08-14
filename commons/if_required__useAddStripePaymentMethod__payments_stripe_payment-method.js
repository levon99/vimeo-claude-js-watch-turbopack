{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
  let _v17 = (_v0, _v1) => ({
      name: _v0,
      postalCode: _v1?.postalCode || null,
      state: _v1?.state || null,
      country: _v1?.country || null
    }),
    _v18 = () => {
      let _v0 = (0, _v1.useStripe)(),
        _v1 = (0, _v1.useElements)();
      return [async ({
        clientSecret: _v0,
        name: _v1,
        postalCode: _v2,
        state: _v3,
        country: _v4
      }) => {
        if (!_v0 || !_v1) return {
          paymentIntent: void 0,
          error: void 0
        };
        let {
          paymentIntent: _v5,
          error: _v6
        } = await _v0.confirmPayment({
          elements: _v1,
          clientSecret: _v0,
          redirect: "if_required",
          confirmParams: {
            return_url: window.location.href,
            payment_method_data: {
              billing_details: {
                name: _v1,
                email: null,
                phone: null,
                address: {
                  line1: null,
                  line2: null,
                  city: null,
                  state: _v3,
                  postal_code: _v2,
                  country: _v4
                }
              }
            }
          }
        });
        return {
          paymentIntent: _v5,
          error: _v6
        };
      }];
    },
    _v19 = () => {
      let _v0 = (0, _v1.useStripe)(),
        _v1 = (0, _v1.useElements)();
      return [async ({
        clientSecret: _v0,
        name: _v1,
        postalCode: _v2,
        state: _v3,
        country: _v4
      }) => {
        if (!_v0 || !_v1) return {
          setupIntent: void 0,
          error: void 0
        };
        let {
          setupIntent: _v5,
          error: _v6
        } = await _v0.confirmSetup({
          elements: _v1,
          clientSecret: _v0,
          redirect: "if_required",
          confirmParams: {
            return_url: window.location.href,
            payment_method_data: {
              billing_details: {
                name: _v1,
                email: null,
                phone: null,
                address: {
                  line1: null,
                  line2: null,
                  city: null,
                  state: _v3,
                  postal_code: _v2,
                  country: _v4
                }
              }
            }
          }
        });
        return {
          setupIntent: _v5,
          error: _v6
        };
      }];
    };
  _v0.s(["useAddStripePaymentMethod", 0, () => {
    let _v0 = (0, _v9.useViewer)(),
      _v1 = (0, _v1.useStripe)(),
      _v2 = (0, _v1.useElements)(),
      [_v3, _v4] = (0, _v3.useState)(!1),
      [_v5] = _v18(),
      [_v6] = _v19();
    return [_v3, async ({
      billingName: _v0,
      billingAddress: _v1,
      onSubmissionComplete: _v2,
      onSubmitError: _v3
    }) => {
      let _v4, _v5, _v6;
      if (!_v1 || !_v2) return;
      _v4(!0);
      let {
        error: _v7
      } = await _v2.submit();
      if (_v7?.message) {
        _v3(_v7.message), _v4(!1);
        return;
      }
      let _v8 = await fetch("/payments/stripe/payment-method", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          token: _v0?.xsrft ?? ""
        })
      });
      if (!_v8.ok) {
        _v3((0, _v6.translate)({
          singular: "An error occurred while processing your payment.",
          dictionary: {
            es: {
              singular: "Se produjo un error al procesar su pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur s’est produite lors du traitement de votre paiement."
            },
            "ja-JP": {
              singular: "お支払いの処理中にエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 처리 도중 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro ao processar seu pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款时发生错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      let {
        type: _v9,
        clientSecret: _v10
      } = await _v8.json();
      if (!_v10 || !_v9) {
        _v3((0, _v6.translate)({
          singular: "An error occurred while processing your payment method.",
          dictionary: {
            es: {
              singular: "Se produjo un error al procesar su método de pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlungsmethode ist ein Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite lors du traitement de votre mode de paiement."
            },
            "ja-JP": {
              singular: "お支払い方法の処理中にエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 수단 처리 도중 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro ao processar sua forma de pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款方式时发生错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      if (!_v0) {
        _v3((0, _v6.translate)({
          singular: "Cardholder name is required.",
          dictionary: {
            es: {
              singular: "El nombre del titular de la tarjeta es obligatorio."
            },
            "de-DE": {
              singular: "Der Name des Karteninhabers ist erforderlich."
            },
            "fr-FR": {
              singular: "Le nom du titulaire de la carte est obligatoire."
            },
            "ja-JP": {
              singular: "カード名義人名は必須です。"
            },
            "ko-KR": {
              singular: "카드 소유자 이름은 필수 입력 사항입니다."
            },
            "pt-BR": {
              singular: "O nome do titular é obrigatório."
            },
            "zh-CN": {
              singular: "持卡人姓名是必填项。"
            }
          }
        })), _v4(!1);
        return;
      }
      let _v11 = _v17(_v0, _v1);
      if ("payment" === _v9) {
        let _v0 = await _v5({
          clientSecret: _v10,
          ..._v11
        });
        _v5 = _v0.paymentIntent, _v6 = _v0.error;
      } else {
        let _v0 = await _v6({
          clientSecret: _v10,
          ..._v11
        });
        _v4 = _v0.setupIntent, _v6 = _v0.error;
      }
      let _v12 = _v5 || _v4;
      if (_v6?.message) {
        _v3(_v6.message), _v4(!1);
        return;
      }
      if (!_v12?.id) {
        _v3((0, _v6.translate)({
          singular: "An unknown error occurred while processing your payment method.",
          dictionary: {
            es: {
              singular: "Se produjo un error desconocido al procesar su método de pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlungsmethode ist ein unbekannter Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur inconnue s'est produite lors du traitement de votre mode de paiement."
            },
            "ja-JP": {
              singular: "お支払い方法の処理中に不明なエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 수단 처리 도중 알 수 없는 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro desconhecido ao processar a sua forma de pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款方式时发生了未知错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      _v4(!1), _v2(_v12.id);
    }];
  }, "useLoadStripe", 0, ({
    paymentFormType: _v0
  }) => {
    let _v1 = (0, _v9.useViewer)(),
      [_v2, _v3] = (0, _v3.useState)(void 0),
      [_v4, _v5] = (0, _v3.useState)(void 0),
      [_v6, _v7] = (0, _v3.useState)(void 0),
      _v8 = (0, _v3.useRef)(!1),
      _v9 = (0, _v3.useRef)(null);
    return (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        if (_v2 || _v8.current || !_v1?.xsrft) return;
        _v8.current = !0;
        let _v0 = await fetch("/payments/stripe/config", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: JSON.stringify({
            token: _v1.xsrft
          })
        });
        if (!_v0.ok) throw Error((0, _v6.translate)({
          singular: "An error occurred while rendering the Stripe form.",
          dictionary: {
            es: {
              singular: "Se produjo un error al renderizar el formulario de Stripe."
            },
            "de-DE": {
              singular: "Beim Rendern des Stripe-Formulars ist ein Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite lors de l'affichage du formulaire Stripe."
            },
            "ja-JP": {
              singular: "Stripeフォームのレンダリング中にエラーが発生しました。"
            },
            "ko-KR": {
              singular: "Stripe 양식을 불러오는 도중 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro ao renderizar o formulário do Stripe."
            },
            "zh-CN": {
              singular: "渲染 Stripe 表单时发生错误。"
            }
          }
        }));
        let _v1 = await _v0.json();
        _v7(_v1.currency), _v3(_v1.publishableKey), _v5(_v1.paymentMethodConfigId);
      };
      _v0 === _v14.PaymentFormTypes.TYPE_STRIPE && _v0();
    }, [_v2, _v0, _v1?.xsrft]), !_v9.current && _v2 && (_v9.current = (0, _v2.loadStripe)(_v2)), [_v9.current && _v6 && _v2 && _v4 ? {
      currency: _v6,
      publishableKey: _v2,
      paymentMethodConfigId: _v4
    } : void 0, _v9.current];
  }, "usePayStripeBalance", 0, () => {
    let _v0 = (0, _v1.useStripe)(),
      _v1 = (0, _v1.useElements)(),
      [_v2, _v3] = (0, _v3.useState)(!1),
      [_v4] = _v18();
    return [_v2, async ({
      clientSecret: _v0,
      billingName: _v1,
      billingAddress: _v2,
      onSubmissionComplete: _v3,
      onSubmitError: _v4
    }) => {
      if (!_v0 || !_v1) return;
      _v3(!0);
      let {
        error: _v5
      } = await _v1.submit();
      if (_v5?.message) {
        _v4(_v5.message), _v3(!1);
        return;
      }
      if (!_v1) {
        _v4((0, _v6.translate)({
          singular: "Cardholder name is required.",
          dictionary: {
            es: {
              singular: "El nombre del titular de la tarjeta es obligatorio."
            },
            "de-DE": {
              singular: "Der Name des Karteninhabers ist erforderlich."
            },
            "fr-FR": {
              singular: "Le nom du titulaire de la carte est obligatoire."
            },
            "ja-JP": {
              singular: "カード名義人名は必須です。"
            },
            "ko-KR": {
              singular: "카드 소유자 이름은 필수 입력 사항입니다."
            },
            "pt-BR": {
              singular: "O nome do titular é obrigatório."
            },
            "zh-CN": {
              singular: "持卡人姓名是必填项。"
            }
          }
        })), _v3(!1);
        return;
      }
      let _v6 = _v17(_v1, _v2),
        {
          paymentIntent: _v7,
          error: _v8
        } = await _v4({
          clientSecret: _v0,
          ..._v6
        });
      if (_v8?.message) {
        _v4(_v8.message), _v3(!1);
        return;
      }
      if (!_v7?.id) {
        _v4((0, _v6.translate)({
          singular: "An unknown error occurred while processing your payment.",
          dictionary: {
            es: {
              singular: "Se produjo un error desconocido al procesar su pago."
            },
            "de-DE": {
              singular: "Bei der Bearbeitung Ihrer Zahlung ist ein unbekannter Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur inconnue s'est produite lors du traitement de votre paiement."
            },
            "ja-JP": {
              singular: "お支払いの処理中に不明なエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 처리 도중 알 수 없는 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro desconhecido ao processar seu pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款时发生了未知错误。"
            }
          }
        })), _v3(!1);
        return;
      }
      _v3(!1), _v3(_v7.id);
    }];
  }, "useSubmitStripe", 0, () => {
    let {
        settings: _v0
      } = (0, _v7.useOrionSettings)(),
      _v1 = _v0.use_juno_billing,
      {
        dispatch: _v2,
        state: {
          order: _v3,
          storePaymentMethod: _v4,
          tier: _v5,
          isMonthly: _v6,
          isFreeTrial: _v7,
          subscriptionProduct: _v8,
          creatorProductAction: _v9,
          iosUserId: _v10
        }
      } = (0, _v16.useStateContext)(),
      _v11 = (0, _v9.useViewer)(),
      {
        firstName: _v12,
        lastName: _v13
      } = (0, _v10.useGetUserName)(),
      _v14 = (0, _v1.useStripe)(),
      _v15 = (0, _v1.useElements)(),
      [_v16] = (0, _v11.useSubmitOrder)(),
      [_v17] = _v18(),
      [_v18] = _v19(),
      [_v19, _v20] = (0, _v3.useState)(!1),
      {
        trackCheckoutFailed: _v21
      } = (0, _v8.useCheckoutTracking)(_v10),
      _v22 = (0, _v15.getCheckoutPeriodicity)(_v8?.isCreatorProduct, _v9, _v6),
      _v23 = (0, _v3.useCallback)(() => ({
        trackCheckoutFailed: _v21,
        tier: _v5 ?? "unknown",
        periodicity: _v22,
        isFreeTrial: _v7
      }), [_v21, _v5, _v22, _v7]);
    return [_v19, async ({
      billingName: _v0
    }) => {
      let _v1, _v2, _v3;
      if (!_v14 || !_v15 || !_v3) return;
      _v20(!0), (0, _v13.resetCheckoutFailedLatch)();
      let {
        error: _v4
      } = await _v15.submit();
      if (_v4?.message) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v4.message
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          source: "stripe",
          stripeErrorCode: _v4.code,
          errorResponse: {
            formErrorCode: _v4.code ?? "",
            formErrorMessage: _v4.message
          },
          checkoutTracking: _v23()
        });
        return;
      }
      let _v5 = await fetch("/payments/stripe/payment", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify((0, _v4.deepSnakeCase)({
          token: _v11?.xsrft ?? "",
          store_payment_method: _v4,
          use_juno: _v1 && !!_v5 && !(0, _v15.isCreatorProductTier)(_v5),
          first_name: _v12,
          last_name: _v13,
          currency: _v3.currency,
          items: _v3.items.map(_v15.transformToOrderItemOptions),
          billing_address: _v3.billingAddress,
          is_trial: _v3.isTrial,
          vat_id: _v3.vatId,
          coupon_code: _v3.couponCode
        }))
      });
      if (!_v5.ok) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v6.translate)({
              singular: "An error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur s’est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中にエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生错误。"
                }
              }
            })
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_payment_request_failed",
            formErrorMessage: `Stripe payment request failed (HTTP ${_v5.status}).`
          },
          checkoutTracking: _v23()
        });
        return;
      }
      let {
        type: _v6,
        clientSecret: _v7
      } = await _v5.json();
      if (!_v7 || !_v6) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v6.translate)({
              singular: "An error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur s’est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中にエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生错误。"
                }
              }
            })
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_missing_client_secret",
            formErrorMessage: "Stripe payment response missing client secret or intent type."
          },
          checkoutTracking: _v23()
        });
        return;
      }
      if (!_v0) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v6.translate)({
              singular: "Cardholder name is required.",
              dictionary: {
                es: {
                  singular: "El nombre del titular de la tarjeta es obligatorio."
                },
                "de-DE": {
                  singular: "Der Name des Karteninhabers ist erforderlich."
                },
                "fr-FR": {
                  singular: "Le nom du titulaire de la carte est obligatoire."
                },
                "ja-JP": {
                  singular: "カード名義人名は必須です。"
                },
                "ko-KR": {
                  singular: "카드 소유자 이름은 필수 입력 사항입니다."
                },
                "pt-BR": {
                  singular: "O nome do titular é obrigatório."
                },
                "zh-CN": {
                  singular: "持卡人姓名是必填项。"
                }
              }
            })
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_missing_billing_name",
            formErrorMessage: "Cardholder name is required."
          },
          checkoutTracking: _v23()
        });
        return;
      }
      let _v8 = _v17(_v0, _v3.billingAddress);
      if ("payment" === _v6) {
        let _v0 = await _v17({
          clientSecret: _v7,
          ..._v8
        });
        _v2 = _v0.paymentIntent, _v3 = _v0.error;
      } else {
        let _v0 = await _v18({
          clientSecret: _v7,
          ..._v8
        });
        _v1 = _v0.setupIntent, _v3 = _v0.error;
      }
      let _v9 = _v2 || _v1;
      if (_v3?.message) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v3.message
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          source: "stripe",
          stripeErrorCode: _v3.decline_code ?? _v3.code,
          errorResponse: {
            formErrorCode: _v3.decline_code ?? _v3.code ?? "",
            formErrorMessage: _v3.message
          },
          checkoutTracking: _v23()
        });
        return;
      }
      if (!_v9?.id) {
        _v2({
          type: _v14.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v6.translate)({
              singular: "An unknown error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error desconocido al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Bearbeitung Ihrer Zahlung ist ein unbekannter Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur inconnue s'est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中に不明なエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 알 수 없는 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro desconhecido ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生了未知错误。"
                }
              }
            })
          }
        }), _v20(!1), (0, _v12.trackFailedOrder)({
          order: _v3,
          selectedPaymentMethod: void 0,
          source: "stripe",
          errorResponse: {
            formErrorCode: "",
            formErrorMessage: "An unknown error occurred while processing your payment."
          },
          checkoutTracking: _v23()
        });
        return;
      }
      _v20(!1), _v16({
        ..._v3,
        paymentMethodId: _v9.id
      }, {
        provider: "stripe"
      });
    }];
  }, "useSubmitStripePayment", 0, () => {
    let [_v0, _v1] = (0, _v5.usePostMeStripePayment)();
    return [_v0 => {
      _v0({
        variables: {
          paymentIntentId: _v0
        }
      });
    }, _v1];
  }]);
}