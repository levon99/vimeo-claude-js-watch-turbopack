{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    formatUrl: function () {
      return _v7;
    },
    formatWithValidation: function () {
      return _v9;
    },
    urlObjectKeys: function () {
      return _v8;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0)._(_v0.r(0)),
    _v6 = /https?|ftp|gopher|file/;
  function _v7(_v0) {
    let {
        auth: _v1,
        hostname: _v2
      } = _v0,
      _v3 = _v0.protocol || "",
      _v4 = _v0.pathname || "",
      _v5 = _v0.hash || "",
      _v6 = _v0.query || "",
      _v7 = !1;
    _v1 = _v1 ? encodeURIComponent(_v1).replace(/%3A/i, ":") + "@" : "", _v0.host ? _v7 = _v1 + _v0.host : _v2 && (_v7 = _v1 + (~_v2.indexOf(":") ? `[${_v2}]` : _v2), _v0.port && (_v7 += ":" + _v0.port)), _v6 && "object" == typeof _v6 && (_v6 = String(_v5.urlQueryToSearchParams(_v6)));
    let _v8 = _v0.search || _v6 && `?${_v6}` || "";
    return _v3 && !_v3.endsWith(":") && (_v3 += ":"), _v0.slashes || (!_v3 || _v6.test(_v3)) && !1 !== _v7 ? (_v7 = "//" + (_v7 || ""), _v4 && "/" !== _v4[0] && (_v4 = "/" + _v4)) : _v7 || (_v7 = ""), _v5 && "#" !== _v5[0] && (_v5 = "#" + _v5), _v8 && "?" !== _v8[0] && (_v8 = "?" + _v8), _v4 = _v4.replace(/[?#]/g, encodeURIComponent), _v8 = _v8.replace("#", "%23"), `${_v3}${_v7}${_v4}${_v8}${_v5}`;
  }
  let _v8 = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function _v9(_v0) {
    return _v7(_v0);
  }
}