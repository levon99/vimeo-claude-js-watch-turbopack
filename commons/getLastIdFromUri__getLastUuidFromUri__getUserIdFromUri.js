{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getLastIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\d+$/);
    return _v1 ? parseInt(_v1[0], 10) : 0;
  }, "getLastUuidFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/((\w{4,12}-?)){5}/g) || [];
    return _v1.length > 0 ? _v1[_v1.length - 1] : "";
  }, "getUserIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\/users\/(\d+)/);
    return _v1 ? parseInt(_v1[1], 10) : 0;
  }, "isValidHex", 0, _v0 => /^#(?:[0-9A-Fa-f]{3}){1,2}$/.test(_v0), "removeLocationQuery", 0, _v0 => {
    let _v1 = new URL(window.location.href);
    _v1.searchParams.delete(_v0), window.history.pushState(null, "", _v1.toString());
  }, "validateEmail", 0, _v0 => !!_v0 && _v1.EMAIL_REGEX.test(_v0.trim())]);
}