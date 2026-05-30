{
  "use strict";

  _v0.s(["default", 0, function () {
    for (var _v0, _v1, _v2 = 0, _v3 = "", _v4 = arguments.length; _v2 < _v4; _v2++) (_v0 = arguments[_v2]) && (_v1 = function _v0(_v1) {
      var _v2,
        _v3,
        _v4 = "";
      if ("string" == typeof _v1 || "number" == typeof _v1) _v4 += _v1;else if ("object" == typeof _v1) if (Array.isArray(_v1)) {
        var _v5 = _v1.length;
        for (_v2 = 0; _v2 < _v5; _v2++) _v1[_v2] && (_v3 = _v0(_v1[_v2])) && (_v4 && (_v4 += " "), _v4 += _v3);
      } else for (_v3 in _v1) _v1[_v3] && (_v4 && (_v4 += " "), _v4 += _v3);
      return _v4;
    }(_v0)) && (_v3 && (_v3 += " "), _v3 += _v1);
    return _v3;
  }]);
}