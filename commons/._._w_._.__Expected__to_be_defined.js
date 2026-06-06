{
  var _v3 = _v0.r(0);
  _v1.exports = function _v0(_v1, _v2, _v3) {
    if (_v3(_v2) || (_v3 = _v2 || _v3, _v2 = []), _v3 = _v3 || {}, _v1 instanceof RegExp) {
      var _v4,
        _v5,
        _v6 = _v2,
        _v7 = _v1.source.match(/\((?!\?)/g);
      if (_v7) for (var _v8 = 0; _v8 < _v7.length; _v8++) _v6.push({
        name: _v8,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null
      });
      return _v1.keys = _v6, _v1;
    }
    if (_v3(_v1)) {
      for (var _v9, _v10 = _v2, _v11 = _v3, _v12 = [], _v13 = 0; _v13 < _v1.length; _v13++) _v12.push(_v0(_v1[_v13], _v10, _v11).source);
      return (_v9 = RegExp("(?:" + _v12.join("|") + ")", _v9(_v11))).keys = _v10, _v9;
    }
    return _v4 = _v2, _v10(_v5(_v1, _v5 = _v3), _v4, _v5);
  }, _v1.exports.parse = _v5, _v1.exports.compile = function (_v0, _v1) {
    return _v7(_v5(_v0, _v1), _v1);
  }, _v1.exports.tokensToFunction = _v7, _v1.exports.tokensToRegExp = _v10;
  var _v4 = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");
  function _v5(_v0, _v1) {
    for (var _v2, _v3 = [], _v4 = 0, _v5 = 0, _v6 = "", _v7 = _v1 && _v1.delimiter || "/"; null != (_v2 = _v4.exec(_v0));) {
      var _v8,
        _v9,
        _v10 = _v2[0],
        _v11 = _v2[1],
        _v12 = _v2.index;
      if (_v6 += _v0.slice(_v5, _v12), _v5 = _v12 + _v10.length, _v11) {
        _v6 += _v11[1];
        continue;
      }
      var _v13 = _v0[_v5],
        _v14 = _v2[2],
        _v15 = _v2[3],
        _v16 = _v2[4],
        _v17 = _v2[5],
        _v18 = _v2[6],
        _v19 = _v2[7];
      _v6 && (_v3.push(_v6), _v6 = "");
      var _v20 = null != _v14 && null != _v13 && _v13 !== _v14,
        _v21 = "+" === _v18 || "*" === _v18,
        _v22 = "?" === _v18 || "*" === _v18,
        _v23 = _v14 || _v7,
        _v24 = _v16 || _v17,
        _v25 = _v14 || ("string" == typeof _v3[_v3.length - 1] ? _v3[_v3.length - 1] : "");
      _v3.push({
        name: _v15 || _v4++,
        prefix: _v14 || "",
        delimiter: _v23,
        optional: _v22,
        repeat: _v21,
        partial: _v20,
        asterisk: !!_v19,
        pattern: _v24 ? _v24.replace(/([=!:$\/()])/g, "\\$1") : _v19 ? ".*" : (_v8 = _v23, !(_v9 = _v25) || _v9.indexOf(_v8) > -1 ? "[^" + _v8(_v8) + "]+?" : _v8(_v9) + "|(?:(?!" + _v8(_v9) + ")[^" + _v8(_v8) + "])+?")
      });
    }
    return _v5 < _v0.length && (_v6 += _v0.substr(_v5)), _v6 && _v3.push(_v6), _v3;
  }
  function _v6(_v0) {
    return encodeURI(_v0).replace(/[\/?#]/g, function (_v0) {
      return "%" + _v0.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function _v7(_v0, _v1) {
    for (var _v2 = Array(_v0.length), _v3 = 0; _v3 < _v0.length; _v3++) "object" == typeof _v0[_v3] && (_v2[_v3] = RegExp("^(?:" + _v0[_v3].pattern + ")$", _v9(_v1)));
    return function (_v0, _v1) {
      for (var _v2 = "", _v3 = _v0 || {}, _v4 = (_v1 || {}).pretty ? _v6 : encodeURIComponent, _v5 = 0; _v5 < _v0.length; _v5++) {
        var _v6,
          _v7 = _v0[_v5];
        if ("string" == typeof _v7) {
          _v2 += _v7;
          continue;
        }
        var _v8 = _v3[_v7.name];
        if (null == _v8) if (_v7.optional) {
          _v7.partial && (_v2 += _v7.prefix);
          continue;
        } else throw TypeError('Expected "' + _v7.name + '" to be defined');
        if (_v3(_v8)) {
          if (!_v7.repeat) throw TypeError('Expected "' + _v7.name + '" to not repeat, but received `' + JSON.stringify(_v8) + "`");
          if (0 === _v8.length) if (_v7.optional) continue;else throw TypeError('Expected "' + _v7.name + '" to not be empty');
          for (var _v9 = 0; _v9 < _v8.length; _v9++) {
            if (_v6 = _v4(_v8[_v9]), !_v2[_v5].test(_v6)) throw TypeError('Expected all "' + _v7.name + '" to match "' + _v7.pattern + '", but received `' + JSON.stringify(_v6) + "`");
            _v2 += (0 === _v9 ? _v7.prefix : _v7.delimiter) + _v6;
          }
          continue;
        }
        if (_v6 = _v7.asterisk ? encodeURI(_v8).replace(/[?#]/g, function (_v0) {
          return "%" + _v0.charCodeAt(0).toString(16).toUpperCase();
        }) : _v4(_v8), !_v2[_v5].test(_v6)) throw TypeError('Expected "' + _v7.name + '" to match "' + _v7.pattern + '", but received "' + _v6 + '"');
        _v2 += _v7.prefix + _v6;
      }
      return _v2;
    };
  }
  function _v8(_v0) {
    return _v0.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function _v9(_v0) {
    return _v0 && _v0.sensitive ? "" : "i";
  }
  function _v10(_v0, _v1, _v2) {
    _v3(_v1) || (_v2 = _v1 || _v2, _v1 = []);
    for (var _v3, _v4 = (_v2 = _v2 || {}).strict, _v5 = !1 !== _v2.end, _v6 = "", _v7 = 0; _v7 < _v0.length; _v7++) {
      var _v8 = _v0[_v7];
      if ("string" == typeof _v8) _v6 += _v8(_v8);else {
        var _v9 = _v8(_v8.prefix),
          _v10 = "(?:" + _v8.pattern + ")";
        _v1.push(_v8), _v8.repeat && (_v10 += "(?:" + _v9 + _v10 + ")*"), _v6 += _v10 = _v8.optional ? _v8.partial ? _v9 + "(" + _v10 + ")?" : "(?:" + _v9 + "(" + _v10 + "))?" : _v9 + "(" + _v10 + ")";
      }
    }
    var _v11 = _v8(_v2.delimiter || "/"),
      _v12 = _v6.slice(-_v11.length) === _v11;
    return _v4 || (_v6 = (_v12 ? _v6.slice(0, -_v11.length) : _v6) + "(?:" + _v11 + "(?=$))?"), _v5 ? _v6 += "$" : _v6 += _v4 && _v12 ? "" : "(?=" + _v11 + "|$)", (_v3 = RegExp("^" + _v6, _v9(_v2))).keys = _v1, _v3;
  }
}