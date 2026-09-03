{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = TypeError;
  _v1.exports = function (_v0, _v1) {
    var _v2, _v3;
    if ("string" === _v1 && _v4(_v2 = _v0.toString) && !_v5(_v3 = _v3(_v2, _v0)) || _v4(_v2 = _v0.valueOf) && !_v5(_v3 = _v3(_v2, _v0)) || "string" !== _v1 && _v4(_v2 = _v0.toString) && !_v5(_v3 = _v3(_v2, _v0))) return _v3;
    throw new _v6("Can't convert object to primitive value");
  };
}