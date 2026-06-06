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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = () => {
      let _v0 = (0, _v19.getFormType)(_v23.PaymentFormTypes.TYPE_PAYPAL);
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
    _v25 = _v0 => {
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
        formLoaded: _v24
      } = _v0;
      (0, _v3.useEffect)(() => {
        _v8 || (0, _v22.trackAddPaymentMethodPageview)(!!_v6);
      }, [_v6, _v8]);
      let {
          assignment: _v25
        } = (0, _v16.useCuidEppoAssignment)({
          flagKey: "grace-period-optimization",
          assignmentType: "BOOLEAN",
          defaultAssignment: !1,
          disabled: !_v6
        }),
        _v26 = (0, _v6.translate)({
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
      _v3 ? _v26 = (0, _v6.translate)({
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
      }) : _v25 && (_v26 = (0, _v6.translate)({
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
      let _v27 = _v26;
      _v4 !== _v23.PaymentFormTypes.TYPE_PAYPAL || _v3 || (_v27 = (0, _v6.translate)({
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
      let _v28 = _v4 === _v23.PaymentFormTypes.TYPE_STRIPE;
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
            children: _v26
          }), _v6 && !_v3 && !_v25 && (0, _v1.jsx)(_v9.Alert, {
            maxW: (0, _v15.rem)(468),
            status: "info",
            children: (0, _v1.jsx)(_v10.AlertDescription, {
              children: (0, _v6.translate)({
                singular: "Once you add your new payment method, we'll automatically retry your payment and renew your plan. This will prevent your account from being downgraded to a free plan.",
                dictionary: {
                  es: {
                    singular: "Una vez que agregue su nuevo método de pago, intentaremos volver a procesar su pago y renovar su plan automáticamente para evitar que su cuenta baje de categoría a un plan gratuito."
                  },
                  "de-DE": {
                    singular: "Sobald Sie Ihre neue Zahlungsmethode hinzugefügt haben, werden wir automatisch versuchen, die Zahlung erneut abzubuchen und Ihren Plan zu verlängern. Dies wird verhindern, dass Ihr Konto auf einen kostenlosen Tarif herabgestuft wird."
                  },
                  "fr-FR": {
                    singular: "Une fois que vous aurez ajouté votre nouveau mode de paiement, nous réessayerons automatiquement de traiter votre paiement et renouvellerons votre abonnement. Cela empêchera votre compte d'être rétrogradé à un abonnement gratuit."
                  },
                  "ja-JP": {
                    singular: "新しいお支払い方法を追加すると、自動的にお支払いが再試行され、プランが更新されます。これにより、アカウントがFreeプランにダウングレードされることがなくなります。"
                  },
                  "ko-KR": {
                    singular: "새로운 결제 수단을 추가하면 자동으로 결제가 이루어지고 요금제가 갱신됩니다. 이렇게 하면 계정이 무료 요금제로 다운그레이드되는 것을 방지할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Depois que você adicionar seu novo método de pagamento, automaticamente tentaremos processar o pagamento novamente e renovar seu plano. Isso evitará que sua conta passe para o plano Free."
                  },
                  "zh-CN": {
                    singular: "添加新的支付方式后，我们将自动重新尝试处理您的付款并续订您的套餐。这将防止您的账户降级为免费套餐。"
                  }
                }
              })
            })
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
            children: [(0, _v1.jsxs)(_v19.PaymentMethodFormContainer, {
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
              children: [_v4 === _v23.PaymentFormTypes.TYPE_PAYPAL ? (0, _v1.jsx)(_v24, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v18.PaymentMethodAddressFormContainer, {
                  onSubmitVatId: _v18,
                  billingAddress: _v19,
                  setBillingAddress: _v20,
                  paymentFormType: _v4,
                  formLoaded: _v24
                }), (0, _v1.jsx)(_v20.SetDefaultPaymentMethodContainer, {
                  isChecked: _v21,
                  onChecked: _v22,
                  showCheckbox: !_v28,
                  blockCheckbox: _v23
                })]
              }), _v28 && (0, _v1.jsx)(_v21.UserConsentContainer, {
                onChecked: _v0 => _v11(_v0)
              })]
            }), (0, _v1.jsx)(_v17.AddPaymentMethodButtonContainer, {
              isDisabled: _v7,
              isLoading: _v8,
              canSave: !_v28 || _v1,
              onSubmit: () => {
                _v16(), (0, _v22.trackAddPaymentMethodAddClick)(!_v6);
              },
              onCancel: () => (0, _v22.trackAddPaymentMethodCancelClick)(!_v6),
              buttonText: _v27
            })]
          })]
        })]
      });
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = _v0 => {
    switch (_v0) {
      case _v23.PaymentFormTypes.TYPE_CREDIT_CARD:
        return "credit_card";
      case _v23.PaymentFormTypes.TYPE_PAYPAL:
        return "paypal";
      case _v23.PaymentFormTypes.TYPE_STRIPE:
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
      [_v18, _v19] = (0, _v3.useState)(!1),
      [_v20, _v21] = (0, _v3.useState)(void 0),
      [_v22, _v23] = (0, _v3.useState)(null),
      [_v24, _v25] = (0, _v3.useState)(!0),
      [_v26, _v27] = (0, _v3.useState)(!1),
      _v28 = (0, _v3.useRef)(!1),
      [_v29, _v30] = (0, _v3.useState)(() => {
        {
          let _v0 = new URLSearchParams(window.location.search);
          if (_v0.has("payPalCancel") || _v0.has("ba_token") || _v0.has("token")) return _v23.PaymentFormTypes.TYPE_PAYPAL;
        }
        return _v0;
      }),
      [_v31, _v32] = (0, _v3.useState)(!1),
      _v33 = (0, _v3.useContext)(_v8.ViewerContext),
      _v34 = (0, _v2.useRouter)(),
      {
        trackUpdatePaymentMethodPageDisplayed: _v35,
        trackUpdatePaymentMethodSubmitted: _v36
      } = (0, _v7.useBillingTracking)(),
      _v37 = (0, _v3.useRef)(_v29);
    _v37.current = _v29;
    let _v38 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(function () {
      _v38.current || (_v38.current = !0, _v35({
        paymentFormType: _v28(_v37.current)
      }));
    }, [_v35]);
    let _v39 = (0, _v3.useCallback)((_v0, _v1) => {
        _v36({
          success: _v0,
          paymentFormType: _v28(_v37.current),
          errorMessage: _v1
        });
      }, [_v36]),
      _v40 = (0, _v3.useRef)(new WeakSet()),
      _v41 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v40.current.has(_v0) || (_v40.current.add(_v0), _v39(_v1, _v2));
      }, [_v39]),
      [_v42, {
        data: _v43,
        loading: _v44
      }] = (0, _v5.useGetUserSettingsBillingMembershipLazy)();
    (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        await _v42({
          select: ["gracePeriodType", "paymentMethod", "suggestedPaymentMethod"],
          where: {
            userId: Number(_v33?.user?.id)
          }
        });
      };
      _v33 && _v33?.user?.id && !_v44 && !_v43 && _v0();
    }, [_v33, _v44, _v42, _v43]);
    let [_v45, {
        data: _v46,
        loading: _v47
      }] = (0, _v4.useGetMePaymentMethodsLazy)(),
      _v48 = !!_v43?.gracePeriodType;
    (0, _v3.useEffect)(() => {
      !_v33?.user?.id || _v46 || _v47 || _v45({
        select: ["id", "isDefault", "card", "type"]
      });
    }, [_v33, _v46, _v47, _v45]), (0, _v3.useEffect)(() => {
      let _v0 = _v46?.data || [],
        _v1 = (0, _v26.getActiveValidPaymentMethod)(_v0);
      if (_v43?.paymentMethod ?? _v43?.suggestedPaymentMethod ?? _v1) {
        _v27(!1), _v28.current || (_v25(!0), _v28.current = !0);
        return;
      }
      _v44 || !_v43 || _v47 || !_v46 || (_v27(!0), _v25(!0), _v28.current = !0);
    }, [_v46, _v47, _v43, _v44]);
    let [_v49, _v50] = (0, _v27.useAddStripePaymentMethod)(),
      [_v51, _v52] = (0, _v27.usePayStripeBalance)(),
      [_v53, _v54] = (0, _v27.useAuthorizePaypalForAddPaymentMethod)(),
      _v55 = _v54.loading;
    (0, _v3.useEffect)(function () {
      _v54.error && (_v11(_v54.error), _v9(!1), _v41(_v54.error, !1, _v54.error.message));
    }, [_v54.error, _v41]), (0, _v3.useEffect)(function () {
      _v34.isReady && !_v31 && (_v34.query.payPalCancel || _v34.query.ba_token || _v34.query.token) && (_v32(!0), _v29 !== _v23.PaymentFormTypes.TYPE_PAYPAL && _v30(_v23.PaymentFormTypes.TYPE_PAYPAL), "true" === _v34.query.payPalCancel && (_v11(Error((0, _v6.translate)({
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
          ..._v34.query
        };
        delete _v0.payPalCancel, delete _v0.ba_token, delete _v0.token, _v34.replace({
          pathname: _v34.pathname,
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, 100)));
    }, [_v34.isReady, _v34.query.payPalCancel, _v34.query.ba_token, _v34.query.token, _v31, _v29, _v34]), (0, _v3.useEffect)(function () {
      _v54.data?.redirectUrl && (_v9(!0), sessionStorage.setItem("addPmState", JSON.stringify({
        vatId: _v12,
        billingAddress: _v14
      })), window.location.href = _v54.data.redirectUrl);
    }, [_v54.data, _v12, _v14]);
    let _v56 = _v1?.balance?.formatted || _v2?.total?.formatted,
      _v57 = !!_v56,
      [_v58, {
        data: _v59,
        loading: _v60,
        error: _v61
      }] = (0, _v27.useSubmitPaymentMethod)(),
      [_v62, {
        data: _v63,
        loading: _v64,
        error: _v65
      }] = (0, _v27.useSubmitStripePayment)();
    (0, _v3.useEffect)(function () {
      if (_v61) {
        (0, _v22.trackOrderFailure)({
          userId: Number(_v33?.user?.id),
          description: `On-session invoice payment failed: ${_v61.message}`
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
        _v11(Error(`${_v0} (${_v61.message})`)), _v9(!1), _v41(_v61, !1, _v61.message);
        return;
      }
      _v59 && !_v60 && (_v41(_v59, !0), _v57 ? window.location.href = "/manage/team/billing?invoice_paid=1" : window.location.href = `${_v3}?added_payment_method=1`);
    }, [_v59, _v60, _v61, _v3, _v33, _v57, _v41]), (0, _v3.useEffect)(function () {
      if (_v65) {
        (0, _v22.trackOrderFailure)({
          userId: Number(_v33?.user?.id),
          description: `Stripe on-session invoice payment failed: ${_v65.message}`
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
        _v11(Error(`${_v0} (${_v65.message})`)), _v9(!1), _v41(_v65, !1, _v65.message);
        return;
      }
      _v63 && !_v64 && (_v41(_v63, !0), window.location.href = "/manage/team/billing?invoice_paid=1");
    }, [_v63, _v64, _v65, _v3, _v33, _v41]), (0, _v3.useEffect)(function () {
      if (_v16) throw _v16;
    }, [_v16]);
    let _v66 = _v0 => {
        if (!_v58 || !_v0) {
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
        _v9(!0), _v58(_v0, _v0, _v24, _v12, _v14, _v57);
      },
      _v67 = _v0 => {
        if (!_v62) {
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
        _v9(!0), _v62(_v0);
      };
    return (0, _v1.jsx)(_v25, {
      currency: _v43?.currency,
      balanceAmount: _v56,
      paymentFormType: _v29,
      formError: _v10,
      isDisabled: _v4,
      formLoaded: _v6,
      isLoading: _v8 || _v49 || _v51 || _v55,
      gracePeriodType: _v43?.gracePeriodType,
      canSavePaymentMethod: _v18,
      isDefault: _v24,
      onDefault: _v25,
      forceDefaultPaymentCheckbox: _v26,
      onBillingName: _v0 => _v21(_v0),
      onCanSavePaymentMethod: _v19,
      onErrorLoadingForm: (..._v0) => {
        _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "error loading HPM form"
        }), _v17(..._v0);
      },
      onFormLoaded: () => {
        _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "HPM onFormLoaded"
        }), _v5(!1), _v7(!0);
      },
      onPaymentTypeChanged: _v0 => {
        _v30(_v0), _v11(void 0), _v9(!1);
      },
      onSubmissionComplete: _v0 => {
        if (_v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "HPM onSubmissionComplete",
          step_message: JSON.stringify(_v0)
        }), _v0.redirectUrl) {
          sessionStorage.setItem("addPmState", JSON.stringify({
            vatId: _v12,
            billingAddress: _v14
          })), document.location.href = `${_v0.redirectUrl}${_v0.redirectUrl.includes("?") ? "&" : "?"}addPm=1`;
          return;
        }
        if (!0 === _v0.success && _v58 && _v0.refId) {
          _v23(_v0.refId);
          try {
            _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
              user_id: `${_v33.user.id}`,
              hpm_session_id: _v33.xsrft,
              step_name: "HPM onSubmissionComplete success",
              payment_method_id: _v0.refId
            }), _v58(_v0.refId, _v29, _v24, _v12, _v14, _v57), (0, _v22.trackAddPaymentMethodSuccess)(_v48);
          } catch (_v0) {
            _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
              user_id: `${_v33.user.id}`,
              hpm_session_id: _v33.xsrft,
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
            }))), (0, _v22.trackOrderFailure)({
              userId: Number(_v33?.user?.id),
              description: `Error submitting payment method for refId ${_v0.refId}: ${_v0.message}`
            }), (0, _v22.trackAddPaymentMethodError)(_v48, _v0.message), _v39(!1, _v0.message);
          }
        } else _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "HPM onSubmissionComplete error",
          step_message: "Unable to submit payment method"
        }), _v9(!1), _v11(Error("Unable to submit payment method")), (0, _v22.trackAddPaymentMethodError)(_v48, "Unable to submit payment method"), _v39(!1, "Unable to submit payment method");
      },
      onSubmissionStart: () => {
        _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "HPM onSubmissionStart"
        }), _v11(void 0), _v9(!0);
      },
      onSubmit: () => {
        if (_v22 && _v58) {
          _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
            user_id: `${_v33.user.id}`,
            hpm_session_id: _v33.xsrft,
            step_name: "HPM onSubmit"
          }), _v58(_v22, _v29, _v24, _v12, _v14, _v57);
          return;
        }
        switch (_v29) {
          case _v23.PaymentFormTypes.TYPE_CREDIT_CARD:
            _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
              user_id: `${_v33.user.id}`,
              hpm_session_id: _v33.xsrft,
              step_name: "Calling Z.Submit"
            }), window.Z?.submit(), _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
              user_id: `${_v33.user.id}`,
              hpm_session_id: _v33.xsrft,
              step_name: "Z.Submit Done"
            });
            break;
          case _v23.PaymentFormTypes.TYPE_PAYPAL:
            _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
              user_id: `${_v33.user.id}`,
              hpm_session_id: _v33.xsrft,
              step_name: "PayPal Authorization Started"
            }), _v9(!0), _v53({
              hasOpenInvoice: !!_v2
            });
            break;
          case _v23.PaymentFormTypes.TYPE_STRIPE:
            _v1?.balance && _v1.clientSecret ? _v52({
              clientSecret: _v1.clientSecret,
              billingName: _v20,
              billingAddress: _v14,
              onSubmissionComplete: _v67,
              onSubmitError: _v0 => _v11(Error(_v0))
            }) : _v50({
              billingName: _v20,
              billingAddress: _v14,
              onSubmissionComplete: _v66,
              onSubmitError: _v0 => _v11(Error(_v0))
            });
        }
      },
      onSubmitError: (_v0, _v1, _v2) => {
        _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
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
        _v11(Error(`${_v3} (${_v2})`)), (0, _v22.trackAddPaymentMethodError)(_v48, _v2), _v39(!1, _v2);
      },
      onSubmitVatId: _v0 => {
        _v33 && _v33.user && (0, _v22.trackZuoraOrderStep)({
          user_id: `${_v33.user.id}`,
          hpm_session_id: _v33.xsrft,
          step_name: "HPM onSubmitVatId",
          step_message: _v0
        }), _v13(_v0);
      },
      billingAddress: _v14,
      setBillingAddress: _v15
    });
  }], 0);
}