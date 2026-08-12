{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  _v1.exports = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = {};
    return _v0 && _v3.forEach(_v0.split("\n"), function (_v0) {
      _v3 = _v0.indexOf(":"), _v1 = _v3.trim(_v0.substr(0, _v3)).toLowerCase(), _v2 = _v3.trim(_v0.substr(_v3 + 1)), _v1 && (_v4[_v1] && _v4.indexOf(_v1) >= 0 || ("set-cookie" === _v1 ? _v4[_v1] = (_v4[_v1] ? _v4[_v1] : []).concat([_v2]) : _v4[_v1] = _v4[_v1] ? _v4[_v1] + ", " + _v2 : _v2));
    }), _v4;
  };
}