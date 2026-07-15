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
  });
  var _v27 = _v0.i(0);
  async function _v28({
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
  function _v29() {
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
        let _v0 = await _v0(`/me/orders/update/preview${(0, _v20.serializeQuery)(_v0)}`, _v28({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v29, {
    endpoint: "/me/orders/update/preview",
    method: "POST"
  });
  var _v30 = _v0.i(0);
  async function _v31({
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
  function _v32() {
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
        let _v0 = await _v0(`/me/payment_methods/authorize_paypal${(0, _v20.serializeQuery)(_v0)}`, _v31({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v32, {
    endpoint: "/me/payment_methods/authorize_paypal",
    method: "POST"
  });
  var _v33 = _v0.i(0);
  async function _v34({
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
  function _v35() {
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
        let _v0 = await _v0(`/me/stripe/payment${(0, _v20.serializeQuery)(_v0)}`, _v34({
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
  async function _v36({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v35, {
    endpoint: "/me/stripe/payment",
    method: "POST"
  });
  var _v37 = _v0.i(0);
  function _v38(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v18.default)(_v2 ? `/me/subscription_products${(0, _v20.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v36({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v38, {
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
        let _v0 = await _v0(`/me/subscription_products${(0, _v20.serializeQuery)(_v0)}`, _v36({
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
    return (0, _v37.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/me/subscription_products?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v36({
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
  var _v39 = _v0.i(0);
  async function _v40({
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
  function _v41() {
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
        let _v0 = await _v0(`/promocodes/${_v0.where.promoCodeId}${(0, _v20.serializeQuery)(_v0)}`, _v40({
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
    return (0, _v18.default)(_v2 ? `/promocodes/${_v2.where.promoCodeId}${(0, _v20.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v40({
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
  }), "true" === _v15.default.env.STORYBOOK && (0, _v20.assignMswData)(_v41, {
    endpoint: "/promocodes/:promoCodeId",
    method: "GET"
  });
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = {
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
    _v49 = (0, _v12.createContext)({
      state: _v48,
      dispatch: () => void 0
    }),
    _v50 = () => (0, _v12.useContext)(_v49),
    _v51 = {
      loading: !1,
      data: null,
      error: null,
      called: !1,
      callCount: 0,
      lastCalled: null
    },
    _v52 = {
      orderPreview: _v51,
      submitOrder: _v51
    },
    _v53 = (0, _v12.createContext)({
      state: _v52,
      dispatch: () => void 0
    }),
    _v54 = () => (0, _v12.useContext)(_v53);
  _v0.s(["ApiStateContext", 0, _v53, "StateContext", 0, _v49, "initialApiState", 0, _v52, "initialState", 0, _v48, "useApiStateContext", 0, _v54, "useStateContext", 0, _v50], 0);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = ["issuer_decline", "suspected_fraud", "insufficient_funds", "expired_or_invalid_card", "stored_credential_invalid", "issuer_unavailable", "do_not_honor", "other_decline", "client_validation"],
    _v63 = _v0 => !!_v0 && _v62.includes(_v0),
    _v64 = _v0 => {
      switch (_v0) {
        case "issuer_decline":
        case "do_not_honor":
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
          return (0, _v1.translate)({
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
    _v65 = {
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
    _v66 = (_v0, _v1, {
      failingField: _v2,
      rawCode: _v3
    } = {}) => ({
      source: _v0,
      decline_category: _v1,
      failing_field: _v2 ?? null,
      error_code: _v3 ?? null,
      error_message: _v64(_v1)
    }),
    _v67 = _v0 => {
      switch (_v0.source) {
        case "zuora_hpm":
          return _v0.rawGatewayInfo ? {
            source: "chase",
            decline_category: null,
            failing_field: null,
            error_code: _v0.rawGatewayInfo.responseCode || null,
            error_message: _v0.rawGatewayInfo.responseMessage || null
          } : _v66("zuora_hpm", "client_validation", {
            failingField: _v0.formField || null,
            rawCode: _v0.formErrorCode || null
          });
        case "stripe":
          let _v0 = (_v0.code ?? "").trim().toLowerCase();
          if (_v0.startsWith("incomplete")) return _v66("stripe", "client_validation", {
            rawCode: _v0 || null
          });
          let _v1 = _v65[_v0];
          return _v1 ? _v66("stripe", _v1, {
            rawCode: _v0
          }) : _v0 ? _v66("stripe", "other_decline", {
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
            error_message: _v0.message || (0, _v1.translate)({
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
            })
          };
      }
    },
    _v68 = !1,
    _v69 = () => {
      _v68 = !1;
    },
    _v70 = () => !_v68 && (_v68 = !0, !0);
  _v0.s(["acquireCheckoutFailedLatch", 0, _v70, "canonicalMessageForCategory", 0, _v64, "classifyClientDecline", 0, _v67, "isDeclineCategory", 0, _v63, "resetCheckoutFailedLatch", 0, _v69], 0);
  var _v71 = _v0.i(0);
  let _v72 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"],
    _v73 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"],
    _v74 = ({
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
        _v10 = _v72.includes(_v4.tier) ? _v4.tier : null,
        _v11 = _v73.includes(_v4.tier) ? _v4.tier : "seat_subscription";
      _v55.BigPictureClient.sendEvent(new _v55.Event("vimeo.checkout_form_action", 18, {
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
    _v75 = ({
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
          let _v1 = (0, _v71.transformToOrderItemOptions)(_v0);
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
      if (_v55.BigPictureClient.sendEvent(new _v55.Event("vimeo.order_failure", 4, {
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
      })), !_v70()) return;
      let _v12 = _v67("stripe" === _v3 ? {
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
    },
    _v76 = ({
      user_id: _v0,
      hpm_session_id: _v1,
      flow_type: _v2,
      step_name: _v3,
      step_message: _v4,
      purchase_type: _v5,
      payment_method_id: _v6,
      zuora_order_id: _v7
    }) => {
      _v55.BigPictureClient.sendEvent(new _v55.Event("vimeo.zuora_purchase_steps", 1, {
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
    (0, _v61.sendBpEventWithContexts)("vimeo.add_payment_method_add_click", {
      ...(0, _v60.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v57.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v58.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v59.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v56.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodCancelClick", 0, _v0 => {
    (0, _v61.sendBpEventWithContexts)("vimeo.add_payment_method_cancel_click", {
      ...(0, _v60.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v57.buildProductAnalyticsBpContext)({
        location: "content_area",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v58.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v59.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v56.buildActionBpContext)({
        action_type: "click",
        feature: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodError", 0, (_v0, _v1) => {
    (0, _v61.sendBpEventWithContexts)("vimeo.add_payment_method_error", {
      ...(0, _v60.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v57.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v58.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v59.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0,
      error_copy: _v1
    });
  }, "trackAddPaymentMethodPageview", 0, _v0 => {
    (0, _v61.sendBpEventWithContexts)("vimeo.add_payment_method_pageview", {
      ...(0, _v60.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v57.buildProductAnalyticsBpContext)({
        location: "not_applicable_pageview",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v58.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v59.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackAddPaymentMethodSuccess", 0, _v0 => {
    (0, _v61.sendBpEventWithContexts)("vimeo.add_payment_method_success", {
      ...(0, _v60.buildViewBpContext)({
        view_type: "pageview",
        feature: null
      }),
      ...(0, _v57.buildProductAnalyticsBpContext)({
        location: "not_applicable_server",
        feature: "checkout",
        product: "payments"
      }),
      ...(0, _v58.buildTeamBpContext)({
        is_team_member: !0
      }),
      ...(0, _v59.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null
      })
    }, 1, {
      is_grace_period: _v0
    });
  }, "trackCheckoutFormAction", 0, _v74, "trackFailedOrder", 0, _v75, "trackOrderFailure", 0, ({
    userId: _v0,
    description: _v1
  }) => {
    _v55.BigPictureClient.sendEvent(new _v55.Event("vimeo.order_failure", 4, {
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
  }, "trackZuoraOrderStep", 0, _v76], 0);
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  let _v79 = () => {
      let _v0 = (0, _v47.useViewer)(),
        _v1 = _v83(),
        {
          settings: _v2
        } = (0, _v43.useOrionSettings)(),
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
        } = _v50(),
        {
          dispatch: _v13,
          state: {
            orderPreview: _v14
          }
        } = _v54(),
        [, _v15] = (0, _v13.default)(_v2, void 0),
        [_v16, _v17] = _v26(),
        [_v18, _v19] = _v29();
      return ((0, _v12.useEffect)(function () {
        let _v0;
        if (_v17.called ? _v0 = _v17 : _v19.called && (_v0 = _v19), _v0 && (_v13({
          type: _v78.ApiActionTypes.ORDER_PREVIEW,
          payload: _v0
        }), _v0.data)) {
          let _v0 = _v0.data?.error;
          _v4({
            type: _v78.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          }), _v0 ? _v13({
            type: _v78.ApiActionTypes.ORDER_PREVIEW,
            payload: {
              ..._v0,
              data: null,
              error: Error(_v0)
            }
          }) : (_v13({
            type: _v78.ApiActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v0.loading || (_v4({
            type: _v78.ActionTypes.ORDER_PREVIEW,
            payload: _v0.data
          }), _v15(_v0.data.id)));
        }
      }, [_v13, _v17, _v19, _v4, _v15]), (0, _v12.useEffect)(function () {
        let _v0 = _v14.data;
        if (!_v0?.billingAddress?.postalCode && !_v0?.location && !_v0?.billingAddress?.country) return;
        let _v1 = !!_v0?.billingAddress?.postalCode && (0, _v71.isZipCodeIsRequiredAutorenewalOptInRange)(_v0?.billingAddress?.postalCode),
          _v2 = _v0?.location === "DE" || _v0?.billingAddress?.country === "DE",
          _v3 = !!_v12 && "subscribe" !== _v12,
          _v4 = (!!_v2 && !_v8 && !_v9 || !!_v3) && null;
        _v4({
          type: _v78.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
          payload: _v1 || "subscribe" === _v12 ? {
            hasOptedInToAutorenew: _v4,
            hasAgreedToTerms: _v3
          } : null
        });
      }, [_v0?.location, _v8, _v9, _v14.data, _v4]), _v10 && (0, _v71.isCreatorProductTier)(_v10)) ? [_v0 => _v16({
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
          }].map(_v71.transformToOrderItemOptions)
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
          items: (_v0.items || []).map(_v71.transformToOrderItemOptions)
        }
      }), _v14];
    },
    _v80 = (_v0 = 600) => {
      let [_v1, _v2] = _v79();
      return [(0, _v9.default)(_v1, _v0), _v2];
    },
    _v81 = async _v0 => {
      if (!(_v0 instanceof _v14.NetworkError) || !_v0.res) return null;
      try {
        let _v0 = "function" == typeof _v0.res.clone ? _v0.res.clone() : _v0.res,
          _v1 = await _v0.json();
        if (_v1 && "object" == typeof _v1) return _v1;
      } catch {}
      return null;
    },
    _v82 = () => {
      let _v0 = (0, _v47.useViewer)(),
        {
          settings: _v1
        } = (0, _v43.useOrionSettings)(),
        _v2 = _v1.use_juno_billing,
        _v3 = _v1.enable_sift_on_free_trials,
        {
          state: {
            billingPlan: _v4,
            checkoutType: _v5,
            currentSubscription: _v6,
            subscriptionProduct: _v7,
            tier: _v8,
            isMonthly: _v9,
            isFreeTrial: _v10,
            isBusinessUserEntity: _v11,
            creatorProductAction: _v12,
            creatorProductId: _v13,
            defaultPaymentType: _v14,
            iosUserId: _v15
          },
          dispatch: _v16
        } = _v50(),
        _v17 = _v8 && (0, _v71.isCreatorProductTier)(_v8),
        {
          state: {
            submitOrder: _v18
          },
          dispatch: _v19
        } = _v54(),
        {
          trackCheckoutFailed: _v20
        } = (0, _v44.useCheckoutTracking)(_v15),
        _v21 = (0, _v45.usePico)(),
        _v22 = _v7?.isCreatorProduct ? (0, _v71.getPlanType)(_v12) : _v9 ? "monthly" : "annual",
        _v23 = (0, _v12.useCallback)(_v0 => {
          null !== _v21 && void 0 !== _v8 && _v70() && _v20({
            tier: _v8,
            periodicity: _v22,
            isFreeTrial: _v10,
            ..._v0
          });
        }, [_v21, _v22, _v8, _v10, _v20]),
        [_v24, _v25] = _v24(),
        [_v26, _v27] = (0, _v27.usePostMeOrdersSubscription)();
      return ((0, _v12.useEffect)(function () {
        let _v0,
          _v1 = () => {
            window.location.href = "/manage/team/billing?rns=0";
          },
          _v2 = !1;
        if (_v25.called ? _v0 = _v25 : _v27.called && (_v0 = _v27), _v0) {
          if (_v19({
            type: _v78.ApiActionTypes.SUBMIT_ORDER,
            payload: _v0
          }), _v0.error) {
            let _v0 = _v0.error;
            (async () => {
              let _v0 = await _v81(_v0);
              if (!_v2) {
                if (_v0 && "string" == typeof _v0.decline_category) {
                  let _v0 = _v63(_v0.decline_category) ? _v64(_v0.decline_category) : _v0.canonical_message || (0, _v77.getErrorMessage)();
                  _v16({
                    type: _v78.ActionTypes.PAYMENT_ALERT,
                    payload: {
                      status: "error",
                      message: _v0
                    }
                  }), _v23({
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
                    _v1 = (0, _v77.parseGatewayDeclineCode)(_v0);
                  _v16({
                    type: _v78.ActionTypes.PAYMENT_ALERT,
                    payload: {
                      status: "error",
                      message: (0, _v77.getDeclineMessage)(_v1)
                    }
                  });
                  let _v2 = _v0 instanceof _v14.NetworkError ? _v0.status : null;
                  _v23({
                    source: _v2 && _v2 < 500 ? "chase" : "network",
                    http_status: _v2,
                    endpoint: "me_orders",
                    error_code: _v1,
                    error_message: _v0
                  });
                }
                "renew" === _v5 && _v1();
              }
            })();
          } else if (_v0.data) {
            let _v0 = _v0.data?.error;
            if (_v0) {
              _v19({
                type: _v78.ApiActionTypes.SUBMIT_ORDER,
                payload: {
                  ..._v0,
                  data: null,
                  error: Error(_v0)
                }
              });
              let _v0 = (0, _v77.parseGatewayDeclineCode)(_v0),
                _v1 = (0, _v77.getDeclineMessage)(_v0);
              _v16({
                type: _v78.ActionTypes.PAYMENT_ALERT,
                payload: {
                  status: "error",
                  message: _v1
                }
              }), _v23({
                source: "chase",
                error_code: _v0,
                error_message: _v0
              }), "renew" === _v5 && _v1();
            } else if (_v0.data?.shouldBlockPurchase) {
              let _v0 = (0, _v77.getErrorMessage)(_v77.ERROR_TYPE.SIFT_ERROR);
              _v19({
                type: _v78.ApiActionTypes.SUBMIT_ORDER,
                payload: {
                  ..._v0,
                  data: null,
                  error: Error(_v0)
                }
              }), _v16({
                type: _v78.ActionTypes.PAYMENT_ALERT,
                payload: {
                  status: "error",
                  message: _v0
                }
              }), _v23({
                source: "client",
                error_code: "sift_error",
                error_message: "SIFT_ERROR"
              }), "renew" === _v5 && _v1();
            } else _v19({
              type: _v78.ApiActionTypes.SUBMIT_ORDER,
              payload: {
                ..._v0,
                loading: !0
              }
            }), _v16({
              type: _v78.ActionTypes.ORDER_SUBMIT,
              payload: _v0.data
            }), _v16({
              type: _v78.ActionTypes.PAYMENT_ALERT,
              payload: void 0
            });
          }
        }
        return () => {
          _v2 = !0;
        };
      }, [_v19, _v16, _v25, _v27, _v5, _v23]), "renew" === _v5 && _v6) ? [_v0 => {
        _v69(), _v26({
          select: [],
          where: {
            subscriptionId: _v6?.id
          },
          variables: {
            type: _v5,
            billingPlanId: "",
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode,
            orderId: _v0.id,
            userEntity: _v11 ? _v5 : _v4
          }
        });
      }, _v18] : "upgrade" === _v5 && _v6 && _v4 ? [_v0 => {
        _v69(), _v26({
          select: [],
          where: {
            subscriptionId: _v6?.id
          },
          variables: {
            type: _v5,
            billingPlanId: _v4.id,
            paymentMethodId: _v0.paymentMethodId,
            couponCode: _v0.couponCode,
            orderId: _v0.id,
            userEntity: _v11 ? _v5 : _v4
          }
        });
      }, _v18] : [_v0 => {
        _v0.firstName && _v0.lastName && _v0.billingAddress && _v0.paymentMethodId && (_v69(), _v24({
          variables: {
            useJuno: !_v17 && _v2,
            billingAddressPresent: _v3,
            billingAddress: _v0.billingAddress,
            currency: _v0.currency,
            firstName: _v0.firstName,
            isTrial: !!_v0.isTrial,
            items: function (_v0) {
              if (_v12 && _v13) {
                let _v0 = _v0.items[0];
                _v0.billingPlanId = "", _v0.productId = Number(_v13);
              }
              return _v0.items;
            }(_v0),
            lastName: _v0.lastName,
            paymentMethodId: _v0.paymentMethodId,
            paymentFormType: _v14,
            couponCode: _v0.couponCode,
            vatId: _v0.vatId,
            orderId: _v0.id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            userEntity: _v11 ? _v5 : _v4,
            hpmSessionId: _v0?.xsrft ?? ""
          },
          select: []
        }));
      }, _v18];
    },
    _v83 = () => {
      let _v0 = (0, _v47.useViewer)();
      return {
        firstName: _v0?.user?.name?.split(" ")[0] || "_",
        lastName: _v0?.user?.name?.split(" ").slice(1).join(" ") || "_"
      };
    },
    _v84 = () => {
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
    _v85 = () => {
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
    let _v0 = (0, _v47.useViewer)(),
      _v1 = (0, _v7.useStripe)(),
      _v2 = (0, _v7.useElements)(),
      [_v3, _v4] = (0, _v12.useState)(!1),
      [_v5] = _v84(),
      [_v6] = _v85();
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
          token: _v0?.xsrft ?? ""
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
          isMonthly: _v7,
          isFreeTrial: _v8,
          tier: _v9,
          creatorProductAction: _v10,
          creatorProductId: _v11,
          iosUserId: _v12
        }
      } = _v50(),
      {
        settings: _v13
      } = (0, _v43.useOrionSettings)(),
      _v14 = _v13.use_juno_billing,
      _v15 = _v9 && (0, _v71.isCreatorProductTier)(_v9),
      [_v16, _v17] = _v32(),
      _v18 = (0, _v11.useRouter)(),
      {
        trackCheckoutFailed: _v19
      } = (0, _v44.useCheckoutTracking)(_v12),
      _v20 = _v1?.isCreatorProduct ? (0, _v71.getPlanType)(_v10) : _v7 ? "monthly" : "annual",
      _v21 = (0, _v12.useRef)(!1);
    return (0, _v12.useEffect)(function () {
      if (_v17.error) {
        let _v0 = (0, _v77.getErrorMessage)(_v77.ERROR_TYPE.PAYPAL_CONNECTION);
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
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
    }, [_v17.error, _v0, _v19, _v9, _v20, _v8]), (0, _v12.useEffect)(function () {
      if (_v17.data) {
        let {
          redirectUrl: _v0
        } = _v17.data;
        window.location.href = _v0;
      }
    }, [_v17.data]), [() => {
      let _v0 = _v6 ? _v5 : _v4,
        _v1 = _v1?.name ? encodeURIComponent(_v1?.name) : "",
        _v2 = _v18.query?.token ? `&token=${_v18.query?.token}&mwru=${_v18.query?.mwru}` : "",
        _v3 = `${window.location.origin}/payments/paypal/authorized?product_name=${_v1}&checkout_type=${_v2}&user_entity=${_v0}${_v2}`;
      _v14 && !_v15 && (_v3 += "&use_juno=1"), "purchase" === _v2 ? _v3 += `&order_id=${_v5?.id}` : _v3 += `&subscription_id=${_v3?.id}&billing_plan_id=${_v4?.id}`;
      let _v4 = _v10 && _v11 ? `/checkout/ondemand?action=${_v10}&product=${_v11}` : `/checkout/${_v1.toLowerCase()}?${_v2.substring(1)}`;
      _v3 += `&error_redirect=${encodeURIComponent(_v4)}`;
      let _v5 = _v46.postCheckoutUrl.read();
      _v5 && (_v3 += `&post_checkout_url=${encodeURIComponent(_v5)}`), _v16({
        variables: {
          cancelUrl: window.location.href,
          notifyUrl: "/",
          returnUrl: _v3
        },
        select: ["redirectUrl"]
      });
    }, _v17];
  }, "useAuthorizePaypalForAddPaymentMethod", 0, () => {
    let [_v0, _v1] = _v32(),
      _v2 = (0, _v11.useRouter)();
    return [({
      hasOpenInvoice: _v0 = !1
    }) => {
      let _v1 = _v2.query?.token && !(0, _v71.isPayPalToken)(_v2.query?.token) ? `&token=${_v2.query?.token}&mwru=${_v2.query?.mwru}` : "",
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
      } = _v50(),
      _v11 = (0, _v42.useCampaignIdOverride)() ?? _v9,
      _v12 = (0, _v47.useViewer)(),
      [_v13, _v14] = (0, _v13.default)(_v3, void 0),
      _v15 = _v1 && (0, _v71.isCreatorProductTier)(_v1),
      _v16 = (0, _v71.getErrorRedirectPath)(_v1, _v8, _v10),
      _v17 = _v38(() => _v12 && _v1 && (!_v15 || _v7) ? _v15 ? {
        select: _v78.SUBSCRIPTION_PRODUCT_FIELDS,
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
        select: _v78.SUBSCRIPTION_PRODUCT_FIELDS,
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
          _v1 = _v15 ? _v18.plans[(0, _v71.getPlanType)(_v6)] : _v18.plans[_v0];
        _v1 && "available" === _v1.metadata.status || _v10 || (_v14(void 0), window.location.href = window.location.origin + _v16), _v0({
          type: _v78.ActionTypes.FETCH_PRODUCT,
          payload: _v18
        }), _v0({
          type: _v78.ActionTypes.SET_BILLING_PLAN,
          payload: _v1
        }), _v18.creatorProductUrls && (_v0({
          type: _v78.ActionTypes.SET_CREATOR_PRODUCT_THUMBNAIL_URL,
          payload: _v18.creatorProductUrls.thumbnail
        }), _v0({
          type: _v78.ActionTypes.SET_CREATOR_PRODUCT_TITLE_PAGE_URL,
          payload: _v18.creatorProductUrls.clipPage
        }));
      }
      _v17.data && _v18 && _v3 && _v0({
        type: _v78.ActionTypes.FETCH_PRODUCT,
        payload: _v18
      });
    }, [_v0, _v17.data, _v17.error, _v18, _v2, _v14, _v3]), {
      ..._v17,
      data: _v18
    };
  }, "useGetFormattedDate", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v47.useViewer)(),
      _v3 = _v0 ? new Date(_v0) : new Date();
    return new Intl.DateTimeFormat(_v2?.locale, {
      year: "numeric",
      month: _v1 ? "short" : "long",
      day: "2-digit",
      timeZone: "UTC"
    }).format(_v3);
  }, "useGetOrCreateOrderPreview", 0, () => {
    let {
        settings: _v0
      } = (0, _v43.useOrionSettings)(),
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
      } = _v50(),
      _v17 = (0, _v47.useViewer)(),
      _v18 = _v83(),
      [_v19, _v20] = (0, _v13.default)(_v2, null),
      [_v21, _v22] = _v29(),
      [_v23, _v24] = _v26(),
      [_v25, _v26] = _v22(),
      [_v27, _v28] = _v41(),
      _v29 = (0, _v12.useRef)({
        key: null,
        attempts: 0
      }),
      [_v30, _v31] = (0, _v12.useState)(0),
      [_v32, _v33] = (0, _v12.useState)(),
      {
        data: _v34,
        error: _v35
      } = _v32 || {},
      [_v36, _v37] = (0, _v12.useState)(null),
      _v38 = _v12 && (0, _v71.isCreatorProductTier)(_v12);
    return (0, _v12.useEffect)(() => {
      if (_v16 && _v28.error && !_v28.loading) return void _v37(_v16);
      if (_v16) {
        _v20(null), _v37(null);
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
      _v1 && "string" == typeof _v1.batchCode && _v1.batchCode && (_v0 = _v1.batchCode), _v0 && _v0 === _v36 && (_v0 = void 0);
      let _v2 = _v0 || void 0;
      if (!_v17 || !_v10 || !_v3 && !_v8 || void 0 === _v5 || _v19 === _v34?.id || _v38 && !_v14 || _v24.loading || _v22.loading || _v26.loading) return;
      let _v3 = JSON.stringify({
        checkoutType: _v4,
        isCreatorProduct: _v38,
        isRenewNow: _v8,
        billingPlanId: _v3?.id ?? null,
        subscriptionId: _v5?.id ?? null,
        paymentMethodId: _v11?.id ?? null,
        couponCode: _v2 ?? null,
        creatorProductId: _v14 ?? null,
        orderId: _v19
      });
      if (_v29.current.key !== _v3 && (_v29.current = {
        key: _v3,
        attempts: 0
      }), !(_v29.current.attempts >= 4)) if (_v38) {
        let _v0 = _v11 && "PAYMENT_METHOD_TYPES_CARD" === _v11.type ? _v11.card?.billingAddress : void 0;
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
          isTrial: _v6,
          items: [{
            billingPlanId: _v3?.id,
            quantity: 1
          }],
          couponCode: _v2
        }
      });
    }, [_v36, _v28.data, _v15, _v3, _v4, _v5, _v25, _v6, _v7, _v8, _v19, _v34?.id, _v23, _v21, _v10, _v18.firstName, _v18.lastName, _v17, _v11, _v13, _v14, _v38, _v1, _v30]), (0, _v12.useEffect)(function () {
      if (!(_v32?.error && !_v32.loading)) return;
      let _v0 = _v29.current.attempts + 1;
      if (_v29.current.attempts = _v0, _v0 >= 4) return;
      let _v1 = setTimeout(() => _v31(_v0 => _v0 + 1), 0 * 2 ** (_v0 - 1));
      return () => clearTimeout(_v1);
    }, [_v32]), (0, _v12.useEffect)(function () {
      let _v0;
      _v24.called ? _v0 = _v24 : _v22.called ? _v0 = _v22 : _v26.called && (_v0 = _v26), _v0 && (_v33({
        ..._v0,
        data: _v0.data ?? null
      }), _v0.data && (_v2({
        type: _v78.ActionTypes.ORDER_PREVIEW,
        payload: _v0.data
      }), _v20(_v0.data.id)));
    }, [_v2, _v26, _v24, _v22, _v20]), (0, _v12.useEffect)(function () {
      if (_v34 && _v10) {
        if (_v10.isCreatorProduct || _v10.isBandwidthProduct) return;
        let _v0 = _v3?.id;
        ("purchase" !== _v4 || _v34.currency === _v3?.price?.currency) && _v34.isTrial == _v6 && (_v34.items?.find(_v0 => _v0.billingPlanId === _v0) || _v8) || (_v20(null), _v2({
          type: _v78.ActionTypes.ORDER_PREVIEW,
          payload: null
        }));
      }
    }, [_v3, _v2, _v6, _v7, _v8, _v34, _v20, _v10, _v4]), (0, _v12.useEffect)(function () {
      _v35 && (404 === _v35.status ? (_v20(null), _v2({
        type: _v78.ActionTypes.ORDER_PREVIEW,
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
            type: _v78.ActionTypes.ORDER_PREVIEW,
            payload: null
          }), _v37(_v2);
          return;
        }
      })());
    }, [_v2, _v35, _v20, _v28.data?.code]), (0, _v12.useEffect)(function () {
      if (!_v34?.billingAddress?.postalCode && !_v17?.location && !_v34?.billingAddress?.country) return;
      let _v0 = !!_v34?.billingAddress?.postalCode && (0, _v71.isZipCodeIsRequiredAutorenewalOptInRange)(_v34?.billingAddress?.postalCode),
        _v1 = _v17?.location === "DE" || _v34?.billingAddress?.country === "DE",
        _v2 = !!_v13 && "subscribe" !== _v13,
        _v3 = _v0 || "subscribe" === _v13,
        _v4 = (!!_v1 && !_v7 && !_v9 || !!_v2) && null;
      _v2({
        type: _v78.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN,
        payload: _v3 ? {
          hasOptedInToAutorenew: _v4,
          hasAgreedToTerms: _v2
        } : null
      });
    }, [_v17?.location, _v9, _v34?.billingAddress?.postalCode, _v34?.billingAddress?.country, _v7, _v2, _v13]), {
      isLoading: _v32?.loading,
      order: _v32?.data,
      error: _v32?.error
    };
  }, "useGetPaymentMethods", 0, () => {
    let {
        dispatch: _v0
      } = _v50(),
      {
        isLoading: _v1,
        data: _v2
      } = (0, _v30.useGetMePaymentMethods)({
        select: _v78.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      });
    return (0, _v12.useEffect)(() => {
      if (_v2 && _v2.data) {
        let _v0 = _v2.data.filter(_v71.filterSavedPaymentMethods);
        if (_v0.length > 0) {
          _v0({
            type: _v78.ActionTypes.PAYMENT_METHODS,
            payload: _v0
          });
          let _v0 = _v0.find(_v0 => _v0.isDefault) || _v0[0];
          _v0 && _v0({
            type: _v78.ActionTypes.SELECT_PAYMENT_METHOD,
            payload: _v0
          });
        }
      }
    }, [_v0, _v2]), {
      isLoadingPaymentMethods: _v1,
      paymentMethods: _v2?.data
    };
  }, "useGetUserEntity", 0, () => {
    let _v0 = (0, _v33.useGetMePreferences)({
      select: ["ue"]
    });
    return {
      ..._v0,
      data: _v0?.data?.ue
    };
  }, "useGetUserSubscription", 0, () => {
    let _v0 = (0, _v47.useViewer)(),
      {
        dispatch: _v1,
        state: {
          billingPlan: _v2,
          isRenewNow: _v3,
          tier: _v4
        }
      } = _v50(),
      [_v5, _v6] = (0, _v12.useState)(),
      {
        data: _v7
      } = (0, _v39.useGetMeSubscriptions)({
        select: _v78.SUBSCRIPTION_FIELDS,
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE",
          types: ["SUBSCRIPTION_TYPE_BASE"]
        }
      });
    return (0, _v12.useEffect)(function () {
      let _v0 = _v4 && (0, _v71.isCreatorProductTier)(_v4);
      if (_v7?.data) {
        _v7.data.length > 1 && window.DD_RUM && window.DD_RUM.onReady(() => {
          window.DD_RUM.addError("Multiple active subscriptions found for user", {
            userId: Number(_v0?.user?.id),
            component: "checkout"
          });
        });
        let _v0 = _v7.data[0] ?? null;
        _v6(_v0), _v1({
          type: _v78.ActionTypes.FETCH_SUBSCRIPTION,
          payload: _v0
        }), _v1({
          type: _v78.ActionTypes.SET_CHECKOUT_TYPE,
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
      _v2 = (0, _v47.useViewer)(),
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
      if (_v0 === _v78.PaymentFormTypes.TYPE_STRIPE) return _v1(), () => {
        _v0.abort();
      };
    }, [_v3, _v0, _v2?.xsrft]), !_v10.current && _v3 && (_v10.current = (0, _v8.loadStripe)(_v3)), _v10.current && _v7 && _v3 && _v5 && (_v1 = {
      currency: _v7,
      publishableKey: _v3,
      paymentMethodConfigId: _v5
    }), [_v1, _v10.current];
  }, "useOrderSuccessRedirect", 0, () => {
    let _v0 = (0, _v11.useRouter)(),
      _v1 = (0, _v47.useViewer)(),
      _v2 = (0, _v10.useSearchParams)(),
      [, _v3] = (0, _v13.default)(_v2, void 0),
      [_v4, _v5] = (0, _v13.default)(_v3, void 0),
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
      } = _v50(),
      {
        state: {
          submitOrder: _v15
        },
        dispatch: _v16
      } = _v54(),
      [_v17, _v18] = (0, _v33.usePatchMePreferences)(),
      {
        trackUserConverted: _v19
      } = (0, _v44.useCheckoutTracking)(_v14),
      _v20 = (0, _v12.useRef)(!1);
    (0, _v12.useEffect)(() => {
      _v15.called && _v15.data && _v17({
        select: [],
        variables: {
          ue: _v9 ? _v5 : _v4
        }
      });
    }, [_v15, _v9, _v17]), (0, _v12.useEffect)(() => {
      if (!_v20.current && _v15.called && _v15.data && _v18.called && _v18.data && !_v18.loading && _v7) if (_v20.current = !0, _v3(null), _v4 && _v5(void 0), "renew" === _v6) window.location.href = "/manage/team/billing?rns=1";else if (_v13) window.opener ? window.location.href = `/store/ondemand/popup/${_v11}?ssl=1&player=1` : parent.location.reload();else {
        let _v0 = _v2 ? `&${_v2.toString()}` : "",
          _v1 = _v15.data.orderId,
          _v2 = _v7.isCreatorProduct ? (0, _v71.getPlanType)(_v10) : _v8 ? "monthly" : "annual",
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
          let _v0 = _v46.postCheckoutUrl.read();
          if (_v0) {
            _v46.postCheckoutUrl.clear();
            let _v0 = _v0.split(/[?#]/)[0].startsWith("/onboarding");
            "purchase" !== _v6 || _v0 || _v19({
              tier: String(_v7.tier),
              periodicity: _v2,
              isFreeTrial: _v15.data.isTrial
            }), setTimeout(() => {
              window.location.href = _v0;
            }, 0);
          } else window.location.href = _v3;
        }
      }
    }, [_v15, _v18, _v3, _v7, _v0, _v16, _v4, _v5, _v6, _v10, _v8]);
  }, "usePayStripeBalance", 0, () => {
    let _v0 = (0, _v7.useStripe)(),
      _v1 = (0, _v7.useElements)(),
      [_v2, _v3] = (0, _v12.useState)(!1),
      [_v4] = _v84();
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
      } = _v50(),
      [_v2] = _v80();
    return (_v0, _v1) => {
      let _v2 = _v0?.find(_v0 => _v0.id === _v0);
      if (!_v0 || !_v2) throw Error("Invalid payment method selected.");
      _v1 && _v2.card?.billingAddress && _v2({
        ..._v1,
        paymentMethodId: _v2.id,
        billingAddress: _v2.card.billingAddress
      }), _v1({
        type: _v78.ActionTypes.SELECT_PAYMENT_METHOD,
        payload: _v2
      });
    };
  }, "useSubmitOrder", 0, _v82, "useSubmitPaymentMethod", 0, () => {
    let _v0 = (0, _v47.useViewer)(),
      _v1 = (0, _v11.useRouter)(),
      [_v2, _v3] = (0, _v30.usePostMePaymentMethods)();
    return [_v0?.user?.id || _v1.query?.token ? (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
      _v0 && _v0.user && _v76({
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
          attemptSyncPayment: _v5 ?? !0,
          isCardVerification: _v7
        }
      }), _v0 && _v0.user && _v76({
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
          creatorProductAction: _v7,
          iosUserId: _v8
        }
      } = _v50(),
      _v9 = (0, _v47.useViewer)(),
      {
        firstName: _v10,
        lastName: _v11
      } = _v83(),
      _v12 = (0, _v7.useStripe)(),
      _v13 = (0, _v7.useElements)(),
      [_v14] = _v82(),
      [_v15] = _v84(),
      [_v16] = _v85(),
      [_v17, _v18] = (0, _v12.useState)(!1),
      {
        trackCheckoutFailed: _v19
      } = (0, _v44.useCheckoutTracking)(_v8),
      _v20 = _v6?.isCreatorProduct ? (0, _v71.getPlanType)(_v7) : _v4 ? "monthly" : "annual",
      _v21 = (0, _v12.useCallback)(() => ({
        trackCheckoutFailed: _v19,
        tier: _v3 ?? "unknown",
        periodicity: _v20,
        isFreeTrial: _v5
      }), [_v19, _v3, _v20, _v5]);
    return [_v17, async ({
      billingName: _v0
    }) => {
      let _v1, _v2, _v3;
      if (!_v12 || !_v13 || !_v1) return;
      _v18(!0), _v69();
      let {
        error: _v4
      } = await _v13.submit();
      if (_v4?.message) {
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v4.message
          }
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          source: "stripe",
          stripeErrorCode: _v4.code,
          errorResponse: {
            formErrorCode: _v4.code ?? "",
            formErrorMessage: _v4.message
          },
          checkoutTracking: _v21()
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
          token: _v9?.xsrft ?? "",
          store_payment_method: _v2,
          first_name: _v10,
          last_name: _v11,
          currency: _v1.currency,
          items: _v1.items.map(_v71.transformToOrderItemOptions),
          billing_address: _v1.billingAddress,
          is_trial: _v1.isTrial,
          vat_id: _v1.vatId,
          coupon_code: _v1.couponCode
        }))
      });
      if (!_v5.ok) {
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
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
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_payment_request_failed",
            formErrorMessage: `Stripe payment request failed (HTTP ${_v5.status}).`
          },
          checkoutTracking: _v21()
        });
        return;
      }
      let {
        type: _v6,
        clientSecret: _v7
      } = await _v5.json();
      if (!_v7 || !_v6) {
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
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
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_missing_client_secret",
            formErrorMessage: "Stripe payment response missing client secret or intent type."
          },
          checkoutTracking: _v21()
        });
        return;
      }
      if (!_v0) {
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
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
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          errorResponse: {
            formErrorCode: "stripe_missing_billing_name",
            formErrorMessage: "Cardholder name is required."
          },
          checkoutTracking: _v21()
        });
        return;
      }
      let _v8 = _v1?.billingAddress?.postalCode || null,
        _v9 = _v1?.billingAddress?.state || null,
        _v10 = _v1?.billingAddress?.country || null;
      if ("payment" === _v6) {
        let _v0 = await _v15({
          clientSecret: _v7,
          name: _v0,
          postalCode: _v8,
          state: _v9,
          country: _v10
        });
        _v2 = _v0.paymentIntent, _v3 = _v0.error;
      } else {
        let _v0 = await _v16({
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
          type: _v78.ActionTypes.PAYMENT_ALERT,
          payload: {
            status: "error",
            message: _v3.message
          }
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          source: "stripe",
          stripeErrorCode: _v3.decline_code ?? _v3.code,
          errorResponse: {
            formErrorCode: _v3.decline_code ?? _v3.code ?? "",
            formErrorMessage: _v3.message
          },
          checkoutTracking: _v21()
        });
        return;
      }
      if (!_v11?.id) {
        _v0({
          type: _v78.ActionTypes.PAYMENT_ALERT,
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
        }), _v18(!1), _v75({
          order: _v1,
          selectedPaymentMethod: void 0,
          source: "stripe",
          errorResponse: {
            formErrorCode: "",
            formErrorMessage: "An unknown error occurred while processing your payment."
          },
          checkoutTracking: _v21()
        });
        return;
      }
      _v18(!1), _v14({
        ..._v1,
        paymentMethodId: _v11.id
      });
    }];
  }, "useSubmitStripePayment", 0, () => {
    let [_v0, _v1] = _v35();
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
      } = _v50(),
      [_v3] = _v80(100),
      _v4 = _v2?.plans?.annual,
      _v5 = _v2?.plans?.altAnnual;
    return _v0 => {
      let _v1 = _v0 ? _v5 : _v4;
      _v1 && _v5 && _v1 && (_v0({
        type: _v78.ActionTypes.SET_BILLING_PLAN,
        payload: _v1
      }), _v3(_v1, _v1.id));
    };
  }, "useTrackCheckoutFormAction", 0, () => {
    let {
        state: _v0
      } = _v50(),
      _v1 = (0, _v47.useViewer)(),
      _v2 = (0, _v10.useSearchParams)();
    return [(_v0, _v1, _v2, _v3) => {
      _v1 && _v74({
        actionType: _v0,
        location: _v1,
        errorId: _v2,
        errorCopy: _v3,
        checkoutState: _v0,
        viewer: _v1,
        searchParams: _v2
      });
    }];
  }, "useUpdateOrderPreview", 0, _v79], 0);
}