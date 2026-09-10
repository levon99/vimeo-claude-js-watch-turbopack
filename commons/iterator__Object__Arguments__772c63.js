{
  _v0.e, function (_v0, _v1) {
    "use strict";

    function _v2(_v0, _v1) {
      var _v2 = Object.keys(_v0);
      if (Object.getOwnPropertySymbols) {
        var _v3 = Object.getOwnPropertySymbols(_v0);
        _v1 && (_v3 = _v3.filter(function (_v0) {
          return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
        })), _v2.push.apply(_v2, _v3);
      }
      return _v2;
    }
    function _v3(_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
        _v1 % 2 ? _v2(Object(_v2), !0).forEach(function (_v0) {
          _v5(_v0, _v0, _v2[_v0]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v2(Object(_v2)).forEach(function (_v0) {
          Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
        });
      }
      return _v0;
    }
    function _v4(_v0) {
      return (_v4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    function _v5(_v0, _v1, _v2) {
      return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
        value: _v2,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : _v0[_v1] = _v2, _v0;
    }
    function _v6(_v0, _v1) {
      if (null == _v0) return {};
      var _v2,
        _v3,
        _v4 = function (_v0, _v1) {
          if (null == _v0) return {};
          var _v2,
            _v3,
            _v4 = {},
            _v5 = Object.keys(_v0);
          for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
          return _v4;
        }(_v0, _v1);
      if (Object.getOwnPropertySymbols) {
        var _v5 = Object.getOwnPropertySymbols(_v0);
        for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
      }
      return _v4;
    }
    function _v7(_v0, _v1) {
      return function (_v0) {
        if (Array.isArray(_v0)) return _v0;
      }(_v0) || function (_v0, _v1) {
        var _v2,
          _v3,
          _v4 = _v0 && ("u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"]);
        if (null != _v4) {
          var _v5 = [],
            _v6 = !0,
            _v7 = !1;
          try {
            for (_v4 = _v4.call(_v0); !(_v6 = (_v2 = _v4.next()).done) && (_v5.push(_v2.value), !_v1 || _v5.length !== _v1); _v6 = !0);
          } catch (_v0) {
            _v7 = !0, _v3 = _v0;
          } finally {
            try {
              _v6 || null == _v4.return || _v4.return();
            } finally {
              if (_v7) throw _v3;
            }
          }
          return _v5;
        }
      }(_v0, _v1) || function (_v0, _v1) {
        if (_v0) {
          if ("string" == typeof _v0) return _v8(_v0, _v1);
          var _v2 = Object.prototype.toString.call(_v0).slice(8, -1);
          if ("Object" === _v2 && _v0.constructor && (_v2 = _v0.constructor.name), "Map" === _v2 || "Set" === _v2) return Array.from(_v0);
          if ("Arguments" === _v2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v2)) return _v8(_v0, _v1);
        }
      }(_v0, _v1) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _v8(_v0, _v1) {
      (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
      for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
      return _v3;
    }
    var _v9,
      _v10,
      _v11,
      _v12,
      _v13,
      _v14 = {
        exports: {}
      };
    _v14.exports = function () {
      if (_v13) return _v12;
      _v13 = 1;
      var _v0 = _v11 ? _v10 : (_v11 = 1, _v10 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
      function _v1() {}
      function _v2() {}
      return _v2.resetWarningCache = _v1, _v12 = function () {
        function _v0(_v0, _v1, _v2, _v3, _v4, _v5) {
          if (_v5 !== _v0) {
            var _v6 = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw _v6.name = "Invariant Violation", _v6;
          }
        }
        function _v1() {
          return _v0;
        }
        _v0.isRequired = _v0;
        var _v2 = {
          array: _v0,
          bool: _v0,
          func: _v0,
          number: _v0,
          object: _v0,
          string: _v0,
          symbol: _v0,
          any: _v0,
          arrayOf: _v1,
          element: _v0,
          elementType: _v0,
          instanceOf: _v1,
          node: _v0,
          objectOf: _v1,
          oneOf: _v1,
          oneOfType: _v1,
          shape: _v1,
          exact: _v1,
          checkPropTypes: _v2,
          resetWarningCache: _v1
        };
        return _v2.PropTypes = _v2, _v2;
      };
    }()();
    var _v15 = (_v9 = _v14.exports) && _v9.__esModule && Object.prototype.hasOwnProperty.call(_v9, "default") ? _v9.default : _v9,
      _v16 = function (_v0, _v1, _v2) {
        var _v3 = !!_v2,
          _v4 = _v1.useRef(_v2);
        _v1.useEffect(function () {
          _v4.current = _v2;
        }, [_v2]), _v1.useEffect(function () {
          if (!_v3 || !_v0) return function () {};
          var _v0 = function () {
            _v4.current && _v4.current.apply(_v4, arguments);
          };
          return _v0.on(_v1, _v0), function () {
            _v0.off(_v1, _v0);
          };
        }, [_v3, _v1, _v0, _v4]);
      },
      _v17 = function (_v0) {
        var _v1 = _v1.useRef(_v0);
        return _v1.useEffect(function () {
          _v1.current = _v0;
        }, [_v0]), _v1.current;
      },
      _v18 = function (_v0) {
        return null !== _v0 && "object" === _v4(_v0);
      },
      _v19 = "[object Object]",
      _v20 = function _v0(_v1, _v2) {
        if (!_v18(_v1) || !_v18(_v2)) return _v1 === _v2;
        var _v3 = Array.isArray(_v1);
        if (_v3 !== Array.isArray(_v2)) return !1;
        var _v4 = Object.prototype.toString.call(_v1) === _v19;
        if (_v4 !== (Object.prototype.toString.call(_v2) === _v19)) return !1;
        if (!_v4 && !_v3) return _v1 === _v2;
        var _v5 = Object.keys(_v1),
          _v6 = Object.keys(_v2);
        if (_v5.length !== _v6.length) return !1;
        for (var _v7 = {}, _v8 = 0; _v8 < _v5.length; _v8 += 1) _v7[_v5[_v8]] = !0;
        for (var _v9 = 0; _v9 < _v6.length; _v9 += 1) _v7[_v6[_v9]] = !0;
        var _v10 = Object.keys(_v7);
        return _v10.length === _v5.length && _v10.every(function (_v0) {
          return _v0(_v1[_v0], _v2[_v0]);
        });
      },
      _v21 = function (_v0, _v1, _v2) {
        return _v18(_v0) ? Object.keys(_v0).reduce(function (_v0, _v1) {
          var _v2 = !_v18(_v1) || !_v20(_v0[_v1], _v1[_v1]);
          return _v2.includes(_v1) ? (_v2 && console.warn("Unsupported prop change: options.".concat(_v1, " is not a mutable property.")), _v0) : _v2 ? _v3(_v3({}, _v0 || {}), {}, _v5({}, _v1, _v0[_v1])) : _v0;
        }, null) : null;
      },
      _v22 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
      _v23 = function (_v0) {
        var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v22;
        if (null === _v0 || _v18(_v0) && "function" == typeof _v0.elements && "function" == typeof _v0.createToken && "function" == typeof _v0.createPaymentMethod && "function" == typeof _v0.confirmCardPayment) return _v0;
        throw Error(_v1);
      },
      _v24 = function (_v0) {
        var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v22;
        if (_v18(_v0) && "function" == typeof _v0.then) return {
          tag: "async",
          stripePromise: Promise.resolve(_v0).then(function (_v0) {
            return _v23(_v0, _v1);
          })
        };
        var _v2 = _v23(_v0, _v1);
        return null === _v2 ? {
          tag: "empty"
        } : {
          tag: "sync",
          stripe: _v2
        };
      },
      _v25 = function (_v0) {
        _v0 && _v0._registerWrapper && _v0.registerAppInfo && (_v0._registerWrapper({
          name: "react-stripe-js",
          version: "3.10.0"
        }), _v0.registerAppInfo({
          name: "react-stripe-js",
          version: "3.10.0",
          url: "https://stripe.com/docs/stripe-js/react"
        }));
      },
      _v26 = _v1.createContext(null);
    _v26.displayName = "ElementsContext";
    var _v27 = function (_v0, _v1) {
        if (!_v0) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(_v1, " in an <Elements> provider."));
        return _v0;
      },
      _v28 = function (_v0) {
        var _v1 = _v0.stripe,
          _v2 = _v0.options,
          _v3 = _v0.children,
          _v4 = _v1.useMemo(function () {
            return _v24(_v1);
          }, [_v1]),
          _v5 = _v7(_v1.useState(function () {
            return {
              stripe: "sync" === _v4.tag ? _v4.stripe : null,
              elements: "sync" === _v4.tag ? _v4.stripe.elements(_v2) : null
            };
          }), 2),
          _v6 = _v5[0],
          _v7 = _v5[1];
        _v1.useEffect(function () {
          var _v0 = !0,
            _v1 = function (_v0) {
              _v7(function (_v0) {
                return _v0.stripe ? _v0 : {
                  stripe: _v0,
                  elements: _v0.elements(_v2)
                };
              });
            };
          return "async" !== _v4.tag || _v6.stripe ? "sync" !== _v4.tag || _v6.stripe || _v1(_v4.stripe) : _v4.stripePromise.then(function (_v0) {
            _v0 && _v0 && _v1(_v0);
          }), function () {
            _v0 = !1;
          };
        }, [_v4, _v6, _v2]);
        var _v8 = _v17(_v1);
        _v1.useEffect(function () {
          null !== _v8 && _v8 !== _v1 && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
        }, [_v8, _v1]);
        var _v9 = _v17(_v2);
        return _v1.useEffect(function () {
          if (_v6.elements) {
            var _v0 = _v21(_v2, _v9, ["clientSecret", "fonts"]);
            _v0 && _v6.elements.update(_v0);
          }
        }, [_v2, _v9, _v6.elements]), _v1.useEffect(function () {
          _v25(_v6.stripe);
        }, [_v6.stripe]), _v1.createElement(_v26.Provider, {
          value: _v6
        }, _v3);
      };
    _v28.propTypes = {
      stripe: _v15.any,
      options: _v15.object
    };
    var _v29 = function (_v0) {
        return _v27(_v1.useContext(_v26), _v0);
      },
      _v30 = function (_v0) {
        return (0, _v0.children)(_v29("mounts <ElementsConsumer>"));
      };
    _v30.propTypes = {
      children: _v15.func.isRequired
    };
    var _v31 = ["on", "session"],
      _v32 = _v1.createContext(null);
    _v32.displayName = "CheckoutSdkContext";
    var _v33 = function (_v0, _v1) {
        if (!_v0) throw Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(_v1, " in an <CheckoutProvider> provider."));
        return _v0;
      },
      _v34 = _v1.createContext(null);
    _v34.displayName = "CheckoutContext";
    var _v35 = function (_v0, _v1) {
        if (!_v0) return null;
        _v0.on, _v0.session;
        var _v2 = _v6(_v0, _v31);
        return _v1 ? Object.assign(_v1, _v2) : Object.assign(_v0.session(), _v2);
      },
      _v36 = function (_v0) {
        var _v1 = _v0.stripe,
          _v2 = _v0.options,
          _v3 = _v0.children,
          _v4 = _v1.useMemo(function () {
            return _v24(_v1, "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.");
          }, [_v1]),
          _v5 = _v7(_v1.useState(null), 2),
          _v6 = _v5[0],
          _v7 = _v5[1],
          _v8 = _v7(_v1.useState(function () {
            return {
              stripe: "sync" === _v4.tag ? _v4.stripe : null,
              checkoutSdk: null
            };
          }), 2),
          _v9 = _v8[0],
          _v10 = _v8[1],
          _v11 = function (_v0, _v1) {
            _v10(function (_v0) {
              return _v0.stripe && _v0.checkoutSdk ? _v0 : {
                stripe: _v0,
                checkoutSdk: _v1
              };
            });
          },
          _v12 = _v1.useRef(!1);
        _v1.useEffect(function () {
          var _v0 = !0;
          return "async" !== _v4.tag || _v9.stripe ? "sync" === _v4.tag && _v4.stripe && !_v12.current && (_v12.current = !0, _v4.stripe.initCheckout(_v2).then(function (_v0) {
            _v0 && (_v11(_v4.stripe, _v0), _v0.on("change", _v7));
          })) : _v4.stripePromise.then(function (_v0) {
            _v0 && _v0 && !_v12.current && (_v12.current = !0, _v0.initCheckout(_v2).then(function (_v0) {
              _v0 && (_v11(_v0, _v0), _v0.on("change", _v7));
            }));
          }), function () {
            _v0 = !1;
          };
        }, [_v4, _v9, _v2, _v7]);
        var _v13 = _v17(_v1);
        _v1.useEffect(function () {
          null !== _v13 && _v13 !== _v1 && console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.");
        }, [_v13, _v1]);
        var _v14 = _v17(_v2),
          _v15 = _v17(_v9.checkoutSdk);
        _v1.useEffect(function () {
          if (_v9.checkoutSdk) {
            var _v0,
              _v1,
              _v2,
              _v3,
              _v4 = !!(!_v15 && _v9.checkoutSdk),
              _v5 = null == _v14 || null == (_v0 = _v14.elementsOptions) ? void 0 : _v0.appearance,
              _v6 = null == _v2 || null == (_v1 = _v2.elementsOptions) ? void 0 : _v1.appearance,
              _v7 = !_v20(_v6, _v5);
            _v6 && (_v7 || _v4) && _v9.checkoutSdk.changeAppearance(_v6);
            var _v8 = null == _v14 || null == (_v2 = _v14.elementsOptions) ? void 0 : _v2.fonts,
              _v9 = null == _v2 || null == (_v3 = _v2.elementsOptions) ? void 0 : _v3.fonts,
              _v10 = !_v20(_v8, _v9);
            _v9 && (_v10 || _v4) && _v9.checkoutSdk.loadFonts(_v9);
          }
        }, [_v2, _v14, _v9.checkoutSdk, _v15]), _v1.useEffect(function () {
          _v25(_v9.stripe);
        }, [_v9.stripe]);
        var _v16 = _v1.useMemo(function () {
          return _v35(_v9.checkoutSdk, _v6);
        }, [_v9.checkoutSdk, _v6]);
        return _v9.checkoutSdk ? _v1.createElement(_v32.Provider, {
          value: _v9
        }, _v1.createElement(_v34.Provider, {
          value: _v16
        }, _v3)) : null;
      };
    _v36.propTypes = {
      stripe: _v15.any,
      options: _v15.shape({
        fetchClientSecret: _v15.func.isRequired,
        elementsOptions: _v15.object
      }).isRequired
    };
    var _v37 = function (_v0) {
        var _v1 = _v1.useContext(_v32),
          _v2 = _v1.useContext(_v26);
        if (_v1 && _v2) throw Error("You cannot wrap the part of your app that ".concat(_v0, " in both <CheckoutProvider> and <Elements> providers."));
        return _v1 ? _v33(_v1, _v0) : _v27(_v2, _v0);
      },
      _v38 = ["mode"],
      _v39 = function (_v0, _v1) {
        var _v2 = "".concat(_v0.charAt(0).toUpperCase() + _v0.slice(1), "Element"),
          _v3 = _v1 ? function (_v0) {
            _v37("mounts <".concat(_v2, ">"));
            var _v1 = _v0.id,
              _v2 = _v0.className;
            return _v1.createElement("div", {
              id: _v1,
              className: _v2
            });
          } : function (_v0) {
            var _v1,
              _v2 = _v0.id,
              _v3 = _v0.className,
              _v4 = _v0.options,
              _v5 = void 0 === _v4 ? {} : _v4,
              _v6 = _v0.onBlur,
              _v7 = _v0.onFocus,
              _v8 = _v0.onReady,
              _v9 = _v0.onChange,
              _v10 = _v0.onEscape,
              _v11 = _v0.onClick,
              _v12 = _v0.onLoadError,
              _v13 = _v0.onLoaderStart,
              _v14 = _v0.onNetworksChange,
              _v15 = _v0.onConfirm,
              _v16 = _v0.onCancel,
              _v17 = _v0.onShippingAddressChange,
              _v18 = _v0.onShippingRateChange,
              _v19 = _v0.onSavedPaymentMethodRemove,
              _v20 = _v0.onSavedPaymentMethodUpdate,
              _v21 = _v37("mounts <".concat(_v2, ">")),
              _v22 = "elements" in _v21 ? _v21.elements : null,
              _v23 = "checkoutSdk" in _v21 ? _v21.checkoutSdk : null,
              _v24 = _v7(_v1.useState(null), 2),
              _v25 = _v24[0],
              _v26 = _v24[1],
              _v27 = _v1.useRef(null),
              _v28 = _v1.useRef(null);
            _v16(_v25, "blur", _v6), _v16(_v25, "focus", _v7), _v16(_v25, "escape", _v10), _v16(_v25, "click", _v11), _v16(_v25, "loaderror", _v12), _v16(_v25, "loaderstart", _v13), _v16(_v25, "networkschange", _v14), _v16(_v25, "confirm", _v15), _v16(_v25, "cancel", _v16), _v16(_v25, "shippingaddresschange", _v17), _v16(_v25, "shippingratechange", _v18), _v16(_v25, "savedpaymentmethodremove", _v19), _v16(_v25, "savedpaymentmethodupdate", _v20), _v16(_v25, "change", _v9), _v8 && (_v1 = "expressCheckout" === _v0 ? _v8 : function () {
              _v8(_v25);
            }), _v16(_v25, "ready", _v1), _v1.useLayoutEffect(function () {
              if (null === _v27.current && null !== _v28.current && (_v22 || _v23)) {
                var _v0 = null;
                if (_v23) switch (_v0) {
                  case "payment":
                    _v0 = _v23.createPaymentElement(_v5);
                    break;
                  case "address":
                    if ("mode" in _v5) {
                      var _v1 = _v5.mode,
                        _v2 = _v6(_v5, _v38);
                      if ("shipping" === _v1) _v0 = _v23.createShippingAddressElement(_v2);else if ("billing" === _v1) _v0 = _v23.createBillingAddressElement(_v2);else throw Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                    } else throw Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                    break;
                  case "expressCheckout":
                    _v0 = _v23.createExpressCheckoutElement(_v5);
                    break;
                  case "currencySelector":
                    _v0 = _v23.createCurrencySelectorElement();
                    break;
                  case "taxId":
                    _v0 = _v23.createTaxIdElement(_v5);
                    break;
                  default:
                    throw Error("Invalid Element type ".concat(_v2, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                } else _v22 && (_v0 = _v22.create(_v0, _v5));
                _v27.current = _v0, _v26(_v0), _v0 && _v0.mount(_v28.current);
              }
            }, [_v22, _v23, _v5]);
            var _v29 = _v17(_v5);
            return _v1.useEffect(function () {
              if (_v27.current) {
                var _v0 = _v21(_v5, _v29, ["paymentRequest"]);
                _v0 && "update" in _v27.current && _v27.current.update(_v0);
              }
            }, [_v5, _v29]), _v1.useLayoutEffect(function () {
              return function () {
                if (_v27.current && "function" == typeof _v27.current.destroy) try {
                  _v27.current.destroy(), _v27.current = null;
                } catch (_v0) {}
              };
            }, []), _v1.createElement("div", {
              id: _v2,
              className: _v3,
              ref: _v28
            });
          };
        return _v3.propTypes = {
          id: _v15.string,
          className: _v15.string,
          onChange: _v15.func,
          onBlur: _v15.func,
          onFocus: _v15.func,
          onReady: _v15.func,
          onEscape: _v15.func,
          onClick: _v15.func,
          onLoadError: _v15.func,
          onLoaderStart: _v15.func,
          onNetworksChange: _v15.func,
          onConfirm: _v15.func,
          onCancel: _v15.func,
          onShippingAddressChange: _v15.func,
          onShippingRateChange: _v15.func,
          onSavedPaymentMethodRemove: _v15.func,
          onSavedPaymentMethodUpdate: _v15.func,
          options: _v15.object
        }, _v3.displayName = _v2, _v3.__elementType = _v0, _v3;
      },
      _v40 = "u" < typeof window,
      _v41 = _v1.createContext(null);
    _v41.displayName = "EmbeddedCheckoutProviderContext";
    var _v42 = function () {
        var _v0 = _v1.useContext(_v41);
        if (!_v0) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
        return _v0;
      },
      _v43 = _v40 ? function (_v0) {
        var _v1 = _v0.id,
          _v2 = _v0.className;
        return _v42(), _v1.createElement("div", {
          id: _v1,
          className: _v2
        });
      } : function (_v0) {
        var _v1 = _v0.id,
          _v2 = _v0.className,
          _v3 = _v42().embeddedCheckout,
          _v4 = _v1.useRef(!1),
          _v5 = _v1.useRef(null);
        return _v1.useLayoutEffect(function () {
          return !_v4.current && _v3 && null !== _v5.current && (_v3.mount(_v5.current), _v4.current = !0), function () {
            if (_v4.current && _v3) try {
              _v3.unmount(), _v4.current = !1;
            } catch (_v0) {}
          };
        }, [_v3]), _v1.createElement("div", {
          ref: _v5,
          id: _v1,
          className: _v2
        });
      },
      _v44 = _v39("auBankAccount", _v40),
      _v45 = _v39("card", _v40),
      _v46 = _v39("cardNumber", _v40),
      _v47 = _v39("cardExpiry", _v40),
      _v48 = _v39("cardCvc", _v40),
      _v49 = _v39("fpxBank", _v40),
      _v50 = _v39("iban", _v40),
      _v51 = _v39("idealBank", _v40),
      _v52 = _v39("p24Bank", _v40),
      _v53 = _v39("epsBank", _v40),
      _v54 = _v39("payment", _v40),
      _v55 = _v39("expressCheckout", _v40),
      _v56 = _v39("currencySelector", _v40),
      _v57 = _v39("paymentRequestButton", _v40),
      _v58 = _v39("linkAuthentication", _v40),
      _v59 = _v39("address", _v40),
      _v60 = _v39("shippingAddress", _v40),
      _v61 = _v39("paymentMethodMessaging", _v40),
      _v62 = _v39("affirmMessage", _v40),
      _v63 = _v39("afterpayClearpayMessage", _v40),
      _v64 = _v39("taxId", _v40);
    _v0.AddressElement = _v59, _v0.AffirmMessageElement = _v62, _v0.AfterpayClearpayMessageElement = _v63, _v0.AuBankAccountElement = _v44, _v0.CardCvcElement = _v48, _v0.CardElement = _v45, _v0.CardExpiryElement = _v47, _v0.CardNumberElement = _v46, _v0.CheckoutProvider = _v36, _v0.CurrencySelectorElement = _v56, _v0.Elements = _v28, _v0.ElementsConsumer = _v30, _v0.EmbeddedCheckout = _v43, _v0.EmbeddedCheckoutProvider = function (_v0) {
      var _v1 = _v0.stripe,
        _v2 = _v0.options,
        _v3 = _v0.children,
        _v4 = _v1.useMemo(function () {
          return _v24(_v1, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.");
        }, [_v1]),
        _v5 = _v1.useRef(null),
        _v6 = _v1.useRef(null),
        _v7 = _v7(_v1.useState({
          embeddedCheckout: null
        }), 2),
        _v8 = _v7[0],
        _v9 = _v7[1];
      _v1.useEffect(function () {
        if (!_v6.current && !_v5.current) {
          var _v0 = function (_v0) {
            _v6.current || _v5.current || (_v6.current = _v0, _v5.current = _v6.current.initEmbeddedCheckout(_v2).then(function (_v0) {
              _v9({
                embeddedCheckout: _v0
              });
            }));
          };
          "async" === _v4.tag && !_v6.current && (_v2.clientSecret || _v2.fetchClientSecret) ? _v4.stripePromise.then(function (_v0) {
            _v0 && _v0(_v0);
          }) : "sync" === _v4.tag && !_v6.current && (_v2.clientSecret || _v2.fetchClientSecret) && _v0(_v4.stripe);
        }
      }, [_v4, _v2, _v8, _v6]), _v1.useEffect(function () {
        return function () {
          _v8.embeddedCheckout ? (_v5.current = null, _v8.embeddedCheckout.destroy()) : _v5.current && _v5.current.then(function () {
            _v5.current = null, _v8.embeddedCheckout && _v8.embeddedCheckout.destroy();
          });
        };
      }, [_v8.embeddedCheckout]), _v1.useEffect(function () {
        _v25(_v6);
      }, [_v6]);
      var _v10 = _v17(_v1);
      _v1.useEffect(function () {
        null !== _v10 && _v10 !== _v1 && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
      }, [_v10, _v1]);
      var _v11 = _v17(_v2);
      return _v1.useEffect(function () {
        if (null != _v11) {
          if (null == _v2) return void console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
          void 0 === _v2.clientSecret && void 0 === _v2.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != _v11.clientSecret && _v2.clientSecret !== _v11.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != _v11.fetchClientSecret && _v2.fetchClientSecret !== _v11.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != _v11.onComplete && _v2.onComplete !== _v11.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."), null != _v11.onShippingDetailsChange && _v2.onShippingDetailsChange !== _v11.onShippingDetailsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."), null != _v11.onLineItemsChange && _v2.onLineItemsChange !== _v11.onLineItemsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.");
        }
      }, [_v11, _v2]), _v1.createElement(_v41.Provider, {
        value: _v8
      }, _v3);
    }, _v0.EpsBankElement = _v53, _v0.ExpressCheckoutElement = _v55, _v0.FpxBankElement = _v49, _v0.IbanElement = _v50, _v0.IdealBankElement = _v51, _v0.LinkAuthenticationElement = _v58, _v0.P24BankElement = _v52, _v0.PaymentElement = _v54, _v0.PaymentMethodMessagingElement = _v61, _v0.PaymentRequestButtonElement = _v57, _v0.ShippingAddressElement = _v60, _v0.TaxIdElement = _v64, _v0.useCheckout = function () {
      _v33(_v1.useContext(_v32), "calls useCheckout()");
      var _v0 = _v1.useContext(_v34);
      if (!_v0) throw Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
      return _v0;
    }, _v0.useElements = function () {
      return _v29("calls useElements()").elements;
    }, _v0.useStripe = function () {
      return _v37("calls useStripe()").stripe;
    };
  }(_v2, _v0.r(0));
}