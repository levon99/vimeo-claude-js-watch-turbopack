{
  "use strict";

  _v0.s(["parseClipIdFromURI", 0, function (_v0) {
    let _v1 = RegExp("videos/([\\d]+)/?.*"),
      _v2 = _v0.match(_v1);
    return _v2 ? Number.parseInt(_v2[1]) : null;
  }, "parseEventIdFromURI", 0, function (_v0) {
    let _v1 = RegExp("event/([\\d]+)/?.*");
    return Number.parseInt(_v0.match(_v1)[1]);
  }, "parseLastIdFromUri", 0, function (_v0) {
    if (!_v0) return null;
    let _v1 = Number.parseInt(String(_v0.match(RegExp("(\\d+)/?$"))?.[0]));
    return Number.isNaN(_v1) ? null : _v1;
  }, "parseUserIdFromURI", 0, function (_v0) {
    let _v1 = RegExp("users/([\\d]+)/?.*");
    return Number.parseInt(_v0.match(_v1)[1]);
  }]);
}