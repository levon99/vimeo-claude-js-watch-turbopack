{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Parser = function () {
    function _v0(_v0, _v1, _v2) {
      if (!(this instanceof _v0)) return new _v0(_v0, _v1);
      this.input = _v0, this.pointer = 0, this.linePointer = 0, this.comma = _v1 && _v1[0] || ",", this.quote = _v2 && _v2[0] || '"';
      var _v3 = " \f\v  ᠎           \u2028\u2029  　";
      "	" !== this.comma && (_v3 += "	"), this._residueRegExp = RegExp("[^" + _v3 + "]"), this._simpleValueRegExp = RegExp("[" + this.comma + "\r\n]"), this._replaceQuoteRegExp = RegExp(this.quote + this.quote, "g");
    }
    return _v0.prototype.File = function (_v0) {
      for (var _v1 = [];;) {
        var _v2 = this.pointer,
          _v3 = this.Row();
        if (_v3.length > 0) this.linePointer = _v2, _v1.push(_v3);else {
          this.linePointer && this.pointer !== this.input.length && (_v1.pop(), this.pointer = this.linePointer);
          break;
        }
        if (this.EOF()) {
          this.linePointer && this.pointer !== this.input.length && (_v1.pop(), this.pointer = this.linePointer);
          break;
        }
      }
      if (!_v0 || "objects" !== _v0) return _v1;
      if (0 === _v1.length) return [];
      var _v4 = _v1.shift().map(function (_v0) {
        return _v0.trim();
      });
      return _v1.map(function (_v0) {
        return _v4.reduce(function (_v0, _v1, _v2) {
          return _v0[_v1] = _v0[_v2], _v0;
        }, {});
      });
    }, _v0.prototype.Row = function () {
      for (var _v0 = [];;) if (_v0.push(this.Value()), !this.Comma()) {
        if (this.LineBreak() || this.EOF()) return _v0;
        return _v0.pop(), _v0;
      }
    }, _v0.prototype.Value = function () {
      var _v0 = this.Residue(),
        _v1 = this.QuotedValue();
      if (_v1) {
        var _v2 = _v1.slice(1, -1).replace(this._replaceQuoteRegExp, this.quote);
        return this.Residue(), _v2;
      }
      var _v3 = this.SimpleValue();
      return _v3 ? _v0 ? _v0 + _v3 : _v3 : "";
    }, _v0.prototype.Comma = function () {
      if (this.input.slice(this.pointer, this.pointer + this.comma.length) === this.comma) return this.pointer += this.comma.length, this.comma;
    }, _v0.prototype.LineBreak = function () {
      return "\r\n" === this.input.slice(this.pointer, this.pointer + 2) ? (this.pointer += 2, "\r\n") : "\n" === this.input.charAt(this.pointer) ? (this.pointer += 1, "\n") : "\r" === this.input.charAt(this.pointer) ? (this.pointer += 1, "\r") : void 0;
    }, _v0.prototype.SimpleValue = function () {
      var _v0 = "",
        _v1 = this.input.slice(this.pointer).search(this._simpleValueRegExp);
      if (this.input.charAt(this.pointer) !== this.quote) {
        if (-1 === _v1) _v0 = this.input.slice(this.pointer);else {
          if (0 === _v1) return;
          _v0 = this.input.slice(this.pointer, this.pointer + _v1);
        }
        return this.pointer += _v0.length, _v0;
      }
    }, _v0.prototype.QuotedValue = function () {
      if (this.input.charAt(this.pointer) === this.quote) for (var _v0 = void 0, _v1 = 1;;) {
        if (-1 === (_v0 = this.input.slice(this.pointer + _v1).search(this.quote))) return;
        if (this.input.charAt(this.pointer + _v1 + _v0 + 1) === this.quote) {
          _v1 += _v0 + 2;
          continue;
        }
        var _v2 = this.input.slice(this.pointer, this.pointer + _v1 + _v0 + 1);
        return this.pointer += _v2.length, _v2;
      }
    }, _v0.prototype.EOF = function () {
      return this.pointer >= this.input.length;
    }, _v0.prototype.Residue = function () {
      var _v0 = "",
        _v1 = this.input.slice(this.pointer).search(this._residueRegExp);
      if (-1 === _v1) _v0 = this.input.slice(this.pointer);else {
        if (0 === _v1) return "";
        _v0 = this.input.slice(this.pointer, this.pointer + _v1);
      }
      return this.pointer += _v0.length, _v0;
    }, _v0;
  }();
}