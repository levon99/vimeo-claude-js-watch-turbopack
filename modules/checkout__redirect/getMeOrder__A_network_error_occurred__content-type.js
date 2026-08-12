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
}