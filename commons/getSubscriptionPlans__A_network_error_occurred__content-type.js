{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v6.measureLatency)("getSubscriptionPlans", "GET", async () => {
      let _v0 = await fetch(`${_v0}/subscription_plans?${(0, _v3.searchQueryString)(_v2)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/subscription_plans${(0, _v10.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v7({
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
  "true" === _v5.default.env.STORYBOOK && (0, _v10.assignMswData)(_v12, {
    endpoint: "/subscription_plans",
    method: "GET"
  }), "true" === _v5.default.env.STORYBOOK && (0, _v10.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v9.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v10.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/subscription_plans${(0, _v10.serializeQuery)(_v0)}`, _v7({
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
    endpoint: "/subscription_plans",
    method: "GET"
  }), _v0.s(["useGetSubscriptionPlans", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = (_v0, _v1, _v2 = !0, _v3) => {
      let _v4 = (0, _v13.useCampaignIdOverride)(),
        _v5 = {
          filter: _v0 ? _v0.map(_v0 => (0, _v3.intoSnakeCase)(_v0)) : void 0,
          promos: _v1 ? (0, _v2.encodeJson)(_v1) : void 0
        };
      _v3 && (_v5 = {
        ..._v5,
        ...(0, _v3.deepSnakeCase)(_v3)
      });
      let _v6 = _v4 ?? _v5.campaignId;
      return _v6 && (_v5.campaignId = _v6), _v16(_v5, _v2);
    },
    _v16 = (_v0, _v1) => {
      let _v2 = (0, _v1.useContext)(_v14.ViewerContext),
        {
          data: _v3,
          error: _v4,
          isLoading: _v5
        } = (_v2?.user && _v1 ? _v4.useGetMeSubscriptionPlans : _v12)(() => _v2 ? (_v2.vuid && (_v0.vuid = _v2.vuid), {
          select: ["currency", "discount", "id", "metadata", "price", "promotion", "name", "uri", "tier", "priceFormatted"],
          query: _v0
        }) : null);
      return _v3 && _v3.data ? {
        plans: _v3.data,
        isLoading: !1
      } : (_v4 && console.error("Unable to retrieve data from Subscription Plans Api", _v4), {
        plans: void 0,
        isLoading: _v5
      });
    };
  _v0.s(["useGetSubscriptionPlansData", 0, (_v0, _v1, _v2 = !0, _v3) => _v15(_v0, _v1, _v2, _v3).plans, "useGetSubscriptionPlansDataResult", 0, _v15], 0);
}