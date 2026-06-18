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
    _v22 = _v0.i(0);
  let _v23 = () => {
      let _v0 = (0, _v18.getFormType)(_v22.PaymentFormTypes.TYPE_PAYPAL);
      return (0, _v1.jsxs)(_v12.Flex, {
        align: "center",
        justify: "center",
        direction: "column",
        gap: "sm",
        marginBottom: (0, _v15.rem)(16),
        children: [(0, _v1.jsx)(_v11.Box, {
          as: "img",
          height: (0, _v15.rem)(75),
          src: _v0.imageSource,
          alt: _v0.name
        }), (0, _v1.jsx)(_v9.Alert, {
          maxW: (0, _v15.rem)(468),
          status: "info",
          children: (0, _v1.jsx)(_v10.AlertDescription, {
            children: (0, _v6.translate)({
              singular: "To add your payment method, you will be redirected to PayPal. Once you have completed the process, you will be automatically returned to this page.",
              dictionary: {
                es: {
                  singular: "Para agregar su método de pago, lo redirigiremos a PayPal. Una vez que haya completado el proceso, volverá automáticamente a esta página."
                },
                "de-DE": {
                  singular: "Um Ihre Zahlungsmethode hinzuzufügen, werden Sie zu PayPal weitergeleitet. Sobald Sie den Vorgang abgeschlossen haben, werden Sie automatisch auf diese Seite zurückgeleitet."
                },
                "fr-FR": {
                  singular: "Vous serez redirigé(e) vers PayPal pour ajouter votre méthode de paiement. Une fois le processus terminé, vous serez automatiquement redirigé(e) sur cette page."
                },
                "ja-JP": {
                  singular: "お支払い方法を追加するため、PayPalにリダイレクトされます。プロセスが完了すると、自動的にこのページに戻ります。"
                },
                "ko-KR": {
                  singular: "결제 수단을 추가하기 위해 PayPal로 이동합니다. 과정을 완료하고 나면 자동으로 이 페이지로 돌아옵니다."
                },
                "pt-BR": {
                  singular: "Vamos redirecionar você ao PayPal para adicionar sua forma de pagamento. Depois de concluir o processo, você voltará automaticamente a esta página."
                },
                "zh-CN": {
                  singular: "要添加您的付款方式，您将被重定向到 PayPal。完成此过程后，您将自动返回此页面。"
                }
              }
            })
          })
        })]
      });
    },
    _v24 = _v0 => {
      let {
        canSavePaymentMethod: _v1,
        currency: _v2,
        balanceAmount: _v3,
        paymentFormType: _v4,
        formError: _v5,
        gracePeriodType: _v6,
        isDisabled: _v7,
        isLoading: _v8,
        onBillingName: _v9,
        onErrorLoadingForm: _v10,
        onCanSavePaymentMethod: _v11,
        onFormLoaded: _v12,
        onPaymentTypeChanged: _v13,
        onSubmissionComplete: _v14,
        onSubmissionStart: _v15,
        onSubmit: _v16,
        onSubmitError: _v17,
        onSubmitVatId: _v18,
        billingAddress: _v19,
        setBillingAddress: _v20,
        isDefault: _v21,
        onDefault: _v22,
        forceDefaultPaymentCheckbox: _v23,
        formLoaded: _v24,
        onPostalCodeValidityChange: _v25,
        disableSubmit: _v26
      } = _v0;
      (0, _v3.useEffect)(() => {
        _v8 || (0, _v21.trackAddPaymentMethodPageview)(!!_v6);
      }, [_v6, _v8]);
      let _v27 = (0, _v6.translate)({
        singular: "Add payment method",
        dictionary: {
          es: {
            singular: "Añadir método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter un mode de paiement"
          },
          "ja-JP": {
            singular: "支払方法を追加"
          },
          "ko-KR": {
            singular: "결제 수단 추가"
          },
          "pt-BR": {
            singular: "Adicionar método de pagamento"
          },
          "zh-CN": {
            singular: "添加付款方式"
          }
        }
      });
      _v3 ? _v27 = (0, _v6.translate)({
        singular: "Pay balance",
        dictionary: {
          es: {
            singular: "Pagar el saldo"
          },
          "de-DE": {
            singular: "Restbetrag bezahlen"
          },
          "fr-FR": {
            singular: "Régler le solde"
          },
          "ja-JP": {
            singular: "残高を支払う"
          },
          "ko-KR": {
            singular: "잔액 결제"
          },
          "pt-BR": {
            singular: "Pagar saldo"
          },
          "zh-CN": {
            singular: "支付余额"
          }
        }
      }) : _v6 && (_v27 = (0, _v6.translate)({
        singular: "Update payment method",
        dictionary: {
          es: {
            singular: "Actualizar método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode aktualisieren"
          },
          "fr-FR": {
            singular: "Mettre à jour le mode de paiement"
          },
          "ja-JP": {
            singular: "お支払い方法を更新"
          },
          "ko-KR": {
            singular: "결제 수단 업데이트"
          },
          "pt-BR": {
            singular: "Atualizar método de pagamento"
          },
          "zh-CN": {
            singular: "更新付款方式"
          }
        }
      }));
      let _v28 = _v27;
      _v4 !== _v22.PaymentFormTypes.TYPE_PAYPAL || _v3 || (_v28 = (0, _v6.translate)({
        singular: "Continue to PayPal",
        dictionary: {
          es: {
            singular: "Ir a PayPal"
          },
          "de-DE": {
            singular: "Weiter zu PayPal"
          },
          "fr-FR": {
            singular: "Continuer sur PayPal"
          },
          "ja-JP": {
            singular: "PayPalに進む"
          },
          "ko-KR": {
            singular: "PayPal로 계속"
          },
          "pt-BR": {
            singular: "Continuar com PayPal"
          },
          "zh-CN": {
            singular: "继续前往 PayPal"
          }
        }
      }));
      let _v29 = _v4 === _v22.PaymentFormTypes.TYPE_STRIPE;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v7 && (0, _v1.jsx)(_v12.Flex, {
          align: "center",
          justify: "center",
          height: "535",
          children: (0, _v1.jsx)(_v14.Spinner, {
            size: "xl",
            color: "blue.500"
          })
        }), (0, _v1.jsxs)(_v12.Flex, {
          direction: "column",
          paddingTop: "20",
          margin: "0 auto 90px",
          visibility: _v7 ? "hidden" : "visible",
          alignItems: "center",
          width: {
            base: "90%",
            sm: "520px"
          },
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xl",
            marginBottom: "20",
            children: _v27
          }), _v3 && (0, _v1.jsx)(_v9.Alert, {
            maxW: (0, _v15.rem)(468),
            status: "info",
            marginBottom: "20",
            children: (0, _v1.jsx)(_v10.AlertDescription, {
              children: (0, _v6.translate)({
                singular: "Your account has an outstanding balance of {BALANCE_AMOUNT}. Adding a new payment method will automatically charge this amount.",
                replacements: {
                  BALANCE_AMOUNT: _v3
                },
                dictionary: {
                  es: {
                    singular: "Su cuenta tiene un saldo pendiente de {BALANCE_AMOUNT}. Cuando agregue un nuevo método de pago, se cobrará automáticamente este monto."
                  },
                  "de-DE": {
                    singular: "Ihr Konto weist einen ausstehenden Saldo von {BALANCE_AMOUNT} auf. Beim Hinzufügen einer neuen Zahlungsmethode wird dieser Betrag automatisch abgebucht."
                  },
                  "fr-FR": {
                    singular: "Le solde impayé de votre compte s'élève à {BALANCE_AMOUNT}. L'ajout d'un nouveau mode de paiement entraînera automatiquement le prélèvement de ce montant."
                  },
                  "ja-JP": {
                    singular: "ご利用のアカウントに、未払い残高{BALANCE_AMOUNT}があります。新しい支払い方法を追加すると、この金額が自動的に請求されます。"
                  },
                  "ko-KR": {
                    singular: "계정에 미결제 잔액 {BALANCE_AMOUNT}이(가) 있습니다. 새 결제 수단을 추가하면 해당 금액이 자동으로 청구됩니다."
                  },
                  "pt-BR": {
                    singular: "Sua conta possui um saldo pendente de {BALANCE_AMOUNT}. Adicionar um novo método de pagamento resultará na cobrança automática desse valor."
                  },
                  "zh-CN": {
                    singular: "您的账户有一笔 {BALANCE_AMOUNT} 的未清余额。添加新的付款方式将自动扣除此金额。"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v11.Box, {
            width: "100%",
            marginBottom: "20",
            backgroundColor: "surface",
            borderRadius: "input-lg",
            padding: "xl",
            gap: "md",
            children: [(0, _v1.jsxs)(_v18.PaymentMethodFormContainer, {
              currency: _v2,
              defaultPaymentFormType: _v4,
              formAlert: _v5 ? {
                status: "error",
                message: _v5.message
              } : void 0,
              includeAddressFields: !1,
              isAddingPaymentMethod: !0,
              showPaypalOption: !0,
              onBillingName: _v9,
              onErrorLoadingForm: _v10,
              onFormLoaded: _v12,
              onPaymentTypeChanged: _v13,
              onSubmissionComplete: _v14,
              onSubmissionStart: _v15,
              requireAccountId: !0,
              onSubmitError: _v17,
              children: [_v4 === _v22.PaymentFormTypes.TYPE_PAYPAL ? (0, _v1.jsx)(_v23, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v17.PaymentMethodAddressFormContainer, {
                  onSubmitVatId: _v18,
                  billingAddress: _v19,
                  setBillingAddress: _v20,
                  paymentFormType: _v4,
                  formLoaded: _v24,
                  onPostalCodeValidityChange: _v25
                }), (0, _v1.jsx)(_v19.SetDefaultPaymentMethodContainer, {
                  isChecked: _v21,
                  onChecked: _v22,
                  showCheckbox: !_v29,
                  blockCheckbox: _v23
                })]
              }), _v29 && (0, _v1.jsx)(_v20.UserConsentContainer, {
                onChecked: _v0 => _v11(_v0)
              })]
            }), (0, _v1.jsx)(_v16.AddPaymentMethodButtonContainer, {
              isDisabled: _v7 || !!_v26,
              isLoading: _v8,
              canSave: !_v29 || _v1,
              onSubmit: () => {
                _v16(), (0, _v21.trackAddPaymentMethodAddClick)(!_v6);
              },
              onCancel: () => (0, _v21.trackAddPaymentMethodCancelClick)(!_v6),
              buttonText: _v28
            })]
          })]
        })]
      });
    };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => {
    switch (_v0) {
      case _v22.PaymentFormTypes.TYPE_CREDIT_CARD:
        return "credit_card";
      case _v22.PaymentFormTypes.TYPE_PAYPAL:
        return "paypal";
      case _v22.PaymentFormTypes.TYPE_STRIPE:
        return "stripe";
      default:
        return "unknown";
    }
  };
  _v0.s(["AddPaymentMethodContainer", 0, ({
    paymentFormType: _v0,
    stripeConfig: _v1,
    openInvoice: _v2,
    redirectUrl: _v3 = "/manage/team/billing"
  }) => {
    let [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(),
      [_v12, _v13] = (0, _v3.useState)(void 0),
      [_v14, _v15] = (0, _v3.useState)(void 0),
      [_v16, _v17] = (0, _v3.useState)(void 0),
      [_v18, _v19] = (0, _v3.useState)(void 0),
      [_v20, _v21] = (0, _v3.useState)(!1),
      [_v22, _v23] = (0, _v3.useState)(void 0),
      [_v24, _v25] = (0, _v3.useState)(null),
      [_v26, _v27] = (0, _v3.useState)(!0),
      [_v28, _v29] = (0, _v3.useState)(!1),
      _v30 = (0, _v3.useRef)(!1),
      [_v31, _v32] = (0, _v3.useState)(() => {
        {
          let _v0 = new URLSearchParams(window.location.search);
          if (_v0.has("payPalCancel") || _v0.has("ba_token") || _v0.has("token")) return _v22.PaymentFormTypes.TYPE_PAYPAL;
        }
        return _v0;
      }),
      [_v33, _v34] = (0, _v3.useState)(!1),
      _v35 = (0, _v3.useContext)(_v8.ViewerContext),
      _v36 = (0, _v2.useRouter)(),
      {
        trackUpdatePaymentMethodPageDisplayed: _v37,
        trackUpdatePaymentMethodSubmitted: _v38
      } = (0, _v7.useBillingTracking)(),
      _v39 = (0, _v3.useRef)(_v31);
    _v39.current = _v31;
    let _v40 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(function () {
      _v40.current || (_v40.current = !0, _v37({
        paymentFormType: _v27(_v39.current)
      }));
    }, [_v37]);
    let _v41 = (0, _v3.useCallback)((_v0, _v1) => {
        _v38({
          success: _v0,
          paymentFormType: _v27(_v39.current),
          errorMessage: _v1
        });
      }, [_v38]),
      _v42 = (0, _v3.useRef)(new WeakSet()),
      _v43 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v42.current.has(_v0) || (_v42.current.add(_v0), _v41(_v1, _v2));
      }, [_v41]),
      [_v44, {
        data: _v45,
        loading: _v46
      }] = (0, _v5.useGetUserSettingsBillingMembershipLazy)();
    (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        await _v44({
          select: ["gracePeriodType", "paymentMethod", "suggestedPaymentMethod"],
          where: {
            userId: Number(_v35?.user?.id)
          }
        });
      };
      _v35 && _v35?.user?.id && !_v46 && !_v45 && _v0();
    }, [_v35, _v46, _v44, _v45]);
    let [_v47, {
        data: _v48,
        loading: _v49
      }] = (0, _v4.useGetMePaymentMethodsLazy)(),
      _v50 = !!_v45?.gracePeriodType;
    (0, _v3.useEffect)(() => {
      !_v35?.user?.id || _v48 || _v49 || _v47({
        select: ["id", "isDefault", "card", "type"]
      });
    }, [_v35, _v48, _v49, _v47]), (0, _v3.useEffect)(() => {
      let _v0 = _v48?.data || [],
        _v1 = (0, _v25.getActiveValidPaymentMethod)(_v0);
      if (_v45?.paymentMethod ?? _v45?.suggestedPaymentMethod ?? _v1) {
        _v29(!1), _v30.current || (_v27(!0), _v30.current = !0);
        return;
      }
      _v46 || !_v45 || _v49 || !_v48 || (_v29(!0), _v27(!0), _v30.current = !0);
    }, [_v48, _v49, _v45, _v46]);
    let [_v51, _v52] = (0, _v26.useAddStripePaymentMethod)(),
      [_v53, _v54] = (0, _v26.usePayStripeBalance)(),
      [_v55, _v56] = (0, _v26.useAuthorizePaypalForAddPaymentMethod)(),
      _v57 = _v56.loading;
    (0, _v3.useEffect)(function () {
      _v56.error && (_v11(_v56.error), _v9(!1), _v43(_v56.error, !1, _v56.error.message));
    }, [_v56.error, _v43]), (0, _v3.useEffect)(function () {
      _v36.isReady && !_v33 && (_v36.query.payPalCancel || _v36.query.ba_token || _v36.query.token) && (_v34(!0), _v31 !== _v22.PaymentFormTypes.TYPE_PAYPAL && _v32(_v22.PaymentFormTypes.TYPE_PAYPAL), "true" === _v36.query.payPalCancel && (_v11(Error((0, _v6.translate)({
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
          ..._v36.query
        };
        delete _v0.payPalCancel, delete _v0.ba_token, delete _v0.token, _v36.replace({
          pathname: _v36.pathname,
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, 100)));
    }, [_v36.isReady, _v36.query.payPalCancel, _v36.query.ba_token, _v36.query.token, _v33, _v31, _v36]), (0, _v3.useEffect)(function () {
      _v56.data?.redirectUrl && (_v9(!0), sessionStorage.setItem("addPmState", JSON.stringify({
        vatId: _v12,
        billingAddress: _v14
      })), window.location.href = _v56.data.redirectUrl);
    }, [_v56.data, _v12, _v14]);
    let _v58 = _v1?.balance?.formatted || _v2?.total?.formatted,
      _v59 = !!_v58,
      [_v60, {
        data: _v61,
        loading: _v62,
        error: _v63
      }] = (0, _v26.useSubmitPaymentMethod)(),
      [_v64, {
        data: _v65,
        loading: _v66,
        error: _v67
      }] = (0, _v26.useSubmitStripePayment)();
    (0, _v3.useEffect)(function () {
      if (_v63) {
        (0, _v21.trackOrderFailure)({
          userId: Number(_v35?.user?.id),
          description: `On-session invoice payment failed: ${_v63.message}`
        });
        let _v0 = (0, _v6.translate)({
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
        _v11(Error(`${_v0} (${_v63.message})`)), _v9(!1), _v43(_v63, !1, _v63.message);
        return;
      }
      _v61 && !_v62 && (_v43(_v61, !0), _v59 ? window.location.href = "/manage/team/billing?invoice_paid=1" : window.location.href = `${_v3}?added_payment_method=1`);
    }, [_v61, _v62, _v63, _v3, _v35, _v59, _v43]), (0, _v3.useEffect)(function () {
      if (_v67) {
        (0, _v21.trackOrderFailure)({
          userId: Number(_v35?.user?.id),
          description: `Stripe on-session invoice payment failed: ${_v67.message}`
        });
        let _v0 = (0, _v6.translate)({
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
        _v11(Error(`${_v0} (${_v67.message})`)), _v9(!1), _v43(_v67, !1, _v67.message);
        return;
      }
      _v65 && !_v66 && (_v43(_v65, !0), window.location.href = "/manage/team/billing?invoice_paid=1");
    }, [_v65, _v66, _v67, _v3, _v35, _v43]), (0, _v3.useEffect)(function () {
      if (_v18) throw _v18;
    }, [_v18]);
    let _v68 = _v0 => {
        if (!_v60 || !_v0) {
          _v9(!1), _v11(Error((0, _v6.translate)({
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
        _v9(!0), _v60(_v0, _v0, _v26, _v12, _v14, _v59);
      },
      _v69 = _v0 => {
        if (!_v64) {
          _v9(!1), _v11(Error((0, _v6.translate)({
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
        _v9(!0), _v64(_v0);
      };
    return (0, _v1.jsx)(_v24, {
      currency: _v45?.currency,
      balanceAmount: _v58,
      paymentFormType: _v31,
      formError: _v16 ? Error(_v16) : _v10,
      isDisabled: _v4,
      formLoaded: _v6,
      isLoading: _v8 || _v51 || _v53 || _v57,
      gracePeriodType: _v45?.gracePeriodType,
      canSavePaymentMethod: _v20,
      isDefault: _v26,
      onDefault: _v27,
      forceDefaultPaymentCheckbox: _v28,
      onBillingName: _v0 => _v23(_v0),
      onCanSavePaymentMethod: _v21,
      onErrorLoadingForm: (..._v0) => {
        _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "error loading HPM form"
        }), _v19(..._v0);
      },
      onFormLoaded: () => {
        _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onFormLoaded"
        }), _v5(!1), _v7(!0);
      },
      onPaymentTypeChanged: _v0 => {
        _v32(_v0), _v11(void 0), _v17(void 0), _v9(!1);
      },
      onSubmissionComplete: _v0 => {
        if (_v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onSubmissionComplete",
          step_message: JSON.stringify(_v0)
        }), _v0.redirectUrl) {
          sessionStorage.setItem("addPmState", JSON.stringify({
            vatId: _v12,
            billingAddress: _v14
          })), document.location.href = `${_v0.redirectUrl}${_v0.redirectUrl.includes("?") ? "&" : "?"}addPm=1`;
          return;
        }
        if (!0 === _v0.success && _v60 && _v0.refId) {
          _v25(_v0.refId);
          try {
            _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
              user_id: `${_v35.user.id}`,
              hpm_session_id: _v35.xsrft,
              step_name: "HPM onSubmissionComplete success",
              payment_method_id: _v0.refId
            }), _v60(_v0.refId, _v31, _v26, _v12, _v14, _v59), (0, _v21.trackAddPaymentMethodSuccess)(_v50);
          } catch (_v0) {
            _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
              user_id: `${_v35.user.id}`,
              hpm_session_id: _v35.xsrft,
              step_name: "HPM onSubmissionComplete error",
              step_message: _v0.message
            }), _v9(!1), _v11(Error((0, _v6.translate)({
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
            }))), (0, _v21.trackOrderFailure)({
              userId: Number(_v35?.user?.id),
              description: `Error submitting payment method for refId ${_v0.refId}: ${_v0.message}`
            }), (0, _v21.trackAddPaymentMethodError)(_v50, _v0.message), _v41(!1, _v0.message);
          }
        } else _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onSubmissionComplete error",
          step_message: "Unable to submit payment method"
        }), _v9(!1), _v11(Error("Unable to submit payment method")), (0, _v21.trackAddPaymentMethodError)(_v50, "Unable to submit payment method"), _v41(!1, "Unable to submit payment method");
      },
      onSubmissionStart: () => {
        _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onSubmissionStart"
        }), _v11(void 0), _v9(!0);
      },
      onSubmit: () => {
        if (_v24 && _v60) {
          _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
            user_id: `${_v35.user.id}`,
            hpm_session_id: _v35.xsrft,
            step_name: "HPM onSubmit"
          }), _v60(_v24, _v31, _v26, _v12, _v14, _v59);
          return;
        }
        switch (_v31) {
          case _v22.PaymentFormTypes.TYPE_CREDIT_CARD:
            _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
              user_id: `${_v35.user.id}`,
              hpm_session_id: _v35.xsrft,
              step_name: "Calling Z.Submit"
            }), window.Z?.submit(), _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
              user_id: `${_v35.user.id}`,
              hpm_session_id: _v35.xsrft,
              step_name: "Z.Submit Done"
            });
            break;
          case _v22.PaymentFormTypes.TYPE_PAYPAL:
            _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
              user_id: `${_v35.user.id}`,
              hpm_session_id: _v35.xsrft,
              step_name: "PayPal Authorization Started"
            }), _v9(!0), _v55({
              hasOpenInvoice: !!_v2
            });
            break;
          case _v22.PaymentFormTypes.TYPE_STRIPE:
            _v1?.balance && _v1.clientSecret ? _v54({
              clientSecret: _v1.clientSecret,
              billingName: _v22,
              billingAddress: _v14,
              onSubmissionComplete: _v69,
              onSubmitError: _v0 => _v11(Error(_v0))
            }) : _v52({
              billingName: _v22,
              billingAddress: _v14,
              onSubmissionComplete: _v68,
              onSubmitError: _v0 => _v11(Error(_v0))
            });
        }
      },
      onSubmitError: (_v0, _v1, _v2) => {
        _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onSubmitError",
          step_message: JSON.stringify({
            key: _v0,
            code: _v1,
            message: _v2
          })
        }), _v9(!1);
        let _v3 = (0, _v6.translate)({
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
        _v11(Error(`${_v3} (${_v2})`)), (0, _v21.trackAddPaymentMethodError)(_v50, _v2), _v41(!1, _v2);
      },
      onSubmitVatId: _v0 => {
        _v35 && _v35.user && (0, _v21.trackZuoraOrderStep)({
          user_id: `${_v35.user.id}`,
          hpm_session_id: _v35.xsrft,
          step_name: "HPM onSubmitVatId",
          step_message: _v0
        }), _v13(_v0);
      },
      billingAddress: _v14,
      setBillingAddress: _v15,
      onPostalCodeValidityChange: (_v0, _v1) => {
        _v17(_v1);
      },
      disableSubmit: !!_v16
    });
  }], 0);
}