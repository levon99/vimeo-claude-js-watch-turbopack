{
  "use strict";

  _v2.byteLength = function (_v0) {
    var _v1 = _v9(_v0),
      _v2 = _v1[0],
      _v3 = _v1[1];
    return (_v2 + _v3) * 3 / 4 - _v3;
  }, _v2.toByteArray = function (_v0) {
    var _v1,
      _v2,
      _v3 = _v9(_v0),
      _v4 = _v3[0],
      _v5 = _v3[1],
      _v6 = new _v5((_v4 + _v5) * 3 / 4 - _v5),
      _v7 = 0,
      _v8 = _v5 > 0 ? _v4 - 4 : _v4;
    for (_v2 = 0; _v2 < _v8; _v2 += 4) _v1 = _v4[_v0.charCodeAt(_v2)] << 18 | _v4[_v0.charCodeAt(_v2 + 1)] << 12 | _v4[_v0.charCodeAt(_v2 + 2)] << 6 | _v4[_v0.charCodeAt(_v2 + 3)], _v6[_v7++] = _v1 >> 16 & 255, _v6[_v7++] = _v1 >> 8 & 255, _v6[_v7++] = 255 & _v1;
    return 2 === _v5 && (_v1 = _v4[_v0.charCodeAt(_v2)] << 2 | _v4[_v0.charCodeAt(_v2 + 1)] >> 4, _v6[_v7++] = 255 & _v1), 1 === _v5 && (_v1 = _v4[_v0.charCodeAt(_v2)] << 10 | _v4[_v0.charCodeAt(_v2 + 1)] << 4 | _v4[_v0.charCodeAt(_v2 + 2)] >> 2, _v6[_v7++] = _v1 >> 8 & 255, _v6[_v7++] = 255 & _v1), _v6;
  }, _v2.fromByteArray = function (_v0) {
    for (var _v1, _v2 = _v0.length, _v3 = _v2 % 3, _v4 = [], _v5 = 0, _v6 = _v2 - _v3; _v5 < _v6; _v5 += 0) _v4.push(function (_v0, _v1, _v2) {
      for (var _v3, _v4 = [], _v5 = _v1; _v5 < _v2; _v5 += 3) _v3 = (_v0[_v5] << 16 & 0) + (_v0[_v5 + 1] << 8 & 0) + (255 & _v0[_v5 + 2]), _v4.push(_v3[_v3 >> 18 & 63] + _v3[_v3 >> 12 & 63] + _v3[_v3 >> 6 & 63] + _v3[63 & _v3]);
      return _v4.join("");
    }(_v0, _v5, _v5 + 0 > _v6 ? _v6 : _v5 + 0));
    return 1 === _v3 ? _v4.push(_v3[(_v1 = _v0[_v2 - 1]) >> 2] + _v3[_v1 << 4 & 63] + "==") : 2 === _v3 && _v4.push(_v3[(_v1 = (_v0[_v2 - 2] << 8) + _v0[_v2 - 1]) >> 10] + _v3[_v1 >> 4 & 63] + _v3[_v1 << 2 & 63] + "="), _v4.join("");
  };
  for (var _v3 = [], _v4 = [], _v5 = "u" > typeof Uint8Array ? Uint8Array : Array, _v6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _v7 = 0, _v8 = _v6.length; _v7 < _v8; ++_v7) _v3[_v7] = _v6[_v7], _v4[_v6.charCodeAt(_v7)] = _v7;
  function _v9(_v0) {
    var _v1 = _v0.length;
    if (_v1 % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var _v2 = _v0.indexOf("=");
    -1 === _v2 && (_v2 = _v1);
    var _v3 = _v2 === _v1 ? 0 : 4 - _v2 % 4;
    return [_v2, _v3];
  }
  _v4[45] = 62, _v4[95] = 63;
}