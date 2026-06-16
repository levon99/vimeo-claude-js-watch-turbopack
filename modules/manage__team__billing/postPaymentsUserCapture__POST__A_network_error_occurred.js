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
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("postPaymentsUserCapture", "POST", async () => {
      let _v0 = await fetch(`${_v0}/payments/users/${_v3}/capture?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
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
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v3.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/payments/users/${_v0.where.userId}/capture${(0, _v3.serializeQuery)(_v0)}`, _v6({
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
  async function _v10({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      subscriptionId: _v4
    },
    ..._v5
  }) {
    return (0, _v4.measureLatency)("postUserOrdersSubscription", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/orders/subscriptions/${_v4}?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v5,
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
  function _v11() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v3.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/orders/subscriptions/${_v0.where.subscriptionId}${(0, _v3.serializeQuery)(_v0)}`, _v10({
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
  "true" === _v2.default.env.STORYBOOK && (0, _v3.assignMswData)(_v9, {
    endpoint: "/payments/users/:userId/capture",
    method: "POST"
  }), "true" === _v2.default.env.STORYBOOK && (0, _v3.assignMswData)(_v11, {
    endpoint: "/users/:userId/orders/subscriptions/:subscriptionId",
    method: "POST"
  });
  var _v12 = _v0.i(0);
  _v0.s(["default", 0, ({
    billingPlanId: _v0,
    canUsePaymentsService: _v1,
    numberOfSeats: _v2,
    ownerId: _v3,
    paymentInUse: _v4,
    productId: _v5,
    subscriptionId: _v6
  }) => {
    let [_v7, _v8] = (0, _v1.useState)(),
      [_v9, _v10] = _v9(),
      [_v11, _v12] = _v11(),
      {
        data: _v13,
        error: _v14,
        callCount: _v15,
        loading: _v16
      } = _v7 || {};
    return (0, _v1.useEffect)(function () {
      _v1 ? _v8({
        ..._v12,
        data: {
          paypalRedirectUrl: "",
          gtmData: "{}",
          order: _v12?.data ?? {},
          status: "success"
        }
      }) : _v8({
        ..._v10,
        data: _v10?.data ?? null
      });
    }, [_v12, _v10, _v1]), {
      capturePaymentLoading: _v16,
      capturePaymentError: _v14,
      capturePaymentCallCount: _v15,
      handleCapturePayment: async () => {
        let _v0 = (0, _v12.getIdFromUri)(_v4?.uri);
        if (_v1 && _v6 && _v0 && _v0) return await _v11({
          select: [],
          where: {
            userId: _v3,
            subscriptionId: _v6
          },
          variables: {
            type: "seat_change",
            billingPlanId: _v0,
            paymentMethodId: _v0,
            seatQuantity: _v2
          }
        });
        if (!_v5) throw Error("productId is required when not using the payments service");
        return await _v9({
          select: [],
          where: {
            userId: _v3
          },
          variables: {
            productId: _v5,
            quantity: _v2.toString(),
            existingPaymentMethod: Number(_v0)
          }
        });
      },
      paymentData: _v13
    };
  }], 0);
}