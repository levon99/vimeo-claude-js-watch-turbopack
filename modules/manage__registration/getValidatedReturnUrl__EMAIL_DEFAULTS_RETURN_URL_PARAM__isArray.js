{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getValidatedReturnUrl", 0, _v0 => {
    let _v1,
      _v2 = _v0?.[_v2.EMAIL_DEFAULTS_RETURN_URL_PARAM],
      _v3 = Array.isArray(_v2) ? _v2[0] : _v2;
    if (_v3) {
      try {
        _v1 = decodeURIComponent(_v3);
      } catch {
        _v1 = _v3;
      }
      return _v1.startsWith("/") && !_v1.startsWith("//") && (0, _v1.isVimeoRedirectableUrl)(_v1) ? _v1 : void 0;
    }
  }]);
}