{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0);
  _v0.i(0);
  var _v4 = _v0.i(0);
  _v0.s(["useGetMeCapabilities", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v4.useGctlConfig)();
    return (0, _v2.default)(_v2 ? `/me/capabilities${(0, _v3.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v1.getMeCapabilities)({
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
  }]);
}