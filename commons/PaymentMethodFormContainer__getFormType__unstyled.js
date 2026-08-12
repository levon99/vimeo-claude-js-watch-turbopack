{
  "use strict";

  _v0.s(["PaymentMethodFormContainer", () => _v42, "getFormType", () => _v41], 0);
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
  let _v21 = ({
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
                }), _v2 && (0, _v1.jsx)(_v20.Paypal, {
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
    _v22 = ({
      children: _v0,
      formIsLoading: _v1,
      formAlert: _v2,
      formTypes: _v3,
      onPaymentTypeChanged: _v4,
      renderedFormType: _v5,
      showExistingPaymentMethods: _v6,
      bspStyling: _v7 = !1,
      hidePaymentTypeSelector: _v8 = !1
    }) => (0, _v1.jsxs)(_v10.Flex, {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "4",
      gap: "2",
      children: [_v8 ? null : _v7 ? (0, _v1.jsx)(_v21, {
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
          onClick: _v6,
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
          translate: "no",
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
    _v23 = () => (0, _v1.jsx)(_v10.Flex, {
      justifyContent: "center",
      marginBottom: "4",
      children: (0, _v1.jsx)(_v13.Spinner, {
        "data-testid": "loader-circular-payment-method-form"
      })
    });
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
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
    } = (0, _v25.useStateContext)();
    if (!_v7 && !_v4) return null;
    let _v9 = {
      type: _v24.PaymentFormTypes.TYPE_STRIPE,
      data: _v41(_v24.PaymentFormTypes.TYPE_STRIPE)
    };
    return (0, _v1.jsxs)(_v22, {
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
          onReady: () => _v2?.(_v24.PaymentFormTypes.TYPE_STRIPE),
          onLoadError: _v0 => {
            _v0.error?.message && _v8({
              type: _v24.ActionTypes.PAYMENT_ALERT,
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
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v24,
    _v37 = _v0.i(0);
  let _v38 = ["en", "es", "de_DE", "fr_FR", "ja_JP", "pt_BR", "ko_KR"];
  async function _v39(_v0) {
    let _v1,
      _v2 = await fetch("/payments/hosted_pages/token", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(_v0)
      });
    if (!_v2.ok) throw Error(`Unable to load the Zuora hosted page (status ${_v2.status})`);
    try {
      _v1 = await _v2.json();
    } catch {
      throw Error("Received a malformed Zuora hosted page response");
    }
    if (!_v1?.token || !_v1.signature || !_v1.tenantId || !_v1.url || !_v1.key) throw Error("Received a malformed Zuora hosted page response");
    return _v1;
  }
  let _v40 = ({
      children: _v0,
      currency: _v1,
      defaultPaymentFormType: _v2 = _v36.PaymentFormTypes.TYPE_CREDIT_CARD,
      formAlert: _v3,
      includeAddressFields: _v4,
      onErrorLoadingForm: _v5,
      onFormLoaded: _v6,
      onPaymentTypeChanged: _v7,
      onSubmissionComplete: _v8,
      onSubmissionStart: _v9,
      onSubmitError: _v10,
      isAddingPaymentMethod: _v11,
      requireAccountId: _v12,
      showExistingPaymentMethods: _v13,
      showPaypalOption: _v14,
      bspStyling: _v15,
      hidePaymentTypeSelector: _v16,
      pmId: _v17,
      billingAddress: _v18,
      shouldSyncPostalCode: _v19,
      onControllerChange: _v20,
      onStatusChange: _v21
    }) => {
      let [_v22] = (0, _v31.useTrackCheckoutFormAction)(),
        _v23 = (0, _v30.useViewer)(),
        {
          state: {
            tier: _v24,
            isMonthly: _v25,
            isFreeTrial: _v26,
            subscriptionProduct: _v27,
            creatorProductAction: _v28,
            iosUserId: _v29
          },
          dispatch: _v30
        } = (0, _v25.useStateContext)(),
        _v31 = (0, _v27.useRouter)(),
        {
          trackCheckoutFailed: _v32
        } = (0, _v29.useCheckoutTracking)(_v29),
        _v33 = _v27?.isCreatorProduct ? (0, _v37.getPlanType)(_v28) : _v25 ? "monthly" : "annual",
        _v34 = (0, _v28.useEffectEvent)(_v0 => {
          _v24 && (0, _v35.acquireCheckoutFailedLatch)() && _v32({
            tier: _v24,
            periodicity: _v33,
            isFreeTrial: _v26,
            source: "network",
            http_status: null,
            endpoint: "zuora_submit",
            error_message: _v0
          });
        }),
        _v35 = _v31.query?.token ? String(_v31.query?.token) : void 0,
        [_v36, _v37] = (0, _v28.useState)(!!window.Z),
        [_v38, _v39] = (0, _v28.useState)(),
        [_v40, _v41] = (0, _v28.useState)(!0),
        _v42 = (0, _v28.useRef)(null),
        _v43 = (0, _v28.useRef)(null),
        _v44 = (0, _v28.useRef)(0),
        _v45 = (0, _v28.useRef)(null),
        _v46 = (0, _v28.useRef)({
          generation: -1,
          settled: !0,
          timeoutId: null
        }),
        _v47 = (0, _v28.useRef)(!1),
        _v48 = (0, _v28.useRef)(() => void 0),
        _v49 = "";
      _v49 = (_v23?.locale || "en").replace(/-/g, "_").replace(/_([a-z])/g, (_v0, _v1) => `_${_v1.toUpperCase()}`), _v49 = _v38.includes(_v49) ? _v49 : "en";
      let _v50 = (0, _v28.useEffectEvent)(_v0 => {
          _v21?.(_v0);
        }),
        _v51 = (0, _v28.useEffectEvent)(() => {
          _v44.current += 1;
          let _v0 = _v44.current,
            _v1 = _v46.current;
          return null != _v1.timeoutId && clearTimeout(_v1.timeoutId), _v46.current = {
            generation: -1,
            settled: !0,
            timeoutId: null
          }, _v50({
            status: "mounting"
          }), _v0;
        }),
        _v52 = (0, _v28.useEffectEvent)((_v0, _v1) => {
          if (_v0 !== _v44.current) return;
          let _v2 = _v46.current;
          if (_v2.generation === _v0) {
            if (_v2.settled) return;
            _v2.settled = !0, null != _v2.timeoutId && (clearTimeout(_v2.timeoutId), _v2.timeoutId = null);
          }
          let _v3 = "true" === _v1.success || !0 === _v1.success,
            _v4 = {
              ..._v1,
              success: _v3
            };
          _v23 && ((0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v23.xsrft,
            user_id: `${_v23.user?.id}`,
            step_name: "HPM On Submit Callback",
            step_message: _v3 ? "success" : "failure"
          }), (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v23.xsrft,
            user_id: `${_v23.user?.id}`,
            step_name: "HPM onSubmissionComplete",
            payment_method_id: _v4.refId
          })), _v8(_v11 ? {
            refId: _v4.refId,
            success: _v3
          } : _v4), !1 === _v3 && _v30({
            type: _v36.ActionTypes.PAYMENT_ALERT,
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
        }),
        _v53 = (0, _v28.useEffectEvent)(_v0 => {
          if (_v0 !== _v44.current) return;
          let _v1 = _v46.current;
          _v1.generation !== _v0 || _v1.settled || (_v23 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v23.xsrft,
            user_id: `${_v23.user?.id}`,
            step_name: "Vimeo defined HPM Timeout"
          }), (0, _v32.trackOrderFailure)({
            userId: Number(_v23?.user?.id),
            description: "Timed out. Did not receive a response from Zuora"
          }), _v34("Timed out. Did not receive a response from Zuora"), _v52(_v0, {
            refId: "",
            success: !1
          }));
        }),
        _v54 = (0, _v28.useEffectEvent)(_v0 => {
          _v0 === _v44.current && (_v30({
            type: _v36.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), (0, _v35.resetCheckoutFailedLatch)(), _v23 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v23.xsrft,
            user_id: `${_v23.user?.id}`,
            step_name: "HPM Submit Started"
          }), _v9?.(), _v46.current = {
            generation: _v0,
            settled: !1,
            timeoutId: null
          }, _v46.current.timeoutId = setTimeout(() => {
            _v53(_v0);
          }, 0));
        }),
        _v55 = (0, _v28.useEffectEvent)(_v0 => {
          if (_v0 !== _v44.current || _v45.current !== _v0) return;
          _v41(!1), window?.Z?.setFieldValue("callbackFunctionEnabled", "true"), _v23 && (0, _v32.trackZuoraOrderStep)({
            hpm_session_id: _v23.xsrft,
            user_id: `${_v23.user?.id}`,
            step_name: "HPM - OnLoadCallback"
          });
          let _v1 = _v43.current?.type ?? _v2;
          _v1 && _v6?.(_v1), _v50({
            status: "ready"
          });
        }),
        _v56 = (0, _v28.useEffectEvent)((_v0, ..._v1) => {
          if (_v0 !== _v44.current) return;
          let _v2 = _v43.current,
            _v3 = _v1[2];
          _v2?.type === _v36.PaymentFormTypes.TYPE_CREDIT_CARD && _v3 && _v3.includes("ThreeDs2_Authentication_Exception") && _v48.current(), _v10(..._v1);
        }),
        _v57 = async (_v0, _v1, _v2) => {
          if (!window.Z) return;
          let _v3 = await _v39({
            form_type: _v0,
            include_address_fields: _v4,
            token: _v23?.xsrft || "",
            require_account_id: _v12,
            currency: _v1,
            ios_jwt: _v35,
            pm_id: _v17
          });
          if (_v47.current || _v1 !== _v44.current || !window.Z) return;
          let _v4 = function ({
            data: _v0,
            paymentType: _v1,
            userLocale: _v2
          }) {
            let _v3 = {
              tenantId: _v0.tenantId,
              id: _v0.pageId,
              token: _v0.token,
              signature: _v0.signature,
              style: "inline",
              key: _v0.key,
              submitEnabled: "false",
              url: _v0.url,
              field_currency: _v0.currency,
              paymentGateway: "Self Serve Stripe",
              locale: _v2
            };
            if (_v0.accountId && (_v3.field_accountId = _v0.accountId), _v0.pmId) {
              let _v0;
              _v3.pmId = _v0.pmId, _v3.field_agreementSupportedBrands = "Visa,MasterCard,AmericanExpress,Discover", _v3.field_mitConsentAgreementSrc = "External", _v3.field_mitCredentialProfileType = "Recurring", _v0 = "u" > typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`, _v3.field_mitConsentAgreementRef = `vimeo-card-verify:${_v0}`;
            }
            return _v1 === _v36.PaymentFormTypes.TYPE_CREDIT_CARD && (_v3.param_gwOptions_IndustryType = "EC"), _v3;
          }({
            data: _v3,
            paymentType: _v0,
            userLocale: _v49
          });
          return _v45.current = _v1, window.Z.setEventHandler("onloadCallback", () => _v55(_v1)), window.Z.setEventHandler("onSubmit", () => _v54(_v1)), window.Z.renderWithErrorHandler(_v4, [], _v0 => _v52(_v1, _v0), (..._v0) => {
            _v2?.onBeforeSubmitError?.(_v0), _v56(_v1, ..._v0);
          }), _v3;
        },
        _v58 = async () => {
          let _v0 = _v51();
          _v42.current && (_v42.current.innerHTML = ""), _v41(!0);
          try {
            await _v57(_v36.PaymentFormTypes.TYPE_CREDIT_CARD, _v0);
          } catch {
            _v41(!1), _v5?.(Error("Unable to re-render form")), _v50({
              status: "failed"
            });
          }
        };
      (0, _v28.useEffect)(() => {
        _v48.current = _v58;
      }, [_v58]), (0, _v28.useEffect)(() => {
        _v43.current = _v38 || null;
      }, [_v38]), (0, _v28.useEffect)(() => {
        if (_v36) return;
        _v23 && (0, _v32.trackZuoraOrderStep)({
          hpm_session_id: _v23.xsrft,
          user_id: `${_v23.user?.id}`,
          flow_type: "classic",
          step_name: "HPM script loaded"
        });
        let _v0 = document.createElement("script");
        _v0.src = "https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora-min.js", _v0.async = !0;
        let _v1 = () => {
          _v37(!0);
        };
        return _v0.addEventListener("load", _v1), document.body.appendChild(_v0), () => {
          _v0.removeEventListener("load", _v1), _v36 || document.body.removeChild(_v0);
        };
      }, [_v36, _v23]), (0, _v28.useEffect)(() => {
        if (!_v36 || !_v23 || !window.Z || _v38) return;
        let _v0 = !1;
        return Promise.resolve().then(async () => {
          if (_v0) return;
          let _v0 = _v51();
          if (_v39({
            type: _v2,
            data: _v41(_v2)
          }), _v2 === _v36.PaymentFormTypes.TYPE_PAYPAL) {
            _v41(!1), _v6?.(_v2), _v50({
              status: "ready"
            });
            return;
          }
          try {
            await _v57(_v2, _v0);
          } catch {
            if (_v0) return;
            _v41(!1), _v5?.(Error("Unable to render form")), _v50({
              status: "failed"
            });
          }
        }), () => {
          _v0 = !0;
        };
      }, [_v2, _v36, _v4, _v6, _v12, _v23, _v1, _v5, _v49, _v35, _v17, _v38, _v51, _v50]), (0, _v28.useEffect)(() => {
        if (!_v40 && _v38?.type === _v36.PaymentFormTypes.TYPE_CREDIT_CARD && window.Z && document.getElementById(_v33.ZUORA_HPM_IFRAME_ID) && (!1 !== _v19 && _v18?.postalCode !== void 0 && window.Z.post(_v33.ZUORA_HPM_IFRAME_ID, `setField(creditCardPostalCode:${_v18.postalCode ?? ""})`), _v18?.state !== void 0 && window.Z.post(_v33.ZUORA_HPM_IFRAME_ID, `setField(creditCardState:${_v18.state ?? ""})`), _v18?.country)) {
          let _v0 = _v34.countries[_v18.country]?.iso3;
          window.Z.post(_v33.ZUORA_HPM_IFRAME_ID, `setField(creditCardCountry:${_v0})`);
        }
      }, [_v18, _v40, _v38, _v19]);
      let _v59 = (0, _v28.useMemo)(() => ({
        submit: () => window.Z?.submit()
      }), []);
      return ((0, _v28.useEffect)(() => (_v20?.(_v59), () => {
        _v20?.(null);
      }), [_v59, _v20]), (0, _v28.useEffect)(() => () => {
        _v47.current = !0, _v44.current += 1;
        let _v0 = _v46.current;
        null != _v0.timeoutId && clearTimeout(_v0.timeoutId);
      }, []), _v36) ? (0, _v1.jsxs)(_v22, {
        formIsLoading: _v40,
        formAlert: _v3?.message ? _v3 : void 0,
        hidePaymentTypeSelector: _v16,
        formTypes: _v14 ? [{
          type: _v36.PaymentFormTypes.TYPE_CREDIT_CARD,
          data: _v41(_v36.PaymentFormTypes.TYPE_CREDIT_CARD)
        }, {
          type: _v36.PaymentFormTypes.TYPE_PAYPAL,
          data: _v41(_v36.PaymentFormTypes.TYPE_PAYPAL)
        }] : [{
          type: _v36.PaymentFormTypes.TYPE_CREDIT_CARD,
          data: _v41(_v36.PaymentFormTypes.TYPE_CREDIT_CARD)
        }],
        renderedFormType: _v38,
        bspStyling: _v15,
        onPaymentTypeChanged: _v0 => {
          let _v1 = _v41(_v0);
          _v22(_v33.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v0 === _v36.PaymentFormTypes.TYPE_PAYPAL ? _v33.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL : _v33.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD), _v7?.(_v0);
          let _v2 = _v51();
          if (_v42.current && (_v42.current.innerHTML = ""), _v30({
            type: _v36.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v41(!0), _v39({
            type: _v0,
            data: _v1
          }), _v0 === _v36.PaymentFormTypes.TYPE_PAYPAL) {
            _v41(!1), _v6?.(_v0), _v50({
              status: "ready"
            });
            return;
          }
          _v57(_v0, _v2, {
            onBeforeSubmitError: _v0 => {
              _v23 && (0, _v32.trackZuoraOrderStep)({
                hpm_session_id: _v23.xsrft,
                user_id: `${_v23.user?.id}`,
                step_name: "HPM onSubmitError",
                step_message: JSON.stringify(_v0)
              });
            }
          }).catch(() => {
            _v41(!1), _v5?.(Error("Unable to render form")), _v50({
              status: "failed"
            });
          });
        },
        showExistingPaymentMethods: _v13,
        children: [(0, _v1.jsx)(_v3.Box, {
          ref: _v42,
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
      }) : (0, _v1.jsx)(_v23, {});
    },
    _v41 = _v0 => {
      switch (_v0) {
        case _v24.PaymentFormTypes.TYPE_PAYPAL:
          return {
            name: "PayPal",
            imageSource: "/assets/images_v6/store_2018/payment_method_paypal.svg"
          };
        default:
        case _v24.PaymentFormTypes.TYPE_CREDIT_CARD:
        case _v24.PaymentFormTypes.TYPE_STRIPE:
          return {
            name: "Credit Card",
            imageSource: "/assets/images_v6/store_2018/payment_method_card.svg"
          };
      }
    },
    _v42 = _v0 => _v0.defaultPaymentFormType === _v24.PaymentFormTypes.TYPE_STRIPE ? (0, _v1.jsx)(_v26, {
      ..._v0,
      children: _v0.children
    }) : (0, _v1.jsx)(_v40, {
      ..._v0
    });
}