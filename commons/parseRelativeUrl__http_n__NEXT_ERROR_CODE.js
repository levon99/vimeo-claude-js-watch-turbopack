{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "parseRelativeUrl", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1, _v2 = !0) {
    let _v3 = new URL("u" < typeof window ? "http://n" : (0, _v3.getLocationOrigin)()),
      _v4 = _v1 ? new URL(_v1, _v3) : _v0.startsWith(".") ? new URL("u" < typeof window ? "http://n" : window.location.href) : _v3,
      {
        pathname: _v5,
        searchParams: _v6,
        search: _v7,
        hash: _v8,
        href: _v9,
        origin: _v10
      } = _v0.startsWith("/") ? new URL(`${_v4.protocol}//${_v4.host}${_v0}`) : new URL(_v0, _v4);
    if (_v10 !== _v3.origin) throw Object.defineProperty(Error(`invariant: invalid relative URL, router received ${_v0}`), "__NEXT_ERROR_CODE", {
      value: "E159",
      enumerable: !1,
      configurable: !0
    });
    return {
      auth: null,
      host: null,
      hostname: null,
      pathname: _v5,
      port: null,
      protocol: null,
      query: _v2 ? (0, _v4.searchParamsToUrlQuery)(_v6) : void 0,
      search: _v7,
      hash: _v8,
      href: _v9.slice(_v10.length),
      slashes: null
    };
  }
}