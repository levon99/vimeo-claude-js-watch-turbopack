{
  "trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
    configurable: !0,
    get: function () {
      var _v0 = /\((.*)\)/.exec(this.toString());
      return _v0 ? _v0[1] : void 0;
    }
  }), Array.prototype.flat || (Array.prototype.flat = function (_v0, _v1) {
    return _v1 = this.concat.apply([], this), _v0 > 1 && _v1.some(Array.isArray) ? _v1.flat(_v0 - 1) : _v1;
  }, Array.prototype.flatMap = function (_v0, _v1) {
    return this.map(_v0, _v1).flat();
  }), Promise.prototype.finally || (Promise.prototype.finally = function (_v0) {
    if ("function" != typeof _v0) return this.then(_v0, _v0);
    var _v1 = this.constructor || Promise;
    return this.then(function (_v0) {
      return _v1.resolve(_v0()).then(function () {
        return _v0;
      });
    }, function (_v0) {
      return _v1.resolve(_v0()).then(function () {
        throw _v0;
      });
    });
  }), Object.fromEntries || (Object.fromEntries = function (_v0) {
    return Array.from(_v0).reduce(function (_v0, _v1) {
      return _v0[_v1[0]] = _v1[1], _v0;
    }, {});
  }), Array.prototype.at || (Array.prototype.at = function (_v0) {
    var _v1 = Math.trunc(_v0) || 0;
    if (_v1 < 0 && (_v1 += this.length), !(_v1 < 0 || _v1 >= this.length)) return this[_v1];
  }), Object.hasOwn || (Object.hasOwn = function (_v0, _v1) {
    if (null == _v0) throw TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(Object(_v0), _v1);
  }), "canParse" in URL || (URL.canParse = function (_v0, _v1) {
    try {
      return new URL(_v0, _v1), !0;
    } catch (_v0) {
      return !1;
    }
  });
}