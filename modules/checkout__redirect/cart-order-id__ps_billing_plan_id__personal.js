{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "cart-order-id",
    _v3 = "ps_billing_plan_id",
    _v4 = "personal",
    _v5 = "business",
    _v6 = {
      days: (0, _v1.translate)({
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
      weeks: (0, _v1.translate)({
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
      months: (0, _v1.translate)({
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
      years: (0, _v1.translate)({
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
  _v0.s(["BILLING_PLAN_ID_LOCAL_STORAGE_KEY", 0, _v3, "CHECKOUT_FORM_ACTION_LOCATION_APPLY_PROMO_BUTTON", 0, "apply_promo_button", "CHECKOUT_FORM_ACTION_LOCATION_COUNTRY", 0, "country", "CHECKOUT_FORM_ACTION_LOCATION_PAGE", 0, "page", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD", 0, "payment_type__credit_card", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL", 0, "payment_type__pay_pal", "CHECKOUT_FORM_ACTION_LOCATION_PROMO_CODE", 0, "promo", "CHECKOUT_FORM_ACTION_LOCATION_PURCHASE_BUTTON", 0, "purchase_button", "CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE", 0, "zip", "CHECKOUT_FORM_ACTION_TYPE_CLICK", 0, "click", "CHECKOUT_FORM_ACTION_TYPE_ERROR", 0, "error", "CHECKOUT_FORM_ACTION_TYPE_INPUT", 0, "input", "CHECKOUT_FORM_ACTION_TYPE_LAND", 0, "land", "CHECKOUT_FORM_ACTION_TYPE_SELECT", 0, "select", "ORDER_ID_LOCAL_STORAGE_KEY", 0, _v2, "TRIAL_UNIT_COPY", 0, _v6, "USER_ENTITY_BUSINESS", 0, _v5, "USER_ENTITY_PERSONAL", 0, _v4, "ZUORA_HPM_IFRAME_ID", 0, "z_hppm_iframe"], 0);
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  async function _v17({
    baseUrl: _v0,
    select: _v1,
    where: {
      orderId: _v2
    },
    ..._v3
  }) {
    return (0, _v16.measureLatency)("getMeOrder", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/${_v2}?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/${_v0.where.orderId}${(0, _v20.serializeQuery)(_v0)}`, _v17({
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
  async function _v23({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMeOrders", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v24() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders${(0, _v20.serializeQuery)(_v0)}`, _v23({
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
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMeOrdersPreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/preview?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v26() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/preview${(0, _v20.serializeQuery)(_v0)}`, _v25({
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
  async function _v27({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      subscriptionId: _v3
    },
    ..._v4
  }) {
    return (0, _v16.measureLatency)("postMeOrdersSubscription", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/subscriptions/${_v3}?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v28() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/subscriptions/${_v0.where.subscriptionId}${(0, _v20.serializeQuery)(_v0)}`, _v27({
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
  async function _v29({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMeOrdersUpdatePreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/update/preview?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v30() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/update/preview${(0, _v20.serializeQuery)(_v0)}`, _v29({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v18.default)(_v2 ? `/me/orders/${_v2.where.orderId}${(0, _v20.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v17({
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
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v22, {
    endpoint: "/me/orders/:orderId",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v24, {
    endpoint: "/me/orders",
    method: "POST"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v26, {
    endpoint: "/me/orders/preview",
    method: "POST"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v28, {
    endpoint: "/me/orders/subscriptions/:subscriptionId",
    method: "POST"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v30, {
    endpoint: "/me/orders/update/preview",
    method: "POST"
  });
  var _v31 = _v0.i(0);
  async function _v32({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMePaymentMethodsAuthorizePaypal", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/payment_methods/authorize_paypal?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v33() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/payment_methods/authorize_paypal${(0, _v20.serializeQuery)(_v0)}`, _v32({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v33, {
    endpoint: "/me/payment_methods/authorize_paypal",
    method: "POST"
  });
  var _v34 = _v0.i(0);
  async function _v35({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v16.measureLatency)("postMeStripePayment", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/stripe/payment`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v36() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/stripe/payment${(0, _v20.serializeQuery)(_v0)}`, _v35({
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
  async function _v37({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("getMeSubscriptionProducts", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/subscription_products?${(0, _v14.searchQueryString)(_v2)}&fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v36, {
    endpoint: "/me/stripe/payment",
    method: "POST"
  });
  var _v38 = _v0.i(0);
  function _v39(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v18.default)(_v2 ? `/me/subscription_products${(0, _v20.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v37({
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
  }
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v39, {
    endpoint: "/me/subscription_products",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/subscription_products${(0, _v20.serializeQuery)(_v0)}`, _v37({
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
  }, {
    endpoint: "/me/subscription_products",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v38.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/me/subscription_products?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v37({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/me/subscription_products",
    method: "GET"
  });
  var _v40 = _v0.i(0);
  async function _v41({
    baseUrl: _v0,
    select: _v1,
    where: {
      promoCodeId: _v2
    },
    ..._v3
  }) {
    return (0, _v16.measureLatency)("getPromocode", "GET", async () => {
      let _v0 = await fetch(`${_v0}/promocodes/${_v2}?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v42() {
    let {
        mutate: _v0
      } = (0, _v19.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v12.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/promocodes/${_v0.where.promoCodeId}${(0, _v20.serializeQuery)(_v0)}`, _v41({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v18.default)(_v2 ? `/promocodes/${_v2.where.promoCodeId}${(0, _v20.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v41({
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
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v42, {
    endpoint: "/promocodes/:promoCodeId",
    method: "GET"
  });
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = {
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
    _v50 = (0, _v12.createContext)({
      state: _v49,
      dispatch: () => void 0
    }),
    _v51 = () => (0, _v12.useContext)(_v50),
    _v52 = {
      loading: !1,
      data: null,
      error: null,
      called: !1,
      callCount: 0,
      lastCalled: null
    },
    _v53 = {
      orderPreview: _v52,
      submitOrder: _v52
    },
    _v54 = (0, _v12.createContext)({
      state: _v53,
      dispatch: () => void 0
    }),
    _v55 = () => (0, _v12.useContext)(_v54);
  _v0.s(["ApiStateContext", 0, _v54, "StateContext", 0, _v50, "initialApiState", 0, _v53, "initialState", 0, _v49, "useApiStateContext", 0, _v55, "useStateContext", 0, _v51], 0);
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"],
    _v65 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"],
    _v66 = ({
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
        _v10 = _v64.includes(_v4.tier) ? _v4.tier : null,
        _v11 = _v65.includes(_v4.tier) ? _v4.tier : "seat_subscription";
      _v56.BigPictureClient.sendEvent(new _v56.Event("vimeo.checkout_form_action", 18, {
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
        user_selection: _v4.isBusinessUserEntity ? _v5 : _v4,
        upsell_name: _v6?.get("upsell"),
        feature: _v6?.get("feature"),
        billing_plan_id: _v9 || null
      }));
    },
    _v67 = ({
      order: _v0,
      errorResponse: _v1,
      selectedPaymentMethod: _v2,
      checkoutTracking: _v3
    }) => {
      let _v4 = {};
      _v2 && _v2.card ? (_v4.billing_address_state = _v2.card?.billingAddress?.state, _v4.billing_address_postal_code = _v2.card?.billingAddress?.postalCode, _v4.billing_address_country = _v2.card?.billingAddress?.country, _v4.credit_card_brand = _v2.card?.brand, _v4.credit_card_bin = _v2.card?.bin) : (_v4.billing_address_state = _v0.billingAddress?.state, _v4.billing_address_postal_code = _v0.billingAddress?.postalCode, _v4.billing_address_country = _v0.billingAddress?.country);
      let _v5 = _v0.items.map(_v0 => {
          let _v1 = (0, _v63.transformToOrderItemOptions)(_v0);
          return {
            billing_plan_id: _v1.billingPlanId ?? "",
            quantity: _v1.quantity
          };
        }),
        {
          formErrorCode: _v6,
          formErrorMessage: _v7,
          rawGatewayInfo: _v8
        } = _v1,
        _v9 = _v8 ? _v8.responseMessage : _v7,
        _v10 = _v8 ? _v8.responseCode : _v6;
      _v56.BigPictureClient.sendEvent(new _v56.Event("vimeo.order_failure", 4, {
        client_error_message: _v8 ? null : _v7,
        client_error_code: _v8 ? null : _v6,
        gateway_response_message: _v8 ? _v8.responseMessage : null,
        gateway_status_code: _v8 ? parseInt(_v8.responseCode) : null,
        user_id: _v0.userId,
        order_id: _v0.id,
        currency: _v0.currency,
        is_trial: !!_v0.isTrial,
        billing_address_state: _v4.billing_address_state ?? null,
        billing_address_postal_code: _v4.billing_address_postal_code ?? null,
        billing_address_country: _v4.billing_address_country ?? null,
        tax_exempt: !!_v0.taxExempt,
        subtotal_amount: _v0.subtotalAmount.formatted,
        total_amount: _v0.totalAmount.formatted,
        total_discount: _v0.totalDiscount.formatted,
        total_tax_amount: _v0.totalTaxAmount.formatted,
        credit_card_brand: _v4.credit_card_brand ?? null,
        credit_card_bin: _v4.credit_card_bin ?? null,
        location: "frontend",
        order_items: _v5
      })), _v3.trackCheckoutFailed({
        tier: _v3.tier,
        periodicity: _v3.periodicity,
        isFreeTrial: _v3.isFreeTrial,
        error_message: _v9 ?? void 0,
        error_code: _v10 ?? void 0
      });
    },
    _v68 = ({
      user_id: _v0,
      hpm_session_id: _v1,
      flow_type: _v2,
      step_name: _v3,
      step_message: _v4,
      purchase_type: _v5,
      payment_method_id: _v6,
      zuora_order_id: _v7
    }) => {
      _v56.BigPictureClient.sendEvent(new _v56.Event("vimeo.zuora_purchase_steps", 1, {
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
    };
  _v0.s(["trackAddPaymentMethodAddClick", 0, _v0 => {
    (0, _v62.sendBpEventWithContexts)("vimeo.add_payment_method_add_click", {
      ...(0, _v61.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v58.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v59.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v60.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v57.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodCancelClick", 0, _v0 => {
    (0, _v62.sendBpEventWithContexts)("vimeo.add_payment_method_cancel_click", {
      ...(0, _v61.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v58.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v59.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v60.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v57.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodError", 0, (_v0, _v1) => {
    (0, _v62.sendBpEventWithContexts)("vimeo.add_payment_method_error", {
      ...(0, _v61.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v58.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v59.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v60.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0,
      error_copy: _v1
    });
  }, "trackAddPaymentMethodPageview", 0, _v0 => {
    (0, _v62.sendBpEventWithContexts)("vimeo.add_payment_method_pageview", {
      ...(0, _v61.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v58.buildProductAnalyticsBpContext)({
        location: "not_applicable_pageview",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v59.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v60.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodSuccess", 0, _v0 => {
    (0, _v62.sendBpEventWithContexts)("vimeo.add_payment_method_success", {
      ...(0, _v61.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v58.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v59.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v60.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackCheckoutFormAction", 0, _v66, "trackFailedOrder", 0, _v67, "trackOrderFailure", 0, ({
    userId: _v0,
    description: _v1
  }) => {
    _v56.BigPictureClient.sendEvent(new _v56.Event("vimeo.order_failure", 4, {
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
  }, "trackZuoraOrderStep", 0, _v68], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = {
      PAYPAL_CONNECTION: "paypal_connection",
      SIFT_ERROR: "sift_error",
      ZUORA_HPM_841: "zuora_hpm_841"
    },
    _v72 = _v0 => {
      switch (_v0) {
        case _v71.SIFT_ERROR:
          let _v0 = document.location.origin + "/help/contact?question=%20&category=cf_billing_membership&subcategory=cf_s_error_with_checkout_page";
          return (0, _v1.translate)({
            singular: "We were unable to process this transaction. Please {A}contact us{/A} directly.",
            replacements: {
              A: _v0 => (0, _v69.jsx)(_v70.Link, {
                href: _v0,
                target: "_blank",
                variant: "inline-primary",
                children: _v0
              })
            },
            dictionary: {
              "zh-CN": {
                singular: "我们无法处理该交易。请直接{A}联系我们{/A}。"
              }
            }
          });
        case _v71.PAYPAL_CONNECTION:
          return (0, _v1.translate)({
            singular: "Unable to connect to PayPal.",
            dictionary: {
              es: {
                singular: "No se puede conectar a PayPal."
              },
              "de-DE": {
                singular: "Keine Verbindung zu PayPal möglich."
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
          });
        case _v71.ZUORA_HPM_841:
          let {
              pathname: _v1,
              search: _v2
            } = window.location,
            _v3 = new URLSearchParams(_v2);
          _v3.set("currency", "USD");
          let _v4 = `${_v1}?${_v3.toString()}`;
          return (0, _v1.translate)({
            singular: "There seems to be a problem with the card you are trying to use. If you intend to pay with JCB, please click {A}here{/A} to refresh your currency to USD (prices may vary). Otherwise, please try a different method of payment.",
            replacements: {
              A: _v0 => (0, _v69.jsx)(_v70.Link, {
                href: _v4,
                variant: "inline-primary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Parece que hay un problema con la tarjeta que intenta usar. Si quiere pagar con JCB, haga clic {A}aquí{/A} para actualizar su moneda a USD (los precios pueden variar). De lo contrario, pruebe con otro método de pago."
              },
              "de-DE": {
                singular: "Es scheint ein Problem mit der Karte vorzuliegen, die Sie verwenden möchten. Wenn Sie mit JCB zahlen möchten, klicken Sie bitte {A}hier{/A} , um Ihre Währung auf USD zu aktualisieren (die Preise können variieren). Andernfalls versuchen Sie es bitte mit einer anderen Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Il semble y avoir un problème avec la carte que vous essayez d'utiliser. Si vous souhaitez payer avec JCB, veuillez cliquer {A}ici{/A} pour mettre à jour votre devise en USD (les prix peuvent varier). Sinon, veuillez essayer un autre mode de paiement."
              },
              "ja-JP": {
                singular: "使用しようとしているカードに問題があるようです。JCBで支払う場合は、{A}ここ{/A}をクリックして通貨を米ドルに更新してください（価格が変化する可能性があります）。それ以外の場合は、別のお支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "사용하려는 카드에 문제가 발생했습니다. JCB로 결제하려는 경우 {A}여기{/A}를 클릭하여 통화를 USD로 변경하세요(가격은 다를 수 있음). 그렇지 않은 경우 다른 결제 수단을 사용하시기 바랍니다."
              },
              "pt-BR": {
                singular: "Parece haver um problema com o cartão que você está tentando usar. Se você pretende pagar com JCB, clique {A}aqui{/A} para atualizar sua moeda para USD (os preços podem variar). Caso contrário, tente outro método de pagamento."
              },
              "zh-CN": {
                singular: "您尝试使用的卡似乎有问题。如果您想使用 JCB 卡支付，请点击{A}此处{/A}将您的币种刷新为美元（价格可能会变动）。否则，请尝试其他付款方式。"
              }
            }
          });
        default:
          return (0, _v1.translate)({
            singular: "Some information could not be verified. Please check the information or try a different card.",
            dictionary: {
              es: {
                singular: "No se ha podido verificar cierta información. Comprueba la información o inténtalo con una tarjeta distinta."
              },
              "de-DE": {
                singular: "Einige Informationen konnten nicht verifiziert werden. Bitte überprüfe die Informationen oder versuche es mit einer anderen Karte."
              },
              "fr-FR": {
                singular: "Certaines informations n'ont pas pu être vérifiées. Veuillez vérifier ces informations ou essayez une autre carte."
              },
              "ja-JP": {
                singular: "いくつかの情報が承認されませんでした。情報をご確認いただくか、別のカードをお試しください。"
              },
              "ko-KR": {
                singular: "일부 정보를 검증할 수 없습니다. 정보를 확인하거나 다른 카드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Não foi possível verificar algumas informações. Revise os dados ou tente um cartão diferente."
              },
              "zh-CN": {
                singular: "有些信息无法核实。请检查信息或尝试使用另一张卡。"
              }
            }
          });
      }
    };
  _v0.s(["ERROR_TYPE", 0, _v71, "getErrorMessage", 0, _v72], 0);
  var _v73 = _v0.i(0);
  let _v74 = () => {
      let _v0 = (0, _v48.useViewer)(),
        _v1 = _v77(),
        {
          settings: _v2
        } = (0, _v44.useOrionSettings)(),
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
        } = _v51(),
        {
          dispatch: _v13,
          state: {
            orderPreview: _v14
          }
        } = _v55(),
        [, _v15] = (0, _v13.default)(_v2, void 0),
        [_v16, _v17] = _v26(),
        [_v18, _v19] = _v30();
      return ((0, _v12.useEffect)(function () {
        let _v0;
        if (_v17.called ? _v0 = _v17 : _v19.called && (_v0 = _v19), _v0 && (_v13({
          type: _v73.ApiActionTypes.ORDER_PREVIEW,
          payload: _v0
        }), _v0.data)) {
          let _v0 = _v0.data?.error;
          _v4({
            type: _v73.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v0 ? _v13({
            type: _v73.ApiActionTypes.ORDER_PREVIEW,
            payload: {
              ..._v0,
              data: null,
              error: Error(_v0)
            }
          }) : (_v13({
            type: _v73.ApiActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v0.loading || (_v4({
            type: _v73.ActionTypes.ORDER_PREVIEW,
            payload: _v0.data
          }), _v15(_v0.data.id)));
        }
      }, [_v13, _v17, _v19, _v4, _v15]), (0, _v12.useEffect)(function () {
        let _v0 = _v14.data;
        if (!_v0?.billingAddress?.postalCode && !_v0?.location && !_v0?.billingAddress?.country) return;
        let _v1 = !!_v0?.billingAddress?.postalCode && (0, _v63.isZipCodeIsRequiredAutorenewalOptInRange)(_v0?.billingAddress?.postalCode),
          _v2 = _v0?.location === "DE" || _v0?.billingAddress?.country === "DE",
          _v3 = !!_v12 && "subscribe" !== _v12,
          _v4 = (!!_v2 && !_v8 && !_v9 || !!_v3) && null;
        _v4({
          type: _v73.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
          payload: _v1 || "subscribe" === _v12 ? {
            hasOptedInToAutorenew: _v4,
            hasAgreedToTerms: _v3
          } : null
        });
      }, [_v0?.location, _v8, _v9, _v14.data, _v4]), _v10 && (0, _v63.isCreatorProductTier)(_v10)) ? [_v0 => _v16({
        select: [],
        variables: {
          useJuno: _v3,
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
          }].map(_v63.transformToOrderItemOptions)
        }
      }), _v14] : "upgrade" === _v6 && _v7 && _v5 ? [(_v0, _v1) => _v18({
        select: [],
        variables: {
          type: _v6,
          billingPlanId: _v1 || _v5.id,
          subscriptionId: _v7.id,
          paymentMethodId: _v0.paymentMethodId,
          couponCode: _v0.couponCode
        }
      }), _v14] : [_v0 => _v16({
        select: [],
        variables: {
          useJuno: _v3,
          billingAddress: _v0?.billingAddress && Object.keys(_v0.billingAddress).length > 0 && Object.values(_v0.billingAddress).some(_v0 => "" !== _v0) ? _v0.billingAddress : void 0,
          currency: _v0.currency,
          firstName: _v1.firstName,
          lastName: _v1.lastName,
          couponCode: _v0.couponCode,
          vatId: _v0.vatId,
          isTrial: _v0.isTrial,
          items: (_v0.items || []).map(_v63.transformToOrderItemOptions)
        }
      }), _v14];
    },
    _v75 = (_v0 = 600) => {
      let [_v1, _v2] = _v74();
      return [(0, _v9.default)(_v1, _v0), _v2];
    },
    _v76 = () => {
      let _v0 = (0, _v11.useRouter)(),
        _v1 = (0, _v48.useViewer)(),
        _v2 = (0, _v10.useSearchParams)(),
        {
          settings: _v3
        } = (0, _v44.useOrionSettings)(),
        _v4 = _v3.use_juno_billing,
        [, _v5] = (0, _v13.default)(_v2, void 0),
        [_v6, _v7] = (0, _v13.default)(_v3, void 0),
        {
          state: {
            billingPlan: _v8,
            checkoutType: _v9,
            currentSubscription: _v10,
            subscriptionProduct: _v11,
            tier: _v12,
            isMonthly: _v13,
            isFreeTrial: _v14,
            isBusinessUserEntity: _v15,
            creatorProductAction: _v16,
            creatorProductId: _v17,
            creatorProductTitlePageUrl: _v18,
            inPlayer: _v19,
            defaultPaymentType: _v20
          },
          dispatch: _v21
        } = _v51(),
        {
          state: {
            submitOrder: _v22
          },
          dispatch: _v23
        } = _v55(),
        [_v24, _v25] = (0, _v34.usePatchMePreferences)(),
        {
          trackCheckoutFailed: _v26
        } = (0, _v45.useCheckoutTracking)(),
        _v27 = (0, _v46.usePico)(),
        _v28 = (0, _v12.useRef)(!1),
        _v29 = _v11?.isCreatorProduct ? (0, _v63.getPlanType)(_v16) : _v13 ? "monthly" : "annual",
        _v30 = (0, _v12.useCallback)((_v0, _v1) => {
          _v28.current || null === _v27 || void 0 === _v12 || (_v28.current = !0, _v26({
            tier: _v12,
            periodicity: _v29,
            isFreeTrial: _v14,
            error_message: _v0,
            ...(_v1 && {
              error_code: _v1
            })
          }));
        }, [_v27, _v29, _v12, _v14, _v26]),
        [_v31, _v32] = _v24(),
        [_v33, _v34] = _v28();
      return ((0, _v12.useEffect)(function () {
        let _v0,
          _v1 = () => {
            window.location.href = "/manage/team/billing?rns=0";
          };
        if (_v32.called ? _v0 = _v32 : _v34.called && (_v0 = _v34), _v0) {
          if (_v23({
            type: _v73.ApiActionTypes.SUBMIT_ORDER,
            payload: _v0
          }), _v0.error) {
            let _v0 = _v72();
            _v21({
              type: _v73.ActionTypes.PAYMENT_ALERT,
              payload: {
                status: "error",
                message: _v0
              }
            }), _v30(_v0.error.message), "renew" === _v9 && _v1();
          } else if (_v0.data) {
            let _v0 = _v0.data?.error;
            if (_v0) {
              _v23({
                type: _v73.ApiActionTypes.SUBMIT_ORDER,
                payload: {
                  ..._v0,
                  data: null,
                  error: Error(_v0)
                }
              });
              let _v0 = _v72();
              _v21({
                type: _v73.ActionTypes.PAYMENT_ALERT,
                payload: {
                  status: "error",
                  message: _v0
                }
              }), _v30(_v0), "renew" === _v9 && _v1();
            } else if (_v0.data?.shouldBlockPurchase) {
              let _v0 = _v72(_v71.SIFT_ERROR);
              _v23({
                type: _v73.ApiActionTypes.SUBMIT_ORDER,
                payload: {
                  ..._v0,
                  data: null,
                  error: Error(_v0)
                }
              }), _v21({
                type: _v73.ActionTypes.PAYMENT_ALERT,
                payload: {
                  status: "error",
                  message: _v0
                }
              }), _v30("SIFT_ERROR", "sift_error"), "renew" === _v9 && _v1();
            } else _v23({
              type: _v73.ApiActionTypes.SUBMIT_ORDER,
              payload: {
                ..._v0,
                loading: !0
              }
            }), _v21({
              type: _v73.ActionTypes.ORDER_SUBMIT,
              payload: _v0.data
            }), _v21({
              type: _v73.ActionTypes.PAYMENT_ALERT,
              payload: void 0
            });
          }
        }
      }, [_v23, _v21, _v32, _v34, _v9, _v30]), (0, _v12.useEffect)(() => {
        _v22.called && _v22.data && _v24({
          select: [],
          variables: {
            ue: _v15 ? _v5 : _v4
          }
        });
      }, [_v22, _v15, _v24]), (0, _v12.useEffect)(() => {
        if (_v22.called && _v22.data && _v25.called && _v25.data && !_v25.loading && _v11) if (_v5(null), _v6 && _v7(void 0), "renew" === _v9) window.location.href = "/manage/team/billing?rns=1";else if (_v19) window.opener ? window.location.href = `/store/ondemand/popup/${_v17}?ssl=1&player=1` : parent.location.reload();else {
          let _v0 = _v2 ? `&${_v2.toString()}` : "",
            _v1 = _v22.data.orderId,
            _v2 = _v11.isCreatorProduct ? (0, _v63.getPlanType)(_v16) : _v13 ? "monthly" : "annual",
            _v3 = `/onboarding${_v0.query?.token ? "/mobile" : ""}?product_name=${_v11.name}&user_email=${_v1?.user ? _v1.user.email : ""}&order_id=${_v1}${_v0}`;
          if ("purchase" === _v9) {
            let _v0 = `${_v11.tier}-${_v2}-${_v22.data.isTrial ? "free" : "paid"}`;
            _v3 += `&product_id=${_v0}`;
          }
          if (_v22.data.promoCode && _v1.user?.email && _v22.data.orderId && !_v22.data.isTrial) {
            let _v0 = encodeURIComponent(JSON.stringify({
              event: "extole_conversion_tracking",
              extole_purchase_v2: {
                first_name: _v22.data.firstName,
                last_name: _v22.data.lastName,
                email: _v1.user.email,
                partner_conversion_id: _v22.data.userId,
                cart_value: _v22.data.items.reduce((_v0, _v1) => _v0 + (_v1.subtotalAmount?.amount ?? 0), 0),
                coupon_code: _v22.data.promoCode.code,
                products: _v22.data.items.map(_v0 => _v0.id).join()
              }
            }));
            _v3 += `&extole_event_data=${_v0}`;
          }
          if (_v11.isCreatorProduct) window.location.href = _v18 || "/home";else {
            let _v0 = _v47.postCheckoutUrl.read();
            _v0 ? (_v47.postCheckoutUrl.clear(), window.location.href = _v0) : window.location.href = _v3;
          }
        }
      }, [_v22, _v25, _v5, _v11, _v0, _v23, _v6, _v7, _v9, _v16, _v13]), "renew" === _v9 && _v10) ? [_v0 => {
        _v33({
          select: [],
          where: {
            subscriptionId: _v10?.id
          },
          variables: {
            type: _v9,
            billingPlanId: "",
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode,
            orderId: _v0.id,
            userEntity: _v15 ? _v5 : _v4
          }
        });
      }, _v22] : "upgrade" === _v9 && _v10 && _v8 ? [_v0 => {
        _v33({
          select: [],
          where: {
            subscriptionId: _v10?.id
          },
          variables: {
            type: _v9,
            billingPlanId: _v8.id,
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode,
            orderId: _v0.id,
            userEntity: _v15 ? _v5 : _v4
          }
        });
      }, _v22] : [_v0 => {
        _v0.firstName && _v0.lastName && _v0.billingAddress && _v0.paymentMethodId && _v31({
          variables: {
            useJuno: _v4,
            billingAddress: _v0.billingAddress,
            currency: _v0.currency,
            firstName: _v0.firstName,
            isTrial: !!_v0.isTrial,
            items: function (_v0) {
              if (_v16 && _v17) {
                let _v0 = _v0.items[0];
                _v0.billingPlanId = "", _v0.productId = Number(_v17);
              }
              return _v0.items;
            }(_v0),
            lastName: _v0.lastName,
            paymentMethodId: _v0.paymentMethodId,
            paymentFormType: _v20,
            couponCode: _v0.couponCode,
            vatId: _v0.vatId,
            orderId: _v0.id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            userEntity: _v15 ? _v5 : _v4,
            hpmSessionId: _v1?.xsrft ?? ""
          },
          select: []
        });
      }, _v22];
    },
    _v77 = () => {
      let _v0 = (0, _v48.useViewer)();
      return {
        firstName: _v0?.user?.name?.split(" ")[0] || "_",
        lastName: _v0?.user?.name?.split(" ").slice(1).join(" ") || "_"
      };
    },
    _v78 = () => {
      let _v0 = (0, _v7.useStripe)(),
        _v1 = (0, _v7.useElements)();
      return [async ({
        clientSecret: _v0,
        name: _v1,
        postalCode: _v2,
        state: _v3,
        country: _v4
      }) => {
        if (!_v0 || !_v1) return {
          paymentIntent: void 0,
          error: void 0
        };
        let {
          paymentIntent: _v5,
          error: _v6
        } = await _v0.confirmPayment({
          elements: _v1,
          clientSecret: _v0,
          redirect: "if_required",
          confirmParams: {
            return_url: window.location.href,
            payment_method_data: {
              billing_details: {
                name: _v1,
                email: null,
                phone: null,
                address: {
                  line1: null,
                  line2: null,
                  city: null,
                  state: _v3,
                  postal_code: _v2,
                  country: _v4
                }
              }
            }
          }
        });
        return {
          paymentIntent: _v5,
          error: _v6
        };
      }];
    },
    _v79 = () => {
      let _v0 = (0, _v7.useStripe)(),
        _v1 = (0, _v7.useElements)();
      return [async ({
        clientSecret: _v0,
        name: _v1,
        postalCode: _v2,
        state: _v3,
        country: _v4
      }) => {
        if (!_v0 || !_v1) return {
          setupIntent: void 0,
          error: void 0
        };
        let {
          setupIntent: _v5,
          error: _v6
        } = await _v0.confirmSetup({
          elements: _v1,
          clientSecret: _v0,
          redirect: "if_required",
          confirmParams: {
            return_url: window.location.href,
            payment_method_data: {
              billing_details: {
                name: _v1,
                email: null,
                phone: null,
                address: {
                  line1: null,
                  line2: null,
                  city: null,
                  state: _v3,
                  postal_code: _v2,
                  country: _v4
                }
              }
            }
          }
        });
        return {
          setupIntent: _v5,
          error: _v6
        };
      }];
    };
  _v0.s(["useAddStripePaymentMethod", 0, () => {
    let _v0 = (0, _v48.useViewer)(),
      _v1 = (0, _v7.useStripe)(),
      _v2 = (0, _v7.useElements)(),
      [_v3, _v4] = (0, _v12.useState)(!1),
      [_v5] = _v78(),
      [_v6] = _v79();
    return [_v3, async ({
      billingName: _v0,
      billingAddress: _v1,
      onSubmissionComplete: _v2,
      onSubmitError: _v3
    }) => {
      let _v4, _v5, _v6;
      if (!_v1 || !_v2) return;
      _v4(!0);
      let {
        error: _v7
      } = await _v2.submit();
      if (_v7?.message) {
        _v3(_v7.message), _v4(!1);
        return;
      }
      let _v8 = await fetch("/payments/stripe/payment-method", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          token: _v0.xsrft
        })
      });
      if (!_v8.ok) {
        _v3((0, _v1.translate)({
          singular: "An error occurred while processing your payment.",
          dictionary: {
            es: {
              singular: "Se produjo un error al procesar su pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur s’est produite lors du traitement de votre paiement."
            },
            "ja-JP": {
              singular: "お支払いの処理中にエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 처리 도중 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro ao processar seu pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款时发生错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      let {
        type: _v9,
        clientSecret: _v10
      } = await _v8.json();
      if (!_v10 || !_v9) {
        _v3((0, _v1.translate)({
          singular: "An error occurred while processing your payment method.",
          dictionary: {
            es: {
              singular: "Se produjo un error al procesar su método de pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlungsmethode ist ein Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite lors du traitement de votre mode de paiement."
            },
            "ja-JP": {
              singular: "お支払い方法の処理中にエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 수단 처리 도중 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro ao processar sua forma de pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款方式时发生错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      if (!_v0) {
        _v3((0, _v1.translate)({
          singular: "Cardholder name is required.",
          dictionary: {
            es: {
              singular: "El nombre del titular de la tarjeta es obligatorio."
            },
            "de-DE": {
              singular: "Der Name des Karteninhabers ist erforderlich."
            },
            "fr-FR": {
              singular: "Le nom du titulaire de la carte est obligatoire."
            },
            "ja-JP": {
              singular: "カード名義人名は必須です。"
            },
            "ko-KR": {
              singular: "카드 소유자 이름은 필수 입력 사항입니다."
            },
            "pt-BR": {
              singular: "O nome do titular é obrigatório."
            },
            "zh-CN": {
              singular: "持卡人姓名是必填项。"
            }
          }
        })), _v4(!1);
        return;
      }
      let _v11 = _v1?.postalCode || null,
        _v12 = _v1?.state || null,
        _v13 = _v1?.country || null;
      if ("payment" === _v9) {
        let _v0 = await _v5({
          clientSecret: _v10,
          name: _v0,
          postalCode: _v11,
          state: _v12,
          country: _v13
        });
        _v5 = _v0.paymentIntent, _v6 = _v0.error;
      } else {
        let _v0 = await _v6({
          clientSecret: _v10,
          name: _v0,
          postalCode: _v11,
          state: _v12,
          country: _v13
        });
        _v4 = _v0.setupIntent, _v6 = _v0.error;
      }
      let _v14 = _v5 || _v4;
      if (_v6?.message) {
        _v3(_v6.message), _v4(!1);
        return;
      }
      if (!_v14?.id) {
        _v3((0, _v1.translate)({
          singular: "An unknown error occurred while processing your payment method.",
          dictionary: {
            es: {
              singular: "Se produjo un error desconocido al procesar su método de pago."
            },
            "de-DE": {
              singular: "Bei der Verarbeitung Ihrer Zahlungsmethode ist ein unbekannter Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur inconnue s'est produite lors du traitement de votre mode de paiement."
            },
            "ja-JP": {
              singular: "お支払い方法の処理中に不明なエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 수단 처리 도중 알 수 없는 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro desconhecido ao processar a sua forma de pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款方式时发生了未知错误。"
            }
          }
        })), _v4(!1);
        return;
      }
      _v4(!1), _v2(_v14.id);
    }];
  }, "useAuthorizePaypal", 0, () => {
    let {
        dispatch: _v0,
        state: {
          subscriptionProduct: _v1,
          checkoutType: _v2,
          currentSubscription: _v3,
          billingPlan: _v4,
          order: _v5,
          isBusinessUserEntity: _v6,
          creatorProductAction: _v7,
          creatorProductId: _v8
        }
      } = _v51(),
      {
        settings: _v9
      } = (0, _v44.useOrionSettings)(),
      _v10 = _v9.use_juno_billing,
      [_v11, _v12] = _v33(),
      _v13 = (0, _v11.useRouter)();
    return (0, _v12.useEffect)(function () {
      if (_v12.error) {
        let _v0 = _v72(_v71.PAYPAL_CONNECTION);
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v0
          }
        });
      }
    }, [_v12.error, _v0]), (0, _v12.useEffect)(function () {
      if (_v12.data) {
        let {
          redirectUrl: _v0
        } = _v12.data;
        window.location.href = _v0;
      }
    }, [_v12.data]), [() => {
      let _v0 = _v6 ? _v5 : _v4,
        _v1 = _v1?.name ? encodeURIComponent(_v1?.name) : "",
        _v2 = _v13.query?.token ? `&token=${_v13.query?.token}&mwru=${_v13.query?.mwru}` : "",
        _v3 = `${window.location.origin}/payments/paypal/authorized?product_name=${_v1}&checkout_type=${_v2}&user_entity=${_v0}${_v2}`;
      _v10 && (_v3 += "&use_juno=1"), "purchase" === _v2 ? _v3 += `&order_id=${_v5?.id}` : _v3 += `&subscription_id=${_v3?.id}&billing_plan_id=${_v4?.id}`;
      let _v4 = _v7 && _v8 ? `/checkout/ondemand?action=${_v7}&product=${_v8}` : `/checkout/${_v1.toLowerCase()}?${_v2.substring(1)}`;
      _v3 += `&error_redirect=${encodeURIComponent(_v4)}`;
      let _v5 = _v47.postCheckoutUrl.read();
      _v5 && (_v3 += `&post_checkout_url=${encodeURIComponent(_v5)}`), _v11({
        variables: {
          cancelUrl: window.location.href,
          notifyUrl: "/",
          returnUrl: _v3
        },
        select: ["redirectUrl"]
      });
    }, _v12];
  }, "useAuthorizePaypalForAddPaymentMethod", 0, () => {
    let [_v0, _v1] = _v33(),
      _v2 = (0, _v11.useRouter)();
    return [({
      hasOpenInvoice: _v0 = !1
    }) => {
      let _v1 = _v2.query?.token && !(0, _v63.isPayPalToken)(_v2.query?.token) ? `&token=${_v2.query?.token}&mwru=${_v2.query?.mwru}` : "",
        _v2 = `${_v1 ? `?${_v1.substring(1)}` : ""}`,
        _v3 = `${_v0 ? `${_v1 ? "&" : "?"}open_invoice=1` : ""}`,
        _v4 = `${_v2}${_v3}`,
        _v5 = `${window.location.origin}/payments/paypal/add-payment-method${_v4}`;
      _v0({
        variables: {
          cancelUrl: `${window.location.href}?payPalCancel=true`,
          notifyUrl: "/",
          returnUrl: `${_v5}`
        },
        select: ["redirectUrl"]
      });
    }, _v1];
  }, "useFetchSubscriptionProduct", 0, () => {
    let {
        dispatch: _v0,
        state: {
          tier: _v1,
          isMonthly: _v2,
          isRenewNow: _v3,
          currencyQuery: _v4,
          checkoutType: _v5,
          creatorProductAction: _v6,
          creatorProductId: _v7,
          creatorProductTitlePageUrl: _v8,
          campaign: _v9,
          fakeDoorConfig: _v10
        }
      } = _v51(),
      _v11 = (0, _v43.useCampaignIdOverride)() ?? _v9,
      _v12 = (0, _v48.useViewer)(),
      [_v13, _v14] = (0, _v13.default)(_v3, void 0),
      _v15 = _v1 && (0, _v63.isCreatorProductTier)(_v1),
      _v16 = (0, _v63.getErrorRedirectPath)(_v1, _v8, _v10),
      _v17 = _v39(() => _v12 && _v1 && (!_v15 || _v7) ? _v15 ? {
        select: _v73.SUBSCRIPTION_PRODUCT_FIELDS,
        query: {
          country: _v12.location,
          legacyProductId: String(_v7),
          action: _v6,
          currency: "purchase" === _v5 && _v4 ? _v4.toUpperCase() : void 0,
          ...(_v11 && {
            campaignId: _v11
          })
        }
      } : {
        select: _v73.SUBSCRIPTION_PRODUCT_FIELDS,
        query: {
          country: _v12.location,
          tiers: [_v1],
          billingPlanId: _v13,
          currency: "purchase" === _v5 && _v4 ? _v4.toUpperCase() : void 0,
          ...(_v11 && {
            campaignId: _v11
          }),
          vuid: _v12.vuid
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v18 = _v17.data ? _v17.data?.data?.[0] : void 0;
    return (0, _v12.useEffect)(() => {
      if ((_v17.data && !_v18 || _v17.error) && !_v10) {
        _v14(void 0), window.location.href = window.location.origin + _v16;
        return;
      }
      if (_v17.data && _v18 && !_v3) {
        let _v0 = _v2 ? "monthly" : "annual",
          _v1 = _v15 ? _v18.plans[(0, _v63.getPlanType)(_v6)] : _v18.plans[_v0];
        _v1 && "available" === _v1.metadata.status || _v10 || (_v14(void 0), window.location.href = window.location.origin + _v16), _v0({
          type: _v73.ActionTypes.FETCH_PRODUCT,
          payload: _v18
        }), _v0({
          type: _v73.ActionTypes.SET_BILLING_PLAN,
          payload: _v1
        }), _v18.creatorProductUrls && (_v0({
          type: _v73.ActionTypes.SET_CREATOR_PRODUCT_THUMBNAIL_URL,
          payload: _v18.creatorProductUrls.thumbnail
        }), _v0({
          type: _v73.ActionTypes.SET_CREATOR_PRODUCT_TITLE_PAGE_URL,
          payload: _v18.creatorProductUrls.clipPage
        }));
      }
      _v17.data && _v18 && _v3 && _v0({
        type: _v73.ActionTypes.FETCH_PRODUCT,
        payload: _v18
      });
    }, [_v0, _v17.data, _v17.error, _v18, _v2, _v14, _v3]), {
      ..._v17,
      data: _v18
    };
  }, "useGetFormattedDate", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v48.useViewer)(),
      _v3 = _v0 ? new Date(_v0) : new Date();
    return new Intl.DateTimeFormat(_v2.locale, {
      year: "numeric",
      month: _v1 ? "short" : "long",
      day: "2-digit",
      timeZone: "UTC"
    }).format(_v3);
  }, "useGetOrCreateOrderPreview", 0, () => {
    let {
        settings: _v0
      } = (0, _v44.useOrionSettings)(),
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
      } = _v51(),
      _v17 = (0, _v48.useViewer)(),
      _v18 = _v77(),
      [_v19, _v20] = (0, _v13.default)(_v2, null),
      [_v21, _v22] = _v30(),
      [_v23, _v24] = _v26(),
      [_v25, _v26] = _v22(),
      [_v27, _v28] = _v42(),
      [_v29, _v30] = (0, _v12.useState)(),
      {
        data: _v31,
        error: _v32
      } = _v29 || {},
      [_v33, _v34] = (0, _v12.useState)(null),
      _v35 = _v12 && (0, _v63.isCreatorProductTier)(_v12);
    return (0, _v12.useEffect)(() => {
      if (_v16 && _v28.error && !_v28.loading) return void _v34(_v16);
      if (_v16) {
        _v20(null), _v34(null);
        let _v0 = _v28.data?.id !== _v16 && _v28.data?.metadata?.batchCode !== _v16;
        !_v28.loading && _v0 && _v27({
          where: {
            promoCodeId: _v16
          },
          select: ["code", "id", "metadata"]
        });
      }
    }, [_v16, _v27, _v20, _v28.loading, _v28.data]), (0, _v12.useEffect)(function () {
      let _v0 = _v15?.couponCode || _v28.data?.code,
        _v1 = _v28.data?.metadata;
      _v1 && "string" == typeof _v1.batchCode && _v1.batchCode && (_v0 = _v1.batchCode), _v0 && _v0 === _v33 && (_v0 = void 0);
      let _v2 = _v0 || void 0;
      if (_v17 && _v10 && (_v3 || _v8) && void 0 !== _v5 && _v19 !== _v31?.id && (!_v35 || _v14) && !_v24.loading) if (_v35) {
        let _v0 = _v11 && "PAYMENT_METHOD_TYPES_CARD" === _v11.type ? _v11.card?.billingAddress : _v1 && _v17?.location ? {
          country: _v17.location,
          postalCode: "00000-0000"
        } : void 0;
        _v23({
          select: [],
          variables: {
            useJuno: _v1,
            firstName: _v18.firstName,
            lastName: _v18.lastName,
            currency: _v3?.price?.currency || "",
            billingAddress: _v0,
            isTrial: !1,
            items: [{
              productId: _v14 ?? void 0,
              quantity: 1
            }],
            couponCode: _v2
          }
        });
      } else _v19 && "purchase" === _v4 ? _v25({
        select: [],
        where: {
          orderId: _v19
        }
      }) : _v5 && ("upgrade" === _v4 || "renew" === _v4) ? _v21({
        select: [],
        variables: {
          type: _v4,
          billingPlanId: "renew" === _v4 ? "" : _v3?.id ?? "",
          subscriptionId: _v5.id,
          paymentMethodId: _v11?.id,
          couponCode: _v2
        }
      }) : _v23({
        select: [],
        variables: {
          useJuno: _v1,
          firstName: _v18.firstName,
          lastName: _v18.lastName,
          currency: _v3?.price?.currency ?? "",
          billingAddress: _v1 && _v17?.location ? {
            country: _v17.location,
            postalCode: "00000-0000"
          } : void 0,
          isTrial: _v6,
          items: [{
            billingPlanId: _v3?.id,
            quantity: 1
          }],
          couponCode: _v2
        }
      });
    }, [_v33, _v28.data, _v15, _v3, _v4, _v5, _v25, _v6, _v7, _v8, _v19, _v31?.id, _v23, _v21, _v10, _v18.firstName, _v18.lastName, _v17, _v11, _v13, _v14, _v35, _v1]), (0, _v12.useEffect)(function () {
      let _v0;
      _v24.called ? _v0 = _v24 : _v22.called ? _v0 = _v22 : _v26.called && (_v0 = _v26), _v0 && (_v30({
        ..._v0,
        data: _v0.data ?? null
      }), _v0.data && (_v2({
        type: _v73.ActionTypes.ORDER_PREVIEW,
        payload: _v0.data
      }), _v20(_v0.data.id)));
    }, [_v2, _v26, _v24, _v22, _v20]), (0, _v12.useEffect)(function () {
      if (_v31 && _v10) {
        if (_v10.isCreatorProduct || _v10.isBandwidthProduct) return;
        let _v0 = _v3?.id;
        ("purchase" !== _v4 || _v31.currency === _v3?.price?.currency) && _v31.isTrial == _v6 && (_v31.items?.find(_v0 => _v0.billingPlanId === _v0) || _v8) || (_v20(null), _v2({
          type: _v73.ActionTypes.ORDER_PREVIEW,
          payload: null
        }));
      }
    }, [_v3, _v2, _v6, _v7, _v8, _v31, _v20, _v10, _v4]), (0, _v12.useEffect)(function () {
      _v32 && (404 === _v32.status ? (_v20(null), _v2({
        type: _v73.ActionTypes.ORDER_PREVIEW,
        payload: null
      })) : 400 === _v32.status && (async () => {
        let _v0 = "";
        if (_v32.res?.body instanceof ReadableStream) {
          if (!_v32.res.body.locked) {
            let _v0 = _v32.res.body.getReader(),
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
        } else _v0 = "string" == typeof _v32.res?.body ? _v32.res.body : JSON.stringify(_v32);
        let _v1 = _v0.toLowerCase().includes("invalid coupon code"),
          _v2 = _v28.data?.code;
        if (_v1 && _v2) {
          _v2({
            type: _v73.ActionTypes.ORDER_PREVIEW,
            payload: null
          }), _v34(_v2);
          return;
        }
      })());
    }, [_v2, _v32, _v20, _v28.data?.code]), (0, _v12.useEffect)(function () {
      if (!_v31?.billingAddress?.postalCode && !_v17?.location && !_v31?.billingAddress?.country) return;
      let _v0 = !!_v31?.billingAddress?.postalCode && (0, _v63.isZipCodeIsRequiredAutorenewalOptInRange)(_v31?.billingAddress?.postalCode),
        _v1 = _v17?.location === "DE" || _v31?.billingAddress?.country === "DE",
        _v2 = !!_v13 && "subscribe" !== _v13,
        _v3 = _v0 || "subscribe" === _v13,
        _v4 = (!!_v1 && !_v7 && !_v9 || !!_v2) && null;
      _v2({
        type: _v73.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
        payload: _v3 ? {
          hasOptedInToAutorenew: _v4,
          hasAgreedToTerms: _v2
        } : null
      });
    }, [_v17?.location, _v9, _v31?.billingAddress?.postalCode, _v31?.billingAddress?.country, _v7, _v2, _v13]), {
      isLoading: _v29?.loading,
      order: _v29?.data,
      error: _v29?.error
    };
  }, "useGetPaymentMethods", 0, () => {
    let {
        dispatch: _v0
      } = _v51(),
      {
        isLoading: _v1,
        data: _v2
      } = (0, _v31.useGetMePaymentMethods)({
        select: _v73.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      });
    return (0, _v12.useEffect)(() => {
      if (_v2 && _v2.data) {
        let _v0 = _v2.data.filter(_v63.filterSavedPaymentMethods);
        if (_v0.length > 0) {
          _v0({
            type: _v73.ActionTypes.PAYMENT_METHODS,
            payload: _v0
          });
          let _v0 = _v0.find(_v0 => _v0.isDefault) || _v0[0];
          _v0 && _v0({
            type: _v73.ActionTypes.SELECT_PAYMENT_METHOD,
            payload: _v0
          });
        }
      }
    }, [_v0, _v2]), {
      isLoadingPaymentMethods: _v1,
      paymentMethods: _v2?.data
    };
  }, "useGetUserEntity", 0, () => {
    let _v0 = (0, _v34.useGetMePreferences)({
      select: ["ue"]
    });
    return {
      ..._v0,
      data: _v0?.data?.ue
    };
  }, "useGetUserSubscription", 0, () => {
    let _v0 = (0, _v48.useViewer)(),
      {
        dispatch: _v1,
        state: {
          billingPlan: _v2,
          isRenewNow: _v3,
          tier: _v4
        }
      } = _v51(),
      [_v5, _v6] = (0, _v12.useState)(),
      {
        data: _v7
      } = (0, _v40.useGetMeSubscriptions)({
        select: _v73.SUBSCRIPTION_FIELDS,
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE",
          types: ["SUBSCRIPTION_TYPE_BASE"]
        }
      });
    return (0, _v12.useEffect)(function () {
      let _v0 = _v4 && (0, _v63.isCreatorProductTier)(_v4);
      if (_v7?.data) {
        _v7.data.length > 1 && window.DD_RUM && window.DD_RUM.onReady(() => {
          window.DD_RUM.addError("Multiple active subscriptions found for user", {
            userId: Number(_v0?.user?.id),
            component: "checkout"
          });
        });
        let _v0 = _v7.data[0] ?? null;
        _v6(_v0), _v1({
          type: _v73.ActionTypes.FETCH_SUBSCRIPTION,
          payload: _v0
        }), _v1({
          type: _v73.ActionTypes.SET_CHECKOUT_TYPE,
          payload: _v0 && !_v0 ? _v3 ? "renew" : "upgrade" : "purchase"
        });
      }
    }, [_v1, _v7, _v2, _v3, _v0?.user?.id]), {
      currentSubscription: _v5
    };
  }, "useLoadStripe", 0, ({
    paymentFormType: _v0
  }) => {
    let _v1,
      _v2 = (0, _v48.useViewer)(),
      [_v3, _v4] = (0, _v12.useState)(void 0),
      [_v5, _v6] = (0, _v12.useState)(void 0),
      [_v7, _v8] = (0, _v12.useState)(void 0),
      _v9 = (0, _v12.useRef)(!1),
      _v10 = (0, _v12.useRef)(null);
    return (0, _v12.useEffect)(() => {
      let _v0 = new AbortController(),
        _v1 = async () => {
          if (!_v3 && !_v9.current && _v2?.xsrft) {
            _v9.current = !0;
            try {
              let _v0 = await fetch("/payments/stripe/config", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-type": "application/json",
                  "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                  token: _v2.xsrft
                })
              });
              if (!_v0.ok) throw Error((0, _v1.translate)({
                singular: "An error occurred while rendering the Stripe form.",
                dictionary: {
                  es: {
                    singular: "Se produjo un error al renderizar el formulario de Stripe."
                  },
                  "de-DE": {
                    singular: "Beim Rendern des Stripe-Formulars ist ein Fehler aufgetreten."
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite lors de l'affichage du formulaire Stripe."
                  },
                  "ja-JP": {
                    singular: "Stripeフォームのレンダリング中にエラーが発生しました。"
                  },
                  "ko-KR": {
                    singular: "Stripe 양식을 불러오는 도중 오류가 발생했습니다."
                  },
                  "pt-BR": {
                    singular: "Ocorreu um erro ao renderizar o formulário do Stripe."
                  },
                  "zh-CN": {
                    singular: "渲染 Stripe 表单时发生错误。"
                  }
                }
              }));
              let _v1 = await _v0.json();
              _v8(_v1.currency), _v4(_v1.publishableKey), _v6(_v1.paymentMethodConfigId);
            } catch (_v0) {
              if (_v0 instanceof Error && "AbortError" === _v0.name) return;
              throw _v0;
            }
          }
        };
      if (_v0 === _v73.PaymentFormTypes.TYPE_STRIPE) return _v1(), () => {
        _v0.abort();
      };
    }, [_v3, _v0, _v2?.xsrft]), !_v10.current && _v3 && (_v10.current = (0, _v8.loadStripe)(_v3)), _v10.current && _v7 && _v3 && _v5 && (_v1 = {
      currency: _v7,
      publishableKey: _v3,
      paymentMethodConfigId: _v5
    }), [_v1, _v10.current];
  }, "usePayStripeBalance", 0, () => {
    let _v0 = (0, _v7.useStripe)(),
      _v1 = (0, _v7.useElements)(),
      [_v2, _v3] = (0, _v12.useState)(!1),
      [_v4] = _v78();
    return [_v2, async ({
      clientSecret: _v0,
      billingName: _v1,
      billingAddress: _v2,
      onSubmissionComplete: _v3,
      onSubmitError: _v4
    }) => {
      if (!_v0 || !_v1) return;
      _v3(!0);
      let {
        error: _v5
      } = await _v1.submit();
      if (_v5?.message) {
        _v4(_v5.message), _v3(!1);
        return;
      }
      if (!_v1) {
        _v4((0, _v1.translate)({
          singular: "Cardholder name is required.",
          dictionary: {
            es: {
              singular: "El nombre del titular de la tarjeta es obligatorio."
            },
            "de-DE": {
              singular: "Der Name des Karteninhabers ist erforderlich."
            },
            "fr-FR": {
              singular: "Le nom du titulaire de la carte est obligatoire."
            },
            "ja-JP": {
              singular: "カード名義人名は必須です。"
            },
            "ko-KR": {
              singular: "카드 소유자 이름은 필수 입력 사항입니다."
            },
            "pt-BR": {
              singular: "O nome do titular é obrigatório."
            },
            "zh-CN": {
              singular: "持卡人姓名是必填项。"
            }
          }
        })), _v3(!1);
        return;
      }
      let _v6 = _v2?.postalCode || null,
        _v7 = _v2?.state || null,
        _v8 = _v2?.country || null,
        _v9 = await _v4({
          clientSecret: _v0,
          name: _v1,
          postalCode: _v6,
          state: _v7,
          country: _v8
        }),
        _v10 = _v9.paymentIntent,
        _v11 = _v9.error;
      if (_v11?.message) {
        _v4(_v11.message), _v3(!1);
        return;
      }
      if (!_v10?.id) {
        _v4((0, _v1.translate)({
          singular: "An unknown error occurred while processing your payment.",
          dictionary: {
            es: {
              singular: "Se produjo un error desconocido al procesar su pago."
            },
            "de-DE": {
              singular: "Bei der Bearbeitung Ihrer Zahlung ist ein unbekannter Fehler aufgetreten."
            },
            "fr-FR": {
              singular: "Une erreur inconnue s'est produite lors du traitement de votre paiement."
            },
            "ja-JP": {
              singular: "お支払いの処理中に不明なエラーが発生しました。"
            },
            "ko-KR": {
              singular: "결제 처리 도중 알 수 없는 오류가 발생했습니다."
            },
            "pt-BR": {
              singular: "Ocorreu um erro desconhecido ao processar seu pagamento."
            },
            "zh-CN": {
              singular: "处理您的付款时发生了未知错误。"
            }
          }
        })), _v3(!1);
        return;
      }
      _v3(!1), _v3(_v10.id);
    }];
  }, "useSelectPaymentMethod", 0, () => {
    let {
        state: {
          paymentMethods: _v0
        },
        dispatch: _v1
      } = _v51(),
      [_v2] = _v75();
    return (_v0, _v1) => {
      let _v2 = _v0?.find(_v0 => _v0.id === _v0);
      if (!_v0 || !_v2) throw Error("Invalid payment method selected.");
      _v1 && _v2.card?.billingAddress && _v2({
        ..._v1,
        paymentMethodId: _v2.id,
        billingAddress: _v2.card.billingAddress
      }), _v1({
        type: _v73.ActionTypes.SELECT_PAYMENT_METHOD,
        payload: _v2
      });
    };
  }, "useSubmitOrder", 0, _v76, "useSubmitPaymentMethod", 0, () => {
    let _v0 = (0, _v48.useViewer)(),
      _v1 = (0, _v11.useRouter)(),
      [_v2, _v3] = (0, _v31.usePostMePaymentMethods)();
    return [_v0?.user?.id || _v1.query?.token ? (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
      _v0 && _v0.user && _v68({
        user_id: `${_v0.user.id}`,
        hpm_session_id: _v0.xsrft,
        step_name: "Received vendor token",
        payment_method_id: _v0
      }), _v2({
        select: [],
        variables: {
          vendorToken: _v0,
          paymentFormType: _v1,
          isDefault: _v2,
          vatId: _v3,
          billingAddress: _v4,
          hpmSessionId: _v6,
          attemptSyncPayment: _v5 ?? !0
        }
      }), _v0 && _v0.user && _v68({
        user_id: `${_v0.user.id}`,
        hpm_session_id: _v0.xsrft,
        step_name: "Passed vendor token to API",
        payment_method_id: _v0
      });
    } : null, _v3];
  }, "useSubmitStripe", 0, () => {
    let {
        dispatch: _v0,
        state: {
          order: _v1,
          storePaymentMethod: _v2,
          tier: _v3,
          isMonthly: _v4,
          isFreeTrial: _v5,
          subscriptionProduct: _v6,
          creatorProductAction: _v7
        }
      } = _v51(),
      _v8 = (0, _v48.useViewer)(),
      {
        firstName: _v9,
        lastName: _v10
      } = _v77(),
      _v11 = (0, _v7.useStripe)(),
      _v12 = (0, _v7.useElements)(),
      [_v13] = _v76(),
      [_v14] = _v78(),
      [_v15] = _v79(),
      [_v16, _v17] = (0, _v12.useState)(!1),
      {
        trackCheckoutFailed: _v18
      } = (0, _v45.useCheckoutTracking)(),
      _v19 = _v6?.isCreatorProduct ? (0, _v63.getPlanType)(_v7) : _v4 ? "monthly" : "annual",
      _v20 = (0, _v12.useCallback)(() => ({
        trackCheckoutFailed: _v18,
        tier: _v3 ?? "unknown",
        periodicity: _v19,
        isFreeTrial: _v5
      }), [_v18, _v3, _v19, _v5]);
    return [_v16, async ({
      billingName: _v0
    }) => {
      let _v1, _v2, _v3;
      if (!_v11 || !_v12 || !_v1) return;
      _v17(!0);
      let {
        error: _v4
      } = await _v12.submit();
      if (_v4?.message) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v4.message
          }
        }), _v17(!1), _v67({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "",
            formErrorMessage: _v4.message
          },
          checkoutTracking: _v20()
        });
        return;
      }
      let _v5 = await fetch("/payments/stripe/payment", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify((0, _v14.deepSnakeCase)({
          token: _v8.xsrft,
          store_payment_method: _v2,
          first_name: _v9,
          last_name: _v10,
          currency: _v1.currency,
          items: _v1.items.map(_v63.transformToOrderItemOptions),
          billing_address: _v1.billingAddress,
          is_trial: _v1.isTrial,
          vat_id: _v1.vatId,
          coupon_code: _v1.couponCode
        }))
      });
      if (!_v5.ok) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v1.translate)({
              singular: "An error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur s’est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中にエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生错误。"
                }
              }
            })
          }
        }), _v17(!1);
        return;
      }
      let {
        type: _v6,
        clientSecret: _v7
      } = await _v5.json();
      if (!_v7 || !_v6) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v1.translate)({
              singular: "An error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Verarbeitung Ihrer Zahlung ist ein Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur s’est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中にエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生错误。"
                }
              }
            })
          }
        }), _v17(!1);
        return;
      }
      if (!_v0) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v1.translate)({
              singular: "Cardholder name is required.",
              dictionary: {
                es: {
                  singular: "El nombre del titular de la tarjeta es obligatorio."
                },
                "de-DE": {
                  singular: "Der Name des Karteninhabers ist erforderlich."
                },
                "fr-FR": {
                  singular: "Le nom du titulaire de la carte est obligatoire."
                },
                "ja-JP": {
                  singular: "カード名義人名は必須です。"
                },
                "ko-KR": {
                  singular: "카드 소유자 이름은 필수 입력 사항입니다."
                },
                "pt-BR": {
                  singular: "O nome do titular é obrigatório."
                },
                "zh-CN": {
                  singular: "持卡人姓名是必填项。"
                }
              }
            })
          }
        }), _v17(!1);
        return;
      }
      let _v8 = _v1?.billingAddress?.postalCode || null,
        _v9 = _v1?.billingAddress?.state || null,
        _v10 = _v1?.billingAddress?.country || null;
      if ("payment" === _v6) {
        let _v0 = await _v14({
          clientSecret: _v7,
          name: _v0,
          postalCode: _v8,
          state: _v9,
          country: _v10
        });
        _v2 = _v0.paymentIntent, _v3 = _v0.error;
      } else {
        let _v0 = await _v15({
          clientSecret: _v7,
          name: _v0,
          postalCode: _v8,
          state: _v9,
          country: _v10
        });
        _v1 = _v0.setupIntent, _v3 = _v0.error;
      }
      let _v11 = _v2 || _v1;
      if (_v3?.message) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v3.message
          }
        }), _v17(!1), _v67({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "",
            formErrorMessage: _v3.message
          },
          checkoutTracking: _v20()
        });
        return;
      }
      if (!_v11?.id) {
        _v0({
          type: _v73.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: (0, _v1.translate)({
              singular: "An unknown error occurred while processing your payment.",
              dictionary: {
                es: {
                  singular: "Se produjo un error desconocido al procesar su pago."
                },
                "de-DE": {
                  singular: "Bei der Bearbeitung Ihrer Zahlung ist ein unbekannter Fehler aufgetreten."
                },
                "fr-FR": {
                  singular: "Une erreur inconnue s'est produite lors du traitement de votre paiement."
                },
                "ja-JP": {
                  singular: "お支払いの処理中に不明なエラーが発生しました。"
                },
                "ko-KR": {
                  singular: "결제 처리 도중 알 수 없는 오류가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro desconhecido ao processar seu pagamento."
                },
                "zh-CN": {
                  singular: "处理您的付款时发生了未知错误。"
                }
              }
            })
          }
        }), _v17(!1), _v67({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "",
            formErrorMessage: "An unknown error occurred while processing your payment."
          },
          checkoutTracking: _v20()
        });
        return;
      }
      _v17(!1), _v13({
        ..._v1,
        paymentMethodId: _v11.id
      });
    }];
  }, "useSubmitStripePayment", 0, () => {
    let [_v0, _v1] = _v36();
    return [_v0 => {
      _v0({
        variables: {
          paymentIntentId: _v0
        }
      });
    }, _v1];
  }, "useToggleAltAnnualPlan", 0, () => {
    let {
        dispatch: _v0,
        state: {
          order: _v1,
          subscriptionProduct: _v2
        }
      } = _v51(),
      [_v3] = _v75(100),
      _v4 = _v2?.plans?.annual,
      _v5 = _v2?.plans?.altAnnual;
    return _v0 => {
      let _v1 = _v0 ? _v5 : _v4;
      _v1 && _v5 && _v1 && (_v0({
        type: _v73.ActionTypes.SET_BILLING_PLAN,
        payload: _v1
      }), _v3(_v1, _v1.id));
    };
  }, "useTrackCheckoutFormAction", 0, () => {
    let {
        state: _v0
      } = _v51(),
      _v1 = (0, _v48.useViewer)(),
      _v2 = (0, _v10.useSearchParams)();
    return [(_v0, _v1, _v2, _v3) => {
      _v66({
        actionType: _v0,
        location: _v1,
        errorId: _v2,
        errorCopy: _v3,
        checkoutState: _v0,
        viewer: _v1,
        searchParams: _v2
      });
    }];
  }, "useUpdateOrderPreview", 0, _v74], 0);
}