{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.eol = "\r\n", _v2.separator = ",";
  var _v5 = RegExp('"', "g"),
    _v6 = RegExp('["\r\n]', "g"),
    _v7 = function (_v0, _v1) {
      return _v0.search(_v6) >= 0 || _v0.includes(_v1) ? '"' + _v0.replace(_v5, '""') + '"' : _v0;
    },
    _v8 = function (_v0) {
      if (0 === _v0 ? _v0 = "0" : null == _v0 && (_v0 = ""), "string" != typeof _v0) {
        var _v1 = _v0.toString();
        "[object Object]" == _v1 ? "{}" == (_v0 = JSON.stringify(_v0)) && (_v0 = "") : _v0 = _v1;
      }
      return _v0;
    },
    _v9 = function (_v0, _v1, _v2, _v3) {
      return (void 0 !== _v1 || _v3 ? "" + _v1 + _v2 : "") + _v7(_v0 = _v8(_v0), _v2);
    },
    _v10 = function (_v0) {
      return _v0[[",", ";", "|", "	"].map(function (_v0) {
        return _v0.indexOf(_v0);
      }).reduce(function (_v0, _v1) {
        return -1 === _v0 || -1 !== _v1 && _v1 < _v0 ? _v1 : _v0;
      })] || ",";
    };
  _v2.detect = _v10;
  var _v11 = function (_v0, _v1) {
    if (void 0 === _v1 && (_v1 = ","), _v1 = _v1 || ",", Array.isArray(_v0)) {
      if (0 === _v0.length) _v2 = "\r\n";else if (Array.isArray(_v0[0])) Array.isArray(_v0[0]) && (_v2 = _v0.map(function (_v0) {
        return _v11(_v0, _v1);
      }).join(""));else {
        for (var _v2, _v3 = 0; _v3 < _v0.length; _v3++) _v2 = _v9(_v0[_v3], _v2, _v1, _v3 > 0);
        _v2 += "\r\n";
      }
    } else if ("object" == typeof _v0) {
      for (var _v4 in _v0) _v0.hasOwnProperty(_v4) && (_v2 = _v9(_v0[_v4], _v2, _v1));
      _v2 += "\r\n";
    } else _v2 = _v9(_v0, _v2, _v1) + "\r\n";
    return _v2;
  };
  function _v12(_v0, _v1, _v2, _v3) {
    if (void 0 === _v3) if (void 0 === _v2) {
      if ("function" != typeof _v1) throw Error("Last/second argument is not a callback");
      _v3 = _v1, _v1 = ",";
    } else {
      if ("function" != typeof _v2) throw Error("Last/third argument is not a callback");
      _v3 = _v2, _v2 = '"';
    }
    var _v4 = new _v3.Parser(_v0, _v1, _v2);
    return _v3(_v4.Row()), _v4.pointer;
  }
  _v2.stringify = _v11, _v2.parse = function (_v0, _v1, _v2) {
    var _v3 = "object" == typeof _v1 ? _v1 : {};
    return "string" == typeof _v1 && (_v3.comma = _v1), _v2 && (_v3.quote = _v2), void 0 === _v3.comma && (_v3.comma = _v10(_v0)), _v3.comma && (_v3.comma = _v3.comma[0]), _v3.quote && (_v3.quote = _v3.quote[0]), new _v3.Parser(_v0, _v3.comma, _v3.quote).File(_v3.output);
  }, _v2.read = _v12, _v2.forEach = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v3) if (void 0 === _v2) {
      if ("function" != typeof _v1) throw Error("Last/second argument is not a callback");
      _v3 = _v1, _v1 = ",";
    } else {
      if ("function" != typeof _v2) throw Error("Last/third argument is not a callback");
      _v3 = _v2, _v2 = '"';
    }
    for (var _v4, _v5 = 0, _v6 = 0; _v4 = _v12(_v0.slice(_v6), _v1, _v2, function (_v0) {
      return _v3(_v0, _v5++);
    });) _v6 += _v4;
  }, _v2.readAll = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v3) if (void 0 === _v2) {
      if ("function" != typeof _v1) throw Error("Last/second argument is not a callback");
      _v3 = _v1, _v1 = ",";
    } else {
      if ("function" != typeof _v2) throw Error("Last/third argument is not a callback");
      _v3 = _v2, _v2 = '"';
    }
    var _v4 = new _v3.Parser(_v0, _v1, _v2);
    return _v3(_v4.File()), _v4.pointer;
  }, _v2.readChunk = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v3) if (void 0 === _v2) {
      if ("function" != typeof _v1) throw Error("Last/second argument is not a callback");
      _v3 = _v1, _v1 = ",";
    } else {
      if ("function" != typeof _v2) throw Error("Last/third argument is not a callback");
      _v3 = _v2, _v2 = '"';
    }
    var _v4 = new _v3.Parser(_v0, _v1, _v2),
      _v5 = _v4.File(),
      _v6 = 0;
    return _v4.pointer < _v0.length ? _v6 = _v4.pointer : (_v5.pop(), _v6 = _v4.linePointer), _v3(_v5), _v6;
  }, _v2.fetch = function (_v0, _v1, _v2) {
    var _v3;
    return _v12(_v0, _v1, _v2, function (_v0) {
      _v3 = _v0;
    }), _v3;
  }, _v2.createStream = function (_v0) {
    return new _v4.Streamer(_v0);
  };
}