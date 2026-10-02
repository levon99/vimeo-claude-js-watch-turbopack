{
  "use strict";

  var _v3,
    _v4,
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0).get,
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v10("native-string-replace", String.prototype.replace),
    _v16 = RegExp.prototype.exec,
    _v17 = _v16,
    _v18 = _v6("".charAt),
    _v19 = _v6("".indexOf),
    _v20 = _v6("".replace),
    _v21 = _v6("".slice),
    _v22 = (_v4 = /b*/g, _v5(_v16, _v3 = /a/, "a"), _v5(_v16, _v4, "a"), 0 !== _v3.lastIndex || 0 !== _v4.lastIndex),
    _v23 = _v9.BROKEN_CARET,
    _v24 = void 0 !== /()??/.exec("")[1],
    _v25 = function (_v0, _v1) {
      for (var _v2 = _v0.groups = _v11(null), _v3 = 0; _v3 < _v1.length; _v3++) {
        var _v4 = _v1[_v3];
        _v2[_v4[0]] = _v0[_v4[1]];
      }
    };
  (_v22 || _v24 || _v23 || _v13 || _v14) && (_v17 = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = _v12(this),
      _v5 = _v7(_v0),
      _v6 = _v4.raw;
    if (_v6) return _v6.lastIndex = this.lastIndex, _v1 = _v5(_v17, _v6, _v5), this.lastIndex = _v6.lastIndex, _v1 && _v4.groups && _v25(_v1, _v4.groups), _v1;
    var _v7 = _v4.groups,
      _v8 = _v23 && this.sticky,
      _v9 = _v5(_v8, this),
      _v10 = this.source,
      _v11 = 0,
      _v12 = _v5;
    if (_v8) {
      -1 === _v19(_v9 = _v20(_v9, "y", ""), "g") && (_v9 += "g"), _v12 = _v21(_v5, this.lastIndex);
      var _v13 = this.lastIndex > 0 && _v18(_v5, this.lastIndex - 1);
      this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== _v13 && "\r" !== _v13 && "\u2028" !== _v13 && "\u2029" !== _v13) && (_v10 = "(?: (?:" + _v10 + "))", _v12 = " " + _v12, _v11++), _v2 = RegExp("^(?:" + _v10 + ")", _v9);
    }
    _v24 && (_v2 = RegExp("^" + _v10 + "$(?!\\s)", _v9)), _v22 && (_v3 = this.lastIndex);
    var _v14 = _v5(_v16, _v8 ? _v2 : this, _v12);
    return _v8 ? _v14 ? (_v14.input = _v5, _v14[0] = _v21(_v14[0], _v11), _v14.index = this.lastIndex, this.lastIndex += _v14[0].length) : this.lastIndex = 0 : _v22 && _v14 && (this.lastIndex = this.global ? _v14.index + _v14[0].length : _v3), _v24 && _v14 && _v14.length > 1 && _v5(_v15, _v14[0], _v2, function () {
      for (var _v0 = 1; _v0 < arguments.length - 2; _v0++) void 0 === arguments[_v0] && (_v14[_v0] = void 0);
    }), _v14 && _v7 && _v25(_v14, _v7), _v14;
  }), _v1.exports = _v17;
}