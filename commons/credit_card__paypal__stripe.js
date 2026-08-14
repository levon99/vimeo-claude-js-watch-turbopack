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
    stripeConfig: _v2,
    openInvoice: _v3,
    redirectUrl: _v4 = "/manage/team/billing",
    isVerification: _v5 = !1,
    isVerificationFlow: _v6 = !1,
    pmId: _v7,
    isInline: _v8 = !1,
    addNewPaymentMethodHref: _v9,
    onPostpone: _v10,
    onAddNew: _v11,
    onConfirm: _v12,
    onSuccess: _v13
  }) => {
    let [_v14, _v15] = (0, _v3.useState)(!1),
      [_v16, _v17] = (0, _v3.useState)(!1),
      [_v18, _v19] = (0, _v3.useState)(!1),
      [_v20, _v21] = (0, _v3.useState)(),
      [_v22, _v23] = (0, _v3.useState)(void 0),
      [_v24, _v25] = (0, _v3.useState)(void 0),
      [_v26, _v27] = (0, _v3.useState)(void 0),
      [_v28, _v29] = (0, _v3.useState)(!0),
      [_v30, _v31] = (0, _v3.useState)(void 0),
      [_v32, _v33] = (0, _v3.useState)(_v1),
      [_v34, _v35] = (0, _v3.useState)(void 0),
      [_v36, _v37] = (0, _v3.useState)(null),
      [_v38, _v39] = (0, _v3.useState)(null),
      _v40 = (0, _v3.useRef)(null);
    (0, _v3.useEffect)(() => () => _v40.current?.abort(), []);
    let [_v41, _v42] = (0, _v3.useState)(!0),
      [_v43, _v44] = (0, _v3.useState)(!1),
      _v45 = (0, _v3.useRef)(!1),
      [_v46, _v47] = (0, _v3.useState)(() => {
        {
          let _v0 = new URLSearchParams(window.location.search);
          if (_v0.has("payPalCancel") || _v0.has("ba_token") || _v0.has("token")) return _v16.PaymentFormTypes.TYPE_PAYPAL;
        }
        return _v0;
      }),
      [_v48, _v49] = (0, _v3.useState)(!1),
      _v50 = (0, _v3.useContext)(_v10.ViewerContext),
      _v51 = (0, _v2.useRouter)(),
      _v52 = (0, _v4.useToast)(),
      {
        trackUpdatePaymentMethodPageDisplayed: _v53,
        trackUpdatePaymentMethodSubmitted: _v54
      } = (0, _v8.useBillingTracking)(),
      {
        trackPageDisplayed: _v55,
        trackSubmitted: _v56,
        trackCompleted: _v57,
        trackFailed: _v58
      } = (0, _v9.useCardVerificationTracking)(),
      _v59 = _v5 || _v6 || _v8,
      _v60 = (0, _v3.useRef)(_v46);
    _v60.current = _v46;
    let _v61 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(function () {
      !_v61.current && (_v61.current = !0, _v53({
        paymentFormType: _v18(_v60.current)
      }), (_v5 || _v6) && _v55({
        variant: _v5 ? "verify" : "add_new"
      }));
    }, [_v53, _v55, _v5, _v6]);
    let _v62 = (0, _v3.useCallback)((_v0, _v1) => {
        _v54({
          success: _v0,
          paymentFormType: _v18(_v60.current),
          errorMessage: _v1
        }), _v59 && (_v0 ? _v57() : _v58());
      }, [_v54, _v59, _v57, _v58]),
      _v63 = (0, _v3.useRef)(new WeakSet()),
      _v64 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v63.current.has(_v0) || (_v63.current.add(_v0), _v62(_v1, _v2));
      }, [_v62]),
      [_v65, {
        data: _v66,
        loading: _v67
      }] = (0, _v6.useGetUserSettingsBillingMembershipLazy)();
    (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        await _v65({
          select: ["gracePeriodType", "paymentMethod", "suggestedPaymentMethod"],
          where: {
            userId: Number(_v50?.user?.id)
          }
        });
      };
      _v50 && _v50?.user?.id && !_v67 && !_v66 && _v0();
    }, [_v50, _v67, _v65, _v66]);
    let [_v68, {
        data: _v69,
        loading: _v70
      }] = (0, _v5.useGetMePaymentMethodsLazy)(),
      _v71 = !!_v66?.gracePeriodType;
    (0, _v3.useEffect)(() => {
      !_v50?.user?.id || _v69 || _v70 || _v68({
        select: ["id", "isDefault", "card", "type"]
      });
    }, [_v50, _v69, _v70, _v68]);
    let _v72 = (0, _v3.useRef)(!1),
      [_v73, _v74] = (0, _v3.useState)({});
    (0, _v3.useEffect)(function () {
      if (!_v5 && !_v8 || _v72.current) return;
      let _v0 = _v69?.data;
      if (!_v0) return;
      let _v1 = _v7 ? _v0.find(_v0 => _v0.id === _v7) : void 0,
        _v2 = _v1?.card?.billingAddress;
      _v2?.country && (_v72.current = !0, _v25({
        country: _v2.country,
        postalCode: _v2.postalCode ?? void 0
      }), _v74({
        country: !!_v2.country,
        postalCode: !!_v2.postalCode
      }));
    }, [_v5, _v8, _v7, _v69]);
    let _v75 = void 0 !== _v69,
      _v76 = _v8 && (!_v75 || !!_v73.country),
      _v77 = (0, _v3.useRef)(void 0);
    (0, _v3.useEffect)(function () {
      (_v5 || _v6) && _v20 && _v20 !== _v77.current && (_v77.current = _v20, _v52({
        variant: "warning",
        isClosable: !1,
        title: _v5 ? (0, _v7.translate)({
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
    }, [_v5, _v6, _v20, _v52]), (0, _v3.useEffect)(() => {
      let _v0 = _v69?.data || [],
        _v1 = (0, _v17.getActiveValidPaymentMethod)(_v0);
      if (_v66?.paymentMethod ?? _v66?.suggestedPaymentMethod ?? _v1) {
        _v44(!1), _v45.current || (_v42(!0), _v45.current = !0);
        return;
      }
      _v67 || !_v66 || _v70 || !_v69 || (_v44(!0), _v42(!0), _v45.current = !0);
    }, [_v69, _v70, _v66, _v67]);
    let [_v78, _v79] = (0, _v12.useAddStripePaymentMethod)(),
      [_v80, _v81] = (0, _v12.usePayStripeBalance)(),
      [_v82, _v83] = (0, _v13.useAuthorizePaypalForAddPaymentMethod)(),
      _v84 = _v83.loading;
    (0, _v3.useEffect)(function () {
      _v83.error && (_v21(_v83.error), _v19(!1), _v64(_v83.error, !1, _v83.error.message));
    }, [_v83.error, _v64]), (0, _v3.useEffect)(function () {
      _v51.isReady && !_v48 && (_v51.query.payPalCancel || _v51.query.ba_token || _v51.query.token) && (_v49(!0), _v46 !== _v16.PaymentFormTypes.TYPE_PAYPAL && _v47(_v16.PaymentFormTypes.TYPE_PAYPAL), "true" === _v51.query.payPalCancel && (_v21(Error((0, _v7.translate)({
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
          ..._v51.query
        };
        delete _v0.payPalCancel, delete _v0.ba_token, delete _v0.token, _v51.replace({
          pathname: _v51.pathname,
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, 100)));
    }, [_v51.isReady, _v51.query.payPalCancel, _v51.query.ba_token, _v51.query.token, _v48, _v46, _v51]), (0, _v3.useEffect)(function () {
      _v83.data?.redirectUrl && (_v19(!0), sessionStorage.setItem("addPmState", JSON.stringify({
        vatId: _v22,
        billingAddress: _v24
      })), window.location.href = _v83.data.redirectUrl);
    }, [_v83.data, _v22, _v24]);
    let _v85 = _v2?.balance?.formatted || _v3?.total?.formatted,
      _v86 = !!_v85,
      [_v87, {
        data: _v88,
        loading: _v89,
        error: _v90
      }] = (0, _v14.useSubmitPaymentMethod)(),
      [_v91, {
        data: _v92,
        loading: _v93,
        error: _v94
      }] = (0, _v12.useSubmitStripePayment)();
    (0, _v3.useEffect)(function () {
      if (_v90) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v50?.user?.id),
          description: `On-session invoice payment failed: ${_v90.message}`
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
        _v21(Error(`${_v0} (${_v90.message})`)), _v19(!1), _v64(_v90, !1, _v90.message);
        return;
      }
      _v88 && !_v89 && (_v64(_v88, !0), _v86 ? window.location.href = "/manage/team/billing?invoice_paid=1" : _v8 ? _v13?.() : _v5 ? window.location.href = `${_v4}?card_verified=1` : _v6 ? window.location.href = `${_v4}?card_added=1` : window.location.href = `${_v4}?added_payment_method=1`);
    }, [_v88, _v89, _v90, _v4, _v50, _v86, _v64, _v5, _v6, _v8, _v13]), (0, _v3.useEffect)(function () {
      if (_v94) {
        (0, _v15.trackOrderFailure)({
          userId: Number(_v50?.user?.id),
          description: `Stripe on-session invoice payment failed: ${_v94.message}`
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
        _v21(Error(`${_v0} (${_v94.message})`)), _v19(!1), _v64(_v94, !1, _v94.message);
        return;
      }
      _v92 && !_v93 && (_v64(_v92, !0), window.location.href = "/manage/team/billing?invoice_paid=1");
    }, [_v92, _v93, _v94, _v4, _v50, _v64]), (0, _v3.useEffect)(function () {
      if (_v30) throw _v30;
    }, [_v30]);
    let _v95 = _v0 => {
        if (!_v87 || !_v0) {
          _v19(!1), _v21(Error((0, _v7.translate)({
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
        _v19(!0), _v87(_v0, _v0, _v41, _v22, _v24, _v86, void 0, _v59);
      },
      _v96 = _v0 => {
        if (!_v91) {
          _v19(!1), _v21(Error((0, _v7.translate)({
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
        _v19(!0), _v91(_v0);
      };
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v11.AddPaymentMethod, {
        currency: _v66?.currency,
        balanceAmount: _v85,
        paymentFormType: _v46,
        isVerification: _v5,
        isVerificationFlow: _v6,
        isInline: _v8,
        hideAddressForm: _v76,
        addNewPaymentMethodHref: _v9,
        onPostpone: _v10,
        onAddNew: _v11,
        onConfirm: _v12,
        pmId: _v7,
        lockedAddressFields: _v73,
        formError: _v26 ? Error(_v26) : _v20,
        isDisabled: _v14,
        formLoaded: _v16,
        onZuoraControllerChange: _v39,
        onZuoraStatusChange: _v0 => {
          "ready" !== _v0.status && _v17(!1);
        },
        isLoading: _v18 || _v78 || _v80 || _v84,
        gracePeriodType: _v66?.gracePeriodType,
        canSavePaymentMethod: _v32,
        hideStripeUserConsent: _v1,
        isDefault: _v41,
        onDefault: _v42,
        forceDefaultPaymentCheckbox: _v43,
        onBillingName: _v0 => _v35(_v0),
        onCanSavePaymentMethod: _v33,
        onErrorLoadingForm: (..._v0) => {
          _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "error loading HPM form"
          }), _v31(..._v0);
        },
        onFormLoaded: () => {
          _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onFormLoaded"
          }), _v15(!1), _v17(!0);
        },
        onPaymentTypeChanged: _v0 => {
          _v47(_v0), _v21(void 0), _v27(void 0), _v19(!1);
        },
        onSubmissionComplete: _v0 => {
          if (_v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onSubmissionComplete",
            step_message: JSON.stringify(_v0)
          }), _v0.redirectUrl) {
            sessionStorage.setItem("addPmState", JSON.stringify({
              vatId: _v22,
              billingAddress: _v24
            })), document.location.href = `${_v0.redirectUrl}${_v0.redirectUrl.includes("?") ? "&" : "?"}addPm=1`;
            return;
          }
          if (!0 === _v0.success && _v87 && _v0.refId) {
            _v37(_v0.refId);
            try {
              _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v50.user.id}`,
                hpm_session_id: _v50.xsrft,
                step_name: "HPM onSubmissionComplete success",
                payment_method_id: _v0.refId
              }), _v87(_v0.refId, _v46, _v41, _v22, _v24, _v86, void 0, _v59), (0, _v15.trackAddPaymentMethodSuccess)(_v71);
            } catch (_v0) {
              _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v50.user.id}`,
                hpm_session_id: _v50.xsrft,
                step_name: "HPM onSubmissionComplete error",
                step_message: _v0.message
              }), _v19(!1), _v21(Error((0, _v7.translate)({
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
                userId: Number(_v50?.user?.id),
                description: `Error submitting payment method for refId ${_v0.refId}: ${_v0.message}`
              }), (0, _v15.trackAddPaymentMethodError)(_v71, _v0.message), _v62(!1, _v0.message);
            }
          } else _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onSubmissionComplete error",
            step_message: "Unable to submit payment method"
          }), _v19(!1), _v21(Error("Unable to submit payment method")), (0, _v15.trackAddPaymentMethodError)(_v71, "Unable to submit payment method"), _v62(!1, "Unable to submit payment method");
        },
        onSubmissionStart: () => {
          _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onSubmissionStart"
          }), _v59 && _v56(), _v21(void 0), _v19(!0);
        },
        onSubmit: () => {
          if (_v36 && _v87) {
            _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
              user_id: `${_v50.user.id}`,
              hpm_session_id: _v50.xsrft,
              step_name: "HPM onSubmit"
            }), _v87(_v36, _v46, _v41, _v22, _v24, _v86, void 0, _v59);
            return;
          }
          switch (_v46) {
            case _v16.PaymentFormTypes.TYPE_CREDIT_CARD:
              _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v50.user.id}`,
                hpm_session_id: _v50.xsrft,
                step_name: "Calling Z.Submit"
              }), _v40.current?.abort();
              let _v0 = new AbortController();
              _v40.current = _v0, _v38?.prepare({
                attemptId: crypto.randomUUID()
              }, _v0.signal).catch(() => void 0), _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v50.user.id}`,
                hpm_session_id: _v50.xsrft,
                step_name: "Z.Submit Done"
              });
              break;
            case _v16.PaymentFormTypes.TYPE_PAYPAL:
              _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
                user_id: `${_v50.user.id}`,
                hpm_session_id: _v50.xsrft,
                step_name: "PayPal Authorization Started"
              }), _v19(!0), _v82({
                hasOpenInvoice: !!_v3
              });
              break;
            case _v16.PaymentFormTypes.TYPE_STRIPE:
              _v2?.balance && _v2.clientSecret ? _v81({
                clientSecret: _v2.clientSecret,
                billingName: _v34,
                billingAddress: _v24,
                onSubmissionComplete: _v96,
                onSubmitError: _v0 => _v21(Error(_v0))
              }) : _v79({
                billingName: _v34,
                billingAddress: _v24,
                onSubmissionComplete: _v95,
                onSubmitError: _v0 => _v21(Error(_v0))
              });
          }
        },
        onSubmitError: (_v0, _v1, _v2) => {
          _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onSubmitError",
            step_message: JSON.stringify({
              key: _v0,
              code: _v1,
              message: _v2
            })
          }), _v19(!1);
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
          _v21(Error(`${_v3} (${_v2})`)), (0, _v15.trackAddPaymentMethodError)(_v71, _v2), _v62(!1, _v2);
        },
        onSubmitVatId: _v0 => {
          _v50 && _v50.user && (0, _v15.trackZuoraOrderStep)({
            user_id: `${_v50.user.id}`,
            hpm_session_id: _v50.xsrft,
            step_name: "HPM onSubmitVatId",
            step_message: _v0
          }), _v23(_v0);
        },
        billingAddress: _v24,
        setBillingAddress: _v25,
        onPostalCodeValidityChange: (_v0, _v1, _v2 = !0) => {
          _v27(_v1), _v29(_v2);
        },
        shouldSyncPostalCode: _v28,
        disableSubmit: !!_v26
      })
    });
  }]);
}