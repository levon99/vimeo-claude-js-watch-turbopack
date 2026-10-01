{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v7.useGctlConfig)();
    return (0, _v3.default)(_v2 ? `/users/${_v2.where.userId}/capabilities${(0, _v5.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v2.getUserCapabilities)({
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
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v4.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v7.useGctlConfig)(),
      [_v5, _v6] = (0, _v5.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/capabilities${(0, _v5.serializeQuery)(_v0)}`, (0, _v2.getUserCapabilities)({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v5.assignMswData)(_v8, {
    endpoint: "/users/:userId/capabilities",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v5.assignMswData)(_v9, {
    endpoint: "/users/:userId/capabilities",
    method: "GET"
  }), _v0.s(["useGetUserCapabilities", 0, _v8, "useGetUserCapabilitiesLazy", 0, _v9]);
}