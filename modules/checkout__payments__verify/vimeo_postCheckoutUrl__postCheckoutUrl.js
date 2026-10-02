{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "vimeo:postCheckoutUrl";
  function _v3(_v0) {
    return _v0 && (0, _v1.isVimeoRedirectableUrl)(_v0) ? _v0 : null;
  }
  _v0.s(["postCheckoutUrl", 0, {
    sync(_v0) {
      let _v1 = _v3("string" == typeof _v0 ? _v0 : Array.isArray(_v0) && "string" == typeof _v0[0] ? _v0[0] : null);
      _v1 ? window.sessionStorage.setItem(_v2, _v1) : window.sessionStorage.removeItem(_v2);
    },
    read() {
      let _v0 = _v3(window.sessionStorage.getItem(_v2));
      return _v0 ? function (_v0) {
        if (!/^https?:\/\//i.test(_v0)) return _v0;
        try {
          let _v0 = new URL(_v0);
          if (_v0.host === window.location.host) return _v0.pathname + _v0.search + _v0.hash;
        } catch {}
        return _v0;
      }(_v0) : null;
    },
    clear() {
      window.sessionStorage.removeItem(_v2);
    }
  }]);
}