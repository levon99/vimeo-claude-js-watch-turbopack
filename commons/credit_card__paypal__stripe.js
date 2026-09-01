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
    _v17 = _v0.i(0);
  let _v18 = _v0 => {
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
    let [_v42, _v43] = (0, _v3.useState)(!0),
      [_v44, _v45] = (0, _v3.useState)(!1),
      _v46 = (0, _v3.useRef)(!1),
      [_v47, _v48] = (0, _v3.useState)(() => {
        {
          let _v0 = new URLSearchParams(window.location.search);
          if (_v0.has("payPalCancel") || _v0.has("ba_token") || _v0.has("token")) return _v16.PaymentFormTypes.TYPE_PAYPAL;
        }
        return _v0;
      }),
      [_v49, _v50] = (0, _v3.useState)(!1),
      _v51 = (0, _v3.useContext)(_v10.ViewerContext),
      _v52 = (0, _v2.useRouter)(),
      _v53 = (0, _v4.useToast)(),
      {
        trackUpdatePaymentMethodPageDisplayed: _v54,
        trackUpdatePaymentMethodSubmitted: _v55
      } = (0, _v8.useBillingTracking)(),
      {
        trackPageDisplayed: _v56,
        trackSubmitted: _v57,
        trackCompleted: _v58,
        trackFailed: _v59
      } = (0, _v9.useCardVerificationTracking)(),
      _v60 = _v6 || _v7 || _v9,
      _v61 = (0, _v3.useRef)(_v47);
    _v61.current = _v47;
    let _v62 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(function () {
      !_v62.current && (_v62.current = !0, _v54({
        paymentFormType: _v18(_v61.current)
      }), (_v6 || _v7) && _v56({
        variant: _v6 ? "verify" : "add_new"
      }));
    }, [_v54, _v56, _v6, _v7]);
    let _v63 = (0, _v3.useCallback)((_v0, _v1) => {
        _v55({
          success: _v0,
          paymentFormType: _v18(_v61.current),
          errorMessage: _v1
        }), _v60 && (_v0 ? _v58() : _v59());
      }, [_v55, _v60, _v58, _v59]),
      _v64 = (0, _v3.useRef)(new WeakSet()),
      _v65 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v64.current.has(_v0) || (_v64.current.add(_v0), _v63(_v1, _v2));
      }, [_v63]),
      [_v66, {
        data: _v67,
        loading: _v68
      }] = (0, _v6.useGetUserSettingsBillingMembershipLazy)();
    (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        await _v66({
          select: ["gracePeriodType", "paymentMethod", "suggestedPaymentMethod"],
          where: {
            userId: Number(_v51?.user?.id)
          }
        });
      };
      _v51 && _v51?.user?.id && !_v68 && !_v67 && _v0();
    }, [_v51, _v68, _v66, _v67]);
    let [_v69, {
        data: _v70,
        loading: _v71
      }] = (0, _v5.useGetMePaymentMethodsLazy)(),
      _v72 = !!_v67?.gracePeriodType;
    (0, _v3.useEffect)(() => {
      !_v51?.user?.id || _v70 || _v71 || _v69({
        select: ["id", "isDefault", "card", "type"]
      });
    }, [_v51, _v70, _v71, _v69]);
    let _v73 = (0, _v3.useRef)(!1),
      [_v74, _v75] = (0, _v3.useState)({});
    (0, _v3.useEffect)(function () {
      if (!_v6 && !_v9 || _v73.current) return;
      let _v0 = _v70?.data;
      if (!_v0) return;
      let _v1 = _v8 ? _v0.find(_v0 => _v0.id === _v8) : void 0,
        _v2 = _v1?.card?.billingAddress;
      _v2?.country && (_v73.current = !0, _v26({
        country: _v2.country,
        postalCode: _v2.postalCode ?? void 0
      }), _v75({
        country: !!_v2.country,
        postalCode: !!_v2.postalCode
      }));
    }, [_v6, _v9, _v8, _v70]);
    let _v76 = void 0 !== _v70,
      _v77 = _v9 && (!_v76 || !!_v74.country),
      _v78 = (0, _v3.useRef)(void 0);
    (0, _v3.useEffect)(function () {
      (_v6 || _v7) && _v21 && _v21 !== _v78.current && (_v78.current = _v21, _v53({
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
    }, [_v6, _v7, _v21, _v53]), (0, _v3.useEffect)(() => {
      let _v0 = _v70?.data || [],
        _v1 = (0, _v17.getActiveValidPaymentMethod)(_v0);
      if (_v67?.paymentMethod ?? _v67?.suggestedPaymentMethod ?? _v1) {
        _v45(!1), _v46.current || (_v43(!0), _v46.current = !0);
        return;
      }
      _v68 || !_v67 || _v71 || !_v70 || (_v45(!0), _v43(!0), _v46.current = !0);
    }, [_v70, _v71, _v67, _v68]);
    let [_v79, _v80] = (0, _v12.useAddStripePaymentMethod)(),
      [_v81, _v82] = (0, _v12.usePayStripeBalance)(),
      [_v83, _v84] = (0, _v13.useAuthorizePaypalForAddPaymentMethod)(),
      _v85 = _v84.loading;
    (0, _v3.useEffect)(function () {
      _v84.error && (_v22(_v84.error), _v20(!1), _v65(_v84.error, !1, _v84.error.message));
    }, [_v84.error, _v65]), (0, _v3.useEffect)(function () {
      _v52.isReady && !_v49 && (_v52.query.payPalCancel || _v52.query.ba_token || _v52.query.token) && (_v50(!0), _v47 !== _v16.PaymentFormTypes.TYPE_PAYPAL && _v48(_v16.PaymentFormTypes.TYPE_PAYPAL), "true" === _v52.query.payPalCancel && (_v22(Error((0, _v7.translate)({
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
          ..._v52.query
        };
        delete _v0.payPalCancel, delete _v0.ba_token, delete _v0.token, _v52.replace({
          pathname: _v52.pathname,
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, 100)));
    }, [_v52.isReady, _v52.query.payPalCancel, _v52.query.ba_token, _v52.query.token, _v49, _v47, _v52]), (0, _v3.useEffect)(function () {
      _v84.data?.redirectUrl && (_v20(!0), sessionStorage.setItem("addPmState", JSON.stringify({
        vatId: _v23,
        billingAddress: _v25
      })), window.location.href = _v84.data.redirectUrl);
    }, [_v84.data, _v23, _v25]);
    let _v86 = _v3?.balance?.formatted || _v4?.total?.formatted,
      _v87 = !!_v86,
      [_v88, {
        data: _v89,
        loading: _v90,
        error: _v91
      }] = (0, _v14.useSubmitPaymentMethod)(),
      [_v92, {
        data: _v93,
        loading: _v94,
        error: _v95
      }] = (0, _v12.useSubmitStripePayment)(),
      _v96 = (0, _v3.useCallback)(() => {
        _v9 ? _v14?.() : _v6 ? window.location.href = `${_v5}?card_verified=1` : _v7 ? window.location.href = `${_v5}?card_added=1` : window.location.href = `${_v5}?added_payment_method=1`;
      }, [_v9, _v14, _v6, _v7, _v5]);
    (0, _v3.useEffect)(function () {
      if (_v91) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v51?.user?.id),
          description: `On-session invoice payment failed: ${_v91.message}`
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
        _v22(Error(`${_v0} (${_v91.message})`)), _v20(!1), _v65(_v91, !1, _v91.message);
        return;
      }
      _v89 && !_v90 && (_v65(_v89, !0), _v87 ? window.location.href = "/manage/team/billing?invoice_paid=1" : _v96());
    }, [_v89, _v90, _v91, _v51, _v87, _v65, _v96]), (0, _v3.useEffect)(function () {
      if (_v95) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v51?.user?.id),
          description: `Stripe on-session invoice payment failed: ${_v95.message}`
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
        _v22(Error(`${_v0} (${_v95.message})`)), _v20(!1), _v65(_v95, !1, _v95.message);
        return;
      }
      _v93 && !_v94 && (_v65(_v93, !0), window.location.href = "/manage/team/billing?invoice_paid=1");
    }, [_v93, _v94, _v95, _v5, _v51, _v65]), (0, _v3.useEffect)(function () {
      if (_v31) throw _v31;
    }, [_v31]);
    let _v97 = _v0 => {
        if (!_v88 || !_v0) {
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
        _v20(!0), _v88(_v0, _v0, _v42, _v23, _v25, _v87, void 0, _v60);
      },
      _v98 = _v0 => {
        if (!_v92) {
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
        _v20(!0), _v92(_v0);
      };
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v11.AddPaymentMethod, {
        currency: _v67?.currency,
        balanceAmount: _v86,
        paymentFormType: _v47,
        isVerification: _v6,
        isVerificationFlow: _v7,
        isInline: _v9,
        hideAddressForm: _v77,
        addNewPaymentMethodHref: _v10,
        onPostpone: _v11,
        onAddNew: _v12,
        onConfirm: _v13,
        pmId: _v8,
        lockedAddressFields: _v74,
        formError: _v27 ? Error(_v27) : _v21,
        isDisabled: _v15,
        formLoaded: _v17,
        onZuoraControllerChange: _v40,
        onZuoraStatusChange: _v0 => {
          "ready" !== _v0.status && _v18(!1), "preparing" === _v0.status && _v20(!0);
        },
        isLoading: _v19 || _v79 || _v81 || _v85,
        gracePeriodType: _v67?.gracePeriodType,
        canSavePaymentMethod: _v33,
        hideStripeUserConsent: !_v2,
        forceStripeCheckout: _v1,
        isIndianUser: _v2,
        isDefault: _v42,
        onDefault: _v43,
        forceDefaultPaymentCheckbox: _v44,
        onBillingName: _v0 => _v36(_v0),
        onCanSavePaymentMethod: _v34,
        onErrorLoadingForm: (..._v0) => {
          _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
            step_name: "error loading HPM form"
          }), _v32(..._v0);
        },
        onFormLoaded: () => {
          _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
            step_name: "HPM onFormLoaded"
          }), _v16(!1), _v18(!0);
        },
        onPaymentTypeChanged: _v0 => {
          _v48(_v0), _v22(void 0), _v28(void 0), _v20(!1);
        },
        onSubmissionComplete: _v0 => {
          if (_v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
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
            if (_v0.success) (0, _v15.trackAddPaymentMethodSuccess)(_v72), _v63(!0), _v96();else {
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
              _v22(Error(_v0)), (0, _v15.trackAddPaymentMethodError)(_v72, _v0), _v63(!1, _v0);
            }
          } else if ("zuora_hpm" === _v0.kind && _v0.success && _v88 && _v0.refId) {
            _v38(_v0.refId);
            try {
              _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v51.user.id}`,
                hpm_session_id: _v51.xsrft,
                step_name: "HPM onSubmissionComplete success",
                payment_method_id: _v0.refId
              }), _v88(_v0.refId, _v47, _v42, _v23, _v25, _v87, void 0, _v60), (0, _v15.trackAddPaymentMethodSuccess)(_v72);
            } catch (_v0) {
              _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v51.user.id}`,
                hpm_session_id: _v51.xsrft,
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
                userId: Number(_v51?.user?.id),
                description: `Error submitting payment method for refId ${_v0.refId}: ${_v0.message}`
              }), (0, _v15.trackAddPaymentMethodError)(_v72, _v0.message), _v63(!1, _v0.message);
            }
          } else _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
            step_name: "HPM onSubmissionComplete error",
            step_message: "Unable to submit payment method"
          }), _v20(!1), _v22(Error("Unable to submit payment method")), (0, _v15.trackAddPaymentMethodError)(_v72, "Unable to submit payment method"), _v63(!1, "Unable to submit payment method");
        },
        onSubmissionStart: () => {
          _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
            step_name: "HPM onSubmissionStart"
          }), _v60 && _v57(), _v22(void 0), _v20(!0);
        },
        onSubmit: () => {
          if (_v37 && _v88) {
            _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
              user_id: `${_v51.user.id}`,
              hpm_session_id: _v51.xsrft,
              step_name: "HPM onSubmit"
            }), _v88(_v37, _v47, _v42, _v23, _v25, _v87, void 0, _v60);
            return;
          }
          switch (_v47) {
            case _v16.PaymentFormTypes.TYPE_CREDIT_CARD:
              _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v51.user.id}`,
                hpm_session_id: _v51.xsrft,
                step_name: "Calling Z.Submit"
              }), _v41.current?.abort();
              let _v0 = new AbortController();
              _v41.current = _v0, _v39?.prepare({
                attemptId: crypto.randomUUID()
              }, _v0.signal).catch(() => void 0), _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v51.user.id}`,
                hpm_session_id: _v51.xsrft,
                step_name: "Z.Submit Done"
              });
              break;
            case _v16.PaymentFormTypes.TYPE_PAYPAL:
              _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v51.user.id}`,
                hpm_session_id: _v51.xsrft,
                step_name: "PayPal Authorization Started"
              }), _v20(!0), _v83({
                hasOpenInvoice: !!_v4
              });
              break;
            case _v16.PaymentFormTypes.TYPE_STRIPE:
              _v3?.balance && _v3.clientSecret ? _v82({
                clientSecret: _v3.clientSecret,
                billingName: _v35,
                billingAddress: _v25,
                onSubmissionComplete: _v98,
                onSubmitError: _v0 => _v22(Error(_v0))
              }) : _v80({
                billingName: _v35,
                billingAddress: _v25,
                onSubmissionComplete: _v97,
                onSubmitError: _v0 => _v22(Error(_v0))
              });
          }
        },
        onSubmitError: (_v0, _v1, _v2) => {
          _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
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
          _v22(Error(`${_v3} (${_v2})`)), (0, _v15.trackAddPaymentMethodError)(_v72, _v2), _v63(!1, _v2);
        },
        onSubmitVatId: _v0 => {
          _v51 && _v51.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v51.user.id}`,
            hpm_session_id: _v51.xsrft,
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