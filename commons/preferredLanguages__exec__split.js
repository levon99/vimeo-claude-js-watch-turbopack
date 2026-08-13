{
  "use strict";

  _v1.exports = _v5, _v1.exports.preferredLanguages = _v5;
  var _v3 = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
  function _v4(_v0, _v1) {
    var _v2 = _v3.exec(_v0);
    if (!_v2) return null;
    var _v3 = _v2[1],
      _v4 = _v2[2],
      _v5 = _v3;
    _v4 && (_v5 += "-" + _v4);
    var _v6 = 1;
    if (_v2[3]) for (var _v7 = _v2[3].split(";"), _v8 = 0; _v8 < _v7.length; _v8++) {
      var _v9 = _v7[_v8].split("=");
      "q" === _v9[0] && (_v6 = parseFloat(_v9[1]));
    }
    return {
      prefix: _v3,
      suffix: _v4,
      q: _v6,
      i: _v1,
      full: _v5
    };
  }
  function _v5(_v0, _v1) {
    var _v2 = function (_v0) {
      for (var _v1 = _v0.split(","), _v2 = 0, _v3 = 0; _v2 < _v1.length; _v2++) {
        var _v4 = _v4(_v1[_v2].trim(), _v2);
        _v4 && (_v1[_v3++] = _v4);
      }
      return _v1.length = _v3, _v1;
    }(void 0 === _v0 ? "*" : _v0 || "");
    if (!_v1) return _v2.filter(_v8).sort(_v6).map(_v7);
    var _v3 = _v1.map(function (_v0, _v1) {
      for (var _v2 = {
          o: -1,
          q: 0,
          s: 0
        }, _v3 = 0; _v3 < _v2.length; _v3++) {
        var _v4 = function (_v0, _v1, _v2) {
          var _v3 = _v4(_v0);
          if (!_v3) return null;
          var _v4 = 0;
          if (_v1.full.toLowerCase() === _v3.full.toLowerCase()) _v4 |= 4;else if (_v1.prefix.toLowerCase() === _v3.full.toLowerCase()) _v4 |= 2;else if (_v1.full.toLowerCase() === _v3.prefix.toLowerCase()) _v4 |= 1;else if ("*" !== _v1.full) return null;
          return {
            i: _v2,
            o: _v1.i,
            q: _v1.q,
            s: _v4
          };
        }(_v0, _v2[_v3], _v1);
        _v4 && 0 > (_v2.s - _v4.s || _v2.q - _v4.q || _v2.o - _v4.o) && (_v2 = _v4);
      }
      return _v2;
    });
    return _v3.filter(_v8).sort(_v6).map(function (_v0) {
      return _v1[_v3.indexOf(_v0)];
    });
  }
  function _v6(_v0, _v1) {
    return _v1.q - _v0.q || _v1.s - _v0.s || _v0.o - _v1.o || _v0.i - _v1.i || 0;
  }
  function _v7(_v0) {
    return _v0.full;
  }
  function _v8(_v0) {
    return _v0.q > 0;
  }
}