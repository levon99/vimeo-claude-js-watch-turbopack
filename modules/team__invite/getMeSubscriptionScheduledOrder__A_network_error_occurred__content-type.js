{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      subscriptionId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getMeSubscriptionScheduledOrder", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/subscriptions/${_v2}/scheduled_order?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
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
  async function _v5({
    baseUrl: _v0,
    variables: _v1,
    where: {
      subscriptionId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("putMeSubscriptionScheduledOrder", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/subscriptions/${_v2}/scheduled_order`, {
        ..._v3,
        method: "PUT",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getMeSubscriptionScheduledOrder", 0, _v4, "putMeSubscriptionScheduledOrder", 0, _v5], 0), _v0.i(0);
  var _v6 = _v0.i(0);
  _v0.i(0);
  var _v7 = _v0.i(0);
  _v0.s(["useGetMeSubscriptionScheduledOrder", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v7.useGctlConfig)();
    return (0, _v6.default)(_v2 ? `/me/subscriptions/${_v2.where.subscriptionId}/scheduled_order${(0, _v1.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v4({
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
  }], 0);
}