{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = function (_v0) {
      return function (_v0, _v1, _v2) {
        var _v3,
          _v4 = _v3(_v0),
          _v5 = _v5(_v4);
        if (0 === _v5) return !_v0 && -1;
        var _v6 = _v4(_v2, _v5);
        if (_v0 && _v1 != _v1) {
          for (; _v5 > _v6;) if ((_v3 = _v4[_v6++]) != _v3) return !0;
        } else for (; _v5 > _v6; _v6++) if ((_v0 || _v6 in _v4) && _v4[_v6] === _v1) return _v0 || _v6 || 0;
        return !_v0 && -1;
      };
    };
  _v1.exports = {
    includes: _v6(!0),
    indexOf: _v6(!1)
  };
}