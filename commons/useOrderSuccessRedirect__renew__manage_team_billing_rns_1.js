{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.i(0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.i(0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = async _v0 => {
    if (!(_v0 instanceof _v5.NetworkError) || !_v0.res) return null;
    try {
      let _v0 = "function" == typeof _v0.res.clone ? _v0.res.clone() : _v0.res,
        _v1 = await _v0.json();
      if (_v1 && "object" == typeof _v1) return _v1;
    } catch {}
    return null;
  };
  _v0.s(["useOrderSuccessRedirect", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = (0, _v15.useViewer)(),
      _v2 = (0, _v1.useSearchParams)(),
      [, _v3] = (0, _v4.default)(_v17.ORDER_ID_LOCAL_STORAGE_KEY, void 0),
      [_v4, _v5] = (0, _v4.default)(_v13.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, void 0),
      {
        state: {
          checkoutType: _v6,
          subscriptionProduct: _v7,
          isMonthly: _v8,
          isBusinessUserEntity: _v9,
          creatorProductAction: _v10,
          creatorProductId: _v11,
          creatorProductTitlePageUrl: _v12,
          inPlayer: _v13,
          iosUserId: _v14
        }
      } = (0, _v21.useStateContext)(),
      {
        state: {
          submitOrder: _v15
        }
      } = (0, _v21.useApiStateContext)(),
      [_v16, _v17] = (0, _v8.usePatchMePreferences)(),
      {
        trackUserConverted: _v18
      } = (0, _v11.useCheckoutTracking)(_v14),
      _v19 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v15.called && _v15.data && _v16({
        select: [],
        variables: {
          ue: _v9 ? _v17.USER_ENTITY_BUSINESS : _v17.USER_ENTITY_PERSONAL
        }
      });
    }, [_v15, _v9, _v16]), (0, _v3.useEffect)(() => {
      if (!_v19.current && _v15.called && _v15.data && _v17.called && _v17.data && !_v17.loading && _v7) if (_v19.current = !0, _v3(null), _v4 && _v5(void 0), "renew" === _v6) window.location.href = "/manage/team/billing?rns=1";else if (_v13) window.opener ? window.location.href = `/store/ondemand/popup/${_v11}?ssl=1&player=1` : parent.location.reload();else {
        let _v0 = _v2 ? `&${_v2.toString()}` : "",
          _v1 = _v15.data.orderId,
          _v2 = (0, _v20.getCheckoutPeriodicity)(_v7.isCreatorProduct, _v10, _v8),
          _v3 = `/onboarding${_v0.query?.token ? "/mobile" : ""}?product_name=${_v7.name}&user_email=${_v1?.user ? _v1.user.email : ""}&order_id=${_v1}${_v0}`;
        if ("purchase" === _v6) {
          let _v0 = `${_v7.tier}-${_v2}-${_v15.data.isTrial ? "free" : "paid"}`;
          _v3 += `&product_id=${_v0}`;
        }
        if (_v15.data.promoCode && _v1?.user?.email && _v15.data.orderId && !_v15.data.isTrial) {
          let _v0 = encodeURIComponent(JSON.stringify({
            event: "extole_conversion_tracking",
            extole_purchase_v2: {
              first_name: _v15.data.firstName,
              last_name: _v15.data.lastName,
              email: _v1?.user?.email,
              partner_conversion_id: _v15.data.userId,
              cart_value: _v15.data.items.reduce((_v0, _v1) => _v0 + (_v1.subtotalAmount?.amount ?? 0), 0),
              coupon_code: _v15.data.promoCode.code,
              products: _v15.data.items.map(_v0 => _v0.id).join()
            }
          }));
          _v3 += `&extole_event_data=${_v0}`;
        }
        if (_v7.isCreatorProduct) window.location.href = _v12 || "/home";else {
          let _v0 = _v14.postCheckoutUrl.read();
          if (_v0) {
            _v14.postCheckoutUrl.clear();
            let _v0 = _v0.split(/[?#]/)[0].startsWith("/onboarding");
            "purchase" !== _v6 || _v0 || _v18({
              tier: String(_v7.tier),
              periodicity: _v2,
              isFreeTrial: _v15.data.isTrial
            }), setTimeout(() => {
              window.location.href = _v0;
            }, 0);
          } else window.location.href = _v3;
        }
      }
    }, [_v15, _v17, _v3, _v7, _v0, _v4, _v5, _v6, _v10, _v8]);
  }, "useSubmitOrder", 0, () => {
    let _v0 = (0, _v15.useViewer)(),
      _v1 = (0, _v3.useRef)(null),
      {
        settings: _v2
      } = (0, _v10.useOrionSettings)(),
      _v3 = _v2.use_juno_billing,
      _v4 = _v2.enable_sift_on_free_trials,
      {
        state: {
          billingPlan: _v5,
          checkoutType: _v6,
          currentSubscription: _v7,
          subscriptionProduct: _v8,
          tier: _v9,
          isMonthly: _v10,
          isFreeTrial: _v11,
          isBusinessUserEntity: _v12,
          creatorProductAction: _v13,
          creatorProductId: _v14,
          defaultPaymentType: _v15,
          iosUserId: _v16
        },
        dispatch: _v17
      } = (0, _v21.useStateContext)(),
      _v18 = _v9 && (0, _v20.isCreatorProductTier)(_v9),
      {
        state: {
          submitOrder: _v19
        },
        dispatch: _v20
      } = (0, _v21.useApiStateContext)(),
      {
        trackCheckoutFailed: _v21
      } = (0, _v11.useCheckoutTracking)(_v16),
      _v22 = (0, _v12.usePico)(),
      _v23 = (0, _v20.getCheckoutPeriodicity)(_v8?.isCreatorProduct, _v13, _v10),
      _v24 = (0, _v3.useCallback)(_v0 => {
        null !== _v22 && void 0 !== _v9 && (0, _v18.acquireCheckoutFailedLatch)() && _v21({
          tier: _v9,
          periodicity: _v23,
          isFreeTrial: _v11,
          ..._v0
        });
      }, [_v22, _v23, _v9, _v11, _v21]),
      _v25 = (0, _v3.useEffectEvent)(_v0 => {
        _v0?.provider === "zuora_hpm" && _v0 && (0, _v16.trackZuoraOrderStep)({
          hpm_session_id: _v0.xsrft,
          user_id: `${_v0.user?.id}`,
          step_name: "Order API Call completed",
          payment_method_id: _v0.paymentMethodId
        });
      }),
      [_v26, _v27] = (0, _v6.usePostMeOrders)(),
      [_v28, _v29] = (0, _v7.usePostMeOrdersSubscription)();
    (0, _v3.useEffect)(function () {
      let _v0,
        _v1 = () => {
          window.location.href = "/manage/team/billing?rns=0";
        },
        _v2 = !1;
      if (_v27.called ? _v0 = _v27 : _v29.called && (_v0 = _v29), _v0) {
        if (!_v0.loading) {
          let _v0 = _v1.current;
          _v1.current = null, _v25(_v0);
        }
        if (_v20({
          type: _v19.ApiActionTypes.SUBMIT_ORDER,
          payload: _v0
        }), _v0.error) {
          let _v0 = _v0.error;
          (async () => {
            let _v0 = await _v22(_v0);
            if (!_v2) {
              if (_v0 && "string" == typeof _v0.decline_category) {
                let _v0 = (0, _v18.isDeclineCategory)(_v0.decline_category) ? (0, _v18.canonicalMessageForCategory)(_v0.decline_category) : _v0.canonical_message || (0, _v9.getErrorMessage)();
                _v17({
                  type: _v19.ActionTypes.PAYMENT_ALERT,
                  payload: {
                    status: "error",
                    message: _v0
                  }
                }), _v24({
                  source: (_v0 => {
                    switch (_v0) {
                      case "stripe":
                        return "stripe";
                      case "paypal":
                        return "paypal";
                      default:
                        return "chase";
                    }
                  })(_v0.decline_source),
                  decline_category: _v0.decline_category ?? null,
                  error_code: _v0.decline_code ?? null,
                  error_message: _v0.canonical_message ?? null
                });
              } else {
                let _v0 = _v0?.error ?? _v0.message,
                  _v1 = (0, _v9.parseGatewayDeclineCode)(_v0);
                _v17({
                  type: _v19.ActionTypes.PAYMENT_ALERT,
                  payload: {
                    status: "error",
                    message: (0, _v9.getDeclineMessage)(_v1)
                  }
                });
                let _v2 = _v0 instanceof _v5.NetworkError ? _v0.status : null;
                _v24({
                  source: _v2 && _v2 < 500 ? "chase" : "network",
                  http_status: _v2,
                  endpoint: "me_orders",
                  error_code: _v1,
                  error_message: _v0
                });
              }
              "renew" === _v6 && _v1();
            }
          })();
        } else if (_v0.data) {
          let _v0 = _v0.data?.error;
          if (_v0) {
            _v20({
              type: _v19.ApiActionTypes.SUBMIT_ORDER,
              payload: {
                ..._v0,
                data: null,
                error: Error(_v0)
              }
            });
            let _v0 = (0, _v9.parseGatewayDeclineCode)(_v0),
              _v1 = (0, _v9.getDeclineMessage)(_v0);
            _v17({
              type: _v19.ActionTypes.PAYMENT_ALERT,
              payload: {
                status: "error",
                message: _v1
              }
            }), _v24({
              source: "chase",
              error_code: _v0,
              error_message: _v0
            }), "renew" === _v6 && _v1();
          } else if (_v0.data?.shouldBlockPurchase) {
            let _v0 = (0, _v9.getErrorMessage)(_v9.ERROR_TYPE.SIFT_ERROR);
            _v20({
              type: _v19.ApiActionTypes.SUBMIT_ORDER,
              payload: {
                ..._v0,
                data: null,
                error: Error(_v9.ERROR_TYPE.SIFT_ERROR)
              }
            }), _v17({
              type: _v19.ActionTypes.PAYMENT_ALERT,
              payload: {
                status: "error",
                message: _v0
              }
            }), _v24({
              source: "client",
              error_code: "sift_error",
              error_message: "SIFT_ERROR"
            }), "renew" === _v6 && _v1();
          } else _v20({
            type: _v19.ApiActionTypes.SUBMIT_ORDER,
            payload: {
              ..._v0,
              loading: !0
            }
          }), _v17({
            type: _v19.ActionTypes.ORDER_SUBMIT,
            payload: _v0.data
          }), _v17({
            type: _v19.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          });
        }
      }
      return () => {
        _v2 = !0;
      };
    }, [_v20, _v17, _v27, _v29, _v6, _v24]);
    let _v30 = _v0 => {
      _v1.current = _v0 ?? null, _v0?.provider === "zuora_hpm" && ((0, _v16.trackAddPaymentMethodSuccess)(!1), _v0 && (0, _v16.trackZuoraOrderStep)({
        hpm_session_id: _v0.xsrft,
        user_id: `${_v0.user?.id}`,
        step_name: "Order API Call started",
        payment_method_id: _v0.paymentMethodId
      }));
    };
    return "renew" === _v6 && _v7 ? [(_v0, _v1) => {
      (0, _v18.resetCheckoutFailedLatch)(), _v30(_v1), _v28({
        select: [],
        where: {
          subscriptionId: _v7?.id
        },
        variables: {
          type: _v6,
          billingPlanId: "",
          paymentMethodId: _v0.paymentMethodId,
          couponCode: _v0.couponCode,
          orderId: _v0.id,
          userEntity: _v12 ? _v17.USER_ENTITY_BUSINESS : _v17.USER_ENTITY_PERSONAL
        }
      });
    }, _v19] : "upgrade" === _v6 && _v7 && _v5 ? [(_v0, _v1) => {
      (0, _v18.resetCheckoutFailedLatch)(), _v30(_v1), _v28({
        select: [],
        where: {
          subscriptionId: _v7?.id
        },
        variables: {
          type: _v6,
          billingPlanId: _v5.id,
          paymentMethodId: _v0.paymentMethodId,
          couponCode: _v0.couponCode,
          orderId: _v0.id,
          userEntity: _v12 ? _v17.USER_ENTITY_BUSINESS : _v17.USER_ENTITY_PERSONAL
        }
      });
    }, _v19] : [(_v0, _v1) => {
      _v0.firstName && _v0.lastName && _v0.billingAddress && _v0.paymentMethodId && ((0, _v18.resetCheckoutFailedLatch)(), _v30(_v1), _v26({
        variables: {
          useJuno: !_v18 && _v3,
          billingAddressPresent: _v4,
          billingAddress: _v0.billingAddress,
          currency: _v0.currency,
          firstName: _v0.firstName,
          isTrial: !!_v0.isTrial,
          items: function (_v0) {
            if (_v13 && _v14) {
              let _v0 = _v0.items[0];
              _v0.billingPlanId = "", _v0.productId = Number(_v14);
            }
            return _v0.items;
          }(_v0),
          lastName: _v0.lastName,
          paymentMethodId: _v0.paymentMethodId,
          paymentFormType: _v15,
          couponCode: _v0.couponCode,
          vatId: _v0.vatId,
          orderId: _v0.id,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          userEntity: _v12 ? _v17.USER_ENTITY_BUSINESS : _v17.USER_ENTITY_PERSONAL,
          hpmSessionId: _v0?.xsrft ?? ""
        },
        select: []
      }));
    }, _v19];
  }]);
}