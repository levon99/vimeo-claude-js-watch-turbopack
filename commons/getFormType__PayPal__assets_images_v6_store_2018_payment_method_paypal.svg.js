{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getFormType", 0, _v0 => _v0 === _v1.PaymentFormTypes.TYPE_PAYPAL ? {
    name: "PayPal",
    imageSource: "/assets/images_v6/store_2018/payment_method_paypal.svg"
  } : {
    name: "Credit Card",
    imageSource: "/assets/images_v6/store_2018/payment_method_card.svg"
  }], 0);
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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = ({
    formTypes: _v0,
    onPaymentTypeChanged: _v1,
    renderedFormType: _v2
  }) => {
    let _v3 = _v0.findIndex(_v0 => _v0.type === _v2?.type);
    return (0, _v2.jsx)(_v14.Tabs, {
      variant: "unstyled",
      index: _v3 >= 0 ? _v3 : 0,
      onChange: _v0 => {
        let _v1 = _v0[_v0];
        _v1 && _v1?.(_v1.type);
      },
      width: "100%",
      marginTop: "100",
      marginBottom: "50",
      children: (0, _v2.jsx)(_v16.TabList, {
        backgroundColor: "background-blur",
        padding: "50",
        borderRadius: "input-lg",
        gap: "50",
        border: "none",
        children: _v0.map(_v0 => {
          let _v1 = "Credit Card" === _v0.data.name,
            _v2 = "PayPal" === _v0.data.name;
          return (0, _v2.jsx)(_v15.Tab, {
            flex: "1",
            height: (0, _v3.rem)(40),
            paddingX: "100",
            borderRadius: "input-md",
            transition: "background-color 0.2s",
            _hover: {
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            },
            _selected: {
              backgroundColor: "surface"
            },
            children: (0, _v2.jsxs)(_v7.Flex, {
              gap: "75",
              alignItems: "center",
              justifyContent: "center",
              children: [_v1 && (0, _v2.jsx)(_v17.CreditCard, {
                width: (0, _v3.rem)(20),
                height: (0, _v3.rem)(20)
              }), _v2 && (0, _v2.jsx)(_v18.Paypal, {
                width: (0, _v3.rem)(20),
                height: (0, _v3.rem)(20)
              }), (0, _v2.jsx)(_v11.Text, {
                variant: "heading-xs",
                children: _v1 ? "Card" : _v0.data.name
              })]
            })
          }, _v0.type);
        })
      })
    });
  };
  _v0.s(["Loader", 0, () => (0, _v2.jsx)(_v7.Flex, {
    justifyContent: "center",
    marginBottom: "4",
    children: (0, _v2.jsx)(_v10.Spinner, {
      "data-testid": "loader-circular-payment-method-form"
    })
  }), "PaymentMethodForm", 0, ({
    children: _v0,
    formIsLoading: _v1,
    formAlert: _v2,
    formTypes: _v3,
    onPaymentTypeChanged: _v4,
    renderedFormType: _v5,
    showExistingPaymentMethods: _v6,
    bspStyling: _v7 = !1,
    hidePaymentTypeSelector: _v8 = !1
  }) => (0, _v2.jsxs)(_v7.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "4",
    gap: "2",
    children: [_v8 ? null : _v7 ? (0, _v2.jsx)(_v19, {
      formTypes: _v3,
      onPaymentTypeChanged: _v4,
      renderedFormType: _v5
    }) : (0, _v2.jsx)(_v8.RadioGroup, {
      onChange: _v0 => _v4?.(Number(_v0)),
      value: _v5?.type.toString(),
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      gap: "50",
      marginTop: "100",
      marginBottom: "50",
      children: _v3.map(_v0 => (0, _v2.jsx)(_v6.Box, {
        paddingX: "100",
        paddingY: "75",
        borderColor: "stroke",
        borderWidth: (0, _v3.rem)(1),
        borderRadius: "menuList",
        backgroundColor: "background-blur",
        sx: {
          '&:has(> label > input[type="radio"]:checked)': {
            backgroundColor: "initial"
          }
        },
        children: (0, _v2.jsx)(_v9.Radio, {
          value: _v0.type.toString(),
          backgroundColor: "white",
          children: (0, _v2.jsx)(_v6.Box, {
            as: "img",
            height: (0, _v3.rem)(24),
            src: _v0.data.imageSource,
            alt: _v0.data.name
          })
        })
      }, _v0.type))
    }), _v6 && (0, _v2.jsxs)(_v7.Flex, {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2",
      children: [(0, _v2.jsx)(_v11.Text, {
        variant: "heading-md",
        children: (0, _v13.translate)({
          singular: "Card details:",
          dictionary: {
            es: {
              singular: "Información de la tarjeta:"
            },
            "de-DE": {
              singular: "Daten zur Kreditkarte:"
            },
            "fr-FR": {
              singular: "Données de carte bancaire :"
            },
            "ja-JP": {
              singular: "カードの詳細:"
            },
            "ko-KR": {
              singular: "카드 세부 사항"
            },
            "pt-BR": {
              singular: "Detalhes do cartão:"
            },
            "zh-CN": {
              singular: "卡片详情："
            }
          }
        })
      }), (0, _v2.jsx)(_v12.Button, {
        variant: "secondary",
        size: "sm",
        onClick: _v6,
        children: (0, _v13.translate)({
          singular: "Use saved card",
          dictionary: {
            es: {
              singular: "Usar la tarjeta guardada"
            },
            "de-DE": {
              singular: "Gespeicherte Karte verwenden"
            },
            "fr-FR": {
              singular: "Utilisez une carte sauvegardée"
            },
            "ja-JP": {
              singular: "登録したカードを使用"
            },
            "ko-KR": {
              singular: "저장된 카드 사용"
            },
            "pt-BR": {
              singular: "Usar um cartão que já salvei"
            },
            "zh-CN": {
              singular: "使用已保存的卡"
            }
          }
        })
      })]
    }), _v2 && (0, _v2.jsx)(_v4.Alert, {
      maxW: (0, _v3.rem)(468),
      status: _v2.status,
      children: (0, _v2.jsx)(_v5.AlertDescription, {
        children: _v2.message
      })
    }), _v1 && (0, _v2.jsx)(_v11.Text, {
      variant: "body-lg",
      children: (0, _v2.jsx)("em", {
        translate: "no",
        children: (0, _v13.translate)({
          singular: "Loading...",
          dictionary: {
            es: {
              singular: "Cargando..."
            },
            "de-DE": {
              singular: "Lädt ..."
            },
            "fr-FR": {
              singular: "Chargement..."
            },
            "ja-JP": {
              singular: "読み込み中..."
            },
            "ko-KR": {
              singular: "로드 중..."
            },
            "pt-BR": {
              singular: "Carregando..."
            },
            "zh-CN": {
              singular: "正在加载..."
            }
          }
        })
      })
    }), _v0]
  })], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  _v0.s(["useJunoSetupCheckoutApi", 0, function ({
    isAddingPaymentMethod: _v0,
    setPaymentMethodAsActive: _v1,
    billingAddress: _v2,
    iosJwt: _v3,
    trackStep: _v4
  }) {
    let _v5 = (0, _v21.useViewer)(),
      {
        state: {
          order: _v6
        }
      } = (0, _v22.useStateContext)(),
      _v7 = (0, _v20.useRef)(_v5),
      _v8 = (0, _v20.useRef)(_v6),
      _v9 = (0, _v20.useRef)(_v0),
      _v10 = (0, _v20.useRef)(_v1),
      _v11 = (0, _v20.useRef)(_v2),
      _v12 = (0, _v20.useRef)(_v3);
    (0, _v20.useEffect)(() => {
      _v7.current = _v5, _v8.current = _v6, _v9.current = _v0, _v10.current = _v1, _v11.current = _v2, _v12.current = _v3;
    });
    let _v13 = (0, _v20.useCallback)(async () => {
      try {
        let _v0 = _v7.current,
          _v1 = _v8.current,
          _v2 = _v9.current ? _v11.current : _v1?.billingAddress;
        if (!_v2?.country) throw Error((0, _v13.translate)({
          singular: "Billing address is required.",
          dictionary: {
            es: {
              singular: "Se requiere la dirección de facturación."
            },
            "de-DE": {
              singular: "Rechnungsadresse ist erforderlich."
            },
            "fr-FR": {
              singular: "L'adresse de facturation est requise."
            },
            "ja-JP": {
              singular: "請求先住所は必須です。"
            },
            "ko-KR": {
              singular: "청구 주소는 필수입니다."
            },
            "pt-BR": {
              singular: "O endereço de cobrança é obrigatório."
            },
            "zh-CN": {
              singular: "需要提供账单地址。"
            }
          }
        }));
        if (!(await fetch("/payments/setup_intent/customer", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: JSON.stringify({
            billing_address: _v2,
            currency: _v1?.currency,
            token: _v0?.xsrft ?? "",
            ios_jwt: _v12.current,
            vat_id: _v1?.vatId
          })
        })).ok) throw Error((0, _v13.translate)({
          singular: "Unable to prepare your billing information.",
          dictionary: {
            es: {
              singular: "No se pudo preparar su información de facturación."
            },
            "de-DE": {
              singular: "Ihre Rechnungsinformationen konnten nicht vorbereitet werden."
            },
            "fr-FR": {
              singular: "Impossible de préparer vos informations de facturation."
            },
            "ja-JP": {
              singular: "請求情報を準備できませんでした。"
            },
            "ko-KR": {
              singular: "귀하의 청구 정보를 준비할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível preparar suas informações de cobrança."
            },
            "zh-CN": {
              singular: "无法准备您的账单信息。"
            }
          }
        }));
        _v4({
          stage: "customer_ensure",
          outcome: "completed"
        });
      } catch (_v0) {
        throw _v4({
          stage: "customer_ensure",
          outcome: "failed",
          failure: void 0
        }), _v0;
      }
    }, [_v4]);
    return {
      preauthorize: (0, _v20.useCallback)(async () => {
        try {
          let _v0 = _v7.current,
            _v1 = await fetch("/payments/setup_intent/preauthorize", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                currency: _v8.current?.currency,
                location_country: _v0?.location,
                token: _v0?.xsrft ?? "",
                ios_jwt: _v12.current
              })
            }),
            _v2 = await _v1.json();
          if (!_v1.ok || !_v23(_v2) || "string" != typeof _v2.token || "number" != typeof _v2.expiresAt) throw Error((0, _v13.translate)({
            singular: "Checkout preauthorization failed.",
            dictionary: {
              es: {
                singular: "La preautorización del pago falló."
              },
              "de-DE": {
                singular: "Die Vorautorisierung beim Checkout ist fehlgeschlagen."
              },
              "fr-FR": {
                singular: "La préautorisation du paiement a échoué."
              },
              "ja-JP": {
                singular: "チェックアウトの事前承認に失敗しました。"
              },
              "ko-KR": {
                singular: "체크아웃 사전 승인에 실패했습니다."
              },
              "pt-BR": {
                singular: "Pré-autorização do checkout falhou."
              },
              "zh-CN": {
                singular: "结账预授权失败。"
              }
            }
          }));
          return _v4({
            stage: "preauthorization",
            outcome: "completed"
          }), _v2;
        } catch (_v0) {
          throw _v4({
            stage: "preauthorization",
            outcome: "failed",
            failure: void 0
          }), _v0;
        }
      }, [_v4]),
      ensureCustomer: _v13,
      createPaymentMethod: (0, _v20.useCallback)(async (_v0, _v1) => {
        try {
          let _v0 = await fetch("/payments/setup_intent/payment_method", {
              method: "POST",
              credentials: "include",
              signal: _v1,
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                setup_intent_id: _v0,
                token: _v7.current?.xsrft ?? "",
                ios_jwt: _v12.current,
                is_default: _v10.current
              })
            }),
            _v1 = await _v0.json();
          if (!_v0.ok || !_v23(_v1) || "string" != typeof _v1.paymentMethodId) throw Error((0, _v13.translate)({
            singular: "Payment method creation failed.",
            dictionary: {
              es: {
                singular: "No se pudo crear el método de pago."
              },
              "de-DE": {
                singular: "Erstellung der Zahlungsmethode fehlgeschlagen."
              },
              "fr-FR": {
                singular: "La création du moyen de paiement a échoué."
              },
              "ja-JP": {
                singular: "支払い方法の作成に失敗しました。"
              },
              "ko-KR": {
                singular: "결제 수단 생성에 실패했습니다."
              },
              "pt-BR": {
                singular: "Falha na criação do método de pagamento."
              },
              "zh-CN": {
                singular: "支付方式创建失败。"
              }
            }
          }));
          return _v4({
            stage: "payment_method_created",
            outcome: "completed"
          }), _v1.paymentMethodId;
        } catch (_v0) {
          throw _v4({
            stage: "payment_method_created",
            outcome: "failed",
            failure: void 0
          }), _v0;
        }
      }, [_v4])
    };
  }], 0);
  var _v24 = _v0.i(0);
  let _v25 = "juno_setup_checkout_flow_id";
  _v0.s(["useJunoSetupCheckoutTracking", 0, function (_v0, _v1) {
    let _v2 = (0, _v24.usePico)(),
      _v3 = (0, _v20.useRef)(null),
      _v4 = (0, _v20.useMemo)(() => null != _v1 ? {
        user_id: String(_v1)
      } : void 0, [_v1]);
    return {
      trackStep: (0, _v20.useCallback)(_v0 => {
        if (null === _v2) return;
        _v3.current ??= function () {
          try {
            let _v0 = sessionStorage.getItem(_v25);
            if (_v0) return _v0;
            let _v1 = crypto.randomUUID();
            return sessionStorage.setItem(_v25, _v1), _v1;
          } catch {
            return crypto.randomUUID();
          }
        }();
        let _v1 = {
          juno_checkout_flow_id: _v3.current,
          checkout_surface: _v0,
          stage: _v0.stage,
          outcome: _v0.outcome,
          failure_extra: "failed" === _v0.outcome && void 0 !== _v0.failure ? {
            category: _v0.failure.category,
            code: _v0.failure.code ?? null,
            payment_method_type: _v0.failure.paymentMethodType ?? null
          } : null,
          duration_ms: null
        };
        _v4 ? _v2.track("juno_setup_checkout_step", _v1, _v4) : _v2.track("juno_setup_checkout_step", _v1);
      }, [_v4, _v2, _v0])
    };
  }], 0);
}