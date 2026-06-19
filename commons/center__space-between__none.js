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
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = {
      amex: _v22.AmexNegative,
      visa: _v23.VisaNegative,
      discover: _v24.DiscoverNegative,
      mastercard: _v25.MastercardNegative,
      off: _v28.CcOff,
      error: _v27.CcError,
      paypal: _v26.PaypalNegative
    },
    _v32 = ({
      selected: _v0,
      paymentMethod: _v1,
      onClick: _v2,
      methodDisabled: _v3 = !1,
      inGracePeriod: _v4 = !1
    }) => {
      let _v5 = _v1?.uri || "",
        _v6 = _v5.substring(_v5.lastIndexOf("/") + 1),
        _v7 = (0, _v29.isPaymentExpired)(_v1),
        _v8 = _v3 || !!_v1.disableOption,
        _v9 = _v31[_v1.type] || _v31.off;
      return _v4 ? (0, _v1.jsxs)(_v20.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        onClick: _v8 ? void 0 : () => _v2(_v6),
        pointerEvents: _v7 || _v8 ? "none" : "auto",
        p: 2,
        children: [(0, _v1.jsxs)(_v20.Flex, {
          alignItems: "center",
          gap: 1,
          children: [(0, _v1.jsx)(_v30.CardIconContainer, {
            "data-id": "selected",
            marginNeeded: !_v0,
            children: (0, _v1.jsx)(_v9, {
              color: _v0 || _v8 ? "darkBlueAlpha.500" : "inherit"
            })
          }), (0, _v1.jsx)(_v33, {
            paymentMethod: _v1,
            disabled: _v8,
            methodDisabled: _v3,
            expired: _v7,
            selected: _v0,
            inGracePeriod: _v4
          })]
        }), _v0 && (0, _v1.jsx)(_v21.Checkmark, {
          width: "16",
          height: "16",
          color: _v7 || _v8 ? "darkBlueAlpha.500" : "inherit"
        })]
      }, _v6) : (0, _v1.jsxs)(_v34, {
        className: `${_v8 ? "disabled" : ""} ${_v1.inUse ? "active" : ""}`,
        onClick: _v8 ? void 0 : () => _v2(_v6),
        expired: _v7,
        children: [_v0 && (0, _v1.jsx)(_v35, {
          children: (0, _v1.jsx)(_v21.Checkmark, {})
        }), (0, _v1.jsx)(_v30.CardIconContainer, {
          "data-id": "selected",
          marginNeeded: !_v0,
          children: (0, _v1.jsx)(_v9, {})
        }), (0, _v1.jsx)(_v33, {
          paymentMethod: _v1,
          disabled: _v8,
          methodDisabled: _v3,
          expired: _v7,
          selected: _v0
        })]
      }, _v6);
    },
    _v33 = ({
      paymentMethod: _v0,
      disabled: _v1,
      methodDisabled: _v2,
      expired: _v3,
      selected: _v4,
      inGracePeriod: _v5 = !1
    }) => {
      let {
          paypalEmail: _v6,
          lastFour: _v7,
          textType: _v8,
          type: _v9
        } = _v0,
        _v10 = "paypal" === _v9 ? _v6 || _v18.default.PayPal : _v7 || _v8 || _v18.default.Unknown,
        _v11 = _v5 && (_v4 || _v1 || _v2) ? "var(--vimeo-colors-darkBlueAlpha-500)" : void 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0.lastFour && (0, _v1.jsx)(_v30.CardLastFourDots, {
          colorOverride: _v11,
          expired: _v3,
          disabled: _v1,
          warning: _v2,
          children: "...."
        }), (0, _v1.jsx)(_v30.CardLastFour, {
          colorOverride: _v11,
          expired: _v3 || "paypal" === _v9 || !_v7 && !_v8,
          disabled: _v1,
          warning: _v2,
          children: _v10
        }), !_v5 && _v3 && (0, _v1.jsx)(_v30.CardExpired, {
          paddingNeeded: !0,
          children: _v18.default.CardExpired
        })]
      });
    },
    _v34 = _v3.default.div.withConfig({
      displayName: "PaymentMethodItem__PaymentMethodContainer",
      componentId: "sc-e8b5d5ec-0"
    })`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  height: ${(0, _v19.rem)(40)};
  gap: ${(0, _v19.rem)(8)};
  cursor: ${({
      expired: _v0
    }) => _v0 ? "default" : "pointer"};
  ${({
      expired: _v0
    }) => _v0 && "pointer-events: none"};
  opacity: ${({
      expired: _v0
    }) => _v0 ? .5 : 1};
  padding: 0 ${(0, _v19.rem)(8)};

  &.active {
    background-color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? (0, _v16.grayscale)(500) : (0, _v16.slate)(50)};
  }

  &:hover {
    background-color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? (0, _v16.grayscale)(500) : (0, _v16.slate)(50)};
  }

  &.disabled {
    cursor: default;

    &.active {
      background-color: inherit;
    }

    &:hover {
      background-color: inherit;
    }
  }
`,
    _v35 = _v3.default.div.withConfig({
      displayName: "PaymentMethodItem__CheckmarkContainer",
      componentId: "sc-e8b5d5ec-1"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: ${(0, _v19.rem)(20)};
    width: ${(0, _v19.rem)(20)};
    color: ${(0, _v16.blue)(500)};
    & path {
      fill: ${(0, _v16.blue)(500)};
    }
  }
`,
    _v36 = ({
      edit: _v0 = !0,
      status: _v1,
      paymentMethods: _v2 = [],
      onSelect: _v3,
      isOperationOngoing: _v4,
      activePaymentMethod: _v5,
      trackAddPaymentMethod: _v6 = () => null,
      trackOpenSelectDropdown: _v7 = () => null,
      hasPaymentExpired: _v8,
      allPaymentMethodsExpired: _v9,
      addNewPaymentMethod: _v10,
      inGracePeriod: _v11 = !1
    }) => {
      let [_v12, _v13] = (0, _v2.useState)(!1),
        _v14 = (0, _v2.useRef)(null);
      (0, _v17.default)([_v14], () => {
        _v12 && _v13(!1);
      }, null, [_v12]), (0, _v2.useEffect)(() => _v13(!_v4 && _v12), [_v4]);
      let {
        onOpen: _v15,
        onClose: _v16,
        isOpen: _v17
      } = (0, _v9.useDisclosure)();
      return (0, _v1.jsxs)(_v6.Popover, {
        isOpen: _v17,
        initialFocusRef: _v14,
        onOpen: _v15,
        onClose: _v16,
        placement: "bottom",
        matchWidth: !0,
        children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
          children: (0, _v1.jsx)(_v10.Box, {
            border: `${(0, _v11.rem)(1)} solid`,
            borderRadius: (0, _v11.rem)(8),
            borderColor: _v8 || _v10 ? "red.600" : "input-stroke",
            background: "input-fill",
            width: "100%",
            children: (0, _v1.jsx)(_v10.Box, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: (0, _v11.rem)(32),
              border: "none",
              cursor: _v1 && !_v4 ? "pointer" : "default",
              opacity: (_v11 || _v1) && !_v4 ? "1" : "0.5",
              onClick: () => {
                _v1 && !_v4 && _v13(!0), _v7();
              },
              children: (0, _v1.jsx)(_v37, {
                addNewPaymentMethod: _v10,
                activePaymentMethod: _v5,
                allPaymentMethodsExpired: _v9,
                hasPaymentExpired: _v8,
                isOperationOngoing: _v4,
                inGracePeriod: _v11,
                status: _v1
              })
            })
          })
        }), (0, _v1.jsx)(_v8.PopoverContent, {
          ref: _v14,
          children: (0, _v1.jsxs)(_v10.Box, {
            children: [(0, _v1.jsx)(_v10.Box, {
              maxHeight: (0, _v11.rem)(150),
              overflow: "auto",
              children: _v2.map(_v0 => (0, _v1.jsx)(_v32, {
                methodDisabled: _v11 && _v0.uri === _v5?.uri,
                selected: _v0.uri === _v5?.uri,
                paymentMethod: _v0,
                onClick: _v0 => {
                  _v3(_v0), _v16();
                },
                inGracePeriod: _v11
              }, _v0.uri))
            }), _v11 && (0, _v1.jsx)(_v10.Box, {
              borderColor: "stroke",
              borderWidth: "1px 0 0 0",
              pt: 1,
              width: "100%",
              children: (0, _v1.jsxs)(_v5.Button, {
                variant: "tertiary",
                width: "100%",
                p: 2,
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
                onClick: () => {
                  window.open("/checkout/payments/new?update=1", "_blank"), _v6();
                },
                children: [(0, _v1.jsx)(_v15.PlusCircle, {}), (0, _v1.jsx)(_v12.Text, {
                  variant: "body-md",
                  whiteSpace: "break-spaces",
                  children: _v18.default.UpdatePaymentMethod
                })]
              })
            }), !_v11 && (_v0 || _v9) && (0, _v1.jsx)(_v40, {
              children: (0, _v1.jsx)(_v41, {
                "data-id": "newCardButton",
                leftIcon: (0, _v1.jsx)(_v14.Plus, {}),
                _hover: "none",
                size: "xs",
                variant: "tertiary",
                justifyContent: "start",
                color: (0, _v16.blue)(500),
                onClick: () => {
                  window.open("/checkout/payments/new", "_blank"), _v6();
                },
                children: _v18.default.AddNewCard
              })
            })]
          })
        })]
      });
    },
    _v37 = ({
      addNewPaymentMethod: _v0,
      activePaymentMethod: _v1,
      allPaymentMethodsExpired: _v2,
      hasPaymentExpired: _v3,
      isOperationOngoing: _v4,
      inGracePeriod: _v5,
      status: _v6
    }) => {
      if (!_v0 && !_v1) return null;
      let _v7 = !_v5 && (_v2 || _v0) ? _v31.error : _v1 && _v31[_v1.type] || _v31.off;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v10.Box, {
          display: "flex",
          alignItems: "center",
          gap: (0, _v11.rem)(8),
          padding: `0 ${(0, _v11.rem)(8)}`,
          cursor: _v6 && !_v4 ? "pointer" : "default",
          width: "100%",
          children: [_v4 ? (0, _v1.jsx)(_v39, {
            children: (0, _v1.jsx)(_v4.Spinner, {
              size: "sm"
            })
          }) : (0, _v1.jsx)(_v38, {
            "data-id": "cardIcon",
            children: (0, _v1.jsx)(_v7, {
              color: _v5 ? "darkBlueAlpha.500" : "inherit"
            })
          }), !_v5 && (_v2 || _v0) ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [!_v0 && _v2 && (0, _v1.jsx)(_v30.CardExpired, {
              paddingNeeded: !1,
              children: _v18.default.AllCardsExpiredAddNew
            }), _v0 && (0, _v1.jsx)(_v30.CardExpired, {
              paddingNeeded: !1,
              children: _v18.default.AddNewCard
            })]
          }) : _v1 ? (0, _v1.jsx)(_v33, {
            paymentMethod: _v1,
            disabled: !0,
            methodDisabled: !1,
            expired: !1,
            selected: !1,
            inGracePeriod: _v5
          }) : null]
        }), (0, _v1.jsx)(_v13.ChevronDownSmall, {
          height: (0, _v11.rem)(20),
          width: (0, _v11.rem)(20),
          color: !_v5 && (_v3 || _v0) ? (0, _v16.red)(600) : "text-primary",
          mr: 8
        })]
      });
    },
    _v38 = _v0 => (0, _v1.jsx)(_v10.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ..._v0,
      children: _v0.children
    });
  _v3.default.div.withConfig({
    displayName: "SelectPaymentMethod__ScrollablePopOverList",
    componentId: "sc-42ba1e82-0"
  })`
  max-height: ${(0, _v11.rem)(150)};
  overflow: auto;
`;
  let _v39 = _v3.default.div.withConfig({
      displayName: "SelectPaymentMethod__StyledLoaderSection",
      componentId: "sc-42ba1e82-1"
    })`
  padding: 0 ${(0, _v11.rem)(8)};
  align-items: center;
`,
    _v40 = _v3.default.div.withConfig({
      displayName: "SelectPaymentMethod__NewCardContainer",
      componentId: "sc-42ba1e82-2"
    })`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${(0, _v11.rem)(40)};

  & svg {
    height: ${(0, _v11.rem)(20)};
    width: ${(0, _v11.rem)(20)};
    color: ${(0, _v16.blue)(500)};
    & path {
      fill: ${(0, _v16.blue)(500)};
    }
  }

  &:hover {
    background-color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? (0, _v16.grayscale)(500) : (0, _v16.slate)(50)};
  }
`,
    _v41 = (0, _v3.default)(_v5.Button).withConfig({
      displayName: "SelectPaymentMethod__NewCardButton",
      componentId: "sc-42ba1e82-3"
    })`
  display: flex;
  margin: 0;
  font-size: ${(0, _v11.rem)(12)};
  width: 100%;
  font-weight: 700;
  padding: 0;
  &:hover {
    color: ${(0, _v16.blue)(500)};
  }
  &&& svg {
    height: ${(0, _v11.rem)(20)};
    width: ${(0, _v11.rem)(20)};
  }
`;
  _v0.s(["SelectPaymentMethod", 0, _v36, "default", 0, _v36], 0);
}