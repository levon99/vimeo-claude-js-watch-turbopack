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
  let _v17 = _v0 => {
    switch (_v0) {
      case _v16.PaymentFormTypes.TYPE_CREDIT_CARD:
        return "credit_card";
      case _v16.PaymentFormTypes.TYPE_PAYPAL:
        return "paypal";
      case _v16.PaymentFormTypes.TYPE_STRIPE:
        return "stripe";
      default:
        return "unknown";
    }
  };
  _v0.s(["AddPaymentMethodContainer", 0, ({
    paymentFormType: _v0,
    forceStripeCheckout: _v1 = !1,
    isIndianUser: _v2 = !1,
    stripeConfig: _v3,
    openInvoice: _v4,
    redirectUrl: _v5 = "/manage/team/billing",
    isVerification: _v6 = !1,
    isVerificationFlow: _v7 = !1,
    pmId: _v8,
    isInline: _v9 = !1,
    addNewPaymentMethodHref: _v10,
    onPostpone: _v11,
    onAddNew: _v12,
    onConfirm: _v13,
    onSuccess: _v14
  }) => {
    let [_v15, _v16] = (0, _v3.useState)(!1),
      [_v17, _v18] = (0, _v3.useState)(!1),
      [_v19, _v20] = (0, _v3.useState)(!1),
      [_v21, _v22] = (0, _v3.useState)(),
      [_v23, _v24] = (0, _v3.useState)(void 0),
      [_v25, _v26] = (0, _v3.useState)(void 0),
      [_v27, _v28] = (0, _v3.useState)(void 0),
      [_v29, _v30] = (0, _v3.useState)(!0),
      [_v31, _v32] = (0, _v3.useState)(void 0),
      [_v33, _v34] = (0, _v3.useState)(!_v2),
      [_v35, _v36] = (0, _v3.useState)(void 0),
      [_v37, _v38] = (0, _v3.useState)(null),
      [_v39, _v40] = (0, _v3.useState)(null),
      _v41 = (0, _v3.useRef)(null);
    (0, _v3.useEffect)(() => () => _v41.current?.abort(), []);
    let [_v42, _v43] = (0, _v3.useState)(() => {
        {
          let _v0 = new URLSearchParams(window.location.search);
          if (_v0.has("payPalCancel") || _v0.has("ba_token") || _v0.has("token")) return _v16.PaymentFormTypes.TYPE_PAYPAL;
        }
        return _v0;
      }),
      [_v44, _v45] = (0, _v3.useState)(!1),
      _v46 = (0, _v3.useContext)(_v10.ViewerContext),
      _v47 = (0, _v2.useRouter)(),
      _v48 = (0, _v4.useToast)(),
      {
        trackUpdatePaymentMethodPageDisplayed: _v49,
        trackUpdatePaymentMethodSubmitted: _v50
      } = (0, _v8.useBillingTracking)(),
      {
        trackPageDisplayed: _v51,
        trackSubmitted: _v52,
        trackCompleted: _v53,
        trackFailed: _v54
      } = (0, _v9.useCardVerificationTracking)(),
      _v55 = _v6 || _v7 || _v9,
      _v56 = (0, _v3.useRef)(_v42);
    _v56.current = _v42;
    let _v57 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(function () {
      !_v57.current && (_v57.current = !0, _v49({
        paymentFormType: _v17(_v56.current)
      }), (_v6 || _v7) && _v51({
        variant: _v6 ? "verify" : "add_new"
      }));
    }, [_v49, _v51, _v6, _v7]);
    let _v58 = (0, _v3.useCallback)((_v0, _v1) => {
        _v50({
          success: _v0,
          paymentFormType: _v17(_v56.current),
          errorMessage: _v1
        }), _v55 && (_v0 ? _v53() : _v54());
      }, [_v50, _v55, _v53, _v54]),
      _v59 = (0, _v3.useRef)(new WeakSet()),
      _v60 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v59.current.has(_v0) || (_v59.current.add(_v0), _v58(_v1, _v2));
      }, [_v58]),
      [_v61, {
        data: _v62,
        loading: _v63
      }] = (0, _v6.useGetUserSettingsBillingMembershipLazy)();
    (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        await _v61({
          select: ["gracePeriodType", "paymentMethod", "suggestedPaymentMethod"],
          where: {
            userId: Number(_v46?.user?.id)
          }
        });
      };
      _v46 && _v46?.user?.id && !_v63 && !_v62 && _v0();
    }, [_v46, _v63, _v61, _v62]);
    let [_v64, {
        data: _v65,
        loading: _v66
      }] = (0, _v5.useGetMePaymentMethodsLazy)(),
      _v67 = !!_v62?.gracePeriodType;
    (0, _v3.useEffect)(() => {
      !_v46?.user?.id || _v65 || _v66 || _v64({
        select: ["id", "isDefault", "card", "type"]
      });
    }, [_v46, _v65, _v66, _v64]);
    let _v68 = (0, _v3.useRef)(!1),
      [_v69, _v70] = (0, _v3.useState)({});
    (0, _v3.useEffect)(function () {
      if (!_v6 && !_v9 || _v68.current) return;
      let _v0 = _v65?.data;
      if (!_v0) return;
      let _v1 = _v8 ? _v0.find(_v0 => _v0.id === _v8) : void 0,
        _v2 = _v1?.card?.billingAddress;
      _v2?.country && (_v68.current = !0, _v26({
        country: _v2.country,
        postalCode: _v2.postalCode ?? void 0
      }), _v70({
        country: !!_v2.country,
        postalCode: !!_v2.postalCode
      }));
    }, [_v6, _v9, _v8, _v65]);
    let _v71 = void 0 !== _v65,
      _v72 = _v9 && (!_v71 || !!_v69.country),
      _v73 = (0, _v3.useRef)(void 0);
    (0, _v3.useEffect)(function () {
      (_v6 || _v7) && _v21 && _v21 !== _v73.current && (_v73.current = _v21, _v48({
        variant: "warning",
        isClosable: !1,
        title: _v6 ? (0, _v7.translate)({
          singular: "We couldn't verify your card",
          dictionary: {
            es: {
              singular: "No pudimos verificar su tarjeta"
            },
            "de-DE": {
              singular: "Wir konnten Ihre Karte nicht verifizieren."
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu vérifier votre carte"
            },
            "ja-JP": {
              singular: "カードを確認できませんでした"
            },
            "ko-KR": {
              singular: "카드를 확인할 수 없습니다"
            },
            "pt-BR": {
              singular: "Não foi possível verificar seu cartão"
            },
            "zh-CN": {
              singular: "我们无法验证您的银行卡"
            }
          }
        }) : (0, _v7.translate)({
          singular: "We couldn't add your payment method",
          dictionary: {
            es: {
              singular: "No pudimos añadir su método de pago"
            },
            "de-DE": {
              singular: "Wir konnten Ihre Zahlungsmethode nicht hinzufügen"
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu ajouter votre moyen de paiement"
            },
            "ja-JP": {
              singular: "お支払い方法を追加できませんでした"
            },
            "ko-KR": {
              singular: "결제 수단을 추가할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não conseguimos adicionar seu método de pagamento"
            },
            "zh-CN": {
              singular: "我们无法添加您的支付方式"
            }
          }
        })
      }));
    }, [_v6, _v7, _v21, _v48]);
    let [_v74, _v75] = (0, _v12.useAddStripePaymentMethod)(),
      [_v76, _v77] = (0, _v12.usePayStripeBalance)(),
      [_v78, _v79] = (0, _v13.useAuthorizePaypalForAddPaymentMethod)(),
      _v80 = _v79.loading;
    (0, _v3.useEffect)(function () {
      _v79.error && (_v22(_v79.error), _v20(!1), _v60(_v79.error, !1, _v79.error.message));
    }, [_v79.error, _v60]), (0, _v3.useEffect)(function () {
      _v47.isReady && !_v44 && (_v47.query.payPalCancel || _v47.query.ba_token || _v47.query.token) && (_v45(!0), _v42 !== _v16.PaymentFormTypes.TYPE_PAYPAL && _v43(_v16.PaymentFormTypes.TYPE_PAYPAL), "true" === _v47.query.payPalCancel && (_v22(Error((0, _v7.translate)({
        singular: "You canceled the PayPal authorization. You can try again.",
        dictionary: {
          es: {
            singular: "Canceló la autorización de PayPal. Puede volver a intentarlo."
          },
          "de-DE": {
            singular: "Sie haben die PayPal-Autorisierung storniert. Sie können es erneut versuchen."
          },
          "fr-FR": {
            singular: "Vous avez annulé l'autorisation de PayPal. Vous pouvez réessayer."
          },
          "ja-JP": {
            singular: "PayPalの認証をキャンセルしました。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "PayPal 승인을 취소했습니다. 다시 시도할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você cancelou a autorização do PayPal. Tente novamente."
          },
          "zh-CN": {
            singular: "您取消了 PayPal 授权。您可以再试一次。"
          }
        }
      }))), setTimeout(() => {
        let _v0 = {
          ..._v47.query
        };
        delete _v0.payPalCancel, delete _v0.ba_token, delete _v0.token, _v47.replace({
          pathname: _v47.pathname,
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, 100)));
    }, [_v47.isReady, _v47.query.payPalCancel, _v47.query.ba_token, _v47.query.token, _v44, _v42, _v47]), (0, _v3.useEffect)(function () {
      _v79.data?.redirectUrl && (_v20(!0), sessionStorage.setItem("addPmState", JSON.stringify({
        vatId: _v23,
        billingAddress: _v25
      })), window.location.href = _v79.data.redirectUrl);
    }, [_v79.data, _v23, _v25]);
    let _v81 = _v3?.balance?.formatted || _v4?.total?.formatted,
      _v82 = !!_v81,
      [_v83, {
        data: _v84,
        loading: _v85,
        error: _v86
      }] = (0, _v14.useSubmitPaymentMethod)(),
      [_v87, {
        data: _v88,
        loading: _v89,
        error: _v90
      }] = (0, _v12.useSubmitStripePayment)(),
      _v91 = (0, _v3.useCallback)(() => {
        _v9 ? _v14?.() : _v6 ? window.location.href = `${_v5}?card_verified=1` : _v7 ? window.location.href = `${_v5}?card_added=1` : window.location.href = `${_v5}?added_payment_method=1`;
      }, [_v9, _v14, _v6, _v7, _v5]);
    (0, _v3.useEffect)(function () {
      if (_v86) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v46?.user?.id),
          description: `On-session invoice payment failed: ${_v86.message}`
        });
        let _v0 = (0, _v7.translate)({
          singular: "This card could not be charged. Please try again or use a different card.",
          dictionary: {
            es: {
              singular: "No se pudo cargar esta tarjeta. Intente de nuevo o utilice otra tarjeta."
            },
            "de-DE": {
              singular: "Diese Karte konnte nicht belastet werden. Bitte versuchen Sie es erneut oder verwenden Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Cette carte n'a pas pu être débitée. Veuillez réessayer ou utiliser une autre carte."
            },
            "ja-JP": {
              singular: "このカードへの請求に失敗しました。もう一度お試しいただくか、別のカードを使用してください。"
            },
            "ko-KR": {
              singular: "카드 결제가 승인되지 않았습니다. 다시 시도하시거나 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Não foi possível fazer a cobrança neste cartão. Tente novamente ou use outro cartão."
            },
            "zh-CN": {
              singular: "此卡片无法扣款。请重试或使用其他卡片。"
            }
          }
        });
        _v22(Error(`${_v0} (${_v86.message})`)), _v20(!1), _v60(_v86, !1, _v86.message);
        return;
      }
      _v84 && !_v85 && (_v60(_v84, !0), _v82 ? window.location.href = "/manage/team/billing?invoice_paid=1" : _v91());
    }, [_v84, _v85, _v86, _v46, _v82, _v60, _v91]), (0, _v3.useEffect)(function () {
      if (_v90) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v46?.user?.id),
          description: `Stripe on-session invoice payment failed: ${_v90.message}`
        });
        let _v0 = (0, _v7.translate)({
          singular: "This card could not be charged. Please try again or use a different card.",
          dictionary: {
            es: {
              singular: "No se pudo cargar esta tarjeta. Intente de nuevo o utilice otra tarjeta."
            },
            "de-DE": {
              singular: "Diese Karte konnte nicht belastet werden. Bitte versuchen Sie es erneut oder verwenden Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Cette carte n'a pas pu être débitée. Veuillez réessayer ou utiliser une autre carte."
            },
            "ja-JP": {
              singular: "このカードへの請求に失敗しました。もう一度お試しいただくか、別のカードを使用してください。"
            },
            "ko-KR": {
              singular: "카드 결제가 승인되지 않았습니다. 다시 시도하시거나 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Não foi possível fazer a cobrança neste cartão. Tente novamente ou use outro cartão."
            },
            "zh-CN": {
              singular: "此卡片无法扣款。请重试或使用其他卡片。"
            }
          }
        });
        _v22(Error(`${_v0} (${_v90.message})`)), _v20(!1), _v60(_v90, !1, _v90.message);
        return;
      }
      _v88 && !_v89 && (_v60(_v88, !0), window.location.href = "/manage/team/billing?invoice_paid=1");
    }, [_v88, _v89, _v90, _v5, _v46, _v60]), (0, _v3.useEffect)(function () {
      if (_v31) throw _v31;
    }, [_v31]);
    let _v92 = _v0 => {
        if (!_v83 || !_v0) {
          _v20(!1), _v22(Error((0, _v7.translate)({
            singular: "Unable to submit payment method",
            dictionary: {
              es: {
                singular: "No se puede enviar el método de pago"
              },
              "de-DE": {
                singular: "Zahlungsmethode kann nicht angegeben werden"
              },
              "fr-FR": {
                singular: "Impossible de soumettre un mode de paiement"
              },
              "ja-JP": {
                singular: "お支払い方法を送信できません"
              },
              "ko-KR": {
                singular: "결제 수단을 입력할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível enviar a forma de pagamento"
              },
              "zh-CN": {
                singular: "无法提交付款方式"
              }
            }
          })));
          return;
        }
        _v20(!0), _v83(_v0, _v0, !0, _v23, _v25, _v82, void 0, _v55);
      },
      _v93 = _v0 => {
        if (!_v87) {
          _v20(!1), _v22(Error((0, _v7.translate)({
            singular: "An unexpected error occurred while processing your payment",
            dictionary: {
              es: {
                singular: "Se produjo un error inesperado al procesar su pago."
              },
              "de-DE": {
                singular: "Bei der Verarbeitung Ihrer Zahlung ist ein unerwarteter Fehler aufgetreten."
              },
              "fr-FR": {
                singular: "Une erreur inattendue s'est produite lors du traitement de votre paiement"
              },
              "ja-JP": {
                singular: "お支払いの処理中に予期しないエラーが発生しました"
              },
              "ko-KR": {
                singular: "결제 처리 도중 예기치 못한 오류가 발생했습니다."
              },
              "pt-BR": {
                singular: "Ocorreu um erro inesperado ao processar seu pagamento"
              },
              "zh-CN": {
                singular: "处理您的付款时发生了意外错误。"
              }
            }
          })));
          return;
        }
        _v20(!0), _v87(_v0);
      };
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v11.AddPaymentMethod, {
        currency: _v62?.currency,
        balanceAmount: _v81,
        paymentFormType: _v42,
        isVerification: _v6,
        isVerificationFlow: _v7,
        isInline: _v9,
        hideAddressForm: _v72,
        addNewPaymentMethodHref: _v10,
        onPostpone: _v11,
        onAddNew: _v12,
        onConfirm: _v13,
        pmId: _v8,
        lockedAddressFields: _v69,
        formError: _v27 ? Error(_v27) : _v21,
        isDisabled: _v15,
        formLoaded: _v17,
        onZuoraControllerChange: _v40,
        onZuoraStatusChange: _v0 => {
          "ready" !== _v0.status && _v18(!1), "preparing" === _v0.status && _v20(!0);
        },
        isLoading: _v19 || _v74 || _v76 || _v80,
        gracePeriodType: _v62?.gracePeriodType,
        canSavePaymentMethod: _v33,
        hideStripeUserConsent: !_v2,
        forceStripeCheckout: _v1,
        isIndianUser: _v2,
        onBillingName: _v0 => _v36(_v0),
        onCanSavePaymentMethod: _v34,
        onErrorLoadingForm: (..._v0) => {
          _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "error loading HPM form"
          }), _v32(..._v0);
        },
        onFormLoaded: () => {
          _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onFormLoaded"
          }), _v16(!1), _v18(!0);
        },
        onPaymentTypeChanged: _v0 => {
          _v43(_v0), _v22(void 0), _v28(void 0), _v20(!1);
        },
        onSubmissionComplete: _v0 => {
          if (_v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onSubmissionComplete",
            step_message: JSON.stringify(_v0)
          }), "zuora_hpm" === _v0.kind && _v0.redirectUrl) {
            sessionStorage.setItem("addPmState", JSON.stringify({
              vatId: _v23,
              billingAddress: _v25
            })), document.location.href = `${_v0.redirectUrl}${_v0.redirectUrl.includes("?") ? "&" : "?"}addPm=1`;
            return;
          }
          if ("juno" === _v0.kind) {
            if (_v0.success) (0, _v15.trackAddPaymentMethodSuccess)(_v67), _v58(!0), _v91();else {
              _v20(!1);
              let _v0 = _v0.errorMessage ?? (0, _v7.translate)({
                singular: "Unable to submit payment method",
                dictionary: {
                  es: {
                    singular: "No se puede enviar el método de pago"
                  },
                  "de-DE": {
                    singular: "Zahlungsmethode kann nicht angegeben werden"
                  },
                  "fr-FR": {
                    singular: "Impossible de soumettre un mode de paiement"
                  },
                  "ja-JP": {
                    singular: "お支払い方法を送信できません"
                  },
                  "ko-KR": {
                    singular: "결제 수단을 입력할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar a forma de pagamento"
                  },
                  "zh-CN": {
                    singular: "无法提交付款方式"
                  }
                }
              });
              _v22(Error(_v0)), (0, _v15.trackAddPaymentMethodError)(_v67, _v0), _v58(!1, _v0);
            }
          } else if ("zuora_hpm" === _v0.kind && _v0.success && _v83 && _v0.refId) {
            _v38(_v0.refId);
            try {
              _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v46.user.id}`,
                hpm_session_id: _v46.xsrft,
                step_name: "HPM onSubmissionComplete success",
                payment_method_id: _v0.refId
              }), _v83(_v0.refId, _v42, !0, _v23, _v25, _v82, void 0, _v55), (0, _v15.trackAddPaymentMethodSuccess)(_v67);
            } catch (_v0) {
              _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v46.user.id}`,
                hpm_session_id: _v46.xsrft,
                step_name: "HPM onSubmissionComplete error",
                step_message: _v0.message
              }), _v20(!1), _v22(Error((0, _v7.translate)({
                singular: "Unable to submit payment method",
                dictionary: {
                  es: {
                    singular: "No se puede enviar el método de pago"
                  },
                  "de-DE": {
                    singular: "Zahlungsmethode kann nicht angegeben werden"
                  },
                  "fr-FR": {
                    singular: "Impossible de soumettre un mode de paiement"
                  },
                  "ja-JP": {
                    singular: "お支払い方法を送信できません"
                  },
                  "ko-KR": {
                    singular: "결제 수단을 입력할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar a forma de pagamento"
                  },
                  "zh-CN": {
                    singular: "无法提交付款方式"
                  }
                }
              }))), (0, _v15.trackOrderFailure)({
                userId: Number(_v46?.user?.id),
                description: `Error submitting payment method for refId ${_v0.refId}: ${_v0.message}`
              }), (0, _v15.trackAddPaymentMethodError)(_v67, _v0.message), _v58(!1, _v0.message);
            }
          } else _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onSubmissionComplete error",
            step_message: "Unable to submit payment method"
          }), _v20(!1), _v22(Error("Unable to submit payment method")), (0, _v15.trackAddPaymentMethodError)(_v67, "Unable to submit payment method"), _v58(!1, "Unable to submit payment method");
        },
        onSubmissionStart: () => {
          _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onSubmissionStart"
          }), _v55 && _v52(), _v22(void 0), _v20(!0);
        },
        onSubmit: () => {
          if (_v37 && _v83) {
            _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
              user_id: `${_v46.user.id}`,
              hpm_session_id: _v46.xsrft,
              step_name: "HPM onSubmit"
            }), _v83(_v37, _v42, !0, _v23, _v25, _v82, void 0, _v55);
            return;
          }
          switch (_v42) {
            case _v16.PaymentFormTypes.TYPE_CREDIT_CARD:
              _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v46.user.id}`,
                hpm_session_id: _v46.xsrft,
                step_name: "Calling Z.Submit"
              }), _v41.current?.abort();
              let _v0 = new AbortController();
              _v41.current = _v0, _v39?.prepare({
                attemptId: crypto.randomUUID()
              }, _v0.signal).catch(() => void 0), _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v46.user.id}`,
                hpm_session_id: _v46.xsrft,
                step_name: "Z.Submit Done"
              });
              break;
            case _v16.PaymentFormTypes.TYPE_PAYPAL:
              _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v46.user.id}`,
                hpm_session_id: _v46.xsrft,
                step_name: "PayPal Authorization Started"
              }), _v20(!0), _v78({
                hasOpenInvoice: !!_v4
              });
              break;
            case _v16.PaymentFormTypes.TYPE_STRIPE:
              _v3?.balance && _v3.clientSecret ? _v77({
                clientSecret: _v3.clientSecret,
                billingName: _v35,
                billingAddress: _v25,
                onSubmissionComplete: _v93,
                onSubmitError: _v0 => _v22(Error(_v0))
              }) : _v75({
                billingName: _v35,
                billingAddress: _v25,
                onSubmissionComplete: _v92,
                onSubmitError: _v0 => _v22(Error(_v0))
              });
          }
        },
        onSubmitError: (_v0, _v1, _v2) => {
          _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onSubmitError",
            step_message: JSON.stringify({
              key: _v0,
              code: _v1,
              message: _v2
            })
          }), _v20(!1);
          let _v3 = (0, _v7.translate)({
            singular: "This card could not be charged. Please try again or use a different card.",
            dictionary: {
              es: {
                singular: "No se pudo cargar esta tarjeta. Intente de nuevo o utilice otra tarjeta."
              },
              "de-DE": {
                singular: "Diese Karte konnte nicht belastet werden. Bitte versuchen Sie es erneut oder verwenden Sie eine andere Karte."
              },
              "fr-FR": {
                singular: "Cette carte n'a pas pu être débitée. Veuillez réessayer ou utiliser une autre carte."
              },
              "ja-JP": {
                singular: "このカードへの請求に失敗しました。もう一度お試しいただくか、別のカードを使用してください。"
              },
              "ko-KR": {
                singular: "카드 결제가 승인되지 않았습니다. 다시 시도하시거나 다른 카드를 사용해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível fazer a cobrança neste cartão. Tente novamente ou use outro cartão."
              },
              "zh-CN": {
                singular: "此卡片无法扣款。请重试或使用其他卡片。"
              }
            }
          });
          _v22(Error(`${_v3} (${_v2})`)), (0, _v15.trackAddPaymentMethodError)(_v67, _v2), _v58(!1, _v2);
        },
        onSubmitVatId: _v0 => {
          _v46 && _v46.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v46.user.id}`,
            hpm_session_id: _v46.xsrft,
            step_name: "HPM onSubmitVatId",
            step_message: _v0
          }), _v24(_v0);
        },
        billingAddress: _v25,
        setBillingAddress: _v26,
        onPostalCodeValidityChange: (_v0, _v1, _v2 = !0) => {
          _v28(_v1), _v30(_v2);
        },
        shouldSyncPostalCode: _v29,
        disableSubmit: !!_v27
      })
    });
  }]);
}