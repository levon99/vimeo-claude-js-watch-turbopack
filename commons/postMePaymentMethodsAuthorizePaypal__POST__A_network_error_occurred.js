{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v5.measureLatency)("postMePaymentMethodsAuthorizePaypal", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/payment_methods/authorize_paypal?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/payment_methods/authorize_paypal${(0, _v4.serializeQuery)(_v0)}`, _v7({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v10, {
    endpoint: "/me/payment_methods/authorize_paypal",
    method: "POST"
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["useAuthorizePaypal", 0, () => {
    let {
        dispatch: _v0,
        state: {
          subscriptionProduct: _v1,
          checkoutType: _v2,
          currentSubscription: _v3,
          billingPlan: _v4,
          order: _v5,
          isBusinessUserEntity: _v6,
          isMonthly: _v7,
          isFreeTrial: _v8,
          tier: _v9,
          creatorProductAction: _v10,
          creatorProductId: _v11,
          iosUserId: _v12
        }
      } = (0, _v19.useStateContext)(),
      {
        settings: _v13
      } = (0, _v13.useOrionSettings)(),
      _v14 = _v13.use_juno_billing,
      _v15 = _v9 && (0, _v18.isCreatorProductTier)(_v9),
      [_v16, _v17] = _v10(),
      _v18 = (0, _v1.useRouter)(),
      {
        trackCheckoutFailed: _v19
      } = (0, _v14.useCheckoutTracking)(_v12),
      _v20 = (0, _v18.getCheckoutPeriodicity)(_v1?.isCreatorProduct, _v10, _v7),
      _v21 = (0, _v2.useRef)(!1);
    return (0, _v2.useEffect)(function () {
      if (_v17.error) {
        let _v0 = (0, _v12.getErrorMessage)(_v12.ERROR_TYPE.PAYPAL_CONNECTION);
        _v0({
          type: _v17.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v0
          }
        }), void 0 === _v9 || _v21.current || (_v21.current = !0, _v19({
          tier: _v9,
          periodicity: _v20,
          isFreeTrial: _v8,
          error_message: _v0,
          error_code: "paypal_authorize_failed"
        }));
      } else _v21.current = !1;
    }, [_v17.error, _v0, _v19, _v9, _v20, _v8]), (0, _v2.useEffect)(function () {
      if (_v17.data) {
        let {
          redirectUrl: _v0
        } = _v17.data;
        window.location.href = _v0;
      }
    }, [_v17.data]), [() => {
      if ("upgrade" === _v2 && (0, _v18.isUpgradeToPlanAlreadyOnSubscription)(_v4?.id, _v3)) return void _v0({
        type: _v17.ActionTypes.PAYMENT_ALERT,
        payload: {
          status: "error",
          message: (0, _v11.translate)({
            singular: "You are already on this plan.",
            dictionary: {
              es: {
                singular: "Ya estás en este plan"
              },
              "de-DE": {
                singular: "Sie sind bereits in diesem Tarif"
              },
              "fr-FR": {
                singular: "Vous êtes déjà sur ce forfait"
              },
              "ja-JP": {
                singular: "すでにこのプランをご利用中です"
              },
              "ko-KR": {
                singular: "이미 이 요금제를 이용 중입니다"
              },
              "pt-BR": {
                singular: "Você já está neste plano"
              },
              "zh-CN": {
                singular: "您已在此计划中"
              }
            }
          })
        }
      });
      let _v0 = (({
        billingPlanId: _v0,
        checkoutType: _v1,
        creatorProductAction: _v2,
        creatorProductId: _v3,
        isCreatorProduct: _v4,
        mwru: _v5,
        orderId: _v6,
        origin: _v7,
        postCheckoutUrl: _v8,
        productName: _v9,
        subscriptionId: _v10,
        token: _v11,
        useJunoBilling: _v12,
        userEntity: _v13
      }) => {
        let _v14 = _v9 ? encodeURIComponent(_v9) : "",
          _v15 = _v11 ? `&token=${_v11}&mwru=${_v5}` : "",
          _v16 = `${_v7}/payments/paypal/authorized?product_name=${_v14}&checkout_type=${_v1}&user_entity=${_v13}${_v15}`;
        _v12 && !_v4 && (_v16 += "&use_juno=1"), "purchase" === _v1 ? _v16 += `&order_id=${_v6}` : _v16 += `&subscription_id=${_v10}&billing_plan_id=${_v0}`;
        let _v17 = _v2 && _v3 ? `/checkout/ondemand?action=${_v2}&product=${_v3}` : `/checkout/${_v14.toLowerCase()}?${_v15.substring(1)}`;
        return _v16 += `&error_redirect=${encodeURIComponent(_v17)}`, _v8 && (_v16 += `&post_checkout_url=${encodeURIComponent(_v8)}`), _v16;
      })({
        billingPlanId: _v4?.id,
        checkoutType: _v2,
        creatorProductAction: _v10,
        creatorProductId: _v11,
        isCreatorProduct: _v15,
        mwru: _v18.query?.mwru,
        orderId: _v5?.id,
        origin: window.location.origin,
        postCheckoutUrl: _v15.postCheckoutUrl.read(),
        productName: _v1?.name,
        subscriptionId: _v3?.id,
        token: _v18.query?.token,
        useJunoBilling: _v14,
        userEntity: _v6 ? _v16.USER_ENTITY_BUSINESS : _v16.USER_ENTITY_PERSONAL
      });
      _v16({
        variables: {
          cancelUrl: window.location.href,
          notifyUrl: "/",
          returnUrl: _v0
        },
        select: ["redirectUrl"]
      });
    }, _v17];
  }, "useAuthorizePaypalForAddPaymentMethod", 0, () => {
    let [_v0, _v1] = _v10(),
      _v2 = (0, _v1.useRouter)();
    return [({
      hasOpenInvoice: _v0 = !1
    }) => {
      let _v1 = (({
          hasOpenInvoice: _v0,
          mwru: _v1,
          token: _v2
        }) => {
          let _v3 = _v2 && !(0, _v18.isPayPalToken)(_v2) ? `&token=${_v2}&mwru=${_v1}` : "",
            _v4 = _v3 ? `?${_v3.substring(1)}` : "",
            _v5 = _v0 ? `${_v3 ? "&" : "?"}open_invoice=1` : "";
          return `${_v4}${_v5}`;
        })({
          hasOpenInvoice: _v0,
          mwru: _v2.query?.mwru,
          token: _v2.query?.token
        }),
        _v2 = `${window.location.origin}/payments/paypal/add-payment-method${_v1}`;
      _v0({
        variables: {
          cancelUrl: `${window.location.href}?payPalCancel=true`,
          notifyUrl: "/",
          returnUrl: _v2
        },
        select: ["redirectUrl"]
      });
    }, _v1];
  }], 0);
}