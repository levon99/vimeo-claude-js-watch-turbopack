{
  "use strict";

  function _v3(_v0) {
    this._maxSize = _v0, this.clear();
  }
  _v3.prototype.clear = function () {
    this._size = 0, this._values = {};
  }, _v3.prototype.get = function (_v0) {
    return this._values[_v0];
  }, _v3.prototype.set = function (_v0, _v1) {
    return this._size >= this._maxSize && this.clear(), !this._values.hasOwnProperty(_v0) && this._size++, this._values[_v0] = _v1;
  };
  var _v4 = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    _v5 = /^\d+$/,
    _v6 = /^\d/,
    _v7 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    _v8 = /^\s*(['"]?)(.*?)(\1)\s*$/,
    _v9 = !1,
    _v10 = new _v3(512),
    _v11 = new _v3(512),
    _v12 = new _v3(512);
  try {
    Function("");
  } catch (_v0) {
    _v9 = !0;
  }
  function _v13(_v0) {
    return _v10.get(_v0) || _v10.set(_v0, _v14(_v0).map(function (_v0) {
      return _v0.replace(_v8, "$2");
    }));
  }
  function _v14(_v0) {
    return _v0.match(_v4);
  }
  function _v15(_v0, _v1, _v2) {
    var _v3, _v4, _v5, _v6;
    return _v0 = _v0 || "", "string" == typeof _v1 && (_v2 = _v1, _v1 = !1), _v2 = _v2 || "data", _v0 && "[" !== _v0.charAt(0) && (_v0 = "." + _v0), _v1 ? (_v3 = _v0, _v5 = _v2, _v16(_v6 = _v14(_v3), function (_v0, _v1, _v2, _v3, _v4) {
      _v4 = _v3 === _v4.length - 1, _v5 += (_v0 = _v1 || _v2 ? "[" + _v0 + "]" : "." + _v0) + (_v4 ? ")" : " || {})");
    }), Array(_v6.length + 1).join("(") + _v5) : _v2 + _v0;
  }
  function _v16(_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6,
      _v7 = _v0.length;
    for (_v4 = 0; _v4 < _v7; _v4++) (_v3 = _v0[_v4]) && (function (_v0) {
      return !_v17(_v0) && (_v0.match(_v6) && !_v0.match(_v5) || _v7.test(_v0));
    }(_v3) && (_v3 = '"' + _v3 + '"'), _v5 = !(_v6 = _v17(_v3)) && /^\d+$/.test(_v3), _v1.call(_v2, _v3, _v6, _v5, _v4, _v0));
  }
  function _v17(_v0) {
    return "string" == typeof _v0 && _v0 && -1 !== ["'", '"'].indexOf(_v0.charAt(0));
  }
  _v1.exports = {
    Cache: _v3,
    expr: _v15,
    split: _v14,
    normalizePath: _v13,
    setter: _v9 ? function (_v0) {
      var _v1 = _v13(_v0);
      return function (_v0, _v1) {
        for (var _v2 = _v1, _v3 = _v0, _v4 = _v1, _v5 = 0, _v6 = _v2.length; _v5 < _v6 - 1;) _v3 = _v3[_v2[_v5++]];
        _v3[_v2[_v5]] = _v4;
      };
    } : function (_v0) {
      return _v11.get(_v0) || _v11.set(_v0, Function("data, value", _v15(_v0, "data") + " = value"));
    },
    getter: _v9 ? function (_v0, _v1) {
      var _v2 = _v13(_v0);
      return function (_v0) {
        for (var _v1 = _v2, _v2 = _v1, _v3 = _v0, _v4 = 0, _v5 = _v1.length; _v4 < _v5;) if (null == _v3 && _v2) return;else _v3 = _v3[_v1[_v4++]];
        return _v3;
      };
    } : function (_v0, _v1) {
      var _v2 = _v0 + "_" + _v1;
      return _v12.get(_v2) || _v12.set(_v2, Function("data", "return " + _v15(_v0, _v1, "data")));
    },
    join: function (_v0) {
      return _v0.reduce(function (_v0, _v1) {
        return _v0 + (_v17(_v1) || _v5.test(_v1) ? "[" + _v1 + "]" : (_v0 ? "." : "") + _v1);
      }, "");
    },
    forEach: function (_v0, _v1, _v2) {
      _v16(_v14(_v0), _v1, _v2);
    }
  };
}