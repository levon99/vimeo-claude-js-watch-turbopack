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
  let _v24 = ({
    postponeHref: _v0,
    secondaryHref: _v1,
    secondaryLabel: _v2,
    onPostpone: _v3,
    onSecondaryAction: _v4
  }) => (0, _v1.jsx)(_v5.Box, {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    zIndex: "docked",
    backgroundColor: "surface",
    paddingY: "md",
    paddingX: "lg",
    children: (0, _v1.jsxs)(_v6.Flex, {
      align: "center",
      justify: "center",
      gap: "md",
      wrap: "wrap",
      children: [(0, _v1.jsx)(_v23.Button, {
        as: "a",
        href: _v0,
        variant: "tertiary",
        size: "md",
        onClick: _v3,
        children: (0, _v13.translate)({
          singular: "I'll do it later",
          dictionary: {
            es: {
              singular: "Lo haré más tarde"
            },
            "de-DE": {
              singular: "Ich mache es später"
            },
            "fr-FR": {
              singular: "Je le ferai plus tard"
            },
            "ja-JP": {
              singular: "後で行います"
            },
            "ko-KR": {
              singular: "나중에 하겠습니다"
            },
            "pt-BR": {
              singular: "Farei isso mais tarde"
            },
            "zh-CN": {
              singular: "我稍后再做"
            }
          }
        })
      }), (0, _v1.jsx)(_v23.Button, {
        as: "a",
        href: _v1,
        variant: "secondary",
        size: "md",
        onClick: _v4,
        children: _v2
      })]
    })
  });
  var _v25 = _v0.i(0);
  let _v26 = ({
      currency: _v0,
      paymentFormType: _v1,
      formError: _v2,
      isDisabled: _v3,
      isLoading: _v4,
      formLoaded: _v5,
      pmId: _v6,
      billingAddress: _v7,
      setBillingAddress: _v8,
      lockedAddressFields: _v9,
      hideAddressForm: _v10,
      addNewPaymentMethodHref: _v11,
      onBillingName: _v12,
      onErrorLoadingForm: _v13,
      onFormLoaded: _v14,
      onPaymentTypeChanged: _v15,
      onSubmissionComplete: _v16,
      onSubmissionStart: _v17,
      onSubmit: _v18,
      onSubmitError: _v19,
      onSubmitVatId: _v20,
      onPostpone: _v21,
      onAddNew: _v22,
      onConfirm: _v23,
      onZuoraControllerChange: _v24,
      onZuoraStatusChange: _v25,
      onPostalCodeValidityChange: _v26,
      shouldSyncPostalCode: _v27
    }) => (0, _v1.jsxs)(_v25.VStack, {
      gap: "20px",
      align: "stretch",
      width: "100%",
      children: [(0, _v1.jsx)(_v10.Text, {
        variant: "heading-sm",
        color: "text-primary",
        children: (0, _v13.translate)({
          singular: "Enter your CVV to re-authorize your current payment method.",
          dictionary: {
            es: {
              singular: "Introduce su CVV para reautorizar su método de pago actual."
            },
            "de-DE": {
              singular: "Geben Sie Ihren CVV ein, um Ihre aktuelle Zahlungsmethode erneut zu autorisieren."
            },
            "fr-FR": {
              singular: "Saisissez votre CVV pour réautoriser votre moyen de paiement actuel."
            },
            "ja-JP": {
              singular: "現在の支払い方法を再認証するためにCVVを入力してください。"
            },
            "ko-KR": {
              singular: "현재 결제 수단을 재승인하려면 CVV를 입력하세요."
            },
            "pt-BR": {
              singular: "Digite o seu CVV para reautorizar seu método de pagamento atual."
            },
            "zh-CN": {
              singular: "输入您的 CVV 以重新授权您当前的支付方式。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v5.Box, {
        width: "100%",
        backgroundColor: "fill-component",
        borderRadius: "input-lg",
        padding: "lg",
        children: [(0, _v1.jsxs)(_v7.HStack, {
          gap: "1",
          align: "center",
          children: [(0, _v1.jsx)(_v12.ShieldCheck, {
            color: "status-positive-primary",
            boxSize: (0, _v11.rem)(16)
          }), (0, _v1.jsx)(_v10.Text, {
            variant: "heading-xs",
            color: "status-positive-primary",
            children: (0, _v13.translate)({
              singular: "Secure authorization",
              dictionary: {
                es: {
                  singular: "Autorización segura"
                },
                "de-DE": {
                  singular: "Sichere Autorisierung"
                },
                "fr-FR": {
                  singular: "Autorisation sécurisée"
                },
                "ja-JP": {
                  singular: "安全な権限付与"
                },
                "ko-KR": {
                  singular: "보안 권한 부여"
                },
                "pt-BR": {
                  singular: "Autorização segura"
                },
                "zh-CN": {
                  singular: "安全授权"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v5.Box, {
          marginBottom: {
            base: "-20px",
            md: "-32px"
          },
          children: (0, _v1.jsx)(_v17.PaymentMethodFormContainer, {
            currency: _v0,
            defaultPaymentFormType: _v1,
            formAlert: _v2 ? {
              status: "error",
              message: _v2.message
            } : void 0,
            includeAddressFields: !1,
            isAddingPaymentMethod: !0,
            showPaypalOption: !1,
            hidePaymentTypeSelector: !0,
            pmId: _v6,
            billingAddress: _v7,
            shouldSyncPostalCode: _v27,
            onBillingName: _v12,
            onErrorLoadingForm: _v13,
            onFormLoaded: _v14,
            onPaymentTypeChanged: _v15,
            onSubmissionComplete: _v16,
            onSubmissionStart: _v17,
            requireAccountId: !0,
            onSubmitError: _v19,
            onControllerChange: _v24,
            onStatusChange: _v25,
            children: (0, _v1.jsx)(_v16.PaymentMethodAddressFormContainer, {
              onSubmitVatId: _v20,
              billingAddress: _v7,
              setBillingAddress: _v8,
              paymentFormType: _v1,
              lockedAddressFields: _v9,
              hidden: _v10,
              onPostalCodeValidityChange: _v26
            })
          })
        })]
      }), (0, _v1.jsxs)(_v25.VStack, {
        gap: "12px",
        align: "stretch",
        width: "100%",
        children: [(0, _v1.jsx)(_v23.Button, {
          variant: "primary",
          size: "md",
          width: "100%",
          isLoading: _v4,
          isDisabled: _v3 || !_v5,
          onClick: () => {
            _v23?.(), _v18();
          },
          children: (0, _v13.translate)({
            singular: "Confirm payment method",
            dictionary: {
              es: {
                singular: "Confirmar método de pago"
              },
              "de-DE": {
                singular: "Zahlungsmethode bestätigen"
              },
              "fr-FR": {
                singular: "Confirmer le moyen de paiement"
              },
              "ja-JP": {
                singular: "支払い方法を確認"
              },
              "ko-KR": {
                singular: "결제 수단 확인"
              },
              "pt-BR": {
                singular: "Confirmar método de pagamento"
              },
              "zh-CN": {
                singular: "确认支付方式"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Button, {
          as: "a",
          href: _v11,
          variant: "secondary",
          size: "md",
          width: "100%",
          onClick: _v22,
          children: (0, _v13.translate)({
            singular: "Add new payment method instead",
            dictionary: {
              es: {
                singular: "Agregar nuevo método de pago en su lugar"
              },
              "de-DE": {
                singular: "Stattdessen neue Zahlungsmethode hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter plutôt un nouveau moyen de paiement"
              },
              "ja-JP": {
                singular: "代わりに新しい支払い方法を追加"
              },
              "ko-KR": {
                singular: "대신 새 결제 수단을 추가"
              },
              "pt-BR": {
                singular: "Adicionar novo método de pagamento em vez disso"
              },
              "zh-CN": {
                singular: "改为添加新的支付方式"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Button, {
          variant: "tertiary",
          size: "md",
          width: "100%",
          onClick: _v21,
          children: (0, _v13.translate)({
            singular: "I'll do it later",
            dictionary: {
              es: {
                singular: "Lo haré más tarde"
              },
              "de-DE": {
                singular: "Ich mache es später"
              },
              "fr-FR": {
                singular: "Je le ferai plus tard"
              },
              "ja-JP": {
                singular: "後で行います"
              },
              "ko-KR": {
                singular: "나중에 하겠습니다"
              },
              "pt-BR": {
                singular: "Farei isso mais tarde"
              },
              "zh-CN": {
                singular: "我稍后再做"
              }
            }
          })
        })]
      })]
    }),
    _v27 = "/checkout/payments/new?verify=1";
  _v0.s(["AddPaymentMethod", 0, _v0 => {
    let {
        canSavePaymentMethod: _v1,
        hideStripeUserConsent: _v2 = !1,
        forceStripeCheckout: _v3 = !1,
        isIndianUser: _v4 = !1,
        currency: _v5,
        balanceAmount: _v6,
        paymentFormType: _v7,
        formError: _v8,
        gracePeriodType: _v9,
        isDisabled: _v10,
        isLoading: _v11,
        onBillingName: _v12,
        onErrorLoadingForm: _v13,
        onCanSavePaymentMethod: _v14,
        onFormLoaded: _v15,
        onPaymentTypeChanged: _v16,
        onSubmissionComplete: _v17,
        onSubmissionStart: _v18,
        onSubmit: _v19,
        onSubmitError: _v20,
        onSubmitVatId: _v21,
        billingAddress: _v22,
        setBillingAddress: _v23,
        isDefault: _v24,
        onDefault: _v25,
        forceDefaultPaymentCheckbox: _v26,
        formLoaded: _v27,
        isVerification: _v28 = !1,
        isVerificationFlow: _v29 = !1,
        pmId: _v30,
        lockedAddressFields: _v31,
        isInline: _v32 = !1,
        hideAddressForm: _v33 = !1,
        addNewPaymentMethodHref: _v34 = _v27,
        onPostpone: _v35,
        onAddNew: _v36,
        onConfirm: _v37,
        onPostalCodeValidityChange: _v38,
        shouldSyncPostalCode: _v39,
        disableSubmit: _v40,
        onZuoraControllerChange: _v41,
        onZuoraStatusChange: _v42
      } = _v0,
      _v43 = _v28 || _v29,
      {
        trackPageClicked: _v44
      } = (0, _v14.useCardVerificationTracking)(),
      _v45 = _v28 ? "verify" : "add_new";
    (0, _v2.useEffect)(() => {
      _v11 || (0, _v20.trackAddPaymentMethodPageview)(!!_v9);
    }, [_v9, _v11]);
    let _v46 = (0, _v13.translate)({
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
    _v6 ? _v46 = (0, _v13.translate)({
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
    }) : _v9 && (_v46 = (0, _v13.translate)({
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
    let _v47 = _v46;
    _v7 !== _v21.PaymentFormTypes.TYPE_PAYPAL || _v6 || (_v47 = (0, _v13.translate)({
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
    let _v48 = _v46;
    _v28 && (_v48 = (0, _v13.translate)({
      singular: "Verify your card",
      dictionary: {
        es: {
          singular: "Verifique su tarjeta"
        },
        "de-DE": {
          singular: "Bestätigen Sie Ihre Karte"
        },
        "fr-FR": {
          singular: "Vérifier votre carte"
        },
        "ja-JP": {
          singular: "カードを確認してください"
        },
        "ko-KR": {
          singular: "카드를 확인하세요"
        },
        "pt-BR": {
          singular: "Verifique seu cartão"
        },
        "zh-CN": {
          singular: "验证您的银行卡"
        }
      }
    }), _v47 = (0, _v13.translate)({
      singular: "Renew authorization",
      dictionary: {
        es: {
          singular: "Renovar la autorización"
        },
        "de-DE": {
          singular: "Autorisierung erneuern"
        },
        "fr-FR": {
          singular: "Renouveler l'autorisation"
        },
        "ja-JP": {
          singular: "認証を更新"
        },
        "ko-KR": {
          singular: "승인 갱신"
        },
        "pt-BR": {
          singular: "Renovar autorização"
        },
        "zh-CN": {
          singular: "更新授权"
        }
      }
    }));
    let _v49 = _v7 === _v21.PaymentFormTypes.TYPE_STRIPE && !_v2,
      _v50 = _v3 || _v4 ? _v21.PaymentFormTypes.TYPE_STRIPE : _v7;
    return _v32 ? (0, _v1.jsx)(_v26, {
      currency: _v5,
      paymentFormType: _v7,
      formError: _v8,
      isDisabled: _v10,
      isLoading: _v11,
      formLoaded: _v27,
      pmId: _v30,
      billingAddress: _v22,
      setBillingAddress: _v23,
      lockedAddressFields: _v31,
      hideAddressForm: _v33,
      addNewPaymentMethodHref: _v34,
      onBillingName: _v12,
      onErrorLoadingForm: _v13,
      onFormLoaded: _v15,
      onPaymentTypeChanged: _v16,
      onSubmissionComplete: _v17,
      onSubmissionStart: _v18,
      onSubmit: _v19,
      onSubmitError: _v20,
      onSubmitVatId: _v21,
      onPostpone: _v35,
      onAddNew: _v36,
      onConfirm: _v37,
      onPostalCodeValidityChange: _v38,
      shouldSyncPostalCode: _v39,
      onZuoraControllerChange: _v41,
      onZuoraStatusChange: _v42
    }) : (0, _v1.jsxs)(_v6.Flex, {
      direction: "column",
      paddingBottom: _v43 ? "120px" : void 0,
      children: [_v10 && (0, _v1.jsx)(_v6.Flex, {
        align: "center",
        justify: "center",
        height: "535",
        children: (0, _v1.jsx)(_v9.Spinner, {
          size: "xl",
          color: "blue.500"
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        paddingTop: "20",
        margin: "0 auto 90px",
        visibility: _v10 ? "hidden" : "visible",
        alignItems: "center",
        width: {
          base: "90%",
          sm: "520px"
        },
        children: [(0, _v1.jsx)(_v8.Header, {
          size: "xl",
          marginBottom: _v43 ? (0, _v11.rem)(24) : "20",
          children: _v48
        }), _v43 && (0, _v1.jsxs)(_v7.HStack, {
          gap: "1",
          align: "center",
          justify: "center",
          marginBottom: (0, _v11.rem)(24),
          children: [(0, _v1.jsx)(_v12.ShieldCheck, {
            color: "status-positive-primary",
            boxSize: (0, _v11.rem)(16)
          }), (0, _v1.jsx)(_v10.Text, {
            variant: "heading-xs",
            color: "status-positive-primary",
            textAlign: "center",
            children: _v28 ? (0, _v13.translate)({
              singular: "Enter your CVV to confirm your card. No charge will be applied now.",
              dictionary: {
                es: {
                  singular: "Introduzca su CVV para confirmar su tarjeta. No se aplicará ningún cargo ahora."
                },
                "de-DE": {
                  singular: "Geben Sie Ihren CVV ein, um Ihre Karte zu bestätigen. Es erfolgt jetzt keine Belastung."
                },
                "fr-FR": {
                  singular: "Saisissez votre CVV pour confirmer votre carte. Aucun prélèvement ne sera effectué pour l'instant."
                },
                "ja-JP": {
                  singular: "カードを確認するためにCVVを入力してください。今は請求されません。"
                },
                "ko-KR": {
                  singular: "카드를 확인하려면 CVV를 입력하세요. 지금은 요금이 청구되지 않습니다."
                },
                "pt-BR": {
                  singular: "Digite seu CVV para confirmar seu cartão. Nenhuma cobrança será aplicada agora."
                },
                "zh-CN": {
                  singular: "输入您的 CVV 以确认您的银行卡。当前不会收费。"
                }
              }
            }) : (0, _v13.translate)({
              singular: "You won't be charged now.",
              dictionary: {
                es: {
                  singular: "No se le cobrará ahora."
                },
                "de-DE": {
                  singular: "Sie werden jetzt nicht belastet."
                },
                "fr-FR": {
                  singular: "Aucun prélèvement ne sera effectué pour le moment."
                },
                "ja-JP": {
                  singular: "今は請求されません。"
                },
                "ko-KR": {
                  singular: "지금은 요금이 청구되지 않습니다."
                },
                "pt-BR": {
                  singular: "Você não será cobrado agora."
                },
                "zh-CN": {
                  singular: "您现在不会被收费。"
                }
              }
            })
          })]
        }), _v6 && (0, _v1.jsx)(_v3.Alert, {
          maxW: (0, _v11.rem)(468),
          status: "info",
          marginBottom: "20",
          children: (0, _v1.jsx)(_v4.AlertDescription, {
            children: (0, _v13.translate)({
              singular: "Your account has an outstanding balance of {BALANCE_AMOUNT}. Adding a new payment method will automatically charge this amount.",
              replacements: {
                BALANCE_AMOUNT: _v6
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
        }), (0, _v1.jsxs)(_v5.Box, {
          width: "100%",
          marginBottom: "20",
          backgroundColor: "surface",
          borderRadius: "input-lg",
          padding: "xl",
          gap: "md",
          children: [(0, _v1.jsxs)(_v17.PaymentMethodFormContainer, {
            currency: _v5,
            defaultPaymentFormType: _v50,
            formAlert: _v8 ? {
              status: "error",
              message: _v8.message
            } : void 0,
            includeAddressFields: !1,
            isAddingPaymentMethod: !0,
            isDefault: _v24,
            showPaypalOption: !_v28 && !_v4,
            pmId: _v30,
            billingAddress: _v22,
            shouldSyncPostalCode: _v39,
            onBillingName: _v12,
            onErrorLoadingForm: _v13,
            onFormLoaded: _v15,
            onPaymentTypeChanged: _v16,
            onSubmissionComplete: _v17,
            onSubmissionStart: _v18,
            requireAccountId: !0,
            onSubmitError: _v20,
            onControllerChange: _v41,
            onStatusChange: _v42,
            children: [_v7 === _v21.PaymentFormTypes.TYPE_PAYPAL ? _v50 !== _v21.PaymentFormTypes.TYPE_STRIPE && (0, _v1.jsx)(_v22.PayPalBox, {}) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v16.PaymentMethodAddressFormContainer, {
                onSubmitVatId: _v21,
                billingAddress: _v22,
                setBillingAddress: _v23,
                paymentFormType: _v7,
                lockedAddressFields: _v31,
                onPostalCodeValidityChange: _v38
              }), !_v28 && (0, _v1.jsx)(_v18.SetDefaultPaymentMethodCheckbox, {
                isChecked: _v24,
                onChange: _v25,
                showCheckbox: !_v49,
                blockCheckbox: _v26
              })]
            }), _v49 && (0, _v1.jsx)(_v19.UserConsentContainer, {
              onChecked: _v0 => _v14(_v0)
            })]
          }), (0, _v1.jsx)(_v15.AddPaymentMethodButtonContainer, {
            isDisabled: _v10 || !!_v40,
            isLoading: _v11,
            canSave: !_v49 || _v1,
            onSubmit: () => {
              _v43 && _v44({
                variant: _v45,
                element: "submit_button"
              }), _v19(), (0, _v20.trackAddPaymentMethodAddClick)(!_v9);
            },
            onCancel: () => (0, _v20.trackAddPaymentMethodCancelClick)(!_v9),
            buttonText: _v47,
            hideCancel: _v28
          })]
        })]
      }), _v43 && (0, _v1.jsx)(_v24, {
        postponeHref: "/home",
        secondaryHref: _v28 ? _v27 : "/checkout/payments/verify",
        secondaryLabel: _v28 ? (0, _v13.translate)({
          singular: "Add new payment method instead",
          dictionary: {
            es: {
              singular: "Agregar nuevo método de pago en su lugar"
            },
            "de-DE": {
              singular: "Stattdessen neue Zahlungsmethode hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter plutôt un nouveau moyen de paiement"
            },
            "ja-JP": {
              singular: "代わりに新しい支払い方法を追加"
            },
            "ko-KR": {
              singular: "대신 새 결제 수단을 추가"
            },
            "pt-BR": {
              singular: "Adicionar novo método de pagamento em vez disso"
            },
            "zh-CN": {
              singular: "改为添加新的支付方式"
            }
          }
        }) : (0, _v13.translate)({
          singular: "Verify current payment method instead",
          dictionary: {
            es: {
              singular: "Verifique el método de pago actual en su lugar"
            },
            "de-DE": {
              singular: "Überprüfen Sie stattdessen die aktuelle Zahlungsmethode"
            },
            "fr-FR": {
              singular: "Vérifiez plutôt le moyen de paiement actuel"
            },
            "ja-JP": {
              singular: "代わりに現在の支払い方法を確認してください"
            },
            "ko-KR": {
              singular: "대신 현재 결제 수단을 확인하세요."
            },
            "pt-BR": {
              singular: "Verifique o método de pagamento atual em vez disso"
            },
            "zh-CN": {
              singular: "改为验证当前支付方式"
            }
          }
        }),
        onPostpone: () => _v44({
          variant: _v45,
          element: "postpone_cta"
        }),
        onSecondaryAction: () => _v44({
          variant: _v45,
          element: _v28 ? "add_new_cta" : "verify_cta"
        })
      })]
    });
  }], 0);
}