{
  "use strict";

  var _v3 = _v0.r(0);
  _v1.exports = _v3.isStandardBrowserEnv() ? {
    write: function (_v0, _v1, _v2, _v3, _v4, _v5) {
      var _v6 = [];
      _v6.push(_v0 + "=" + encodeURIComponent(_v1)), _v3.isNumber(_v2) && _v6.push("expires=" + new Date(_v2).toGMTString()), _v3.isString(_v3) && _v6.push("path=" + _v3), _v3.isString(_v4) && _v6.push("domain=" + _v4), !0 === _v5 && _v6.push("secure"), document.cookie = _v6.join("; ");
    },
    read: function (_v0) {
      var _v1 = document.cookie.match(RegExp("(^|;\\s*)(" + _v0 + ")=([^;]*)"));
      return _v1 ? decodeURIComponent(_v1[3]) : null;
    },
    remove: function (_v0) {
      this.write(_v0, "", Date.now() - 0);
    }
  } : {
    write: function () {},
    read: function () {
      return null;
    },
    remove: function () {}
  };
}