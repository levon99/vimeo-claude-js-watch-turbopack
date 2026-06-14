{
  "use strict";

  _v0.s(["PaymentMethodFormContainer", () => _v41, "getFormType", () => _v40], 0);
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
    _v20 = _v0.i(0);
  let _v21 = _v0 => (0, _v1.jsxs)(_v20.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Z",
        fill: "#fff"
      }), (0, _v1.jsx)("path", {
        d: "M2.125 8A2.875 2.875 0 0 1 5 5.125h14A2.875 2.875 0 0 1 21.875 8v8A2.875 2.875 0 0 1 19 18.875H5A2.875 2.875 0 0 1 2.125 16V8Z",
        stroke: "#1A365D",
        strokeOpacity: ".16",
        strokeWidth: ".25"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.292 9.54c-.009.06-.02.12-.031.183-.4 2.104-1.768 2.832-3.516 2.832h-.89a.435.435 0 0 0-.427.375l-.584 3.8a.231.231 0 0 0 .225.27h1.578c.187 0 .345-.14.375-.328l.015-.082.297-1.933.02-.106a.382.382 0 0 1 .375-.329h.236c1.528 0 2.725-.636 3.075-2.477.146-.77.07-1.411-.316-1.863a1.512 1.512 0 0 0-.432-.341Z",
        fill: "#298FC2"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.873 9.37a3.065 3.065 0 0 0-.389-.089 4.83 4.83 0 0 0-.784-.058h-2.377a.37.37 0 0 0-.164.038.387.387 0 0 0-.21.29l-.507 3.283-.014.096a.435.435 0 0 1 .427-.375h.89c1.747 0 3.116-.728 3.515-2.832.012-.062.022-.123.031-.182a2.097 2.097 0 0 0-.418-.171Z",
        fill: "#22284F"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.948 9.551a.386.386 0 0 1 .375-.328H13.7c.282 0 .544.019.784.059a3.52 3.52 0 0 1 .39.088l.09.029c.117.04.227.087.328.142.119-.778-.001-1.308-.411-1.787C14.428 7.226 13.612 7 12.567 7H9.535a.437.437 0 0 0-.429.375l-1.263 8.207a.265.265 0 0 0 .257.309h1.872l.976-6.34Z",
        fill: "#28356A"
      })]
    }),
    _v22 = ({
      formTypes: _v0,
      onPaymentTypeChanged: _v1,
      renderedFormType: _v2
    }) => {
      let _v3 = _v0.findIndex(_v0 => _v0.type === _v2?.type);
      return (0, _v1.jsx)(_v16.Tabs, {
        variant: "unstyled",
        index: _v3 >= 0 ? _v3 : 0,
        onChange: _v0 => {
          let _v1 = _v0[_v0];
          _v1 && _v1?.(_v1.type);
        },
        width: "100%",
        marginTop: "100",
        marginBottom: "50",
        children: (0, _v1.jsx)(_v18.TabList, {
          backgroundColor: "background-blur",
          padding: "50",
          borderRadius: "input-lg",
          gap: "50",
          border: "none",
          children: _v0.map(_v0 => {
            let _v1 = "Credit Card" === _v0.data.name,
              _v2 = "PayPal" === _v0.data.name;
            return (0, _v1.jsx)(_v17.Tab, {
              flex: "1",
              height: (0, _v7.rem)(40),
              paddingX: "100",
              borderRadius: "input-md",
              transition: "background-color 0.2s",
              _hover: {
                backgroundColor: "rgba(255, 255, 255, 0.5)"
              },
              _selected: {
                backgroundColor: "surface"
              },
              children: (0, _v1.jsxs)(_v10.Flex, {
                gap: "75",
                alignItems: "center",
                justifyContent: "center",
                children: [_v1 && (0, _v1.jsx)(_v19.CreditCard, {
                  width: (0, _v7.rem)(20),
                  height: (0, _v7.rem)(20)
                }), _v2 && (0, _v1.jsx)(_v21, {
                  width: (0, _v7.rem)(20),
                  height: (0, _v7.rem)(20)
                }), (0, _v1.jsx)(_v14.Text, {
                  variant: "heading-xs",
                  children: _v1 ? "Card" : _v0.data.name
                })]
              })
            }, _v0.type);
          })
        })
      });
    },
    _v23 = ({
      children: _v0,
      formIsLoading: _v1,
      formAlert: _v2,
      formTypes: _v3,
      onPaymentTypeChanged: _v4,
      renderedFormType: _v5,
      showExistingPaymentMethods: _v6,
      bspStyling: _v7 = !1
    }) => (0, _v1.jsxs)(_v10.Flex, {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "4",
      gap: "2",
      children: [_v7 ? (0, _v1.jsx)(_v22, {
        formTypes: _v3,
        onPaymentTypeChanged: _v4,
        renderedFormType: _v5
      }) : (0, _v1.jsx)(_v11.RadioGroup, {
        onChange: _v0 => _v4?.(Number(_v0)),
        value: _v5?.type.toString(),
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "50",
        marginTop: "100",
        marginBottom: "50",
        children: _v3.map(_v0 => (0, _v1.jsx)(_v3.Box, {
          paddingX: "100",
          paddingY: "75",
          borderColor: "stroke",
          borderWidth: (0, _v7.rem)(1),
          borderRadius: "menuList",
          backgroundColor: "background-blur",
          sx: {
            '&:has(> label > input[type="radio"]:checked)': {
              backgroundColor: "initial"
            }
          },
          children: (0, _v1.jsx)(_v12.Radio, {
            value: _v0.type.toString(),
            backgroundColor: "white",
            children: (0, _v1.jsx)(_v3.Box, {
              as: "img",
              height: (0, _v7.rem)(24),
              src: _v0.data.imageSource,
              alt: _v0.data.name
            })
          })
        }, _v0.type))
      }), _v6 && (0, _v1.jsxs)(_v10.Flex, {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2",
        children: [(0, _v1.jsx)(_v14.Text, {
          variant: "heading-md",
          children: (0, _v5.translate)({
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
        }), (0, _v1.jsx)(_v15.Button, {
          variant: "secondary",
          size: "sm",
          onClick: () => _v6(),
          children: (0, _v5.translate)({
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
      }), _v2 && (0, _v1.jsx)(_v8.Alert, {
        maxW: (0, _v7.rem)(468),
        status: _v2.status,
        children: (0, _v1.jsx)(_v9.AlertDescription, {
          children: _v2.message
        })
      }), _v1 && (0, _v1.jsx)(_v14.Text, {
        variant: "body-lg",
        children: (0, _v1.jsx)("em", {
          children: (0, _v5.translate)({
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
    }),
    _v24 = () => (0, _v1.jsx)(_v10.Flex, {
      justifyContent: "center",
      marginBottom: "4",
      children: (0, _v1.jsx)(_v13.Spinner, {
        "data-testid": "loader-circular-payment-method-form"
      })
    });
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = ({
    children: _v0,
    formAlert: _v1,
    onFormLoaded: _v2,
    onBillingName: _v3,
    isAddingPaymentMethod: _v4,
    showExistingPaymentMethods: _v5,
    bspStyling: _v6
  }) => {
    let {
      state: {
        order: _v7
      },
      dispatch: _v8
    } = (0, _v26.useStateContext)();
    if (!_v7 && !_v4) return null;
    let _v9 = {
      type: _v25.PaymentFormTypes.TYPE_STRIPE,
      data: _v40(_v25.PaymentFormTypes.TYPE_STRIPE)
    };
    return (0, _v1.jsxs)(_v23, {
      formAlert: _v1?.message ? _v1 : void 0,
      formTypes: [_v9],
      renderedFormType: _v9,
      showExistingPaymentMethods: _v5,
      bspStyling: _v6,
      children: [(0, _v1.jsxs)(_v3.Box, {
        as: "form",
        width: "100%",
        children: [(0, _v1.jsx)(_v6.LabelContainer, {
          flex: "1",
          labelCopy: (0, _v5.translate)({
            singular: "Cardholder name",
            dictionary: {
              es: {
                singular: "Nombre del titular de la tarjeta"
              },
              "de-DE": {
                singular: "Name des Karteninhabers"
              },
              "fr-FR": {
                singular: "Nom du titulaire de la carte"
              },
              "ja-JP": {
                singular: "クレジットカード名義人名"
              },
              "ko-KR": {
                singular: "카드 소지자 이름"
              },
              "pt-BR": {
                singular: "Nome do titular"
              },
              "zh-CN": {
                singular: "持卡人姓名"
              }
            }
          }),
          marginBottom: "16px",
          showAsterisk: !1,
          useBoldLabel: _v6,
          children: (0, _v1.jsx)(_v4.Input, {
            type: "text",
            onChange: _v0 => {
              _v3(_v0.target.value);
            },
            size: "md"
          })
        }), (0, _v1.jsx)(_v2.PaymentElement, {
          onReady: () => _v2?.(_v25.PaymentFormTypes.TYPE_STRIPE),
          onLoadError: _v0 => {
            _v0.error?.message && _v8({
              type: _v25.ActionTypes.PAYMENT_ALERT,
              payload: {
                message: _v0.error?.message,
                status: "error"
              }
            });
          },
          options: {
            fields: {
              billingDetails: "never"
            },
            layout: {
              type: "tabs"
            },
            terms: {
              card: "never"
            }
          }
        })]
      }), _v0]
    });
  };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v25,
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = ["en", "es", "de_DE", "fr_FR", "ja_JP", "pt_BR", "ko_KR"];
  async function _v38({
    paymentType: _v0,
    includeAddressFields: _v1,
    onSubmit: _v2,
    requireAccountId: _v3,
    token: _v4,
    onSubmitError: _v5,
    currency: _v6,
    userLocale: _v7,
    iosJwt: _v8
  }) {
    if (!window.Z) return;
    let _v9 = await fetch("/payments/hosted_pages/token", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          form_type: _v0,
          include_address_fields: _v1,
          token: _v4,
          require_account_id: _v3,
          currency: _v6,
          ios_jwt: _v8
        })
      }),
      _v10 = await _v9.json(),
      _v11 = {
        tenantId: _v10.tenantId,
        id: _v10.pageId,
        token: _v10.token,
        signature: _v10.signature,
        style: "inline",
        key: _v10.key,
        submitEnabled: "false",
        url: _v10.url,
        field_currency: _v10.currency,
        paymentGateway: "Self Serve Stripe",
        locale: _v7
      };
    return _v10.accountId && (_v11.field_accountId = _v10.accountId), _v0 === _v34.PaymentFormTypes.TYPE_CREDIT_CARD && (_v11.param_gwOptions_IndustryType = "EC"), window.Z.renderWithErrorHandler(_v11, [], _v2, _v5), _v10;
  }
  let _v39 = ({
      children: _v0,
      currency: _v1,
      defaultPaymentFormType: _v2 = _v34.PaymentFormTypes.TYPE_CREDIT_CARD,
      formAlert: _v3,
      includeAddressFields: _v4,
      onErrorLoadingForm: _v5,
      onFormLoaded: _v6,
      onPaymentTypeChanged: _v7,
      onSubmissionComplete: _v8,
      onSubmissionStart: _v9,
      onSubmitError: _v10,
      requireAccountId: _v11,
      showExistingPaymentMethods: _v12,
      showPaypalOption: _v13,
      bspStyling: _v14
    }) => {
      let [_v15] = (0, _v36.useTrackCheckoutFormAction)(),
        _v16 = (0, _v31.useViewer)(),
        {
          state: {
            tier: _v17,
            isMonthly: _v18,
            isFreeTrial: _v19,
            subscriptionProduct: _v20,
            creatorProductAction: _v21
          },
          dispatch: _v22
        } = (0, _v26.useStateContext)(),
        _v23 = (0, _v28.useRouter)(),
        {
          trackCheckoutFailed: _v24
        } = (0, _v30.useCheckoutTracking)(),
        _v25 = (0, _v29.useRef)(!1),
        _v26 = _v20?.isCreatorProduct ? (0, _v35.getPlanType)(_v21) : _v18 ? "monthly" : "annual",
        _v27 = (0, _v29.useCallback)(_v0 => {
          !_v25.current && _v17 && (_v25.current = !0, _v24({
            tier: _v17,
            periodicity: _v26,
            isFreeTrial: _v19,
            error_message: _v0
          }));
        }, [_v24, _v17, _v26, _v19]),
        _v28 = _v23.query?.token ? String(_v23.query?.token) : void 0,
        [_v29, _v30] = (0, _v29.useState)(!!window.Z),
        [_v31, _v32] = (0, _v29.useState)(),
        [_v33, _v34] = (0, _v29.useState)(),
        [_v35, _v36] = (0, _v29.useState)(!1),
        _v37 = (0, _v29.useRef)(null),
        [_v38, _v39] = (0, _v29.useState)(!0),
        _v40 = (0, _v29.useRef)(null),
        _v41 = "";
      _v41 = (_v16?.locale || "en").replace(/-/g, "_").replace(/_([a-z])/g, (_v0, _v1) => `_${_v1.toUpperCase()}`), _v41 = _v37.includes(_v41) ? _v41 : "en";
      let _v42 = (0, _v29.useCallback)(_v0 => {
        _v0.success = "true" === _v0.success || !0 === _v0.success, _v16 && _v16 && (0, _v32.trackZuoraOrderStep)({
          hpm_session_id: _v16.xsrft,
          user_id: `${_v16.user?.id}`,
          step_name: "HPM On Submit Callback",
          step_message: _v0.success ? "success" : "failure"
        }), _v34(_v0);
      }, []);
      (0, _v29.useEffect)(() => {
        if (_v33 && !_v35) {
          let {
            refId: _v0,
            success: _v1
          } = _v33;
          if (_v36(!0), _v16 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v16.xsrft,
            user_id: `${_v16.user?.id}`,
            step_name: "HPM onSubmissionComplete",
            payment_method_id: _v0
          }), _v8({
            refId: _v0,
            success: _v1
          }), !1 === _v1) return void _v22({
            type: _v34.ActionTypes.PAYMENT_ALERT,
            payload: {
              status: "error",
              message: (0, _v5.translate)({
                singular: "Unable to submit payment",
                dictionary: {
                  es: {
                    singular: "No se puede enviar el pago"
                  },
                  "de-DE": {
                    singular: "Zahlung kann nicht übermittelt werden"
                  },
                  "fr-FR": {
                    singular: "Impossible de soumettre le paiement"
                  },
                  "ja-JP": {
                    singular: "支払いを送信できません"
                  },
                  "ko-KR": {
                    singular: "결제를 제출할 수 없습니다"
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar o pagamento"
                  },
                  "zh-CN": {
                    singular: "无法提交付款"
                  }
                }
              })
            }
          });
          _v34(void 0);
        }
      }, [_v33, _v8, _v35, _v22]), (0, _v29.useEffect)(() => {
        if (_v29) return;
        _v16 && (0, _v32.trackZuoraOrderStep)({
          hpm_session_id: _v16.xsrft,
          user_id: `${_v16.user?.id}`,
          flow_type: "classic",
          step_name: "HPM script loaded"
        });
        let _v0 = document.createElement("script");
        _v0.src = "https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora-min.js", _v0.async = !0;
        let _v1 = () => {
          _v30(!0);
        };
        return _v0.addEventListener("load", _v1), document.body.appendChild(_v0), () => {
          _v0.removeEventListener("load", _v1), _v29 || document.body.removeChild(_v0);
        };
      }, [_v29]);
      let _v43 = async () => {
        _v37.current && (_v37.current.innerHTML = ""), _v39(!0);
        try {
          await _v38({
            paymentType: _v34.PaymentFormTypes.TYPE_CREDIT_CARD,
            includeAddressFields: _v4,
            onSubmit: _v42,
            requireAccountId: _v11,
            token: _v16.xsrft,
            onSubmitError: _v44,
            currency: _v1,
            userLocale: _v41,
            iosJwt: _v28
          });
        } catch (_v0) {
          _v39(!1), _v5?.(Error("Unable to re-render form"));
        }
      };
      (0, _v29.useEffect)(() => {
        _v40.current = _v31 || null;
      }, [_v31]);
      let _v44 = (..._v0) => {
        let _v1 = _v40.current,
          _v2 = _v0[2];
        _v1?.type === _v34.PaymentFormTypes.TYPE_CREDIT_CARD && _v2 && _v2.includes("ThreeDs2_Authentication_Exception") && _v43(), _v10(..._v0);
      };
      return ((0, _v29.useEffect)(() => {
        _v29 && _v16 && window.Z && !_v31 && (window.Z.setEventHandler("onloadCallback", () => {
          _v39(!1), window?.Z?.setFieldValue("callbackFunctionEnabled", "true"), _v16 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v16.xsrft,
            user_id: `${_v16.user?.id}`,
            step_name: "HPM - OnLoadCallback"
          });
          let _v0 = _v40.current?.type ?? _v2;
          _v0 && _v6?.(_v0);
        }), window.Z.setEventHandler("onSubmit", () => {
          _v22({
            type: _v34.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v36(!1), _v16 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v16.xsrft,
            user_id: `${_v16.user?.id}`,
            step_name: "HPM Submit Started"
          }), _v9?.(), setTimeout(() => {
            _v35 || (_v16 && (0, _v32.trackZuoraOrderStep)({
              hpm_session_id: _v16.xsrft,
              user_id: `${_v16.user?.id}`,
              step_name: "Vimeo defined HPM Timeout"
            }), (0, _v32.trackOrderFailure)({
              userId: Number(_v16?.user?.id),
              description: "Timed out. Did not receive a response from Zuora"
            }), _v27("Timed out. Did not receive a response from Zuora"), _v42({
              refId: "",
              success: !1
            }));
          }, 0);
        }), _v32({
          type: _v2,
          data: _v40(_v2)
        }), _v2 === _v34.PaymentFormTypes.TYPE_PAYPAL ? (_v39(!1), _v2 && _v6?.(_v2)) : _v38({
          paymentType: _v2,
          includeAddressFields: _v4,
          onSubmit: _v42,
          requireAccountId: _v11,
          token: _v16.xsrft,
          onSubmitError: _v44,
          currency: _v1,
          userLocale: _v41,
          iosJwt: _v28
        }).catch(() => {
          _v39(!1), _v5?.(Error("Unable to render form"));
        }));
      }, [_v2, _v29, _v4, _v6, _v9, _v42, _v31, _v11, _v39, _v35, _v16, _v10, _v1, _v5, _v22, _v41, _v28]), _v29) ? (0, _v1.jsxs)(_v23, {
        formIsLoading: _v38,
        formAlert: _v3?.message ? _v3 : void 0,
        formTypes: _v13 ? [{
          type: _v34.PaymentFormTypes.TYPE_CREDIT_CARD,
          data: _v40(_v34.PaymentFormTypes.TYPE_CREDIT_CARD)
        }, {
          type: _v34.PaymentFormTypes.TYPE_PAYPAL,
          data: _v40(_v34.PaymentFormTypes.TYPE_PAYPAL)
        }] : [{
          type: _v34.PaymentFormTypes.TYPE_CREDIT_CARD,
          data: _v40(_v34.PaymentFormTypes.TYPE_CREDIT_CARD)
        }],
        renderedFormType: _v31,
        bspStyling: _v14,
        onPaymentTypeChanged: _v0 => {
          let _v1 = _v40(_v0);
          _v15(_v33.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v0 === _v34.PaymentFormTypes.TYPE_PAYPAL ? _v33.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL : _v33.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD), _v7?.(_v0), _v37.current && (_v37.current.innerHTML = ""), _v22({
            type: _v34.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v39(!0), _v32({
            type: _v0,
            data: _v1
          }), _v0 === _v34.PaymentFormTypes.TYPE_PAYPAL ? (_v39(!1), _v6?.(_v0)) : _v38({
            paymentType: _v0,
            includeAddressFields: _v4,
            onSubmit: _v42,
            requireAccountId: _v11,
            token: _v16?.xsrft || "",
            onSubmitError: (..._v0) => {
              _v16 && (0, _v32.trackZuoraOrderStep)({
                hpm_session_id: _v16.xsrft,
                user_id: `${_v16.user?.id}`,
                step_name: "HPM onSubmitError",
                step_message: JSON.stringify(_v0)
              }), _v44(..._v0);
            },
            currency: _v1,
            userLocale: _v41,
            iosJwt: _v28
          }).catch(() => {
            _v39(!1), _v5?.(Error("Unable to render form"));
          });
        },
        showExistingPaymentMethods: _v12,
        children: [(0, _v1.jsx)(_v3.Box, {
          ref: _v37,
          width: "100%",
          sx: {
            "& > iframe": {
              width: "100%",
              backgroundColor: "transparent !important",
              maxHeight: {
                base: "347px",
                sm: "265px"
              }
            }
          },
          id: "zuora_payment"
        }), _v0]
      }) : (0, _v1.jsx)(_v24, {});
    },
    _v40 = _v0 => {
      switch (_v0) {
        case _v25.PaymentFormTypes.TYPE_PAYPAL:
          return {
            name: "PayPal",
            imageSource: "/assets/images_v6/store_2018/payment_method_paypal.svg"
          };
        default:
        case _v25.PaymentFormTypes.TYPE_CREDIT_CARD:
        case _v25.PaymentFormTypes.TYPE_STRIPE:
          return {
            name: "Credit Card",
            imageSource: "/assets/images_v6/store_2018/payment_method_card.svg"
          };
      }
    },
    _v41 = _v0 => _v0.defaultPaymentFormType === _v25.PaymentFormTypes.TYPE_STRIPE ? (0, _v1.jsx)(_v27, {
      ..._v0,
      children: _v0.children
    }) : (0, _v1.jsx)(_v39, {
      ..._v0
    });
}