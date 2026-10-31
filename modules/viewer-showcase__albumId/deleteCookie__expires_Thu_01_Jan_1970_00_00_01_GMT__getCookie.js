{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v0.split(":")[0],
    _v3 = (_v0, _v1 = 0) => {
      let _v2 = 0 ^ _v1,
        _v3 = 0 ^ _v1;
      for (let _v0 = 0, _v1; _v0 < _v0.length; _v0++) _v2 = Math.imul(_v2 ^ (_v1 = _v0.charCodeAt(_v0)), 0), _v3 = Math.imul(_v3 ^ _v1, 0);
      return _v2 = Math.imul(_v2 ^ _v2 >>> 16, 0) ^ Math.imul(_v3 ^ _v3 >>> 13, 0), (0 * (0 & (_v3 = Math.imul(_v3 ^ _v3 >>> 16, 0) ^ Math.imul(_v2 ^ _v2 >>> 13, 0))) + (_v2 >>> 0)).toString();
    };
  _v0.s(["deleteCookie", 0, _v0 => {
    let _v1 = _v1.LEAD_CAPTURE_COOKIE_NAME_PREFIX + _v2(_v0),
      _v2 = _v1.LEAD_CAPTURE_COOKIE_NAME_PREFIX + _v3(_v0);
    document.cookie = _v1 + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = _v2 + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }, "getCookie", 0, _v0 => {
    if (!_v0) return "";
    let _v1 = RegExp(_v1.LEAD_CAPTURE_COOKIE_NAME_PREFIX + _v2(_v0) + "=.[^;]*"),
      _v2 = document.cookie.match(_v1);
    if (_v2) return _v2[0].split("=")[1];
    {
      let _v0 = RegExp(_v1.LEAD_CAPTURE_COOKIE_NAME_PREFIX + _v3(_v0) + "=.[^;]*"),
        _v1 = document.cookie.match(_v0);
      if (_v1) return _v1[0].split("=")[1];
    }
    return "";
  }, "getEntityCookiePassword", 0, (_v0, _v1) => {
    switch (_v1) {
      case _v1.ENTITY_TYPE.EVENT:
        let _v0;
        return (_v0 = (_v0 => {
          let _v1 = _v0 + "=",
            _v2 = decodeURIComponent(document.cookie).split(";");
          for (let _v0 = 0; _v0 < _v2.length; _v0++) {
            let _v0 = _v2[_v0];
            for (; " " == _v0.charAt(0);) _v0 = _v0.substring(1);
            if (0 == _v0.indexOf(_v1)) return _v0.substring(_v1.length, _v0.length);
          }
          return "";
        })(`${_v0}_rlepassword`)).length > 0 ? _v0 : void 0;
      case _v1.ENTITY_TYPE.VIDEO:
      case _v1.ENTITY_TYPE.SHOWCASE:
        return "";
    }
    return console.error(`Invalid entity type ${_v1}, for entity cookie password`), "";
  }, "setCookie", 0, (_v0, _v1, _v2 = 7) => {
    let _v3 = new Date();
    _v3.setTime(_v3.getTime() + 24 * _v2 * 0);
    let _v4 = "expires=" + _v3.toUTCString(),
      _v5 = "domain=" + window.location.hostname?.split(".").splice(-2).join("."),
      _v6 = _v1.LEAD_CAPTURE_COOKIE_NAME_PREFIX + _v2(_v0);
    document.cookie = _v6 + "=" + _v1 + "; " + _v4 + ";" + _v5 + "; path=/; SameSite=None; Secure";
  }, "setCookieByName", 0, (_v0, _v1, _v2 = 7) => {
    let _v3 = new Date();
    _v3.setTime(_v3.getTime() + 24 * _v2 * 0);
    let _v4 = "expires=" + _v3.toUTCString();
    document.cookie = _v0 + "=" + _v1 + "; " + _v4 + "; path=/";
  }]);
}