{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getFormType", 0, _v0 => _v0 === _v1.PaymentFormTypes.TYPE_PAYPAL ? {
    name: "PayPal",
    imageSource: "https://f.vimeocdn.com/images_v6/store_2018/payment_method_paypal.svg"
  } : {
    name: "Credit Card",
    imageSource: "https://f.vimeocdn.com/images_v6/store_2018/payment_method_card.svg"
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
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ({
      formTypes: _v0,
      onPaymentTypeChanged: _v1,
      renderedFormType: _v2,
      expandedContent: _v3,
      hasError: _v4 = !1,
      storedMethod: _v5
    }) => {
      let [_v6, _v7] = (0, _v20.useState)("form"),
        _v8 = (0, _v20.useRef)([]),
        _v9 = _v0 => {
          _v7("form"), _v1?.(_v0);
        },
        _v10 = () => {
          _v7("stored"), _v5?.onSelectStored();
        },
        _v11 = _v0 => {
          let _v1 = _v8.current.filter(Boolean);
          if (0 === _v1.length) return;
          let _v2 = (_v0 + _v1.length) % _v1.length;
          _v1.forEach((_v0, _v1) => {
            _v0.tabIndex = _v1 === _v2 ? 0 : -1;
          }), _v1[_v2].focus(), (_v0 => {
            if (_v5 && 0 === _v0) return _v10();
            let _v1 = _v0[_v0 - !!_v5];
            _v1 && _v9(_v1.type);
          })(_v2);
        },
        _v12 = (_v0, _v1) => {
          if (_v0.target === _v0.currentTarget) switch (_v0.key) {
            case "ArrowRight":
            case "ArrowDown":
              _v0.preventDefault(), _v11(_v1 + 1);
              break;
            case "ArrowLeft":
            case "ArrowUp":
              _v0.preventDefault(), _v11(_v1 - 1);
              break;
            case "Enter":
            case " ":
              _v0.preventDefault(), _v11(_v1);
          }
        },
        _v13 = !!_v5 && "stored" === _v6;
      return (0, _v2.jsxs)(_v7.Flex, {
        "data-testid": "wetransfer-inspired-payment-tiles",
        flexDirection: "column",
        gap: (0, _v3.rem)(12),
        width: "100%",
        role: "radiogroup",
        children: [_v5 && (0, _v2.jsx)(_v6.Box, {
          ref: _v0 => {
            _v8.current[0] = _v0;
          },
          role: "radio",
          "aria-checked": _v13,
          tabIndex: _v13 ? 0 : -1,
          onKeyDown: _v0 => _v12(_v0, 0),
          onClick: _v10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          border: "1px solid",
          borderColor: _v13 ? _v4 ? "status-destructive-primary" : "text-primary" : "stroke",
          borderRadius: (0, _v3.rem)(16),
          backgroundColor: "surface",
          paddingX: (0, _v3.rem)(16),
          paddingY: (0, _v3.rem)(16),
          height: (0, _v3.rem)(72),
          minHeight: (0, _v3.rem)(72),
          cursor: "pointer",
          _hover: {
            borderColor: "text-primary"
          },
          children: (0, _v2.jsxs)(_v7.Flex, {
            alignItems: "center",
            gap: (0, _v3.rem)(12),
            children: [(0, _v2.jsx)(_v26, {
              selected: _v13
            }), (0, _v2.jsx)(_v6.Box, {
              width: (0, _v3.rem)(24),
              height: (0, _v3.rem)(24),
              display: "flex",
              alignItems: "center",
              children: _v5.brandIcon
            }), (0, _v2.jsx)(_v11.Text, {
              variant: "heading-sm",
              children: _v5.label
            })]
          })
        }, "stored-method"), _v0.map((_v0, _v1) => {
          let _v2 = _v0.type === _v1.PaymentFormTypes.TYPE_CREDIT_CARD || _v0.type === _v1.PaymentFormTypes.TYPE_STRIPE,
            _v3 = _v0.type === _v1.PaymentFormTypes.TYPE_PAYPAL,
            _v4 = "form" === _v6 && (_v0.type === _v2?.type || !_v2 && 0 === _v1),
            _v5 = _v4 && (_v2 || _v3),
            _v6 = _v1 + +!!_v5;
          return (0, _v2.jsxs)(_v6.Box, {
            ref: _v0 => {
              _v8.current[_v6] = _v0;
            },
            role: "radio",
            "aria-checked": _v4,
            tabIndex: _v4 ? 0 : -1,
            onKeyDown: _v0 => _v12(_v0, _v6),
            onClick: _v0 => {
              _v0.target !== _v0.currentTarget && _v4 || _v9(_v0.type);
            },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: _v5 ? "flex-start" : "center",
            textAlign: "left",
            border: "1px solid",
            borderColor: _v4 && _v4 ? "status-destructive-primary" : _v4 ? "text-primary" : "stroke",
            borderRadius: (0, _v3.rem)(16),
            backgroundColor: "surface",
            paddingX: (0, _v3.rem)(16),
            paddingY: (0, _v3.rem)(16),
            height: _v5 ? void 0 : (0, _v3.rem)(72),
            minHeight: (0, _v3.rem)(_v5 ? 112 : 72),
            cursor: "pointer",
            _hover: {
              borderColor: "text-primary"
            },
            children: [(0, _v2.jsxs)(_v7.Flex, {
              alignItems: "center",
              gap: (0, _v3.rem)(12),
              children: [(0, _v2.jsx)(_v26, {
                selected: _v4
              }), _v2 && (0, _v2.jsx)(_v17.CreditCard, {
                width: (0, _v3.rem)(28),
                height: (0, _v3.rem)(28)
              }), _v3 && (0, _v2.jsx)(_v6.Box, {
                width: (0, _v3.rem)(32),
                height: (0, _v3.rem)(32),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: (0, _v3.rem)(2),
                marginLeft: (0, _v3.rem)(-6),
                children: (0, _v2.jsx)(_v18.Paypal, {
                  width: (0, _v3.rem)(32),
                  height: (0, _v3.rem)(32)
                })
              }), (0, _v2.jsx)(_v11.Text, {
                fontFamily: "heading",
                fontSize: (0, _v3.rem)(18),
                fontWeight: "var(--vimeo-fontWeights-bold)",
                lineHeight: "140%",
                letterSpacing: "var(--vimeo-letterSpacings-heading-sm)",
                children: _v2 ? (0, _v13.translate)({
                  singular: "Card",
                  dictionary: {
                    es: {
                      singular: "Tarjeta"
                    },
                    "de-DE": {
                      singular: "Karte"
                    },
                    "fr-FR": {
                      singular: "Carte"
                    },
                    "ja-JP": {
                      singular: "カード"
                    },
                    "ko-KR": {
                      singular: "카드"
                    },
                    "pt-BR": {
                      singular: "Cartão"
                    },
                    "zh-CN": {
                      singular: "卡"
                    }
                  }
                }) : _v0.data.name
              }), _v2 && (0, _v2.jsxs)(_v7.Flex, {
                marginLeft: "auto",
                gap: (0, _v3.rem)(2),
                alignItems: "center",
                children: [(0, _v2.jsx)(_v23.Mastercard, {
                  width: (0, _v3.rem)(20),
                  height: (0, _v3.rem)(16)
                }), (0, _v2.jsx)(_v24.Visa, {
                  width: (0, _v3.rem)(20),
                  height: (0, _v3.rem)(16)
                }), (0, _v2.jsx)(_v21.Amex, {
                  width: (0, _v3.rem)(20),
                  height: (0, _v3.rem)(16)
                }), (0, _v2.jsx)(_v22.Discover, {
                  width: (0, _v3.rem)(20),
                  height: (0, _v3.rem)(16)
                })]
              })]
            }), _v3 && _v4 && (0, _v2.jsxs)(_v7.Flex, {
              marginTop: (0, _v3.rem)(16),
              marginBottom: (0, _v3.rem)(8),
              gap: (0, _v3.rem)(12),
              alignItems: "center",
              children: [(0, _v2.jsx)(_v27, {}), (0, _v2.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                maxWidth: (0, _v3.rem)(368),
                children: (0, _v13.translate)({
                  singular: "After submitting, you'll be redirected to complete your purchase securely.",
                  dictionary: {
                    es: {
                      singular: "Después de enviar, se te redirigirá para completar tu compra de forma segura."
                    },
                    "de-DE": {
                      singular: "Nach dem Abschicken werden Sie weitergeleitet, um Ihren Kauf sicher abzuschließen."
                    },
                    "fr-FR": {
                      singular: "Après l'envoi, vous serez redirigé(e) pour finaliser votre achat en toute sécurité."
                    },
                    "ja-JP": {
                      singular: "送信後、安全に購入手続きを完了するためにリダイレクトされます。"
                    },
                    "ko-KR": {
                      singular: "제출하면 안전하게 결제를 완료할 수 있는 페이지로 리디렉션됩니다."
                    },
                    "pt-BR": {
                      singular: "Após o envio, você será redirecionado para concluir sua compra com segurança."
                    },
                    "zh-CN": {
                      singular: "提交后, 您将被重定向以安全地完成购买."
                    }
                  }
                })
              })]
            }), _v2 && _v3 && (0, _v2.jsx)(_v6.Box, {
              display: _v5 ? "block" : "none",
              marginTop: _v5 ? (0, _v3.rem)(16) : void 0,
              width: "100%",
              onClick: _v0 => _v0.stopPropagation(),
              onPointerDown: _v0 => _v0.stopPropagation(),
              onTouchStart: _v0 => _v0.stopPropagation(),
              onMouseDown: _v0 => _v0.stopPropagation(),
              children: _v3
            })]
          }, _v0.type);
        })]
      });
    },
    _v26 = ({
      selected: _v0
    }) => (0, _v2.jsx)(_v6.Box, {
      width: (0, _v3.rem)(20),
      height: (0, _v3.rem)(20),
      borderRadius: "50%",
      border: "1px solid",
      borderColor: "var(--vimeo-colors-input-stroke)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      children: _v0 && (0, _v2.jsx)(_v6.Box, {
        width: (0, _v3.rem)(10),
        height: (0, _v3.rem)(10),
        borderRadius: "50%",
        backgroundColor: "text-primary"
      })
    }),
    _v27 = () => (0, _v2.jsxs)(_v6.Box, {
      as: "svg",
      width: (0, _v3.rem)(28),
      height: (0, _v3.rem)(28),
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      sx: {
        "& path": {
          fill: "var(--vimeo-colors-text-secondary)"
        }
      },
      children: [(0, _v2.jsx)("path", {
        d: "M25.667 12.8333C25.667 10.256 23.5777 8.16663 21.0003 8.16663L12.8337 8.16662C10.2563 8.16662 8.16699 10.256 8.16699 12.8333L8.16699 14C8.16699 14.6443 8.68933 15.1666 9.33366 15.1666C9.97799 15.1666 10.5003 14.6443 10.5003 14L10.5003 12.8333C10.5003 11.5446 11.545 10.5 12.8337 10.5L21.0003 10.5C22.289 10.5 23.3337 11.5446 23.3337 12.8333L23.3337 21C23.3337 22.2886 22.289 23.3333 21.0003 23.3333L16.3337 23.3333C15.6893 23.3333 15.167 23.8556 15.167 24.5C15.167 25.1443 15.6893 25.6666 16.3337 25.6666L21.0003 25.6666C23.5777 25.6666 25.667 23.5773 25.667 21L25.667 12.8333Z"
      }), (0, _v2.jsx)("path", {
        d: "M21 7.00004C21 4.42271 18.9107 2.33337 16.3333 2.33337L7 2.33337C4.42267 2.33337 2.33333 4.42271 2.33333 7.00004L2.33333 14C2.33333 14.6444 2.85567 15.1667 3.5 15.1667C4.14433 15.1667 4.66667 14.6444 4.66667 14L4.66667 7.00004C4.66667 5.71138 5.71134 4.66671 7 4.66671L16.3333 4.66671C17.622 4.66671 18.6667 5.71138 18.6667 7.00004L18.6667 8.16671L21 8.16671L21 7.00004Z"
      }), (0, _v2.jsx)("path", {
        d: "M3.49472 17.4999C3.8043 17.4999 4.10119 17.6226 4.32009 17.8412C4.53899 18.0597 4.66197 18.3561 4.66197 18.6651V19.8303C4.66197 20.1394 4.78495 20.4358 5.00385 20.6543C5.22275 20.8728 5.51965 20.9956 5.82922 20.9956H10.0196L8.50222 19.4924C8.28242 19.273 8.15894 18.9754 8.15894 18.6651C8.15894 18.3548 8.28242 18.0572 8.50222 17.8378C8.72202 17.6184 9.02013 17.4951 9.33097 17.4951C9.64181 17.4951 9.93992 17.6184 10.1597 17.8378L13.6615 21.3335C13.7677 21.4443 13.851 21.575 13.9066 21.718C14.0233 22.0017 14.0233 22.3199 13.9066 22.6036C13.851 22.7466 13.7677 22.8773 13.6615 22.9881L10.1597 26.4838C10.0512 26.593 9.9221 26.6797 9.77986 26.7388C9.63762 26.798 9.48506 26.8285 9.33097 26.8285C9.17688 26.8285 9.02431 26.798 8.88207 26.7388C8.73983 26.6797 8.61073 26.593 8.50222 26.4838C8.39281 26.3755 8.30598 26.2466 8.24672 26.1046C8.18746 25.9626 8.15695 25.8103 8.15695 25.6565C8.15695 25.5026 8.18746 25.3503 8.24672 25.2083C8.30598 25.0664 8.39281 24.9375 8.50222 24.8292L10.0196 23.326H5.82922C4.9005 23.326 4.00982 22.9577 3.35311 22.3022C2.69641 21.6466 2.32747 20.7574 2.32747 19.8303V18.6651C2.32747 18.3561 2.45045 18.0597 2.66935 17.8412C2.88825 17.6226 3.18515 17.4999 3.49472 17.4999Z"
      })]
    });
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
    wetransferInspired: _v8 = !1,
    hidePaymentTypeSelector: _v9 = !1,
    hasError: _v10 = !1,
    storedMethod: _v11
  }) => (0, _v2.jsxs)(_v7.Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: _v8 ? "100%" : void 0,
    marginBottom: _v8 ? void 0 : "4",
    gap: _v8 ? void 0 : "2",
    children: [_v9 ? null : _v8 ? (0, _v2.jsx)(_v25, {
      formTypes: _v3,
      onPaymentTypeChanged: _v4,
      renderedFormType: _v5,
      expandedContent: _v0,
      hasError: _v10,
      storedMethod: _v11
    }) : _v7 ? (0, _v2.jsx)(_v19, {
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
      alignItems: "center",
      maxW: (0, _v3.rem)(468),
      status: _v2.status,
      children: (0, _v2.jsx)(_v5.AlertDescription, {
        children: _v2.message
      })
    }), !_v8 && _v1 && (0, _v2.jsx)(_v11.Text, {
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
    }), !_v8 && _v0]
  })], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  _v0.s(["useJunoSetupCheckoutApi", 0, function ({
    isAddingPaymentMethod: _v0,
    setPaymentMethodAsActive: _v1,
    billingAddress: _v2,
    iosJwt: _v3,
    trackStep: _v4
  }) {
    let _v5 = (0, _v28.useViewer)(),
      {
        state: {
          order: _v6
        }
      } = (0, _v29.useStateContext)(),
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
          if (!_v1.ok || !_v30(_v2) || "string" != typeof _v2.token || "number" != typeof _v2.expiresAt) throw Error((0, _v13.translate)({
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
          if (!_v0.ok || !_v30(_v1) || "string" != typeof _v1.paymentMethodId) throw Error((0, _v13.translate)({
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
  var _v31 = _v0.i(0);
  let _v32 = "juno_setup_checkout_flow_id";
  _v0.s(["useJunoSetupCheckoutTracking", 0, function (_v0, _v1) {
    let _v2 = (0, _v31.usePico)(),
      _v3 = (0, _v20.useRef)(null),
      _v4 = (0, _v20.useMemo)(() => null != _v1 ? {
        user_id: String(_v1)
      } : void 0, [_v1]);
    return {
      trackStep: (0, _v20.useCallback)(_v0 => {
        if (null === _v2) return;
        _v3.current ??= function () {
          try {
            let _v0 = sessionStorage.getItem(_v32);
            if (_v0) return _v0;
            let _v1 = crypto.randomUUID();
            return sessionStorage.setItem(_v32, _v1), _v1;
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