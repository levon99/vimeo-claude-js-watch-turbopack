{
  "use strict";

  _v1.exports = _v5, _v1.exports.preferredMediaTypes = _v5;
  var _v3 = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
  function _v4(_v0, _v1) {
    var _v2 = _v3.exec(_v0);
    if (!_v2) return null;
    var _v3 = Object.create(null),
      _v4 = 1,
      _v5 = _v2[2],
      _v6 = _v2[1];
    if (_v2[3]) for (var _v7 = function (_v0) {
        for (var _v1 = _v0.split(";"), _v2 = 1, _v3 = 0; _v2 < _v1.length; _v2++) _v9(_v1[_v3]) % 2 == 0 ? _v1[++_v3] = _v1[_v2] : _v1[_v3] += ";" + _v1[_v2];
        _v1.length = _v3 + 1;
        for (var _v2 = 0; _v2 < _v1.length; _v2++) _v1[_v2] = _v1[_v2].trim();
        return _v1;
      }(_v2[3]).map(_v10), _v8 = 0; _v8 < _v7.length; _v8++) {
      var _v9 = _v7[_v8],
        _v10 = _v9[0].toLowerCase(),
        _v11 = _v9[1],
        _v12 = _v11 && '"' === _v11[0] && '"' === _v11[_v11.length - 1] ? _v11.slice(1, -1) : _v11;
      if ("q" === _v10) {
        _v4 = parseFloat(_v12);
        break;
      }
      _v3[_v10] = _v12;
    }
    return {
      type: _v6,
      subtype: _v5,
      params: _v3,
      q: _v4,
      i: _v1
    };
  }
  function _v5(_v0, _v1) {
    var _v2 = function (_v0) {
      for (var _v1 = function (_v0) {
          for (var _v1 = _v0.split(","), _v2 = 1, _v3 = 0; _v2 < _v1.length; _v2++) _v9(_v1[_v3]) % 2 == 0 ? _v1[++_v3] = _v1[_v2] : _v1[_v3] += "," + _v1[_v2];
          return _v1.length = _v3 + 1, _v1;
        }(_v0), _v2 = 0, _v3 = 0; _v2 < _v1.length; _v2++) {
        var _v4 = _v4(_v1[_v2].trim(), _v2);
        _v4 && (_v1[_v3++] = _v4);
      }
      return _v1.length = _v3, _v1;
    }(void 0 === _v0 ? "*/*" : _v0 || "");
    if (!_v1) return _v2.filter(_v8).sort(_v6).map(_v7);
    var _v3 = _v1.map(function (_v0, _v1) {
      for (var _v2 = {
          o: -1,
          q: 0,
          s: 0
        }, _v3 = 0; _v3 < _v2.length; _v3++) {
        var _v4 = function (_v0, _v1, _v2) {
          var _v3 = _v4(_v0),
            _v4 = 0;
          if (!_v3) return null;
          if (_v1.type.toLowerCase() == _v3.type.toLowerCase()) _v4 |= 4;else if ("*" != _v1.type) return null;
          if (_v1.subtype.toLowerCase() == _v3.subtype.toLowerCase()) _v4 |= 2;else if ("*" != _v1.subtype) return null;
          var _v5 = Object.keys(_v1.params);
          if (_v5.length > 0) if (!_v5.every(function (_v0) {
            return "*" == _v1.params[_v0] || (_v1.params[_v0] || "").toLowerCase() == (_v3.params[_v0] || "").toLowerCase();
          })) return null;else _v4 |= 1;
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
    return _v0.type + "/" + _v0.subtype;
  }
  function _v8(_v0) {
    return _v0.q > 0;
  }
  function _v9(_v0) {
    for (var _v1 = 0, _v2 = 0; -1 !== (_v2 = _v0.indexOf('"', _v2));) _v1++, _v2++;
    return _v1;
  }
  function _v10(_v0) {
    var _v1,
      _v2,
      _v3 = _v0.indexOf("=");
    return -1 === _v3 ? _v1 = _v0 : (_v1 = _v0.slice(0, _v3), _v2 = _v0.slice(_v3 + 1)), [_v1, _v2];
  }
}