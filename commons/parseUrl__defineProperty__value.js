{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "parseUrl", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    if (_v0.startsWith("/")) return (0, _v4.parseRelativeUrl)(_v0);
    let _v1 = new URL(_v0),
      _v2 = _v1.username,
      _v3 = _v1.password,
      _v4 = _v2 ? _v3 ? `${_v2}:${_v3}` : _v2 : null,
      _v5 = _v1.pathname,
      _v6 = _v1.search;
    return {
      auth: _v4,
      hash: _v1.hash,
      hostname: _v1.hostname,
      href: _v1.href,
      pathname: _v5,
      port: _v1.port,
      protocol: _v1.protocol,
      query: (0, _v3.searchParamsToUrlQuery)(_v1.searchParams),
      search: _v6,
      origin: _v1.origin,
      slashes: "//" === _v1.href.slice(_v1.protocol.length, _v1.protocol.length + 2)
    };
  }
}