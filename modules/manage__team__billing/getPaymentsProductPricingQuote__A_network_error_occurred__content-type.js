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
      productId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v4.measureLatency)("getPaymentsProductPricingQuote", "GET", async () => {
      let _v0 = await fetch(`${_v0}/payments/products/${_v2}/pricing_quote?${(0, _v5.searchQueryString)(_v3)}&fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
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
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/payments/products/${_v0.where.productId}/pricing_quote${(0, _v9.serializeQuery)(_v0)}`, _v6({
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
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("postUserOrdersUpdatePreview", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/orders/update/preview?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
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
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/orders/update/preview${(0, _v9.serializeQuery)(_v0)}`, _v12({
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
  "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/payments/products/${_v2.where.productId}/pricing_quote${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
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
    endpoint: "/payments/products/:productId/pricing_quote",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v11, {
    endpoint: "/payments/products/:productId/pricing_quote",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v13, {
    endpoint: "/users/:userId/orders/update/preview",
    method: "POST"
  });
  var _v14 = _v0.i(0);
  _v0.s(["default", 0, ({
    billingPlanId: _v0,
    canUsePaymentsService: _v1,
    currency: _v2,
    numberOfSeats: _v3,
    ownerId: _v4,
    pricePerSeat: _v5,
    productId: _v6,
    subscriptionId: _v7
  }) => {
    let _v8 = (0, _v14.useViewer)(),
      [_v9, _v10] = (0, _v2.useState)(),
      [_v11, _v12] = _v11(),
      [_v13, _v14] = _v13(),
      {
        data: _v15,
        error: _v16,
        loading: _v17
      } = _v9 || {};
    (0, _v2.useEffect)(function () {
      _v1 ? _v10({
        ..._v14,
        data: _v14?.data && _v2 ? function ({
          currency: _v0,
          locale: _v1,
          orderPreview: _v2,
          numberOfSeats: _v3,
          pricePerSeat: _v4
        }) {
          let _v5 = new Intl.NumberFormat(_v1, {
              style: "currency",
              currency: _v0
            }),
            _v6 = _v2?.subtotalAmount.amount || 0,
            _v7 = _v2?.subtotalAmount.formatted || "",
            _v8 = 0,
            _v9 = "",
            _v10 = _v2?.totalAmount.amount || 0,
            _v11 = _v2?.totalAmount.formatted || "";
          return _v2?.isTrial && (_v10 = 0, _v11 = _v5.format(_v10)), _v2?.isTrial || (_v6 = _v3 * (_v4 ?? 0), _v7 = _v5.format(_v6), _v8 = _v6 - (_v2?.subtotalAmount.amount || 0), _v9 = _v5.format(_v8)), {
            estimatedTax: `${_v2?.totalTaxAmount.amount}`,
            estimatedTaxCountry: _v2?.billingAddress?.country ?? "",
            estimatedTaxDisplay: _v2?.totalTaxAmount.formatted ?? "",
            estimatedTaxPostalCode: _v2?.billingAddress?.postalCode ?? "",
            proration: {
              amount: `${_v8}`,
              amountDisplay: _v9,
              date: "",
              productId: ""
            },
            status: "success",
            subTotal: `${_v6}`,
            subTotalDisplay: _v7,
            totalPrice: `${_v10}`,
            totalPriceDisplay: _v11
          };
        }({
          orderPreview: _v14?.data,
          currency: _v2,
          locale: _v8?.locale,
          numberOfSeats: _v3,
          pricePerSeat: _v5
        }) : null
      }) : _v10({
        ..._v12,
        data: _v12?.data ?? null
      });
    }, [_v1, _v2, _v14, _v8?.locale, _v12]);
    let _v18 = (0, _v2.useMemo)(() => (0, _v1.default)(_v0 => {
      if (_v1) _v0 && _v7 && _v13({
        select: [],
        where: {
          userId: _v4
        },
        variables: {
          type: "seat_change",
          billingPlanId: _v0,
          subscriptionId: _v7,
          seatQuantity: _v0
        }
      });else {
        if (!_v6) throw Error("productId is required when not using the payments service");
        _v11({
          select: [],
          where: {
            productId: _v6
          },
          query: {
            productId: _v6,
            quantity: _v0.toString()
          }
        });
      }
    }, 300), [_v0, _v1, _v11, _v4, _v6, _v7, _v13]);
    return (0, _v2.useEffect)(function () {
      _v3 && _v18(_v3);
    }, [_v18, _v3]), {
      pricingQuoteData: _v15,
      quoteError: _v16,
      isQuoteLoading: _v17
    };
  }], 0);
}