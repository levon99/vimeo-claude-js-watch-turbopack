{
  "use strict";

  var _v3 = _v0.r(0);
  _v1.exports = _v3.isStandardBrowserEnv() ? function () {
    var _v0,
      _v1 = /(msie|trident)/i.test(navigator.userAgent),
      _v2 = document.createElement("a");
    function _v3(_v0) {
      var _v1 = _v0;
      return _v1 && (_v2.setAttribute("href", _v1), _v1 = _v2.href), _v2.setAttribute("href", _v1), {
        href: _v2.href,
        protocol: _v2.protocol ? _v2.protocol.replace(/:$/, "") : "",
        host: _v2.host,
        search: _v2.search ? _v2.search.replace(/^\?/, "") : "",
        hash: _v2.hash ? _v2.hash.replace(/^#/, "") : "",
        hostname: _v2.hostname,
        port: _v2.port,
        pathname: "/" === _v2.pathname.charAt(0) ? _v2.pathname : "/" + _v2.pathname
      };
    }
    return _v0 = _v3(window.location.href), function (_v0) {
      var _v1 = _v3.isString(_v0) ? _v3(_v0) : _v0;
      return _v1.protocol === _v0.protocol && _v1.host === _v0.host;
    };
  }() : function () {
    return !0;
  };
}