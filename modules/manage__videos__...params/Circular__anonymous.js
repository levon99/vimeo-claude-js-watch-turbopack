{
  "use strict";

  function _v3(_v0) {
    try {
      return JSON.stringify(_v0);
    } catch (_v0) {
      return '"[Circular]"';
    }
  }
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = _v2 && _v2.stringify || _v3;
    if ("object" == typeof _v0 && null !== _v0) {
      var _v4 = _v1.length + 1;
      if (1 === _v4) return _v0;
      var _v5 = Array(_v4);
      _v5[0] = _v3(_v0);
      for (var _v6 = 1; _v6 < _v4; _v6++) _v5[_v6] = _v3(_v1[_v6]);
      return _v5.join(" ");
    }
    if ("string" != typeof _v0) return _v0;
    var _v7 = _v1.length;
    if (0 === _v7) return _v0;
    for (var _v8 = "", _v9 = 0, _v10 = -1, _v11 = _v0 && _v0.length || 0, _v12 = 0; _v12 < _v11;) {
      if (37 === _v0.charCodeAt(_v12) && _v12 + 1 < _v11) {
        switch (_v10 = _v10 > -1 ? _v10 : 0, _v0.charCodeAt(_v12 + 1)) {
          case 100:
          case 102:
            if (_v9 >= _v7 || null == _v1[_v9]) break;
            _v10 < _v12 && (_v8 += _v0.slice(_v10, _v12)), _v8 += Number(_v1[_v9]), _v10 = _v12 + 2, _v12++;
            break;
          case 105:
            if (_v9 >= _v7 || null == _v1[_v9]) break;
            _v10 < _v12 && (_v8 += _v0.slice(_v10, _v12)), _v8 += Math.floor(Number(_v1[_v9])), _v10 = _v12 + 2, _v12++;
            break;
          case 79:
          case 111:
          case 106:
            if (_v9 >= _v7 || void 0 === _v1[_v9]) break;
            _v10 < _v12 && (_v8 += _v0.slice(_v10, _v12));
            var _v13 = typeof _v1[_v9];
            if ("string" === _v13) {
              _v8 += "'" + _v1[_v9] + "'", _v10 = _v12 + 2, _v12++;
              break;
            }
            if ("function" === _v13) {
              _v8 += _v1[_v9].name || "<anonymous>", _v10 = _v12 + 2, _v12++;
              break;
            }
            _v8 += _v3(_v1[_v9]), _v10 = _v12 + 2, _v12++;
            break;
          case 115:
            if (_v9 >= _v7) break;
            _v10 < _v12 && (_v8 += _v0.slice(_v10, _v12)), _v8 += String(_v1[_v9]), _v10 = _v12 + 2, _v12++;
            break;
          case 37:
            _v10 < _v12 && (_v8 += _v0.slice(_v10, _v12)), _v8 += "%", _v10 = _v12 + 2, _v12++, _v9--;
        }
        ++_v9;
      }
      ++_v12;
    }
    return -1 === _v10 ? _v0 : (_v10 < _v11 && (_v8 += _v0.slice(_v10)), _v8);
  };
}