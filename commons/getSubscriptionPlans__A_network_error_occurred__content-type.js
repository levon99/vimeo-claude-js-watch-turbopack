{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v5.measureLatency)("getSubscriptionPlans", "GET", async () => {
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
  _v0.s(["getSubscriptionPlans", 0, _v6], 0);
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v9.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/subscription_plans${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
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
  _v0.s(["useGetSubscriptionPlans", 0, _v10], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = (_v0, _v1, _v2 = !0, _v3) => {
      let _v4 = (0, _v11.useCampaignIdOverride)(),
        _v5 = {
          filter: _v0 ? _v0.map(_v0 => (0, _v3.intoSnakeCase)(_v0)) : void 0,
          promos: _v1 ? (0, _v2.encodeJson)(_v1) : void 0
        };
      _v3 && (_v5 = {
        ..._v5,
        ...(0, _v3.deepSnakeCase)(_v3)
      });
      let _v6 = _v4 ?? _v5.campaignId;
      return _v6 && (_v5.campaignId = _v6), _v14(_v5, _v2);
    },
    _v14 = (_v0, _v1) => {
      let _v2 = (0, _v1.useContext)(_v12.ViewerContext),
        {
          data: _v3,
          error: _v4,
          isLoading: _v5
        } = (_v2?.user && _v1 ? _v4.useGetMeSubscriptionPlans : _v10)(() => _v2 ? (_v2.vuid && (_v0.vuid = _v2.vuid), {
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
  _v0.s(["useGetSubscriptionPlansData", 0, (_v0, _v1, _v2 = !0, _v3) => _v13(_v0, _v1, _v2, _v3).plans, "useGetSubscriptionPlansDataResult", 0, _v13], 0);
}