{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v3.measureLatency)("postMeMembershipReverseTrial", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0);
  let _v6 = {
    isLoading: !1,
    errorKind: null
  };
  _v0.s(["useReverseTrialGrant", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v5.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useState)(_v6);
    return {
      activate: (0, _v1.useCallback)(async _v0 => {
        _v5({
          isLoading: !0,
          errorKind: null
        });
        try {
          await _v4({
            baseUrl: _v0,
            select: ["productId"],
            variables: {
              trialDays: _v0
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": `${_v2}`,
              "Accept-Language": _v3 ?? "en"
            }
          }), _v5({
            isLoading: !1,
            errorKind: null
          });
        } catch (_v0) {
          throw _v5({
            isLoading: !1,
            errorKind: _v0 instanceof _v2.NetworkError ? _v0.status >= 500 ? "5xx" : "4xx" : "network"
          }), _v0;
        }
      }, [_v0, _v1, _v2, _v3]),
      isLoading: _v4.isLoading,
      errorKind: _v4.errorKind
    };
  }], 0);
}