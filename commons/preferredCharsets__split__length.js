{
  "use strict";

  _v1.exports = _v4, _v1.exports.preferredCharsets = _v4;
  var _v3 = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function _v4(_v0, _v1) {
    var _v2 = function (_v0) {
      for (var _v1 = _v0.split(","), _v2 = 0, _v3 = 0; _v2 < _v1.length; _v2++) {
        var _v4 = function (_v0, _v1) {
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
            charset: _v3,
            q: _v4,
            i: _v1
          };
        }(_v1[_v2].trim(), _v2);
        _v4 && (_v1[_v3++] = _v4);
      }
      return _v1.length = _v3, _v1;
    }(void 0 === _v0 ? "*" : _v0 || "");
    if (!_v1) return _v2.filter(_v7).sort(_v5).map(_v6);
    var _v3 = _v1.map(function (_v0, _v1) {
      for (var _v2 = {
          o: -1,
          q: 0,
          s: 0
        }, _v3 = 0; _v3 < _v2.length; _v3++) {
        var _v4 = function (_v0, _v1, _v2) {
          var _v3 = 0;
          if (_v1.charset.toLowerCase() === _v0.toLowerCase()) _v3 |= 1;else if ("*" !== _v1.charset) return null;
          return {
            i: _v2,
            o: _v1.i,
            q: _v1.q,
            s: _v3
          };
        }(_v0, _v2[_v3], _v1);
        _v4 && 0 > (_v2.s - _v4.s || _v2.q - _v4.q || _v2.o - _v4.o) && (_v2 = _v4);
      }
      return _v2;
    });
    return _v3.filter(_v7).sort(_v5).map(function (_v0) {
      return _v1[_v3.indexOf(_v0)];
    });
  }
  function _v5(_v0, _v1) {
    return _v1.q - _v0.q || _v1.s - _v0.s || _v0.o - _v1.o || _v0.i - _v1.i || 0;
  }
  function _v6(_v0) {
    return _v0.charset;
  }
  function _v7(_v0) {
    return _v0.q > 0;
  }
}