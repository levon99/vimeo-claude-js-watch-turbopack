{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      orderId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getMeOrder", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/${_v2}?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v7.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/${_v0.where.orderId}${(0, _v7.serializeQuery)(_v0)}`, _v4({
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
  async function _v11({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v2.measureLatency)("postMeOrdersPreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/preview?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  function _v12() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v7.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/preview${(0, _v7.serializeQuery)(_v0)}`, _v11({
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
  async function _v13({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v2.measureLatency)("postMeOrdersUpdatePreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/update/preview?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  function _v14() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v7.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/update/preview${(0, _v7.serializeQuery)(_v0)}`, _v13({
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
  async function _v15({
    baseUrl: _v0,
    select: _v1,
    where: {
      promoCodeId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getPromocode", "GET", async () => {
      let _v0 = await fetch(`${_v0}/promocodes/${_v2}?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  function _v16() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v7.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/promocodes/${_v0.where.promoCodeId}${(0, _v7.serializeQuery)(_v0)}`, _v15({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v9.useGctlConfig)();
    return (0, _v5.default)(_v2 ? `/me/orders/${_v2.where.orderId}${(0, _v7.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v4({
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
  }), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v10, {
    endpoint: "/me/orders/:orderId",
    method: "GET"
  }), _v0.s(["useGetMeOrderLazy", 0, _v10], 0), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v12, {
    endpoint: "/me/orders/preview",
    method: "POST"
  }), _v0.s(["usePostMeOrdersPreview", 0, _v12], 0), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v14, {
    endpoint: "/me/orders/update/preview",
    method: "POST"
  }), _v0.s(["usePostMeOrdersUpdatePreview", 0, _v14], 0), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v9.useGctlConfig)();
    return (0, _v5.default)(_v2 ? `/promocodes/${_v2.where.promoCodeId}${(0, _v7.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v15({
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
  }), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v16, {
    endpoint: "/promocodes/:promoCodeId",
    method: "GET"
  }), _v0.s(["useGetPromocodeLazy", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.s(["useGetFormattedDate", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v18.useViewer)(),
      _v3 = _v0 ? new Date(_v0) : new Date();
    return new Intl.DateTimeFormat(_v2?.locale, {
      year: "numeric",
      month: _v1 ? "short" : "long",
      day: "2-digit",
      timeZone: "UTC"
    }).format(_v3);
  }, "useGetUserEntity", 0, () => {
    let _v0 = (0, _v17.useGetMePreferences)({
      select: ["ue"]
    });
    return {
      ..._v0,
      data: _v0?.data?.ue
    };
  }, "useGetUserName", 0, () => {
    let _v0 = (0, _v18.useViewer)();
    return {
      firstName: _v0?.user?.name?.split(" ")[0] || "_",
      lastName: _v0?.user?.name?.split(" ").slice(1).join(" ") || "_"
    };
  }], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v19.BUNDLE_ELIGIBLE_TIERS, _v0.s(["getBundleAdjustedRecurringPrice", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0?.formatted ?? "";
    return !_v2 || null === _v1 || void 0 === _v0 || _v1.price.currency !== _v0.currency || _v1.price.amount <= 0 ? _v3 : (0, _v20.formatBundlePrice)({
      amount: _v0.amount + _v1.price.amount,
      currency: _v0.currency
    });
  }, "getBundleOrderAddOns", 0, (_v0, _v1) => null !== _v0 && _v1 ? [{
    addOnId: _v0.addOnId,
    quantity: 1
  }] : void 0, "hasCheckoutBundleTrigger", 0, _v0 => Array.isArray(_v0) && _v0.includes("checkout"), "isBundleOfferActiveOnCheckout", 0, (_v0, _v1) => "enabled" === _v0.status && _v0.triggers.includes("checkout") && (0, _v19.isBundleEligibleTier)(_v1)], 0);
  var _v21 = _v0.i(0);
  let _v22 = {
    days: (0, _v21.translate)({
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
    weeks: (0, _v21.translate)({
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
    months: (0, _v21.translate)({
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
    years: (0, _v21.translate)({
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
  _v0.s(["CHECKOUT_FORM_ACTION_LOCATION_APPLY_PROMO_BUTTON", 0, "apply_promo_button", "CHECKOUT_FORM_ACTION_LOCATION_COUNTRY", 0, "country", "CHECKOUT_FORM_ACTION_LOCATION_PAGE", 0, "page", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD", 0, "payment_type__credit_card", "CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL", 0, "payment_type__pay_pal", "CHECKOUT_FORM_ACTION_LOCATION_PROMO_CODE", 0, "promo", "CHECKOUT_FORM_ACTION_LOCATION_PURCHASE_BUTTON", 0, "purchase_button", "CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE", 0, "zip", "CHECKOUT_FORM_ACTION_TYPE_CLICK", 0, "click", "CHECKOUT_FORM_ACTION_TYPE_ERROR", 0, "error", "CHECKOUT_FORM_ACTION_TYPE_INPUT", 0, "input", "CHECKOUT_FORM_ACTION_TYPE_LAND", 0, "land", "CHECKOUT_FORM_ACTION_TYPE_SELECT", 0, "select", "CHECKOUT_PAYMENT_STEP", 0, "payment", "CHECKOUT_STEP_QUERY", 0, "checkout_step", "ORDER_ID_LOCAL_STORAGE_KEY", 0, "cart-order-id", "TRIAL_UNIT_COPY", 0, _v22, "USER_ENTITY_BUSINESS", 0, "business", "USER_ENTITY_PERSONAL", 0, "personal", "ZUORA_HPM_IFRAME_ID", 0, "z_hppm_iframe"], 0);
}