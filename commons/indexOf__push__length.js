{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0).indexOf,
    _v7 = _v0.r(0),
    _v8 = _v3([].push);
  _v1.exports = function (_v0, _v1) {
    var _v2,
      _v3 = _v5(_v0),
      _v4 = 0,
      _v5 = [];
    for (_v2 in _v3) !_v4(_v7, _v2) && _v4(_v3, _v2) && _v8(_v5, _v2);
    for (; _v1.length > _v4;) _v4(_v3, _v2 = _v1[_v4++]) && (~_v6(_v5, _v2) || _v8(_v5, _v2));
    return _v5;
  };
}