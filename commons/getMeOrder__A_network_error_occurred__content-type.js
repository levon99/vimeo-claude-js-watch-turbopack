{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    where: {
      orderId: _v2
    },
    ..._v3
  }) {
    return (0, _v4.measureLatency)("getMeOrder", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/${_v2}?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/${_v0.where.orderId}${(0, _v9.serializeQuery)(_v0)}`, _v6({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  async function _v12({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v4.measureLatency)("postMeOrdersPreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/preview?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  function _v13() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/preview${(0, _v9.serializeQuery)(_v0)}`, _v12({
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
  async function _v14({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v4.measureLatency)("postMeOrdersUpdatePreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/update/preview?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  function _v15() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/update/preview${(0, _v9.serializeQuery)(_v0)}`, _v14({
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
  async function _v16({
    baseUrl: _v0,
    select: _v1,
    where: {
      promoCodeId: _v2
    },
    ..._v3
  }) {
    return (0, _v4.measureLatency)("getPromocode", "GET", async () => {
      let _v0 = await fetch(`${_v0}/promocodes/${_v2}?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  function _v17() {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/promocodes/${_v0.where.promoCodeId}${(0, _v9.serializeQuery)(_v0)}`, _v16({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/me/orders/${_v2.where.orderId}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/me/orders/:orderId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v11, {
    endpoint: "/me/orders/:orderId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v13, {
    endpoint: "/me/orders/preview",
    method: "POST"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v15, {
    endpoint: "/me/orders/update/preview",
    method: "POST"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/promocodes/${_v2.where.promoCodeId}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v16({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/promocodes/:promoCodeId",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v17, {
    endpoint: "/promocodes/:promoCodeId",
    method: "GET"
  }), _v0.s(["useGetPromocodeLazy", 0, _v17], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = () => {
    let _v0 = (0, _v20.useViewer)();
    return {
      firstName: _v0?.user?.name?.split(" ")[0] || "_",
      lastName: _v0?.user?.name?.split(" ").slice(1).join(" ") || "_"
    };
  };
  _v0.s(["useGetFormattedDate", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v20.useViewer)(),
      _v3 = _v0 ? new Date(_v0) : new Date();
    return new Intl.DateTimeFormat(_v2?.locale, {
      year: "numeric",
      month: _v1 ? "short" : "long",
      day: "2-digit",
      timeZone: "UTC"
    }).format(_v3);
  }, "useGetUserEntity", 0, () => {
    let _v0 = (0, _v21.useGetMePreferences)({
      select: ["ue"]
    });
    return {
      ..._v0,
      data: _v0?.data?.ue
    };
  }, "useGetUserName", 0, _v22], 0);
  let _v23 = "cart-order-id",
    _v24 = "personal",
    _v25 = "business",
    _v26 = {
      days: (0, _v18.translate)({
        singular: "day",
        dictionary: {
          es: {
            singular: "día"
          },
          "de-DE": {
            singular: "Tag"
          },
          "fr-FR": {
            singular: "jour"
          },
          "ja-JP": {
            singular: "日"
          },
          "ko-KR": {
            singular: "일"
          },
          "pt-BR": {
            singular: "dia"
          },
          "zh-CN": {
            singular: "天"
          }
        }
      }),
      weeks: (0, _v18.translate)({
        singular: "week",
        dictionary: {
          es: {
            singular: "semana"
          },
          "de-DE": {
            singular: "Woche"
          },
          "fr-FR": {
            singular: "semaine"
          },
          "ja-JP": {
            singular: "週"
          },
          "ko-KR": {
            singular: "주"
          },
          "pt-BR": {
            singular: "semana"
          },
          "zh-CN": {
            singular: "周"
          }
        }
      }),
      months: (0, _v18.translate)({
        singular: "month",
        dictionary: {
          es: {
            singular: "mes"
          },
          "de-DE": {
            singular: "Monat"
          },
          "fr-FR": {
            singular: "mois"
          },
          "ja-JP": {
            singular: "月"
          },
          "ko-KR": {
            singular: "월"
          },
          "pt-BR": {
            singular: "Mês"
          },
          "zh-CN": {
            singular: "月"
          }
        }
      }),
      years: (0, _v18.translate)({
        singular: "year",
        dictionary: {
          es: {
            singular: "año"
          },
          "de-DE": {
            singular: "Jahr"
          },
          "fr-FR": {
            singular: "année"
          },
          "ja-JP": {
            singular: "年"
          },
          "ko-KR": {
            singular: "년"
          },
          "pt-BR": {
            singular: "Ano"
          },
          "zh-CN": {
            singular: "年"
          }
        }
      })
    };
  _v0.s(["CHECKOUT_FORM_ACTION_LOCATION_APPLY_PROMO_BUTTON", 0, "apply_promo_button", "CHECKOUT_FORM_ACTION_LOCATION_COUNTRY", 0, "country", "CHECKOUT_FORM_ACTION_LOCATION_PAGE", 0, "page", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD", 0, "payment_type__credit_card", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL", 0, "payment_type__pay_pal", "CHECKOUT_FORM_ACTION_LOCATION_PROMO_CODE", 0, "promo", "CHECKOUT_FORM_ACTION_LOCATION_PURCHASE_BUTTON", 0, "purchase_button", "CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE", 0, "zip", "CHECKOUT_FORM_ACTION_TYPE_CLICK", 0, "click", "CHECKOUT_FORM_ACTION_TYPE_ERROR", 0, "error", "CHECKOUT_FORM_ACTION_TYPE_INPUT", 0, "input", "CHECKOUT_FORM_ACTION_TYPE_LAND", 0, "land", "CHECKOUT_FORM_ACTION_TYPE_SELECT", 0, "select", "CHECKOUT_PAYMENT_STEP", 0, "payment", "CHECKOUT_STEP_QUERY", 0, "checkout_step", "ORDER_ID_LOCAL_STORAGE_KEY", 0, _v23, "TRIAL_UNIT_COPY", 0, _v26, "USER_ENTITY_BUSINESS", 0, _v25, "USER_ENTITY_PERSONAL", 0, _v24, "ZUORA_HPM_IFRAME_ID", 0, "z_hppm_iframe"], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = {
      autorenewalOptInRequirement: null,
      billingPlan: void 0,
      checkoutType: "purchase",
      creatorProductAction: void 0,
      creatorProductId: void 0,
      creatorProductThumbnailUrl: null,
      creatorProductTitlePageUrl: null,
      currentSubscription: void 0,
      inPlayer: !1,
      isFreeTrial: !1,
      isMonthly: !1,
      isRenewNow: !1,
      order: void 0,
      subscriptionProduct: void 0,
      canUsePaymentsService: !0,
      errorMessage: void 0,
      storePaymentMethod: !1
    },
    _v31 = (0, _v1.createContext)({
      state: _v30,
      dispatch: () => void 0
    }),
    _v32 = () => (0, _v1.useContext)(_v31),
    _v33 = (0, _v1.createContext)(!1),
    _v34 = {
      loading: !1,
      data: null,
      error: null,
      called: !1,
      callCount: 0,
      lastCalled: null
    },
    _v35 = {
      orderPreview: _v34,
      submitOrder: _v34
    },
    _v36 = (0, _v1.createContext)({
      state: _v35,
      dispatch: () => void 0
    }),
    _v37 = () => (0, _v1.useContext)(_v36);
  _v0.s(["ApiStateContext", 0, _v36, "PaypalSelectedContext", 0, _v33, "StateContext", 0, _v31, "initialApiState", 0, _v35, "initialState", 0, _v30, "useApiStateContext", 0, _v37, "usePaypalSelected", 0, () => (0, _v1.useContext)(_v33), "useStateContext", 0, _v32], 0);
  let _v38 = ({
      billingCountry: _v0,
      creatorProductAction: _v1,
      isBusinessUserEntity: _v2,
      isMonthly: _v3,
      postalCode: _v4,
      viewerCountry: _v5
    }) => {
      if (!_v4 && !_v5 && !_v0) return;
      let _v6 = !!_v4 && (0, _v29.isZipCodeIsRequiredAutorenewalOptInRange)(_v4),
        _v7 = !!_v1 && "subscribe" !== _v1;
      return _v6 || "subscribe" === _v1 ? {
        hasOptedInToAutorenew: (("DE" === _v5 || "DE" === _v0) && !_v3 && !_v2 || !!_v7) && null,
        hasAgreedToTerms: _v7
      } : null;
    },
    _v39 = () => {
      let _v0 = (0, _v20.useViewer)(),
        _v1 = _v22(),
        {
          settings: _v2
        } = (0, _v19.useOrionSettings)(),
        _v3 = _v2.use_juno_billing,
        {
          dispatch: _v4,
          state: {
            billingPlan: _v5,
            checkoutType: _v6,
            currentSubscription: _v7,
            isMonthly: _v8,
            isBusinessUserEntity: _v9,
            tier: _v10,
            creatorProductId: _v11,
            creatorProductAction: _v12
          }
        } = _v32(),
        {
          dispatch: _v13,
          state: {
            orderPreview: _v14
          }
        } = _v37(),
        [, _v15] = (0, _v2.default)(_v23, void 0),
        [_v16, _v17] = _v13(),
        [_v18, _v19] = _v15();
      return ((0, _v1.useEffect)(function () {
        let _v0;
        if (_v17.called ? _v0 = _v17 : _v19.called && (_v0 = _v19), _v0 && (_v13({
          type: _v27.ApiActionTypes.ORDER_PREVIEW,
          payload: _v0
        }), _v0.data)) {
          let _v0 = _v0.data?.error;
          _v4({
            type: _v27.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v0 ? _v13({
            type: _v27.ApiActionTypes.ORDER_PREVIEW,
            payload: {
              ..._v0,
              data: null,
              error: Error(_v0)
            }
          }) : (_v13({
            type: _v27.ApiActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v0.loading || (_v4({
            type: _v27.ActionTypes.ORDER_PREVIEW,
            payload: _v0.data
          }), _v15(_v0.data.id)));
        }
      }, [_v13, _v17, _v19, _v4, _v15]), (0, _v1.useEffect)(function () {
        let _v0 = _v14.data,
          _v1 = _v38({
            billingCountry: _v0?.billingAddress?.country,
            creatorProductAction: _v12,
            isBusinessUserEntity: _v9,
            isMonthly: _v8,
            postalCode: _v0?.billingAddress?.postalCode,
            viewerCountry: _v0?.location
          });
        void 0 !== _v1 && _v4({
          type: _v27.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
          payload: _v1
        });
      }, [_v0?.location, _v8, _v9, _v14.data, _v4]), _v10 && (0, _v28.isCreatorProductTier)(_v10)) ? [_v0 => _v16({
        select: [],
        variables: {
          useJuno: !1,
          billingAddress: _v0.billingAddress,
          currency: _v0.currency,
          firstName: _v1.firstName,
          lastName: _v1.lastName,
          couponCode: _v0.couponCode,
          vatId: _v0.vatId,
          isTrial: _v0.isTrial,
          items: [{
            productId: _v11 ?? void 0,
            quantity: 1
          }].map(_v28.transformToOrderItemOptions)
        }
      }), _v14] : "upgrade" === _v6 && _v7 && _v5 ? [(_v0, _v1) => {
        let _v2 = _v1 || _v5.id;
        (0, _v28.isUpgradeToPlanAlreadyOnSubscription)(_v2, _v7) ? _v4({
          type: _v27.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v18.translate)({
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
        }) : _v18({
          select: [],
          variables: {
            type: _v6,
            billingPlanId: _v2,
            subscriptionId: _v7.id,
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode
          }
        });
      }, _v14] : [_v0 => {
        let _v1;
        return _v16({
          select: [],
          variables: {
            useJuno: _v3,
            billingAddress: (_v1 = _v0.billingAddress) && Object.keys(_v1).length > 0 && Object.values(_v1).some(_v0 => "" !== _v0) ? _v1 : void 0,
            currency: _v0.currency,
            firstName: _v1.firstName,
            lastName: _v1.lastName,
            couponCode: _v0.couponCode,
            vatId: _v0.vatId,
            isTrial: _v0.isTrial,
            items: (_v0.items || []).map(_v28.transformToOrderItemOptions)
          }
        });
      }, _v14];
    };
  _v0.s(["useGetOrCreateOrderPreview", 0, () => {
    let {
        settings: _v0
      } = (0, _v19.useOrionSettings)(),
      _v1 = _v0.use_juno_billing,
      {
        dispatch: _v2,
        state: {
          billingPlan: _v3,
          checkoutType: _v4,
          currentSubscription: _v5,
          isFreeTrial: _v6,
          isMonthly: _v7,
          isRenewNow: _v8,
          isBusinessUserEntity: _v9,
          subscriptionProduct: _v10,
          selectedPaymentMethod: _v11,
          tier: _v12,
          creatorProductAction: _v13,
          creatorProductId: _v14,
          order: _v15,
          defaultPromoCodeId: _v16
        }
      } = _v32(),
      _v17 = (0, _v20.useViewer)(),
      _v18 = _v22(),
      [_v19, _v20] = (0, _v2.default)(_v23, null),
      [_v21, _v22] = _v15(),
      [_v23, _v24] = _v13(),
      [_v25, _v26] = _v11(),
      [_v27, _v28] = _v17(),
      _v29 = (0, _v1.useRef)({
        key: null,
        attempts: 0
      }),
      [_v30, _v31] = (0, _v1.useState)(0),
      [_v32, _v33] = (0, _v1.useState)(),
      {
        data: _v34,
        error: _v35
      } = _v32 || {},
      [_v36, _v37] = (0, _v1.useState)(null),
      _v38 = _v12 && (0, _v28.isCreatorProductTier)(_v12);
    return (0, _v1.useEffect)(() => {
      if (_v16 && _v28.error && !_v28.loading) return void _v37(_v16);
      if (_v16) {
        let _v0;
        _v20(null), _v37(null), _v28.loading || (_v0 = _v28.data, _v0?.id === _v16 || _v0?.metadata?.batchCode === _v16) || _v27({
          where: {
            promoCodeId: _v16
          },
          select: ["code", "id", "metadata"]
        });
      }
    }, [_v16, _v27, _v20, _v28.loading, _v28.data]), (0, _v1.useEffect)(function () {
      var _v0, _v1;
      let _v2,
        _v3,
        _v4 = (_v0 = _v15?.couponCode, _v1 = _v28.data, _v2 = _v0 || _v1?.code, "string" == typeof (_v3 = _v1?.metadata?.batchCode) && _v3 && (_v2 = _v3), _v2 && _v2 !== _v36 ? _v2 : void 0);
      if (!_v17 || !_v10 || !_v3 && !_v8 || void 0 === _v5 || _v19 === _v34?.id || _v38 && !_v14 || _v24.loading || _v22.loading || _v26.loading) return;
      let _v5 = (({
        billingPlanId: _v0,
        checkoutType: _v1,
        couponCode: _v2,
        creatorProductId: _v3,
        isCreatorProduct: _v4,
        isRenewNow: _v5,
        orderId: _v6,
        paymentMethodId: _v7,
        subscriptionId: _v8
      }) => JSON.stringify({
        checkoutType: _v1,
        isCreatorProduct: _v4,
        isRenewNow: _v5,
        billingPlanId: _v0 ?? null,
        subscriptionId: _v8 ?? null,
        paymentMethodId: _v7 ?? null,
        couponCode: _v2 ?? null,
        creatorProductId: _v3 ?? null,
        orderId: _v6
      }))({
        billingPlanId: _v3?.id,
        checkoutType: _v4,
        couponCode: _v4,
        creatorProductId: _v14,
        isCreatorProduct: _v38,
        isRenewNow: _v8,
        orderId: _v19,
        paymentMethodId: _v11?.id,
        subscriptionId: _v5?.id
      });
      if (_v29.current.key !== _v5 && (_v29.current = {
        key: _v5,
        attempts: 0
      }), !(_v29.current.attempts >= 4)) if (_v38) {
        let _v0 = _v11?.type === "PAYMENT_METHOD_TYPES_CARD" ? _v11.card?.billingAddress : void 0;
        _v23({
          select: [],
          variables: {
            useJuno: !1,
            firstName: _v18.firstName,
            lastName: _v18.lastName,
            currency: _v3?.price?.currency || "",
            billingAddress: _v0,
            isTrial: !1,
            items: [{
              productId: _v14 ?? void 0,
              quantity: 1
            }],
            couponCode: _v4
          }
        });
      } else if (_v19 && "purchase" === _v4) _v25({
        select: [],
        where: {
          orderId: _v19
        }
      });else if (_v5 && ("upgrade" === _v4 || "renew" === _v4)) {
        if ("upgrade" === _v4 && (0, _v28.isUpgradeToPlanAlreadyOnSubscription)(_v3?.id, _v5)) return void _v2({
          type: _v27.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v18.translate)({
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
        _v21({
          select: [],
          variables: {
            type: _v4,
            billingPlanId: "renew" === _v4 ? "" : _v3?.id ?? "",
            subscriptionId: _v5.id,
            paymentMethodId: _v11?.id,
            couponCode: _v4
          }
        });
      } else _v23({
        select: [],
        variables: {
          useJuno: _v1,
          firstName: _v18.firstName,
          lastName: _v18.lastName,
          currency: _v3?.price?.currency ?? "",
          isTrial: _v6,
          items: [{
            billingPlanId: _v3?.id,
            quantity: 1
          }],
          couponCode: _v4
        }
      });
    }, [_v36, _v28.data, _v15, _v3, _v4, _v5, _v25, _v6, _v7, _v8, _v19, _v34?.id, _v23, _v21, _v10, _v18.firstName, _v18.lastName, _v17, _v11, _v13, _v14, _v38, _v1, _v30]), (0, _v1.useEffect)(function () {
      if (!(_v32?.error && !_v32.loading)) return;
      let _v0 = _v29.current.attempts + 1;
      if (_v29.current.attempts = _v0, _v0 >= 4) return;
      let _v1 = setTimeout(() => _v31(_v0 => _v0 + 1), 0 * 2 ** (_v0 - 1));
      return () => clearTimeout(_v1);
    }, [_v32]), (0, _v1.useEffect)(function () {
      let _v0;
      _v24.called ? _v0 = _v24 : _v22.called ? _v0 = _v22 : _v26.called && (_v0 = _v26), _v0 && (_v33({
        ..._v0,
        data: _v0.data ?? null
      }), _v0.data && (_v2({
        type: _v27.ActionTypes.ORDER_PREVIEW,
        payload: _v0.data
      }), _v20(_v0.data.id)));
    }, [_v2, _v26, _v24, _v22, _v20]), (0, _v1.useEffect)(function () {
      if (_v34 && _v10) {
        if (_v10.isCreatorProduct || _v10.isBandwidthProduct) return;
        let _v0 = _v3?.id;
        ("purchase" !== _v4 || _v34.currency === _v3?.price?.currency) && _v34.isTrial == _v6 && (_v34.items?.find(_v0 => _v0.billingPlanId === _v0) || _v8) || (_v20(null), _v2({
          type: _v27.ActionTypes.ORDER_PREVIEW,
          payload: null
        }));
      }
    }, [_v3, _v2, _v6, _v7, _v8, _v34, _v20, _v10, _v4]), (0, _v1.useEffect)(function () {
      _v35 && (404 === _v35.status ? (_v20(null), _v2({
        type: _v27.ActionTypes.ORDER_PREVIEW,
        payload: null
      })) : 400 === _v35.status && (async () => {
        let _v0 = "";
        if (_v35.res?.body instanceof ReadableStream) {
          if (!_v35.res.body.locked) {
            let _v0 = _v35.res.body.getReader(),
              _v1 = new TextDecoder();
            for (;;) {
              let {
                done: _v0,
                value: _v1
              } = await _v0.read();
              if (_v0) break;
              _v0 += _v1.decode(_v1, {
                stream: !0
              });
            }
          }
        } else _v0 = "string" == typeof _v35.res?.body ? _v35.res.body : JSON.stringify(_v35);
        let _v1 = _v0.toLowerCase().includes("invalid coupon code"),
          _v2 = _v28.data?.code;
        if (_v1 && _v2) {
          _v2({
            type: _v27.ActionTypes.ORDER_PREVIEW,
            payload: null
          }), _v37(_v2);
          return;
        }
      })());
    }, [_v2, _v35, _v20, _v28.data?.code]), (0, _v1.useEffect)(function () {
      let _v0 = _v38({
        billingCountry: _v34?.billingAddress?.country,
        creatorProductAction: _v13,
        isBusinessUserEntity: _v9,
        isMonthly: _v7,
        postalCode: _v34?.billingAddress?.postalCode,
        viewerCountry: _v17?.location
      });
      void 0 !== _v0 && _v2({
        type: _v27.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
        payload: _v0
      });
    }, [_v17?.location, _v9, _v34?.billingAddress?.postalCode, _v34?.billingAddress?.country, _v7, _v2, _v13]), {
      isLoading: _v32?.loading,
      order: _v32?.data,
      error: _v32?.error
    };
  }, "useUpdateOrderPreview", 0, _v39, "useUpdateOrderPreviewWithDebounce", 0, (_v0 = 600) => {
    let [_v1, _v2] = _v39(),
      _v3 = (0, _v1.useRef)(_v1);
    (0, _v1.useEffect)(() => {
      _v3.current = _v1;
    }, [_v1]);
    let _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useCallback)((..._v0) => {
        clearTimeout(_v4.current ?? void 0), _v4.current = setTimeout(() => {
          _v4.current = null, _v3.current(..._v0);
        }, _v0);
      }, [_v0]);
    return (0, _v1.useEffect)(() => () => clearTimeout(_v4.current ?? void 0), []), [_v5, _v2];
  }], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = ["issuer_decline", "suspected_fraud", "insufficient_funds", "expired_or_invalid_card", "stored_credential_invalid", "issuer_unavailable", "do_not_honor", "other_decline", "client_validation"],
    _v48 = _v0 => {
      switch (_v0) {
        case "issuer_decline":
        case "do_not_honor":
          return (0, _v18.translate)({
            singular: "Your card issuer declined the payment. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "El emisor de su tarjeta rechazó el pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller hat die Zahlung abgelehnt. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "L'émetteur de votre carte a refusé le paiement. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社が支払いを拒否しました。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "카드 발급사가 결제를 거부했습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O emissor do cartão recusou o pagamento. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "发卡行拒绝了付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "suspected_fraud":
          return (0, _v18.translate)({
            singular: "Your payment couldn't be completed. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo completar su pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Zahlung konnte nicht abgeschlossen werden. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement n'a pas pu être effectué. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "支払いを完了できませんでした。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "결제를 완료할 수 없습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Seu pagamento não pôde ser concluído. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法完成付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "insufficient_funds":
          return (0, _v18.translate)({
            singular: "Your card was declined due to insufficient funds. Please try a different payment method.",
            dictionary: {
              es: {
                singular: "Su tarjeta fue rechazada por fondos insuficientes. Intente con otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Karte wurde aufgrund unzureichender Deckung abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé pour insuffisance de fonds. Veuillez essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "残高不足のためカードが拒否されました。別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "잔액 부족으로 카드 결제가 거부되었습니다. 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O cartão foi recusado por fundos insuficientes. Tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "因账户余额不足，卡片被拒绝。请尝试其他付款方式。"
              }
            }
          });
        case "expired_or_invalid_card":
          return (0, _v18.translate)({
            singular: "Your card information appears to be expired or invalid. Please check your details or try a different card.",
            dictionary: {
              es: {
                singular: "La información de su tarjeta parece estar caducada o ser inválida. Verifique sus datos o pruebe con otra tarjeta."
              },
              "de-DE": {
                singular: "Ihre Kartendaten scheinen abgelaufen oder ungültig zu sein. Bitte prüfen Sie Ihre Angaben oder versuchen Sie eine andere Karte."
              },
              "fr-FR": {
                singular: "Les informations de votre carte semblent expirées ou invalides. Veuillez vérifier vos informations ou essayer une autre carte."
              },
              "ja-JP": {
                singular: "カード情報が期限切れ、または無効のようです。情報を確認するか、別のカードをご利用ください。"
              },
              "ko-KR": {
                singular: "카드 정보가 만료되었거나 유효하지 않은 것으로 보입니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
              },
              "pt-BR": {
                singular: "As informações do seu cartão parecem expiradas ou inválidas. Verifique os dados ou tente outro cartão."
              },
              "zh-CN": {
                singular: "您的卡信息似乎已过期或无效。请核对信息或尝试使用其他卡。"
              }
            }
          });
        case "stored_credential_invalid":
          return (0, _v18.translate)({
            singular: "We couldn't use your saved payment method. Please re-enter your card details or try a different payment method.",
            dictionary: {
              es: {
                singular: "No pudimos usar su método de pago guardado. Vuelva a introducir los datos de su tarjeta o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Wir konnten Ihre gespeicherte Zahlungsmethode nicht verwenden. Bitte geben Sie Ihre Kartendaten erneut ein oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Nous n'avons pas pu utiliser votre moyen de paiement enregistré. Veuillez ressaisir les informations de votre carte ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "保存されている支払い方法を使用できませんでした。カード情報を再入力するか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "저장된 결제 수단을 사용할 수 없습니다. 카드 정보를 다시 입력하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível usar o método de pagamento salvo. Por favor, reinsira os dados do cartão ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "我们无法使用您保存的付款方式。请重新输入卡片信息或尝试其他付款方式。"
              }
            }
          });
        case "issuer_unavailable":
          return (0, _v18.translate)({
            singular: "Your card issuer couldn't be reached. Please try again in a few minutes or use a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo contactar con el emisor de su tarjeta. Inténtelo de nuevo en unos minutos o use otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller konnte nicht erreicht werden. Bitte versuchen Sie es in wenigen Minuten erneut oder verwenden Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Impossible de joindre l'émetteur de votre carte. Veuillez réessayer dans quelques minutes ou utiliser un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社に接続できませんでした。数分後に再度お試しいただくか、別の支払い方法をご利用ください。"
              },
              "ko-KR": {
                singular: "카드 발급사에 연결할 수 없습니다. 몇 분 후에 다시 시도하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível contatar o emissor do cartão. Tente novamente em alguns minutos ou use um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法联系到发卡行。请稍后几分钟再试或使用其他付款方式。"
              }
            }
          });
        case "client_validation":
          return (0, _v18.translate)({
            singular: "Some of your payment details are missing or invalid. Please check the form and try again.",
            dictionary: {
              es: {
                singular: "Algunos de los datos de pago faltan o son inválidos. Revise el formulario y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Einige Ihrer Zahlungsangaben fehlen oder sind ungültig. Bitte prüfen Sie das Formular und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Certaines de vos informations de paiement sont manquantes ou invalides. Veuillez vérifier le formulaire et réessayer."
              },
              "ja-JP": {
                singular: "支払い情報の一部が不足しているか無効です。フォームを確認して、再度お試しください。"
              },
              "ko-KR": {
                singular: "결제 정보의 일부가 누락되었거나 유효하지 않습니다. 양식을 확인한 후 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Alguns dados do seu pagamento estão ausentes ou inválidos. Verifique o formulário e tente novamente."
              },
              "zh-CN": {
                singular: "您的部分付款信息缺失或无效。请检查表单并重试。"
              }
            }
          });
        default:
          return (0, _v18.translate)({
            singular: "Your payment was declined. Please try a different payment method or contact your bank.",
            dictionary: {
              es: {
                singular: "Su pago fue rechazado. Pruebe otro método de pago o póngase en contacto con su banco."
              },
              "de-DE": {
                singular: "Ihre Zahlung wurde abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode oder kontaktieren Sie Ihre Bank."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé. Veuillez essayer un autre moyen de paiement ou contacter votre banque."
              },
              "ja-JP": {
                singular: "支払いが拒否されました。別の支払い方法をお試しいただくか、銀行にお問い合わせください。"
              },
              "ko-KR": {
                singular: "결제가 거부되었습니다. 다른 결제 수단을 사용해 보시거나 은행에 문의해 주세요."
              },
              "pt-BR": {
                singular: "Seu pagamento foi recusado. Tente um método de pagamento diferente ou entre em contato com seu banco."
              },
              "zh-CN": {
                singular: "付款被拒绝。请尝试其他付款方式或联系您的银行。"
              }
            }
          });
      }
    },
    _v49 = {
      insufficient_funds: "insufficient_funds",
      card_velocity_exceeded: "insufficient_funds",
      withdrawal_count_limit_exceeded: "insufficient_funds",
      card_declined: "issuer_decline",
      approve_with_id: "issuer_decline",
      call_issuer: "issuer_decline",
      transaction_not_allowed: "issuer_decline",
      do_not_honor: "do_not_honor",
      expired_card: "expired_or_invalid_card",
      incorrect_cvc: "expired_or_invalid_card",
      invalid_cvc: "expired_or_invalid_card",
      incorrect_number: "expired_or_invalid_card",
      invalid_number: "expired_or_invalid_card",
      invalid_expiry_month: "expired_or_invalid_card",
      invalid_expiry_year: "expired_or_invalid_card",
      invalid_account: "expired_or_invalid_card",
      fraudulent: "suspected_fraud",
      lost_card: "suspected_fraud",
      stolen_card: "suspected_fraud",
      pickup_card: "suspected_fraud",
      merchant_blacklist: "suspected_fraud",
      restricted_card: "suspected_fraud",
      issuer_not_available: "issuer_unavailable",
      processing_error: "issuer_unavailable",
      reenter_transaction: "issuer_unavailable",
      try_again_later: "issuer_unavailable",
      new_account_information_available: "stored_credential_invalid"
    },
    _v50 = (_v0, _v1, {
      failingField: _v2,
      rawCode: _v3
    } = {}) => ({
      source: _v0,
      decline_category: _v1,
      failing_field: _v2 ?? null,
      error_code: _v3 ?? null,
      error_message: _v48(_v1)
    }),
    _v51 = _v0 => {
      switch (_v0.source) {
        case "zuora_hpm":
          return _v0.rawGatewayInfo ? {
            source: "chase",
            decline_category: null,
            failing_field: null,
            error_code: _v0.rawGatewayInfo.responseCode || null,
            error_message: _v0.rawGatewayInfo.responseMessage || null
          } : _v50("zuora_hpm", "client_validation", {
            failingField: _v0.formField || null,
            rawCode: _v0.formErrorCode || null
          });
        case "stripe":
          let _v0 = (_v0.code ?? "").trim().toLowerCase();
          if (_v0.startsWith("incomplete")) return _v50("stripe", "client_validation", {
            rawCode: _v0 || null
          });
          let _v1 = _v49[_v0];
          return _v1 ? _v50("stripe", _v1, {
            rawCode: _v0
          }) : _v0 ? _v50("stripe", "other_decline", {
            rawCode: _v0
          }) : {
            source: "stripe",
            decline_category: null,
            failing_field: null,
            error_code: null,
            error_message: _v0.message || null
          };
        case "paypal":
          return {
            source: "paypal",
            decline_category: null,
            failing_field: null,
            error_code: null,
            error_message: _v0.message || (0, _v18.translate)({
              singular: "Unable to connect to PayPal.",
              dictionary: {
                es: {
                  singular: "No se pudo conectar con PayPal."
                },
                "de-DE": {
                  singular: "Die Verbindung zu PayPal konnte nicht hergestellt werden."
                },
                "fr-FR": {
                  singular: "Impossible de se connecter à PayPal."
                },
                "ja-JP": {
                  singular: "PayPalに接続できませんでした。"
                },
                "ko-KR": {
                  singular: "PayPal에 연결할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível conectar ao PayPal."
                },
                "zh-CN": {
                  singular: "无法连接到 PayPal。"
                }
              }
            })
          };
        case "juno_vgs":
          let _v2 = (_v0.category ?? "").trim().toLowerCase(),
            _v3 = (_v0.declineKind ?? "").trim().toLowerCase(),
            _v4 = (_v0.code ?? "").trim().toLowerCase(),
            _v5 = "" !== _v4 ? _v4 : "" !== _v2 ? _v2 : null;
          if ("validation" === _v2) return _v50("juno_vgs", "client_validation", {
            rawCode: _v5
          });
          if ("decline" === _v2 || "user_action_required" === _v2 || "terminal" === _v2) return "insufficient_funds" === _v4 ? _v50("juno_vgs", "insufficient_funds", {
            rawCode: _v4
          }) : "fraud" === _v4 || "suspected_fraud" === _v4 ? _v50("juno_vgs", "suspected_fraud", {
            rawCode: _v4
          }) : "expired_card" === _v4 || "invalid_card" === _v4 ? _v50("juno_vgs", "expired_or_invalid_card", {
            rawCode: _v4
          }) : "retryable" === _v3 ? _v50("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : _v50("juno_vgs", "issuer_decline", {
            rawCode: _v5
          });
          return "retryable" === _v2 ? _v50("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : "" !== _v2 ? _v50("juno_vgs", "other_decline", {
            rawCode: _v5
          }) : {
            source: "juno_vgs",
            decline_category: null,
            failing_field: null,
            error_code: "" !== _v4 ? _v4 : null,
            error_message: _v0.message ?? null
          };
      }
    },
    _v52 = !1,
    _v53 = () => !_v52 && (_v52 = !0, !0);
  _v0.s(["acquireCheckoutFailedLatch", 0, _v53, "canonicalMessageForCategory", 0, _v48, "classifyClientDecline", 0, _v51, "isDeclineCategory", 0, _v0 => "string" == typeof _v0 && _v47.includes(_v0), "resetCheckoutFailedLatch", 0, () => {
    _v52 = !1;
  }], 0);
  let _v54 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"],
    _v55 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"];
  _v0.s(["trackAddPaymentMethodAddClick", 0, _v0 => {
    (0, _v46.sendBpEventWithContexts)("vimeo.add_payment_method_add_click", {
      ...(0, _v45.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v42.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v43.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v44.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v41.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodCancelClick", 0, _v0 => {
    (0, _v46.sendBpEventWithContexts)("vimeo.add_payment_method_cancel_click", {
      ...(0, _v45.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v42.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v43.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v44.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v41.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodError", 0, (_v0, _v1) => {
    (0, _v46.sendBpEventWithContexts)("vimeo.add_payment_method_error", {
      ...(0, _v45.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v42.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v43.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v44.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0,
      error_copy: _v1
    });
  }, "trackAddPaymentMethodPageview", 0, _v0 => {
    (0, _v46.sendBpEventWithContexts)("vimeo.add_payment_method_pageview", {
      ...(0, _v45.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v42.buildProductAnalyticsBpContext)({
        location: "not_applicable_pageview",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v43.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v44.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodSuccess", 0, _v0 => {
    (0, _v46.sendBpEventWithContexts)("vimeo.add_payment_method_success", {
      ...(0, _v45.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v42.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v43.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v44.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackCheckoutFormAction", 0, ({
    actionType: _v0,
    location: _v1,
    errorId: _v2,
    errorCopy: _v3,
    checkoutState: _v4,
    viewer: _v5,
    searchParams: _v6
  }) => {
    let _v7 = _v4.order?.items?.[0].quantity ?? 1,
      _v8 = _v4.order?.promoCode,
      _v9 = _v4?.billingPlan?.id,
      _v10 = _v54.includes(_v4.tier) ? _v4.tier : null,
      _v11 = _v55.includes(_v4.tier) ? _v4.tier : "seat_subscription";
    _v40.BigPictureClient.sendEvent(new _v40.Event("vimeo.checkout_form_action", 18, {
      action_type: _v0,
      bot_score: 0,
      checkout_product_ids: [],
      checkout_subscription_type: _v10,
      consumer_renewal_prohibited: !1,
      currency: _v4.order?.currency ?? "",
      device_type: null,
      is_signup_checkout: !1,
      error_copy: _v3 ?? null,
      error_id: _v2 ?? null,
      is_trial_purchase: _v4.isFreeTrial ?? !1,
      location: _v1,
      mobile_app_user_id: _v4.iosUserId ?? null,
      path: window?.location?.href ?? null,
      promo_code: _v8?.code ?? null,
      referrer_path: document?.referrer ?? null,
      seat_total: _v7,
      store: _v11,
      subtotal: _v4.order?.subtotalAmount?.formatted ?? "",
      target_path: null,
      tax: _v4.order?.totalTaxAmount?.formatted ?? "",
      user_account_type_at_checkout: _v5.user?.account ?? "",
      user_seat_count_at_checkout: 0,
      user_selection: _v4.isBusinessUserEntity ? _v25 : _v24,
      upsell_name: _v6?.get("upsell"),
      feature: _v6?.get("feature"),
      billing_plan_id: _v9 || null
    }));
  }, "trackFailedOrder", 0, ({
    order: _v0,
    errorResponse: _v1,
    selectedPaymentMethod: _v2,
    source: _v3 = "zuora_hpm",
    stripeErrorCode: _v4,
    checkoutTracking: _v5
  }) => {
    let _v6 = {};
    _v2 && _v2.card ? (_v6.billing_address_state = _v2.card?.billingAddress?.state, _v6.billing_address_postal_code = _v2.card?.billingAddress?.postalCode, _v6.billing_address_country = _v2.card?.billingAddress?.country, _v6.credit_card_brand = _v2.card?.brand, _v6.credit_card_bin = _v2.card?.bin) : (_v6.billing_address_state = _v0.billingAddress?.state, _v6.billing_address_postal_code = _v0.billingAddress?.postalCode, _v6.billing_address_country = _v0.billingAddress?.country);
    let _v7 = _v0.items.map(_v0 => {
        let _v1 = (0, _v28.transformToOrderItemOptions)(_v0);
        return {
          billing_plan_id: _v1.billingPlanId ?? "",
          quantity: _v1.quantity
        };
      }),
      {
        formErrorCode: _v8,
        formErrorMessage: _v9,
        formField: _v10,
        rawGatewayInfo: _v11
      } = _v1;
    if (_v40.BigPictureClient.sendEvent(new _v40.Event("vimeo.order_failure", 4, {
      client_error_message: _v11 ? null : _v9,
      client_error_code: _v11 ? null : _v8,
      gateway_response_message: _v11 ? _v11.responseMessage : null,
      gateway_status_code: _v11 ? parseInt(_v11.responseCode) : null,
      user_id: _v0.userId,
      order_id: _v0.id,
      currency: _v0.currency,
      is_trial: !!_v0.isTrial,
      billing_address_state: _v6.billing_address_state ?? null,
      billing_address_postal_code: _v6.billing_address_postal_code ?? null,
      billing_address_country: _v6.billing_address_country ?? null,
      tax_exempt: !!_v0.taxExempt,
      subtotal_amount: _v0.subtotalAmount.formatted,
      total_amount: _v0.totalAmount.formatted,
      total_discount: _v0.totalDiscount.formatted,
      total_tax_amount: _v0.totalTaxAmount.formatted,
      credit_card_brand: _v6.credit_card_brand ?? null,
      credit_card_bin: _v6.credit_card_bin ?? null,
      location: "frontend",
      order_items: _v7
    })), !_v53()) return;
    let _v12 = _v51("stripe" === _v3 ? {
      source: "stripe",
      code: _v4,
      message: _v9
    } : {
      source: "zuora_hpm",
      formErrorCode: _v8,
      formErrorMessage: _v9,
      formField: _v10,
      rawGatewayInfo: _v11
    });
    _v5.trackCheckoutFailed({
      tier: _v5.tier,
      periodicity: _v5.periodicity,
      isFreeTrial: _v5.isFreeTrial,
      source: _v12.source,
      decline_category: _v12.decline_category,
      failing_field: _v12.failing_field,
      error_code: _v12.error_code,
      error_message: _v12.error_message
    });
  }, "trackOrderFailure", 0, ({
    userId: _v0,
    description: _v1
  }) => {
    _v40.BigPictureClient.sendEvent(new _v40.Event("vimeo.order_failure", 4, {
      client_error_message: _v1,
      client_error_code: null,
      gateway_response_message: null,
      gateway_status_code: null,
      user_id: _v0,
      order_id: "0",
      currency: "USD",
      is_trial: !1,
      billing_address_state: null,
      billing_address_postal_code: null,
      billing_address_country: null,
      tax_exempt: !1,
      subtotal_amount: null,
      total_amount: null,
      total_discount: null,
      total_tax_amount: null,
      credit_card_brand: null,
      credit_card_bin: null,
      location: "frontend",
      order_items: []
    }));
  }, "trackZuoraOrderStep", 0, ({
    user_id: _v0,
    hpm_session_id: _v1,
    flow_type: _v2,
    step_name: _v3,
    step_message: _v4,
    purchase_type: _v5,
    payment_method_id: _v6,
    zuora_order_id: _v7
  }) => {
    _v40.BigPictureClient.sendEvent(new _v40.Event("vimeo.zuora_purchase_steps", 1, {
      user_id: _v0,
      unix_time: Date.now(),
      hpm_session_id: _v1,
      flow_type: _v2 ?? null,
      component: "client",
      step_name: _v3,
      step_message: _v4 ?? null,
      purchase_type: _v5 ?? null,
      payment_method_id: _v6 ?? null,
      zuora_order_id: _v7 ?? null
    }));
  }], 0);
}