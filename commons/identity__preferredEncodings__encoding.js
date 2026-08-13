{
  "use strict";

  _v1.exports = _v5, _v1.exports.preferredEncodings = _v5;
  var _v3 = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function _v4(_v0, _v1, _v2) {
    var _v3 = 0;
    if (_v1.encoding.toLowerCase() === _v0.toLowerCase()) _v3 |= 1;else if ("*" !== _v1.encoding) return null;
    return {
      encoding: _v0,
      i: _v2,
      o: _v1.i,
      q: _v1.q,
      s: _v3
    };
  }
  function _v5(_v0, _v1, _v2) {
    var _v3 = function (_v0) {
        for (var _v1 = _v0.split(","), _v2 = !1, _v3 = 1, _v4 = 0, _v5 = 0; _v4 < _v1.length; _v4++) {
          var _v6 = function (_v0, _v1) {
            var _v2 = _v3.exec(_v0);
            if (!_v2) return null;
            var _v3 = _v2[1],
              _v4 = 1;
            if (_v2[2]) for (var _v5 = _v2[2].split(";"), _v6 = 0; _v6 < _v5.length; _v6++) {
              var _v7 = _v5[_v6].trim().split("=");
              if ("q" === _v7[0]) {
                _v4 = parseFloat(_v7[1]);
                break;
              }
            }
            return {
              encoding: _v3,
              q: _v4,
              i: _v1
            };
          }(_v1[_v4].trim(), _v4);
          _v6 && (_v1[_v5++] = _v6, _v2 = _v2 || _v4("identity", _v6), _v3 = Math.min(_v3, _v6.q || 1));
        }
        return _v2 || (_v1[_v5++] = {
          encoding: "identity",
          q: _v3,
          i: _v4
        }), _v1.length = _v5, _v1;
      }(_v0 || ""),
      _v4 = _v2 ? function (_v0, _v1) {
        if (_v0.q !== _v1.q) return _v1.q - _v0.q;
        var _v2 = _v2.indexOf(_v0.encoding),
          _v3 = _v2.indexOf(_v1.encoding);
        return -1 === _v2 && -1 === _v3 ? _v1.s - _v0.s || _v0.o - _v1.o || _v0.i - _v1.i : -1 !== _v2 && -1 !== _v3 ? _v2 - _v3 : -1 === _v2 ? 1 : -1;
      } : _v6;
    if (!_v1) return _v3.filter(_v8).sort(_v4).map(_v7);
    var _v5 = _v1.map(function (_v0, _v1) {
      for (var _v2 = {
          encoding: _v0,
          o: -1,
          q: 0,
          s: 0
        }, _v3 = 0; _v3 < _v3.length; _v3++) {
        var _v4 = _v4(_v0, _v3[_v3], _v1);
        _v4 && 0 > (_v2.s - _v4.s || _v2.q - _v4.q || _v2.o - _v4.o) && (_v2 = _v4);
      }
      return _v2;
    });
    return _v5.filter(_v8).sort(_v4).map(function (_v0) {
      return _v1[_v5.indexOf(_v0)];
    });
  }
  function _v6(_v0, _v1) {
    return _v1.q - _v0.q || _v1.s - _v0.s || _v0.o - _v1.o || _v0.i - _v1.i;
  }
  function _v7(_v0) {
    return _v0.encoding;
  }
  function _v8(_v0) {
    return _v0.q > 0;
  }
}