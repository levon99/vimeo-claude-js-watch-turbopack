{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v1.measureLatency)("getMeRepackagingGate", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/repackaging_gate?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  var _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ["isInRepackModel", "showLegacyPlans", "isRepackFree", "isRepackFreeWithoutHistory"];
  _v0.s(["useRepackagingGate", 0, () => {
    let _v0 = (0, _v7.useViewer)(),
      {
        data: _v1,
        isLoading: _v2
      } = function (_v0) {
        let _v1 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v2,
            jwt: _v3,
            xVimeoPage: _v4,
            locale: _v5
          } = (0, _v6.useGctlConfig)();
        return (0, _v4.default)(_v1 ? `/me/repackaging_gate${(0, _v5.serializeQuery)(_v1)}` : () => null, _v1 ? () => _v3({
          ..._v1,
          headers: {
            ..._v1.headers,
            "Content-Type": "application/json",
            Authorization: _v3 ? `jwt ${_v3}` : "",
            "Vimeo-Page": `${_v4}`,
            "Accept-Language": _v5 ?? "en"
          },
          baseUrl: _v2
        }) : null, void 0);
      }(() => _v0?.user ? {
        select: _v8
      } : null);
    return {
      isInRepackModel: _v1?.isInRepackModel ?? !1,
      showLegacyPlans: _v1?.showLegacyPlans ?? !1,
      isRepackFree: _v1?.isRepackFree ?? !1,
      isRepackFreeWithoutHistory: _v1?.isRepackFreeWithoutHistory ?? !1,
      isLoading: _v2
    };
  }], 0);
}